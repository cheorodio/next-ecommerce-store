import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById, products } from '../../../database/products';
import QuantityCounter from '../../Counter.js';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export default function ProductsPage({ params }) {
  const singleProduct = getProductById(Number(params.productId));
  console.log(singleProduct);

  if (!singleProduct) {
    notFound();
  }
  return (
    <main>
      <section className={styles.productContainer}>
        <div>
          <Image
            data-test-id="product-image"
            src={`/images/${singleProduct.name}.jpg`}
            width={500}
            height={500}
            className={styles.productImage}
          />
        </div>

        <div className={styles.productInfoContainer}>
          <h1>{singleProduct.name}</h1>
          <h5>{singleProduct.description}</h5>
          <h6 data-test-id="product-price"> {singleProduct.price} EUR</h6>
          <p className={styles.quantityTitle}>Quantity</p>
          <div>
            <QuantityCounter />
            <button
              data-test-id="product-add-to-cart"
              className={styles.addToCartButton}
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
      <section className={styles.youMayAlsoLikeContainer}>
        <h2>You may also like</h2>
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
                    >
                      {product.name}
                    </Link>
                    <Link
                      href={`/products/${product.id}`}
                    >
                      <p>{product.price} EUR</p>
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
