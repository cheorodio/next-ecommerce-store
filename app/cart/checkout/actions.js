'use server';
import { cookies } from 'next/headers';

// import { getCookie } from '../../../util/cookies';
// import { parseJson } from '../../../util/json';

export async function clearCookies() {
  // resetCartQuantity(0);
  // await cookies.remove('cart');
  await cookies().set('cart', JSON.stringify([]));
}

// export async function removeCookie() {
//   await cookies().set('cart', JSON.stringify([]));
// }
