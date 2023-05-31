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
        formAction={async () => {
          router.refresh();
          await removeItem(props.product);
        }}
      >
        <TfiTrash className={styles.removeIcon} />
      </button>
    </div>
  );
}
