import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './NavBar.module.scss';

export default function CartBadge() {
  const productQuantityCookie = getCookie('cart');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const quantity = productQuantities?.map((item) => item.quantity);
  // console.log(quantity);
  const total = quantity?.reduce(
    (accumulator: number, currentNumber: number) => {
      return accumulator + currentNumber;
    },
    0,
  );
  return (
    <h5
      data-test-id="cart-count"
      className={`${styles.badge} ${total === 0 ? styles.empty : ''}`}
    >
      {total}
    </h5>
  );
}
