import { Sql } from 'postgres';

export const products = [
  {
    id: 1,
    name: 'Lucy',
    category: 'earrings',
    price: 49,
    description:
      'Crafted with meticulous attention to detail, the "Lucy" Earrings showcase a harmonious blend of sophistication and grace. The delicate silhouette gracefully enhances your natural beauty, adding a touch of refined charm to any outfit.',
  },
  {
    id: 2,
    name: 'Yumi',
    category: 'ring',
    price: 46,
    description:
      'Indulge in the allure of contemporary elegance with our mesmerizing "Yumi" Ring. This stunning piece is meticulously crafted to capture the essence of modern glamour and leave a lasting impression.',
  },
  {
    id: 3,
    name: 'Fay',
    category: 'ring',
    price: 39,
    description:
      'Experience the epitome of luxury with our mesmerizing "Fay" Ring. This exquisite piece is a true celebration of glamour and sophistication, designed to make a statement and leave a lasting impression.',
  },
  {
    id: 4,
    name: 'Karina',
    category: 'earrings',
    price: 29,
    description:
      'Unleash your inner style icon with our stunning "Karina" Earrings. These earrings are a perfect blend of effortless chic and striking elegance, designed to make a bold statement wherever you go.',
  },
  {
    id: 5,
    name: 'Kate',
    category: 'earrings',
    price: 35,
    description:
      'The "Kate" Earrings feature a classic design with a modern twist, striking the perfect balance between sophistication and versatility. Crafted with meticulous attention to detail, they showcase a harmonious combination of grace and charm.',
  },
  {
    id: 6,
    name: 'Lily',
    category: 'earrings',
    price: 25,
    description:
      'Embrace the essence of grace and femininity with our enchanting "Lily" Earrings. These delicate blooms of elegance are designed to captivate and adorn your ears with timeless beauty.',
  },
  {
    id: 7,
    name: 'Kat',
    category: 'earrings',
    price: 20,
    description:
      'From casual outings to special occasions, the "Kat" Earrings are the perfect accessory to elevate any ensemble. Embrace your inner fashionista and let these earrings be the centerpiece of your look, showcasing your distinctive style with confidence and flair.',
  },
  {
    id: 8,
    name: 'Lisa',
    category: 'earrings',
    price: 29,
    description:
      'Perfect for both formal occasions and everyday wear, the "Lisa" Earrings are a versatile addition to your jewelry collection. Embrace the classic beauty and let these earrings be a reflection of your refined taste and timeless style.',
  },
  {
    id: 9,
    name: 'Georgia',
    category: 'earrings',
    price: 25,
    description:
      'Crafted with meticulous attention to detail, these earrings are made from high-quality materials to ensure both durability and comfort. The lightweight construction allows for easy and comfortable wear, while the secure fastening ensures a confident fit.',
  },
  {
    id: 10,
    name: 'Jessie',
    category: 'necklace',
    price: 35,
    description:
      'Elevate your style with the exquisite "Jessie" Necklace, a true embodiment of timeless elegance and grace. This necklace is designed to capture attention and add a touch of sophistication to any ensemble.',
  },
];

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
};

export async function up(sql: Sql) {
  // use for of to loop through the products array from above, to get each object from the array into the table
  for (const product of products) {
    await sql`
    INSERT INTO products
      (name, category, price, description) -- name of columns
    VALUES
      (${product.name}, ${product.category}, ${product.price}, ${product.description})
  `;
  }
}

export async function down(sql: Sql) {
  // loop through the array again to get each product in order to delete them.
  for (const product of products) {
    await sql`
    DELETE FROM products WHERE id = ${product.id}
  `;
  }
}
