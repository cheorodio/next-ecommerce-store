import { expect, test } from '@playwright/test';

test('product page test', async ({ page }) => {
  // start from the checkout page
  await page.goto('http://localhost:3000/products/1');
  await expect(page.getByTestId('product-image')).toBeVisible();
});
