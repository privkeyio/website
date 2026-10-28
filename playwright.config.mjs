import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: 'tests',
    forbidOnly: !!process.env.CI,
    reporter: process.env.CI ? 'github' : 'list',
    use: { baseURL: 'http://127.0.0.1:8347', browserName: 'chromium', launchOptions: { executablePath: process.env.PW_CHROMIUM } },
    projects: [
        { name: 'mobile', use: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } },
        { name: 'tablet', use: { viewport: { width: 820, height: 1180 }, hasTouch: true } },
        { name: 'desktop', use: { viewport: { width: 1300, height: 900 } } }
    ],
    webServer: {
        command: 'python3 -m http.server 8347 --bind 127.0.0.1',
        url: 'http://127.0.0.1:8347/index.html',
        reuseExistingServer: !process.env.CI
    }
});
