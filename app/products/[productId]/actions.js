'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function updateQuantity(productId, quantity) {
  const productQuantityCookie = getCookie('productQuantity');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const productToUpdate = productQuantities.find((productQuantity) => {
    return productQuantity.id === productId;
  });

  if (productToUpdate) {
    productToUpdate.quantity = quantity;
  } else {
    productQuantities.push({
      id: productId,
      quantity,
    });
  }
  await cookies().set('productQuantities', JSON.stringify(productQuantities));
}
