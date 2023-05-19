import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import QuantityCounter from '../../../utils/counter';
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
          />
        </div>

        <div className={styles.productInfoContainer}>
          <h1>{singleProduct.name}</h1>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
            <li>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </li>
          </ul>
          <h6 data-test-id="product-price"> 00,00</h6>

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
    </main>
  );
}
