import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './cart.module.scss';

export default async function CartSum() {
  const products = await getProducts();
  const productQuantityCookie = getCookie('cart');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);
  const productWithQuantities = products.map((product) => {
    const matchingValueFromCookie = productQuantities?.find(
      (productObject) => product.id === productObject.id,
    );
    return { ...product, quantity: matchingValueFromCookie?.quantity };
  });
  const productsInCart = productWithQuantities.filter((item) => item.quantity);

  const totalPrice = productsInCart.reduce(
    (accumulator, item) => accumulator + (item.price / 100) * item.quantity,
    0,
  );
  return (
    <div className={styles.cartTotalContainer}>
      <div className={styles.cartTotalCard}>
        <h3>Cart Total</h3>
        <div data-test-id="cart-total" className={styles.grandTotalAmount}>
          €{totalPrice}
        </div>
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
            data-test-id="cart-checkout"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
