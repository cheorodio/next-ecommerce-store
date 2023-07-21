import { cache } from 'react';
import { Product } from '../migrations/1685200803-createTableProducts';
import { sql } from './connect';

// type alias with an object
// type Product = {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
// };

// run sql query in JS
export const getProducts = cache(async () => {
  const products = await sql<Product[]>`SELECT * FROM products`;
  return products;
});

export const getProductById = cache(async (id: number) => {
  const products = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;

  return products[0];
});
