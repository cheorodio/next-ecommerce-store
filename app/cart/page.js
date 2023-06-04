import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './cart.module.scss';
import CartSum from './CartSum';
import ChangeItemQuantity from './ChangeItemQuantity';
import RemoveItems from './RemoveItems';

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
  const productWithQuantities = products.map((product) => {
    const matchingValueFromCookie = productQuantities.find(
      (productObject) => product.id === productObject.id,
    );
    return { ...product, quantity: matchingValueFromCookie?.quantity };
  });
  const productsInCart = productWithQuantities.filter((item) => item.quantity);

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
              data-test-id="cart-product-<product id>"
            >
              {productsInCart.map((product) => {
                let subTotal = 0;
                subTotal = product.quantity * product.price;
                return (
                  <div
                    key={`product-div-${product.id}`}
                    className={styles.productCard}
                  >
                    <div>
                      <Image
                        src={`/images/${product.name}.jpg`}
                        width={80}
                        height={80}
                        className={styles.productImage}
                        alt={product.name}
                      />
                    </div>

                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                    <Link href={`/products/${product.id}`}>
                      <p>€ {product.price}</p>
                    </Link>

                    <form data-test-id="cart-product-quantity-<product id>">
                      <ChangeItemQuantity product={product} />
                    </form>

                    <div>€{subTotal}</div>
                    <form data-test-id="cart-product-remove-<product id>">
                      <RemoveItems product={product} />
                    </form>
                  </div>
                );
              })}
            </div>
          </div>
          <CartSum />
        </div>
      )}
    </main>
  );
}
