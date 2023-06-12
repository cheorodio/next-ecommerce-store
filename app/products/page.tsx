import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: { default: 'Vida | Handmade Jewellery' },
  description: 'Dedicated for best quality handmade jewellery',
};

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <main>
      <section className={styles.productOverviewContainer}>
        <div className={styles.productPageHeader}>
          <h1>shop our collection</h1>
        </div>

        <div className={styles.categoryContainer}>
          <div className={styles.category}>
            <Link href="/products">All products</Link>
          </div>
          <div className={styles.category}>
            <Link href="/products">Rings</Link>
          </div>
          <div className={styles.category}>
            <Link href="/products">Earrings</Link>
          </div>
          <div className={styles.category}>
            <Link href="/products">Necklace</Link>
          </div>
        </div>

        <div className={styles.productCardsContainer}>
          {products.map((product) => {
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
