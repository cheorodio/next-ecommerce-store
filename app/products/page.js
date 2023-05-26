import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products.js';
import styles from './page.module.scss';

export const metadata = {
  title: 'Jewellery Collections | vida. ',
  description: 'Products',
};

export default function ProductsPage() {
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
          {products.map((product) => {
            return (
              <div
                key={`product-div-${product.id}`}
                className={styles.productCard}
              >
                <Image
                  src={`/images/${product.name}.jpg`}
                  width={200}
                  height={200}
                  alt=""
                />
                <div>
                  <Link
                    data-test-id="product-<product id>"
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
