'use client';
import { useRouter } from 'next/navigation';
import { addQuantity, subtractQuantity } from './actions';
import styles from './cart.module.scss';

export default function ChangeQuantity(props) {
  const router = useRouter();
  return (
    <div className={styles.changeCounter}>
      <button
        name="subtract-quantity"
        formAction={async () => {
          router.refresh();
          await subtractQuantity(props.product);
        }}
      >
        -
      </button>
      {props.product.quantity}
      <button
        formAction={async () => {
          router.refresh();
          await addQuantity(props.product);
        }}
      >
        +
      </button>
    </div>
  );
}