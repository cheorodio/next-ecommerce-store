import { expect, test } from '@jest/globals';
import getCartTotal from '../../app/cart/getCartTotal';

test('Test cart sum function', () => {
  const currentCart = [
    {
      price: 40,
      quantity: 1,
    },
    {
      price: 20,
      quantity: 1,
    },
  ];
  expect(getCartTotal(currentCart)).toBe(60);
});
