import Image from 'next/image';
import mail from '../../../../public/images/icons/received.png';
import styles from './thankYou.module.scss';

export default function thankYouPage() {
  return (
    <main className={styles.thankyouContainer}>
      <h1>Thank you for your order</h1>
      <div>
        <Image src={mail} alt="mail icon" priority={true} />
        <p>
          Your oder has been recieved and an email receipt has been sent to the
          email address provided.
        </p>
      </div>
    </main>
  );
}
