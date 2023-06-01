import styles from './checkout.module.scss';
import CheckOutForm from './CheckOutForm';
import OrderSummary from './OrderSummary';

export default function CheckoutPage() {
  return (
    <main className={styles.checkoutContainer}>
      <CheckOutForm />
      <OrderSummary />
    </main>
  );
}
