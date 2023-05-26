'use client';
import { useRouter } from 'next/navigation';
import { addQuantity, subtractQuantity } from './actions';
import styles from './cart.module.scss';

export default function ChangeItemQuantity({ product }) {
  const router = useRouter();
  return (
    <div className={styles.changeCounter}>
      <button
        formAction={async () => {
          router.refresh();
          await subtractQuantity(product);
        }}
      >
        -
      </button>
      {product.quantity}
      <button
        formAction={async () => {
          router.refresh();
          await addQuantity(product);
        }}
      >
        +
      </button>
    </div>
  );
}
