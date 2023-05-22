import './globals.scss';
import { Caveat, Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
// import { notFound } from 'next/navigation';
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai';
import { BsCart3, BsFacebook, BsPinterest, BsSearch } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import logo from '../public/images/logo.png';
// import { getProductById } from '../database/products';
// import { getCookie } from '../util/cookies';
// import { parseJson } from '../util/json';
import styles from './layout.module.scss';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });
const caveat = Caveat({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: { default: 'Vida | Handmade Jewellery' },
  description: 'Dedicated for best quality handmade jewellery',
};

export default function RootLayout({ children }) {
  // const singleProduct = getProductById(Number(params.productId));
  // console.log(singleProduct);

  // if (!singleProduct) {
  //   notFound();
  // }
  // const productQuantityCookie = getCookie('productQuantities');
  // const productQuantities = !productQuantityCookie
  //   ? []
  //   : parseJson(productQuantityCookie);

  // const productToUpdate = productQuantities.find((productQuantity) => {
  //   return productQuantity.id === singleProduct.id;
  // });
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header className={styles.navigationHeader}>
          <Link
            href="/#"
            className={caveat.className}
            style={{ fontSize: '70px' }}
          >
            <Image src={logo} alt="logo" height={40} width={70} />
          </Link>
          <div className={styles.navigationBar}>
            <BsSearch />
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
            <Link href="/cart" className={styles.cartIcon}>
              {/* <div>{productToUpdate?.quantity}</div> */}
              <BsCart3 style={{ fontSize: '1.25rem' }} />
            </Link>
          </div>
        </header>

        {children}

        <footer className={styles.footerSection}>
          <div className={styles.companyInformation}>
            <Link
              href="/#"
              className={caveat.className}
              style={{ fontSize: '50px' }}
            >
              <Image src={logo} alt="logo" height={30} width={60} />
            </Link>
            <div className={styles.companyContact}>
              <div>
                <GoLocation /> <p> 123 Any Street, Any City</p>
              </div>
              <div>
                <AiOutlinePhone /> <p>+43 123456789</p>
              </div>
              <div>
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

          <form className={styles.mailingList}>
            <h3>Join our mailing list</h3>
            <input placeholder="me@email.com" />
            <button>Subscribe</button>
          </form>
        </footer>
      </body>
    </html>
  );
}
