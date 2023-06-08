import { expect, test } from '@jest/globals';
import { productData } from '../../app/cart/productData';

test('Test function that combines the product data from the database with the product quantity data from your cookie', () => {
  const productsData = [
    {
      id: 1,
      name: 'Lucy',
      category: 'earrings',
      price: 40,
      description:
        'Crafted with meticulous attention to detail, the "Lucy" Earrings showcase a harmonious blend of sophistication and grace. The delicate silhouette gracefully enhances your natural beauty, adding a touch of refined charm to any outfit.',
    },
  ];

  const cookieData = [{ id: 1, quantity: 2 }];

  const combineData = productData(productsData, cookieData);

  expect(combineData).toStrictEqual([
    {
      id: 1,
      name: 'Lucy',
      category: 'earrings',
      price: 40,
      description:
        'Crafted with meticulous attention to detail, the "Lucy" Earrings showcase a harmonious blend of sophistication and grace. The delicate silhouette gracefully enhances your natural beauty, adding a touch of refined charm to any outfit.',
      quantity: 2,
    },
  ]);
});
