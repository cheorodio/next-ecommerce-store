import { expect, test } from '@playwright/test';

test('checkout test', async ({ page }) => {
  // start from the checkout page
  await page.goto('http://localhost:3000/cart/checkout');

  // check checkout form flow
  await page.getByTestId('checkout-first-name').fill('Michelle');
  await page.getByTestId('checkout-last-name').fill('Orodio');
  await page.getByTestId('checkout-email').fill('michelle@email.com');
  await page.getByTestId('checkout-address').fill('123 Any Street');
  await page.getByTestId('checkout-city').fill('Vienna');
  await page.getByTestId('checkout-postal-code').fill('1234');
  await page.getByTestId('checkout-country').fill('Austria');
  await page.getByPlaceholder('Credit Card Number').fill('1234 5678 9101 1213');
  await page.getByPlaceholder('MM').fill('12');
  await page.getByPlaceholder('YY').fill('25');
  await page.getByPlaceholder('CVC').fill('123');

  await expect(page.getByTestId('checkout-confirm-order')).toBeVisible();

  await page.getByTestId('checkout-confirm-order').click();
  await expect(page).toHaveURL('http://localhost:3000/cart/checkout/thankYou');

  await expect(page.getByRole('img', { name: 'mail icon' })).toBeVisible();
});
