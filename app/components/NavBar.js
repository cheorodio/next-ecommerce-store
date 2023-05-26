import Image from 'next/image';
import Link from 'next/link';
import { BsCart3 } from 'react-icons/bs';
import logo from '../../public/images/logo.png';
import CartBadge from './CartBadge';
import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <header className={styles.navigationHeader}>
      <div className={styles.logo}>
        <Link href="/#" style={{ fontSize: '50px' }}>
          <Image src={logo} alt="logo" height={40} width={70} />
        </Link>
      </div>

      <div className={styles.navbar}>
        <div className={styles.leftSide} />

        <div className={styles.navigationBar}>
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
            <Link className={styles.navigationLink} href="/blog">
              Blog
            </Link>
          </div>
        </div>

        <div className={styles.cartContainer}>
          <Link
            href="/cart"
            className={styles.cartIcon}
            data-test-id="cart-link"
          >
            <BsCart3 style={{ fontSize: '1.25rem' }} />
            <CartBadge data-test-id="cart-count" />
          </Link>
        </div>
      </div>
    </header>
  );
}
