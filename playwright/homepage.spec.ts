import { expect, test } from '@playwright/test';

test('homepage test', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(
    page.getByRole('link', { name: 'necklace on a woman Necklace Rose €45' }),
  ).toBeVisible();

  await expect(
    page.getByRole('link', { name: 'earrings on a woman earrings Violet €39' }),
  ).toBeVisible();

  await expect(
    page.getByRole('img', { name: 'necklace set on a woman' }),
  ).toBeVisible();

  await expect(page.getByRole('img', { name: 'ring set' })).toBeVisible();

  await expect(
    page
      .locator('div')
      .filter({
        hasText:
          'HandmadeOur handmade jewelleries are crafted using a variety of techniques and m',
      })
      .getByRole('img', { name: 'handmade icon' }),
  ).toBeVisible();
});
