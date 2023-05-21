'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { updateQuantity } from './actions';
import styles from './ProductQuantityForm.module.scss';

export default function ProductQuantityForm(props) {
  const [quantity, setQuantity] = useState('');
  const router = useRouter();

  return (
    // WARNING: in order to use Server Action you need to update the next.js config with serverActions: true,
    // when using Server Actions we don't need prevent the default of the form
    <form className={styles.quantityForm}>
      <input
        type="number"
        min="0"
        className={styles.textArea}
        value={quantity}
        onChange={(event) => {
          setQuantity(event.currentTarget.value);
        }}
      />
      {/* Instead of using onClick we use formAction */}
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
