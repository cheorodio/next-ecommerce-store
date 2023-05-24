import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './cart.module.scss';

export const dynamic = 'force-dynamic';

export default function CartPage() {
  const productQuantityCookie = getCookie('cart');

  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  // console.log({ productQuantityCookie });

  const productWithQuantities = products.map((product) => {
    const matchingValueFromCookie = productQuantities.find(
      (productObject) => product.id === productObject.id,
    );

    return { ...product, quantity: matchingValueFromCookie?.quantity };

    // console.log({ matchingValueFromCookie });
  });

  const productsInCart = productWithQuantities.filter((item) => item.quantity);
  // console.log({ filteredProducts });

  return (
    <main>
      <div className={styles.cartContainer}>
        <div className={styles.cartOverviewContainer}>
          <div className={styles.cartTableHead}>
            <div>Product</div>
            <div>Name</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
            <div>Action</div>
          </div>

          <div className={styles.itemsInCart}>
            {productsInCart.map((product) => {
              return (
                <div
                  key={`product-div-${product.id}`}
                  className={styles.productCard}
                >
                  <Image
                    src={`/images/${product.name}.jpg`}
                    width={80}
                    height={80}
                  />

                  <Link href={`/products/${product.id}`}>{product.name}</Link>
                  <Link href={`/products/${product.id}`}>
                    <p>{product.price} EUR</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.cartTotalContainer}>
          <div className={styles.cartTotalCard}>
            <h3>Cart Total</h3>
            <h2>€ 00, 00</h2>
            <div>
              <Link
                className={`${styles.continueShoppingButton} ${styles.cartButton}`}
                href="/products"
              >
                Continue Shopping
              </Link>
              <Link
                className={`${styles.checkoutButton} ${styles.cartButton}`}
                href="/cart/checkout/"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
