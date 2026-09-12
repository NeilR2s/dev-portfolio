import { existsSync } from 'node:fs'
import { chromium } from '@playwright/test'

const systemChrome = ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'].find(existsSync)

export const launchOptions = {
  ...(process.env.CHROMIUM_PATH
    ? { executablePath: process.env.CHROMIUM_PATH }
    : !existsSync(chromium.executablePath()) && systemChrome
      ? { executablePath: systemChrome }
      : {}),
}
