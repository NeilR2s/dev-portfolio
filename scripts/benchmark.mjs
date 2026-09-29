/* global window, document */
import { chromium } from '@playwright/test'
import { launchOptions } from './browser.mjs'

// Run against a production preview. Local timings measure rendering/network
// simulation, not Vercel response time or the apex-domain redirect.
const browser = await chromium.launch(launchOptions)
const results = []
try {
  for (const mobile of [false, true]) {
    for (let run = 1; run <= 3; run++) {
      const context = await browser.newContext({
        viewport: mobile ? { width: 390, height: 844 } : { width: 1024, height: 681 },
        deviceScaleFactor: mobile ? 3 : 1,
        isMobile: mobile,
        hasTouch: mobile,
      })
      const page = await context.newPage()
      const session = await context.newCDPSession(page)
      await session.send('Network.enable')
      await session.send('Network.setCacheDisabled', { cacheDisabled: true })
      if (mobile) {
        await session.send('Network.emulateNetworkConditions', {
          offline: false, latency: 150,
          downloadThroughput: 1_600_000 / 8, uploadThroughput: 750_000 / 8,
        })
        await session.send('Emulation.setCPUThrottlingRate', { rate: 4 })
      }
      await page.addInitScript(() => {
        window.metrics = { lcp: 0, cls: 0, blocking: 0 }
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) window.metrics.lcp = entry.startTime
        }).observe({ type: 'largest-contentful-paint', buffered: true })
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) window.metrics.cls += entry.value
          }
        }).observe({ type: 'layout-shift', buffered: true })
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) window.metrics.blocking += Math.max(0, entry.duration - 50)
        }).observe({ type: 'longtask', buffered: true })
      })
      await page.goto(process.argv[2] || 'http://127.0.0.1:4173/', { waitUntil: 'networkidle' })
      await page.evaluate(() => document.fonts.ready)
      await page.waitForTimeout(500)
      results.push({ profile: mobile ? 'mobile-4x-1.6Mbps-150ms' : 'desktop', run,
        ...await page.evaluate(() => ({
          ...window.metrics,
          fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
          resources: performance.getEntriesByType('resource').map((entry) => ({
            path: new URL(entry.name).pathname, bytes: entry.encodedBodySize,
          })),
        })),
      })
      await context.close()
    }
  }
  console.log(JSON.stringify(results, null, 2))
} finally {
  await browser.close()
}
