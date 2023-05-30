'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { addToCart } from './actions';
import styles from './AddToCartForm.module.scss';

type Props = {
  productId: number;
};

export default function AddToCartForm(props: Props) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuantity(Number(event.currentTarget.value));
  }

  return (
    <form className={styles.quantityForm}>
      <input
        data-test-id="product-quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={handleChange}
      />
      <button
        data-test-id="product-add-to-cart"
        formAction={async () => {
          router.refresh();
          await addToCart(props.productId, quantity);
        }}
      >
        Add to cart
      </button>
    </form>
  );
}
