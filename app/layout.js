import './globals.scss';
import { Caveat, Poppins } from 'next/font/google';
import Link from 'next/link';
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai';
import { BsCart3, BsFacebook, BsPinterest, BsSearch } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import styles from './page.module.scss';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });
const caveat = Caveat({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: { default: 'Vida | Handmade Jewellery' },
  description: 'Handmade Jewellery',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <nav className={styles.navigationHeader}>
          <Link
            href="/#"
            className={caveat.className}
            style={{ fontSize: '50px' }}
          >
            vida.
          </Link>
          <div className={styles.navigationBar}>
            <BsSearch />
            <div className={styles.navigationLinks}>
              <Link href="/">Home</Link>
              <Link href="/ProductsOverview">Shop</Link>
              <Link href="/AboutPage">About Us</Link>
              <Link href="/AboutPage">Blog</Link>
            </div>
            <BsCart3 style={{ fontSize: '1.25rem' }} />
          </div>
        </nav>

        {children}

        <footer className={styles.footerSection}>
          <div className={styles.companyInformation}>
            <Link
              href="/#"
              className={caveat.className}
              style={{ fontSize: '50px' }}
            >
              vida.
            </Link>
            <div className={styles.companyContact}>
              <div>
                {' '}
                <GoLocation /> <p> 123 Any Street, Any City</p>
              </div>
              <div>
                {' '}
                <AiOutlinePhone /> <p>+43 123456789</p>
              </div>
              <div>
                {' '}
                <AiOutlineMail /> <p>hello@email.com</p>
              </div>
            </div>
            <div className={styles.companySocialLinks}>
              <AiFillTwitterCircle />
              <BsFacebook />
              <AiFillInstagram />
              <BsPinterest />
            </div>
          </div>

          <div className={styles.mailingList}>
            <h3>Join our mailing list</h3>
            <input placeholder="me@email.com" />
            <button>Subscribe</button>
          </div>
        </footer>
      </body>
    </html>
  );
}
