import Image from 'next/image';
// import Link from 'next /link';
import { getProducts } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import styles from './checkout.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: { default: 'Vida | Handmade Jewellery' },
  description: 'Dedicated for best quality handmade jewellery',
};

export default async function OrderSummary() {
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

  let subTotal = 0;
  const totalPrice = productsInCart.reduce(
    (accumulator, item) => accumulator + (item.price / 100) * item.quantity,
    0,
  );

  return (
    <div className={styles.summaryContainer}>
      <h1>Order Summary</h1>
      {productsInCart.map((product) => {
        subTotal = product.quantity * product.price;
        return (
          <div key={`product-div-${product.id}`} className={styles.summaryCard}>
            <div className={styles.leftSide}>
              <div>
                <Image
                  src={`/images/${product.name}.jpg`}
                  width={60}
                  height={60}
                  alt=""
                />
              </div>
              <div className={styles.infoContainer}>
                <p className={styles.productTitle}>
                  {product.name} <span>[{product.category}]</span>
                </p>
                <div>
                  <p>Quantity: {product.quantity}</p>
                  <p>€ {product.price / 100}</p>
                </div>
              </div>
            </div>
            <div className={styles.subTotal}>€{subTotal / 100}</div>
          </div>
        );
      })}
      <div className={styles.grandTotal}>
        <div>
          <p>Sub total:</p>
          <p>Shipping:</p>
          <h3>Total</h3>
        </div>

        <div>
          <p>€{totalPrice}</p>
          <p>free</p>
          <h3>€{totalPrice}</h3>
        </div>
      </div>
    </div>
  );
}