import Image from 'next/image';
import Link from 'next/link';
import heroImage from '../public/images/hero.jpg';
import featuredProduct1 from '../public/images/product1.jpg';
import featuredProduct3 from '../public/images/product10.jpg';
import featuredProduct2 from '../public/images/product2.jpg';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <section className={styles.heroSection}>
        <Image
          src={heroImage}
          alt="jewellry on a woman"
          className={styles.heroMainImage}
        />
      </section>

      <section className={styles.featuredProductsSection}>
        <div>
          <h4>Featured Products</h4>
          <Link className={styles.viewAllButton} href="/#">
            View All
          </Link>
        </div>
        <Image
          className={styles.featuredProductImage}
          src={featuredProduct1}
          alt="earrings on a woman"
        />
        <Image
          className={styles.featuredProductImage}
          src={featuredProduct2}
          alt="necklace on a woman"
        />
        <Image
          className={styles.featuredProductImage}
          src={featuredProduct3}
          alt="earrings on a woman"
        />
      </section>
    </main>
  );
}
