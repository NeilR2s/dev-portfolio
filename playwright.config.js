import { defineConfig } from '@playwright/test'
import { launchOptions } from './scripts/browser.mjs'

export default defineConfig({
    testDir: './tests/browser',
    fullyParallel: true,
    use: {
        baseURL: 'http://127.0.0.1:4174',
        launchOptions,
        trace: 'retain-on-failure',
    },
    projects: [
        { name: 'desktop', use: { viewport: { width: 1440, height: 1000 } } },
        { name: 'mobile', use: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true } },
    ],
    webServer: {
        command: 'bun run preview --port 4174 --strictPort',
        url: 'http://127.0.0.1:4174',
        reuseExistingServer: !process.env.CI,
    },
})
