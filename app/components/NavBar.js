import Image from 'next/image';
import Link from 'next/link';
import { BsHandbag } from 'react-icons/bs';
// import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../public/images/logo.png';
import CartBadge from './CartBadge';
import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <>
      <div className={styles.topBanner}>Free worldwide shipping</div>
      <header className={styles.navContainer}>
        <div className={styles.navigationLinks}>
          <Link className={styles.navigationLink} href="/#">
            Home
          </Link>
          <Link
            data-test-id="products-link"
            className={styles.navigationLink}
            href="/products"
          >
            Shop
          </Link>
          <Link className={styles.navigationLink} href="/story">
            Our Story
          </Link>
        </div>
        <div className={styles.logoContainer}>
          <Link href="/#">
            <Image src={logo} alt="logo" height={50} width={80} />
          </Link>
        </div>
        <div className={styles.cartContainer}>
          <Link href="/cart" data-test-id="cart-link">
            <BsHandbag className={styles.cartIcon} />
            <div className={styles.badge}>
              <CartBadge data-test-id="cart-count" />
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}
