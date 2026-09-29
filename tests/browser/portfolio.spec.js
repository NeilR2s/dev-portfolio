import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { readFile } from 'node:fs/promises'

test('prerendered media hydrates without duplicate downloads or errors', async ({ page }) => {
    const errors = []
    const failed = []
    page.on('pageerror', (error) => errors.push(error.message))
    page.on('console', (message) => {
        if (message.type() === 'error') errors.push(message.text())
    })
    page.on('response', (response) => {
        if (response.status() >= 400) failed.push(response.url())
    })
    await page.goto('/')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    for (const image of await page.locator('img').all()) {
        await image.scrollIntoViewIfNeeded()
        await expect.poll(() => image.evaluate((img) => img.complete && img.naturalWidth > 0)).toBe(true)
        expect(await image.getAttribute('src')).toMatch(/^\/assets\/.+-[\w-]+\.webp$/)
    }
    const resources = await page.evaluate(() => performance.getEntriesByType('resource').map((entry) => entry.name))
    expect(resources.filter((url) => /\/(?:public\/|images\/|fonts\/)/.test(new URL(url).pathname))).toEqual([])
    const fonts = resources.filter((url) => url.endsWith('.woff2'))
    expect(fonts).toHaveLength(3)
    expect(new Set(fonts).size).toBe(3)
    expect(errors).toEqual([])
    expect(failed).toEqual([])
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})

test('navigation, disclosures, and accessibility remain functional', async ({ page, isMobile }) => {
    await page.goto('/')
    if (isMobile) {
        const menu = page.getByRole('button', { name: /^(Open|Close) navigation$/ })
        await menu.click()
        await expect(menu).toHaveAttribute('aria-expanded', 'true')
        await page.keyboard.press('Escape')
        await expect(menu).toHaveAttribute('aria-expanded', 'false')
        await expect(menu).toBeFocused()
        await menu.click()
        await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Projects', exact: true }).click()
        await expect(page).toHaveURL(/#projects$/)
        await expect(menu).toHaveAttribute('aria-expanded', 'false')
    }
    const disclosure = page.locator('details').first()
    await disclosure.locator('summary').click()
    await expect(disclosure).toHaveAttribute('open', '')
    const scan = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
    expect(scan.violations).toEqual([])
})

test('content, project anchors, and original resume work without JavaScript', async ({ browser, baseURL, viewport, isMobile }) => {
    const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: 'reduce', viewport, isMobile })
    try {
        const page = await context.newPage()
        await page.goto(`${baseURL}/#projects`)
        await expect(page.getByRole('heading', { name: 'Projects', exact: true })).toBeInViewport()
        await expect(page.locator('#projects img').first()).toBeVisible()
        await expect.poll(() => page.locator('#projects img').first().evaluate((img) => img.complete && img.naturalWidth > 0)).toBe(true)
        const disclosure = page.locator('details').first()
        await disclosure.locator('summary').click()
        await expect(disclosure).toHaveAttribute('open', '')
        const response = await context.request.get(`${baseURL}/Artus-Resume.pdf`)
        expect(response.ok()).toBe(true)
        expect(await response.body()).toEqual(await readFile('public/Artus-Resume.pdf'))
        expect((await context.request.get(`${baseURL}/not-a-real-page`)).status()).toBe(404)
    } finally {
        await context.close()
    }
})
