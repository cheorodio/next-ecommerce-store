import { Sql } from 'postgres';

export const products = [
  {
    id: 1,
    name: 'Lucy',
    category: 'earrings',
    price: 4090,
    description:
      'Crafted with meticulous attention to detail, the "Lucy" Earrings showcase a harmonious blend of sophistication and grace. The delicate silhouette gracefully enhances your natural beauty, adding a touch of refined charm to any outfit.',
  },
  {
    id: 2,
    name: 'Yumi',
    category: 'ring',
    price: 4699,
    description:
      'Indulge in the allure of contemporary elegance with our mesmerizing "Yumi" Ring. This stunning piece is meticulously crafted to capture the essence of modern glamour and leave a lasting impression.',
  },
  {
    id: 3,
    name: 'Fay',
    category: 'ring',
    price: 3950,
    description:
      'Experience the epitome of luxury with our mesmerizing "Fay" Ring. This exquisite piece is a true celebration of glamour and sophistication, designed to make a statement and leave a lasting impression.',
  },
  {
    id: 4,
    name: 'Karina',
    category: 'earrings',
    price: 2900,
    description:
      'Unleash your inner style icon with our stunning "Karina" Earrings. These earrings are a perfect blend of effortless chic and striking elegance, designed to make a bold statement wherever you go.',
  },
  {
    id: 5,
    name: 'Kate',
    category: 'earrings',
    price: 3525,
    description:
      'The "Kate" Earrings feature a classic design with a modern twist, striking the perfect balance between sophistication and versatility. Crafted with meticulous attention to detail, they showcase a harmonious combination of grace and charm.',
  },
  {
    id: 6,
    name: 'Lily',
    category: 'earrings',
    price: 2500,
    description:
      'Embrace the essence of grace and femininity with our enchanting "Lily" Earrings. These delicate blooms of elegance are designed to captivate and adorn your ears with timeless beauty.',
  },
  {
    id: 7,
    name: 'Kat',
    category: 'earrings',
    price: 2000,
    description:
      'From casual outings to special occasions, the "Kat" Earrings are the perfect accessory to elevate any ensemble. Embrace your inner fashionista and let these earrings be the centerpiece of your look, showcasing your distinctive style with confidence and flair.',
  },
  {
    id: 8,
    name: 'Lisa',
    category: 'earrings',
    price: 2999,
    description:
      'Perfect for both formal occasions and everyday wear, the "Lisa" Earrings are a versatile addition to your jewelry collection. Embrace the classic beauty and let these earrings be a reflection of your refined taste and timeless style.',
  },
  {
    id: 9,
    name: 'Georgia',
    category: 'earrings',
    price: 2580,
    description:
      'Crafted with meticulous attention to detail, these earrings are made from high-quality materials to ensure both durability and comfort. The lightweight construction allows for easy and comfortable wear, while the secure fastening ensures a confident fit.',
  },
  {
    id: 10,
    name: 'Jessie',
    category: 'necklace',
    price: 3550,
    description:
      'Elevate your style with the exquisite "Jessie" Necklace, a true embodiment of timeless elegance and grace. This necklace is designed to capture attention and add a touch of sophistication to any ensemble.',
  },
  {
    id: 11,
    name: 'Jeanna',
    category: 'necklace',
    price: 4000,
    alt: '',
    description:
      'Indulge in the beauty and sophistication of the Jeanna Necklace, and let it become a cherished piece in your jewelry collection. Order now and experience the perfect fusion of exquisite sophistication and modern glamour.',
  },
  {
    id: 12,
    name: 'Sara',
    category: 'necklace',
    price: 3300,
    alt: '',
    description:
      'This necklace is the perfect accessory for expressing your individuality and personal style. Whether you are attending a social gathering, a romantic dinner, or simply adding a touch of elegance to your everyday look, the Sara Necklace effortlessly elevates your ensemble.',
  },
  {
    id: 13,
    name: 'Lana',
    category: 'ring',
    price: 2899,
    alt: '',
    description:
      'Our Lana ring is versatile, making it suitable for both formal occasions and everyday wear. Whether you are attending a glamorous event or adding a touch of elegance to your daily attire, the Lana Ring effortlessly enhances your style.',
  },
  {
    id: 14,
    name: 'Mina',
    category: 'necklace',
    price: 2750,
    alt: '',
    description:
      'The Mina Necklace is made from high-quality materials that ensure both durability and style. Its lustrous finish adds a touch of luxury, making it a timeless piece that can be treasured for years to come.',
  },
  {
    id: 15,
    name: 'Lilibeth',
    category: 'necklace',
    price: 3400,
    alt: '',
    description:
      'The Lilibeth Necklace features a delicate chain adorned with intricately designed elements, creating a captivating focal point. Each element is expertly embellished with shimmering crystals that reflect light with every movement, adding a touch of sparkle to any ensemble.',
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
      (${product.name}, ${product.category}, ${product.price}, ${product.description}) -- values for each column
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
