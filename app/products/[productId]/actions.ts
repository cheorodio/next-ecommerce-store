'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
// import { parseJson } from '../../../util/json';
import { updateQuantity } from './updateQuantity';

export default async function addToCart(productId: number, quantity: number) {
  // Get the current cookies from the Request Headers
  const quantityInCart = getCookie('cart');

  const productQuantities = updateQuantity(quantityInCart, productId, quantity);

  // override the cookie: set the cookies into the response headers
  await cookies().set('cart', productQuantities);
}
