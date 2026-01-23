import { test, expect } from '@playwright/test';

test.describe('Site loads correctly', () => {
  test('homepage loads and shows site title', async ({ page }) => {
    await page.goto('/');
    
    // Check page title
    await expect(page).toHaveTitle(/SulitFinds/);
    
    // Check header is visible
    await expect(page.locator('header')).toBeVisible();
    
    // Check main content area exists
    await expect(page.locator('main')).toBeVisible();
  });

  test('blog index loads and shows posts', async ({ page }) => {
    await page.goto('/blog');
    
    // Check page has blog posts
    await expect(page.locator('article').first()).toBeVisible();
  });
});
