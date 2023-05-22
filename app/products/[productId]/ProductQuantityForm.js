'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { updateQuantity } from './actions';
import styles from './ProductQuantityForm.module.scss';

export default function ProductQuantityForm(props) {
  const [quantity, setQuantity] = useState('');
  const router = useRouter();

  return (
    <form className={styles.quantityForm}>
      <input
        type="number"
        min="0"
        className={styles.inputArea}
        value={quantity}
        onChange={(event) => {
          setQuantity(event.currentTarget.value);
        }}
      />
      <br />
      <button
        className={styles.button}
        formAction={async () => {
          router.refresh();
          await updateQuantity(props.productId, quantity);
        }}
      >
        Add to cart
      </button>
    </form>
  );
}
