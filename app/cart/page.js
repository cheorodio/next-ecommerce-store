import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './cart.module.scss';
import ChangeQuantity from './ChangeQuantity';
import getCartTotal from './getCartTotal';
import { productData } from './productData';
import RemoveButton from './RemoveButton';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: { default: 'Vida | Handmade Jewellery' },
  description: 'Dedicated for best quality handmade jewellery',
};

export default async function CartPage() {
  const products = await getProducts();
  const productQuantityCookie = getCookie('cart');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const productsInCart = productData(products, productQuantities);

  return (
    <main>
      {productsInCart.length === 0 ? (
        <h1 className={styles.emptyCart}>🛒 Your cart is empty 🛒</h1>
      ) : (
        <div className={styles.cartContainer}>
          <div className={styles.cartOverviewContainer}>
            <div className={styles.cartTableHead}>
              <div>Image</div>
              <div>Name</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
              <div>Action</div>
            </div>

            <div
              className={styles.itemsInCart}
              data-test-id={`cart-product-${products.id}`}
            >
              {productsInCart.map((product) => {
                let subTotal = 0;
                subTotal = product.quantity * product.price;
                return (
                  <div
                    key={`product-div-${product.id}`}
                    className={styles.productCard}
                  >
                    <div className={styles.imageContainer}>
                      <Link href={`/products/${product.id}`}>
                        <Image
                          src={`/images/products/${product.name}.avif`}
                          width={80}
                          height={80}
                          className={styles.productImage}
                          alt={product.name}
                        />
                      </Link>
                    </div>

                    <div className={styles.infoContainer}>
                      <div className={styles.productInfo}>
                        <p className={styles.productName}>{product.name}</p>
                        <p className={styles.productPrice}>€ {product.price}</p>
                      </div>

                      <div className={styles.productQuantity}>
                        <ChangeQuantity product={product} />

                        <div className={styles.productSubtotal}>
                          €{subTotal}
                        </div>
                      </div>
                      <form
                        data-test-id={`cart-product-remove-${product.id}`}
                        name="remove-button"
                        className={styles.actionButton}
                      >
                        <RemoveButton product={product} />
                      </form>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.cartTotalContainer}>
            <div className={styles.cartTotalCard}>
              <h3>Cart Total</h3>
              <div
                data-test-id="cart-total"
                className={styles.grandTotalAmount}
              >
                €{getCartTotal(productsInCart)}
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
        </div>
      )}
    </main>
  );
}
