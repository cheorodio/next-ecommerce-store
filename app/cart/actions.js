'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

// remove product from cart
export async function removeItem(item) {
  const productQuantityCookie = getCookie('cart'); // get the current cookies from the Request Headers
  const productQuantities = !productQuantityCookie // parse the cookie
    ? []
    : parseJson(productQuantityCookie);
  // filter the arrays of items in the cart
  // assign the filtered array to a new variable
  const removeFromCart = productQuantities.filter(
    (product) => product.id !== item.id, // return a new array without the item that has been deleted
  );
  await cookies().set('cart', JSON.stringify(removeFromCart));
}

// increase quantity
export async function addQuantity(item) {
  const productQuantityCookie = getCookie('cart');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);
  const increase = productQuantities.find((product) => {
    return product.id === item.id;
  });
  increase.quantity += 1;
  await cookies().set('cart', JSON.stringify(productQuantities));
}

// decrease quantity
export async function subtractQuantity(item) {
  const productQuantityCookie = getCookie('cart');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);
  const decrease = productQuantities.find((product) => {
    return product.id === item.id;
  });
  decrease.quantity -= 1;
  await cookies().set('cart', JSON.stringify(productQuantities));
}
