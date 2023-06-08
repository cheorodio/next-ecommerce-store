import { expect, test } from '@jest/globals';
import { updateQuantity } from '../../app/products/[productId]/updateQuantity';

test('Test function for updating quantity in item of cookie', () => {
  const quantity = updateQuantity(undefined, 1, 1);

  expect(quantity).toStrictEqual('[{"id":1,"quantity":1}]');

  expect(updateQuantity(quantity, 1, 2)).toStrictEqual(
    '[{"id":1,"quantity":3}]',
  );
});
