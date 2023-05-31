'use server';
import { cookies } from 'next/headers';

// import { getCookie } from '../../../util/cookies';
// import { parseJson } from '../../../util/json';

export async function clearCookies(resetCartQuantity) {
  resetCartQuantity(0);
  await cookies.remove('cart');
}
