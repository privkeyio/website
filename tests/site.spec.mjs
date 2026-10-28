import { test, expect } from '@playwright/test';

test.beforeEach(async ({ context }) => {
    await context.route(/^https?:\/\/(?!127\.0\.0\.1)/, route => route.request().isNavigationRequest() ? route.fulfill({ body: '' }) : route.abort());
});

test('renders without script errors or horizontal overflow', async ({ page }) => {
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto('/index.html');
    await expect(page.locator('#contributions-stat')).toHaveText(/^\d+ contributions shipped across \d+ open-source projects$/);
    expect(errors).toEqual([]);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBe(0);
});

test('products and contributions render their cards', async ({ page }) => {
    await page.goto('/index.html');
    await expect(page.locator('#products-grid .opensource-item')).not.toHaveCount(0);
    await expect(page.locator('#products-grid .ecosystem-component')).not.toHaveCount(0);
    await expect(page.locator('#contributions-accordion .contribution-toggle')).not.toHaveCount(0);
});

test('keyboard Enter on the Keep docs link follows it without toggling the panel', async ({ page, context }) => {
    await page.goto('/index.html');
    const docs = page.locator('.ecosystem-docs').first();
    await docs.focus();
    const popup = context.waitForEvent('page');
    await page.keyboard.press('Enter');
    expect((await popup).url()).toContain('docs.privkey.io');
    await expect(page.locator('.ecosystem-components').first()).toBeHidden();
});

test('contribution categories expand and collapse', async ({ page }) => {
    await page.goto('/index.html');
    const toggle = page.locator('.contribution-toggle', { hasText: 'Lightning' });
    const panel = page.locator(`#${await toggle.getAttribute('aria-controls')}`);
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(panel).toBeHidden();
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(panel.locator('.opensource-item').first()).toBeVisible();
    await toggle.click();
    await expect(panel).toBeHidden();
});

test('Keep ecosystem toggle stays inside the viewport and opens', async ({ page }) => {
    await page.goto('/index.html');
    const header = page.locator('.ecosystem-toggle').first();
    const chevron = header.locator('.eco-chevron');
    await chevron.scrollIntoViewIfNeeded();
    const box = await chevron.boundingBox();
    expect(box.x + box.width).toBeLessThanOrEqual(page.viewportSize().width);
    await chevron.click();
    await expect(page.locator('.ecosystem-components').first()).toBeVisible();
});

test('external links are https and open safely', async ({ page }) => {
    await page.goto('/index.html');
    const bad = await page.evaluate(() => [...document.querySelectorAll('#products-grid a, #contributions-accordion a, a[target="_blank"]')]
        .filter(a => !a.href.startsWith('https://') || (a.target === '_blank' && !/noopener/.test(a.rel)))
        .map(a => a.outerHTML.slice(0, 120)));
    expect(bad).toEqual([]);
});

test('mobile menu closes after following the external Docs link', async ({ page, context }) => {
    test.skip(page.viewportSize().width >= 992, 'mobile menu only');
    await page.goto('/index.html');
    await page.locator('.navbar-toggler').click();
    const menu = page.locator('#navbarCollapse');
    await expect(menu).toHaveClass(/show/);
    const popup = context.waitForEvent('page');
    await menu.locator('a.mobile-nav-link', { hasText: 'Docs' }).click();
    await popup;
    await expect(menu).not.toHaveClass(/show/);
});

test('mobile menu reaches its consultation button on a short screen', async ({ page }) => {
    test.skip(page.viewportSize().width >= 992, 'mobile menu only');
    await page.setViewportSize({ width: page.viewportSize().width, height: 560 });
    await page.goto('/index.html');
    await page.locator('.navbar-toggler').click();
    const cta = page.locator('#navbarCollapse .mobile-menu-consultation-btn');
    await page.mouse.move(100, 300);
    await page.mouse.wheel(0, 2000);
    await expect(cta).toBeInViewport({ ratio: 1 });
});

test('desktop navbar links fit at narrow desktop widths', async ({ page }) => {
    test.skip(page.viewportSize().width < 992, 'desktop navbar only');
    for (const width of [992, 1024, 1199]) {
        await page.setViewportSize({ width, height: 800 });
        await page.goto('/index.html');
        const right = await page.locator('#mySidenav .nav-link').last().evaluate(a => a.getBoundingClientRect().right);
        expect(right).toBeLessThanOrEqual(width);
    }
});
