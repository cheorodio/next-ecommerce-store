// import Image from 'next/image';
import Link from 'next/link';
// import { getProductById } from '../../database/products';
import styles from './cart.module.scss';

export default function CartPage() {
  return (
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
              href="/checkout"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
