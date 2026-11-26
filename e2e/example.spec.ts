import { test, expect } from '@playwright/test';

test('NEXORA homepage and shop navigation check', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page.getByText('Shop smarter.')).toBeVisible();

  await page.getByRole('link', { name: 'Shop' }).first().click();
  await expect(page).toHaveURL(/.*shop/);
});
test('NEXORA categories navigation check', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.getByRole('link', { name: 'Categories' }).first().click();
  await expect(page).toHaveURL(/.*categories/);
});
test('NEXORA cart navigation check', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.getByRole('link', { name: 'Cart' }).first().click();
  await expect(page).toHaveURL(/.*cart/);
});
test('NEXORA login navigation check', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.locator('header').getByRole('link').last().click();
  await expect(page).toHaveURL(/.*login/);
});
test('NEXORA home navigation check', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.getByRole('link', { name: 'home' }).first().click();
  await expect(page).toHaveURL('http://localhost:5173/');
});
test('NEXORA login form submission check', async ({ page }) => {
  await page.goto('http://localhost:5173/login');
  await page.getByLabel(/email/i).fill('test@example.com');
  await page.getByLabel(/password/i).fill('YourPassword123');
  await page.getByRole('button', { name: /log in|sign in/i }).click();
  await expect(page).toHaveURL(/.*login/);
});
test('NEXORA search input submission check', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const searchBox = page.getByPlaceholder(/search/i).first();
  await searchBox.fill('Silk');
  await searchBox.press('Enter');
  await expect(page).toHaveURL(/.*search|.*shop|.*q=|Silk/i);
});
test('NEXORA shop products visibility check', async ({ page }) => {
  await page.goto('http://localhost:5173/shop');
  await expect(page.locator('main')).toBeVisible();
  await expect(page.getByRole('link').nth(3)).toBeVisible();
});
test('NEXORA cart page visibility check', async ({ page }) => {
  await page.goto('http://localhost:5173/cart');
  await expect(page.locator('main')).toBeVisible();
});
test('NEXORA storefront shopping flow check', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.getByRole('link', { name: 'Shop' }).first().click();
  await expect(page).toHaveURL(/.*shop/);
  await expect(page.locator('main')).toBeVisible();
});
test('NEXORA account login flow check', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.locator('header').getByRole('link').last().click();
  await expect(page).toHaveURL(/.*login/);

  await page.getByLabel(/email/i).fill('test@example.com');
  await page.getByLabel(/password/i).fill('YourPassword123');
  await page.getByRole('button', { name: /log in|sign in/i }).click();
  await expect(page).toHaveURL(/.*login/);
});
