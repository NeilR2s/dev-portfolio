import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { build, createServer } from 'vite'
import { generateContent } from './content.mjs'

process.env.NODE_ENV = 'production'
await generateContent()

// Use Vite's JSX/alias handling for SSR, without introducing a second framework.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
let markup
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  markup = renderToString(createElement(App))
} finally {
  await server.close()
}

await build({
  plugins: [{
    name: 'prerender-portfolio',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        if (!html.includes('<div id="root"></div>')) throw new Error('Missing prerender root.')
        return html.replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`)
      },
    },
  }],
})
