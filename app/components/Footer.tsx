import Link from 'next/link';
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai';
import { BsFacebook, BsPinterest } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.companyInformation}>
        <Link href="/#">
          <p className={styles.logo}>vida.</p>
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
        <h6>
          Created by{' '}
          <Link
            href="https://github.com/cheorodio"
            className={styles.creditLink}
          >
            Michelle Orodio
          </Link>
        </h6>
      </div>

      <form className={styles.mailingList}>
        <h3>Join our mailing list</h3>
        <input placeholder="me@email.com" />
        <button>Subscribe</button>
      </form>
    </footer>
  );
}
