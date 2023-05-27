-- this file will not run, it's created only to save the quearies so we can have easy access to it.

-- Create a products table
CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  category varchar(30) NOT NULL,
  price integer NOT NULL,
  description varchar(500) NOT NULL
);

-- Insert products
INSERT INTO products
  (name, category, price, description)
VALUES
  ('Lucy', 'earrings', 49.99, 'Crafted with meticulous attention to detail, the Lucy Earrings showcase a harmonious blend of sophistication and grace. The delicate silhouette gracefully enhances your natural beauty, adding a touch of refined charm to any outfit.' ),
  ('Yumi', 'ring', 46.5, 'Indulge in the allure of contemporary elegance with our mesmerizing Yumi Ring. This stunning piece is meticulously crafted to capture the essence of modern glamour and leave a lasting impression.' ),
  ('Fay', 'ring', 39, 'Experince the epitome of luxury with our mesmerizing Fay Ring. This exquisite piece is a true celebration of glamour and sophistication, designed to make a statement and leave a lasting impression.' ),
  ('Karina', 'earrings', 29.5, 'Unleash your inner style icon with our stunning Karina Earrings. These earrings are a perfect blend of effortless chic and striking elegance, designed to make a bold statement wherever you go.' ),
  ('Kate', 'earrings', 35.99, 'The Kate Earrings feature a classic design with a modern twist, striking the perfect balance between sophistication and versatility. Crafted with meticulous attention to detail, they showcase a harmonious combination of grace and charm.' ),
  ('Lily', 'earrings', 25, 'Embrace the essence of grace and femininity with our enchanting Lily Earrings. These delicate blooms of elegance are designed to captivate and adorn your ears with timeless beauty.' ),
  ('Kat', 'earrings', 20.9, 'From casual outings to special occasions, the Kat Earrings are the perfect accessory to elevate any ensemble. Embrace your inner fashionista and let these earrings be the centerpiece of your look, showcasing your distinctive style with confidence and flair.' ),
  ('Lisa', 'earrings', 29, 'Perfect for both formal occasions and everyday wear, the Lisa Earrings are a versatile addition to your jewelry collection. Embrace the classic beauty and let these earrings be a reflection of your refined taste and timeless style.' ),
  ('Georgia', 'earrings', 25.25, 'Crafted with meticulous attention to detail, these earrings are made from high-quality materials to ensure both durability and comfort. The lightweight construction allows for easy and comfortable wear, while the secure fastening ensures a confident fit.' ),
  ('Jessie', 'necklace', 35, 'Elevat your style with the exquisite Jessie Necklace, a true embodiment of timeless elegance and grace. This necklace is designed to capture attention and add a touch of sophistication to any ensemble.'),
  ('Jeanna', 'necklace', 40, 'Indulge in the beauty and sophistication of the Jeanna Necklace, and let it become a cherished piece in your jewelry collection. Order now and experience the perfect fusion of exquisite sophistication and modern glamour.' ),
  ('Sara', 'necklace', 33.99, 'This necklace is the perfect accessory for expressing your individuality and personal style. Whether you are attending a social gathering, a romantic dinner, or simply adding a touch of elegance to your everyday look, the Sara Necklace effortlessly elevates your ensemble.' ),
  ('Lana', 'ring', 28, 'Our Lana ring is versatile, making it suitable for both formal occasions and everyday wear. Whether you are attending a glamorous event or adding a touch of elegance to your daily attire, the Lana Ring effortlessly enhances your style.' ),
  ('Mina', 'necklace', 27.50, 'The Mina Necklace is made from high-quality materials that ensure both durability and style. Its lustrous finish adds a touch of luxury, making it a timeless piece that can be treasured for years to come.' ),
  ('Lilibeth', 'necklace', 34.50, 'The Lilibeth Necklace features a delicate chain adorned with intricately designed elements, creating a captivating focal point. Each element is expertly embellished with shimmering crystals that reflect light with every movement, adding a touch of sparkle to any ensemble.' );


-- Read animals
SELECT * FROM products;

-- -------------------------------------

-- Dummy database created before the real one: saving here only for record.
-- export const products1 = [
--   {
--     id: 1,
--     name: 'Lucy',
--     category: 'earrings',
--     price: 49.99,
--     description:
--       'Crafted with meticulous attention to detail, the Lucy Earrings showcase a harmonious blend of sophistication and grace. The delicate silhouette gracefully enhances your natural beauty, adding a touch of refined charm to any outfit.',
--   },
--   {
--     id: 2,
--     name: 'Yumi',
--     category: 'ring',
--     price: 46.5,
--     description:
--       'Indulge in the allure of contemporary elegance with our mesmerizing "Yumi" Ring. This stunning piece is meticulously crafted to capture the essence of modern glamour and leave a lasting impression.',
--   },
--   {
--     id: 3,
--     name: 'Fay',
--     category: 'ring',
--     price: 39,
--     description:
--       'Experience the epitome of luxury with our mesmerizing "Fay" Ring. This exquisite piece is a true celebration of glamour and sophistication, designed to make a statement and leave a lasting impression.',
--   },
--   {
--     id: 4,
--     name: 'Karina',
--     category: 'earrings',
--     price: 29.5,
--     description:
--       'Unleash your inner style icon with our stunning "Karina" Earrings. These earrings are a perfect blend of effortless chic and striking elegance, designed to make a bold statement wherever you go.',
--   },
--   {
--     id: 5,
--     name: 'Kate',
--     category: 'earrings',
--     price: 35.99,
--     description:
--       'The "Kate" Earrings feature a classic design with a modern twist, striking the perfect balance between sophistication and versatility. Crafted with meticulous attention to detail, they showcase a harmonious combination of grace and charm.',
--   },
--   {
--     id: 6,
--     name: 'Lily',
--     category: 'earrings',
--     price: 25,
--     description:
--       'Embrace the essence of grace and femininity with our enchanting "Lily" Earrings. These delicate blooms of elegance are designed to captivate and adorn your ears with timeless beauty.',
--   },
--   {
--     id: 7,
--     name: 'Kat',
--     category: 'earrings',
--     price: 20.9,
--     description:
--       'From casual outings to special occasions, the "Kat" Earrings are the perfect accessory to elevate any ensemble. Embrace your inner fashionista and let these earrings be the centerpiece of your look, showcasing your distinctive style with confidence and flair.',
--   },
--   {
--     id: 8,
--     name: 'Lisa',
--     category: 'earrings',
--     price: 29,
--     description:
--       'Perfect for both formal occasions and everyday wear, the "Lisa" Earrings are a versatile addition to your jewelry collection. Embrace the classic beauty and let these earrings be a reflection of your refined taste and timeless style.',
--   },
--   {
--     id: 9,
--     name: 'Georgia',
--     category: 'earrings',
--     price: 25.25,
--     description:
--       'Crafted with meticulous attention to detail, these earrings are made from high-quality materials to ensure both durability and comfort. The lightweight construction allows for easy and comfortable wear, while the secure fastening ensures a confident fit.',
--   },
--   {
--     id: 10,
--     name: 'Jessie',
--     category: 'necklace',
--     price: 35,
--     description:
--       'Elevate your style with the exquisite "Jessie" Necklace, a true embodiment of timeless elegance and grace. This necklace is designed to capture attention and add a touch of sophistication to any ensemble.',
--   },
-- ];

-- export function getProductById(id: number) {
--   return products1.find((product) => product.id === id);
-- }
