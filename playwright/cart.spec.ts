import { expect, test } from '@playwright/test';

test('cart test', async ({ page }) => {
  // add to cart test
  await page.goto('http://localhost:3000/products/5');

  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-quantity').getByText('1')).toBeVisible();

  // change quantity in single product page test
  await page.getByTestId('product-quantity').click();
  await page.getByTestId('product-quantity').fill('3');
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-quantity').getByText('4')).toBeVisible();

  // go to products page
  await page.getByTestId('products-link').click();
  await expect(page).toHaveURL('http://localhost:3000/products');

  // go to another singleProduct page and add this to cart
  await page.getByTestId('product-1').click();
  await expect(page).toHaveURL('http://localhost:3000/products/1');

  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-quantity').getByText('5')).toBeVisible();

  // go to cart page
  await page.getByTestId('cart-link').click();
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // // check for the remove button
  // await expect(
  //   page.locator('[data-test-id^="cart-product-remove-"]'),
  // ).toHaveCount(1);
  // await page.getByTestId('cart-product-remove-1').click();
  // await expect(page.getByTestId('cart-product-quantity-5')).not.toBeVisible;
});
