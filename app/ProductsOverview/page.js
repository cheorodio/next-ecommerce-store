import Image from 'next/image';
import Link from 'next/link';
import { jewelleries } from '../../database/products.js';
import styles from './page.module.scss';

export const metadata = {
  title: 'Jewellery',
  description: 'Products',
};

export default function ProductsOverview() {
  return (
    <main>
      <section className={styles.productOverviewContainer}>
        <h1>shop our collection</h1>

        <div className={styles.productOverviewHeader}>
          <div className={styles.catergoryLinks}>
            <h2>Category</h2>
            <div>
              <Link href="/#">Earrings</Link>
              <Link href="/#">Necklace</Link>
              <Link href="/#">Rings</Link>
            </div>
          </div>
          <div className={styles.categoryImageHeader} />
        </div>

        <div className={styles.productCardsContainer}>
          {jewelleries.map((jewellery) => {
            return (
              <div
                key={`jewellery-div-${jewellery.id}`}
                className={styles.productCard}
              >
                <Image
                  src={`/images/${jewellery.name}.png`}
                  width={200}
                  height={200}
                />
                <div>
                  <Link
                    href={`/products/${jewellery.name}`}
                    className={styles.categoryTitle}
                  >
                    {jewellery.type}
                  </Link>

                  <Link
                    href={`/products/${jewellery.name}`}
                    className={styles.productName}
                  >
                    {jewellery.name}
                  </Link>
                  <Link
                    href={`/products/${jewellery.name}`}
                    className={styles.productPrice}
                  >
                    {jewellery.price}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
