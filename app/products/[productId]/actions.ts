'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export default async function addToCart(productId: number, quantity: number) {
  // Get the current cookies from the Request Headers
  const productQuantityCookie = getCookie('cart');
  // Parse the cookie
  const productQuantities = !productQuantityCookie
    ? [] // Create a new array with the productQuantity
    : parseJson(productQuantityCookie);

  // Edit the object: get the object for the product in cookies
  const productToUpdate = productQuantities?.find((productQuantity) => {
    return productQuantity.id === productId;
  });

  // update the quantity in cart badge
  if (productToUpdate) {
    // update the quantity in the cart badge upon clicking add to cart button
    productToUpdate.quantity =
      Number(productToUpdate.quantity) + Number(quantity);
  } else {
    // add the new value to current value in the cart badge
    productQuantities?.push({
      id: productId,
      quantity: Number(quantity),
    });
  }

  // override the cookie: set the cookies into the response headers
  await cookies().set('cart', JSON.stringify(productQuantities));
}
