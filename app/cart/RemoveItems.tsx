'use client';
import { useRouter } from 'next/navigation';
import { TfiTrash } from 'react-icons/tfi';
import { removeItem } from './actions';
import styles from './cart.module.scss';

type Props = {
  product: number;
};

export default function RemoveItems(props: Props) {
  const router = useRouter();

  return (
    <div className={styles.removeButton}>
      <button
        data-test-id="cart-product-remove-<product id>"
        name="remove-button"
        formAction={async () => {
          router.refresh();
          await removeItem(props.product);
        }}
      >
        <TfiTrash
          className={styles.removeIcon}
          name="remove-button"
          data-test-id="cart-product-remove-<product id>"
        />
      </button>
    </div>
  );
}
