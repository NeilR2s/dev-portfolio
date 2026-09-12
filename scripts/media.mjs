// Run with `bun scripts/media.mjs`. Requires sharp; never modifies source assets.
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { portfolioData } from '../src/devData.js'

const root = fileURLToPath(new URL('../', import.meta.url))
const imagesDir = join(root, 'public/images')
const fontsDir = join(root, 'public/fonts')
const revision = '5e35378e6bda803962ee6fd257e444a7d459660d'
const upstream = `https://raw.githubusercontent.com/google/fonts/${revision}/ofl`
const fonts = [
  {
    stem: 'inter', family: 'Inter', directory: 'inter',
    woff2: 'https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2',
    ttf: 'Inter%5Bopsz,wght%5D.ttf',
  },
  {
    stem: 'lora', family: 'Lora', directory: 'lora',
    woff2: 'https://fonts.gstatic.com/s/lora/v37/0QIvMX1D_JOuMwr7Iw.woff2',
    ttf: 'Lora%5Bwght%5D.ttf',
  },
  {
    stem: 'playfair-display', family: 'Playfair Display', directory: 'playfairdisplay',
    woff2: 'https://fonts.gstatic.com/s/playfairdisplay/v40/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff2',
    ttf: 'PlayfairDisplay%5Bwght%5D.ttf',
  },
]

const outputs = []
const sources = ['agos.png', 'albawani.png', 'mediseen.png', 'osteo.jpeg', 'alersense.png', 'dfacompiler.png']
await stat(join(root, 'public'))
await mkdir(imagesDir, { recursive: true })
await mkdir(fontsDir, { recursive: true })

for (const source of sources) {
  const input = join(root, 'src/assets', source)
  const stem = source.replace(/\.[^.]+$/, '')
  const widths = stem === 'osteo' ? [480, 800, 1280] : [480, 800, 1280, 1600]
  const metadata = await sharp(input).metadata()
  if (metadata.width < widths.at(-1)) {
    throw new Error(`${source} is too small for its declared output widths`)
  }
  for (const width of widths) {
    const file = join(imagesDir, `${stem}-${width}.webp`)
    const info = await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true, kernel: 'lanczos3' })
      .webp({ quality: 78, effort: 6, smartSubsample: true })
      .toFile(file)
    if (info.width !== width) throw new Error(`Unexpected width for ${file}`)
    outputs.push({ file: file.slice(root.length), ...info })
  }
}

const iconFile = join(imagesDir, 'neil-icon.png')
const icon = await sharp(join(root, 'src/assets/neil-black-icon.png'))
  .resize({ width: 250, height: 250, fit: 'inside', withoutEnlargement: true })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(iconFile)
outputs.push({ file: iconFile.slice(root.length), ...icon })

async function download(url, destination) {
  try {
    return await readFile(destination)
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
  await stat(dirname(destination))
  const response = await fetch(url, { signal: AbortSignal.timeout(30_000) })
  if (!response.ok) throw new Error(`Download failed (${response.status}): ${url}`)
  const bytes = Buffer.from(await response.arrayBuffer())
  await writeFile(destination, bytes)
  return bytes
}

// libvips may not support WOFF2 as a native font. Register official TTFs for
// SVG rendering, cached outside public so full font families are not deployed.
await stat(tmpdir())
const renderFonts = join(tmpdir(), 'opencode', 'portfolio-media', revision)
await mkdir(renderFonts, { recursive: true })
for (const font of fonts) {
  const file = join(fontsDir, `${font.stem}-latin.woff2`)
  const bytes = await download(font.woff2, file)
  if (bytes.subarray(0, 4).toString() !== 'wOF2') throw new Error(`Invalid WOFF2: ${file}`)
  outputs.push({ file: file.slice(root.length), size: bytes.length })
  const licenseFile = join(fontsDir, `${font.stem}-OFL.txt`)
  const license = await download(`${upstream}/${font.directory}/OFL.txt`, licenseFile)
  outputs.push({ file: licenseFile.slice(root.length), size: license.length })
  const fontfile = join(renderFonts, `${font.stem}.ttf`)
  await download(`${upstream}/${font.directory}/${font.ttf}`, fontfile)
  await sharp({ text: { text: 'Neil Artus', font: `${font.family} 12`, fontfile } })
    .png().toBuffer()
}

const { personalInfo, site } = portfolioData
const xml = (text) => text.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[character])
const socialSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fff"/>
  <rect width="1200" height="16" fill="#000"/>
  <path d="M72 96H1128M72 520H1128" stroke="#000" stroke-width="1"/>
  <text x="68" y="284" fill="#000" font-family="Playfair Display" font-size="128" font-weight="400">${xml(personalInfo.name)}</text>
  <text x="72" y="354" fill="#000" font-family="Inter" font-size="34" font-weight="700">${xml(personalInfo.role)}</text>
  <text x="72" y="416" fill="#000" font-family="Lora" font-size="27" font-weight="400">${xml(site.tagline)}</text>
  <text x="72" y="574" fill="#000" font-family="Inter" font-size="23" font-weight="400">${xml(new URL(site.origin).hostname)}</text>
</svg>`
const socialFile = join(root, 'public', site.socialImage.slice(1))
const social = await sharp(Buffer.from(socialSvg))
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(socialFile)
outputs.push({ file: socialFile.slice(root.length), ...social })

for (const output of outputs) {
  const dimensions = output.width ? `${output.width}x${output.height}` : 'font/license'
  console.log(`${output.file}\t${dimensions}\t${output.size} bytes`)
}
console.log(`Generated/downloaded assets: ${outputs.reduce((sum, file) => sum + file.size, 0)} bytes`)
