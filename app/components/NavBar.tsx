import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { BsHandbag } from 'react-icons/bs';
import logo from '../../public/images/logo.png';
import CartBadge from './CartBadge';
import styles from './NavBar.module.scss';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default function NavBar() {
  return (
    <>
      <div className={styles.topBanner}>Free worldwide shipping</div>
      <header className={styles.navContainer}>
        <div className={styles.navigationLinks}>
          <Link
            className={`${styles.navigationLink} ${playfairDisplay.className}`}
            href="/#"
          >
            Home
          </Link>
          <Link
            data-test-id="products-link"
            className={`${styles.navigationLink} ${playfairDisplay.className}`}
            href="/products"
          >
            Shop
          </Link>
          <Link
            className={`${styles.navigationLink} ${playfairDisplay.className}`}
            href="/story"
          >
            Our Story
          </Link>
        </div>
        <div className={styles.logoContainer}>
          <Link href="/#">
            <Image className={styles.logo} src={logo} alt="vida company logo" />
          </Link>
        </div>
        <div className={styles.cartContainer}>
          <Link href="/cart" data-test-id="cart-link">
            <BsHandbag className={styles.cartIcon} />
            <div>
              <CartBadge />
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}
