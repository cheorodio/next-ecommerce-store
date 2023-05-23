'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function updateQuantity(productId, quantity) {
  // Get the current cookie from the Request Headers
  const productQuantityCookie = getCookie('cart');
  // Parse the cookie
  const productQuantities = !productQuantityCookie
    ? [] // Create a new array with the productQuantity
    : parseJson(productQuantityCookie);

  const productToUpdate = productQuantities.find((productQuantity) => {
    return productQuantity.id === productId;
  });

  if (productToUpdate) {
    productToUpdate.quantity =
      Number(productToUpdate.quantity) + Number(quantity);
  } else {
    productQuantities.push({
      id: productId,
      quantity,
    });
  }
  await cookies().set('cart', JSON.stringify(productQuantities));
}
