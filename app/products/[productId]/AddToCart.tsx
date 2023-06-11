'use client';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import addToCart from './actions';
import styles from './AddToCart.module.scss';

type Props = {
  productId: number;
};

export default function AddToCart(props: Props) {
  const [quantity, setQuantity] = useState('1');
  const router = useRouter();

  return (
    <form className={styles.quantityForm}>
      <input
        data-test-id="product-quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setQuantity(event.currentTarget.value)
        }
      />
      <button
        data-test-id="product-add-to-cart"
        formAction={async () => {
          router.refresh();
          await addToCart(props.productId, Number(quantity));
        }}
      >
        Add to cart
      </button>
    </form>
  );
}
