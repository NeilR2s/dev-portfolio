import { describe, expect, test } from 'bun:test'
import { readFile } from 'node:fs/promises'
import sharp from 'sharp'
import { documents, generateContent } from '../scripts/content.mjs'
import { portfolioData } from '../src/devData.js'

describe('published content', () => {
    test('generated documents are synchronized', async () => {
        await generateContent(true)
        const html = documents().get('index.html')
        expect(html).toContain(`<link rel="canonical" href="${portfolioData.site.origin}/"`)
        expect(html).toContain(portfolioData.personalInfo.name)
        expect(html).toContain('application/ld+json')
    })

    test('responsive image descriptors match actual files', async () => {
        for (const project of portfolioData.projects) {
            const fallback = await sharp(`public${project.preview}`).metadata()
            expect(fallback.width).toBe(project.imageWidth)
            expect(fallback.height).toBe(project.imageHeight)
            for (const source of project.previewSources.split(',')) {
                const [path, descriptor] = source.trim().split(/\s+/)
                const image = await sharp(`public${path}`).metadata()
                expect(`${image.width}w`).toBe(descriptor)
            }
        }
    })

    test('logo supports high-density displays within its size budget', async () => {
        const bytes = await readFile(`public${portfolioData.personalInfo.icon}`)
        const image = await sharp(bytes).metadata()
        expect(image.width).toBeGreaterThanOrEqual(48 * 3)
        expect(bytes.length).toBeLessThan(8_000)
    })
})
