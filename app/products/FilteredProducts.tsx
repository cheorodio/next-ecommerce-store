'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '../../migrations/1685200803-createTableProducts';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: { default: 'Vida | Handmade Jewellery' },
  description: 'Dedicated for best quality handmade jewellery',
};

type Props = {
  products: Product[];
};

export default function FilterProducts({ products }: Props) {
  const [category, setCategory] = useState('');

  const filterProductsByCategory = category
    ? products.filter((product) => product.category === category)
    : products;
  return (
    <main>
      <section className={styles.productOverviewContainer}>
        <div className={styles.productPageHeader}>
          <h1>shop our collection</h1>
        </div>

        <div className={styles.categoryContainer}>
          <div className={styles.filterOptions}>
            <select
              value={category}
              onChange={(event) => {
                setCategory(event.currentTarget.value);
              }}
            >
              <option value="">All Products</option>
              <option value="earrings">Earrings</option>
              <option value="necklace">Necklace</option>
              <option value="ring">Rings</option>
            </select>
          </div>
        </div>

        <div className={styles.productCardsContainer}>
          {filterProductsByCategory.map((product) => {
            return (
              <div
                key={`product-div-${product.id}`}
                className={styles.productCard}
              >
                <Link
                  href={`/products/${product.id}`}
                  data-test-id={`product-${product.id}`}
                >
                  <Image
                    src={`/images/products/${product.name}.avif`}
                    width={200}
                    height={200}
                    alt={product.name}
                    priority={true}
                    unoptimized={true}
                    data-test-id="product-image"
                  />
                </Link>
                <div>
                  <Link
                    href={`/products/${product.id}`}
                    className={styles.categoryTitle}
                  >
                    {product.category}
                  </Link>
                  <div>
                    <Link
                      href={`/products/${product.id}`}
                      className={styles.productName}
                    >
                      {product.name}
                    </Link>
                    <Link
                      href={`/products/${product.id}`}
                      className={styles.productPrice}
                    >
                      € {product.price}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
