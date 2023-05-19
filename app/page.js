import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { FaLongArrowAltRight } from 'react-icons/fa';
import collectionImage1 from '../public/images/collection1.jpg';
import collectionImage2 from '../public/images/collection2.jpg';
import shipping from '../public/images/freeshipping.png';
import handmade from '../public/images/handmade.png';
import heroImage from '../public/images/hero1.jpg';
import featuredProduct1 from '../public/images/product1.jpg';
import featuredProduct3 from '../public/images/product10.jpg';
import featuredProduct2 from '../public/images/product2.jpg';
import payment from '../public/images/securepayment.png';
import tracking from '../public/images/tracking.png';
// import HeroSwiper from '../utils/swiper';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <section className={styles.heroSection}>
        {/* <HeroSwiper className={styles.heroSwiperContainer}/> */}
        <Image
          src={heroImage}
          alt="jewellry on a woman"
          className={styles.heroMainImage}
        />
      </section>
      <section className={styles.featuredProductsSection}>
        <div className={styles.featuredProductsTitle}>
          <h4>Featured Products</h4>
          <Link className={styles.viewAllButton} href="/products">
            View All
          </Link>
        </div>
        <Link href="/products" className={styles.featuredProduct}>
          <Image
            className={styles.featuredProductImage}
            src={featuredProduct1}
            alt="earrings on a woman"
          />
          <h6>Earrings</h6>
          <div>
            <h5>Lily</h5>
            <p>€35,00</p>
          </div>
        </Link>

        <Link href="/products" className={styles.featuredProduct}>
          <Image
            className={styles.featuredProductImage}
            src={featuredProduct2}
            alt="necklace on a woman"
          />
          <h6>Necklace</h6>
          <div>
            <h5>Rose</h5>
            <p>€45,50</p>
          </div>
        </Link>

        <Link href="/products" className={styles.featuredProduct}>
          <Image
            className={styles.featuredProductImage}
            src={featuredProduct3}
            alt="earrings on a woman"
          />
          <h6>earrings</h6>
          <div>
            <h5>Violet</h5>
            <p>€39,99</p>
          </div>
        </Link>
      </section>

      <section className={styles.collectionSection}>
        <div className={styles.collectionImageBox}>
          <Image
            className={styles.collectionImage1}
            src={collectionImage1}
            alt="necklace set on a woman"
          />
          <Image
            className={styles.collectionImage2}
            src={collectionImage2}
            alt="ring set"
          />
        </div>

        <div className={styles.collectionTextBox}>
          <h2>The Collection</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque
            penatibus et magnis dis parturient montes nascetur ridiculus mus.
            Nulla malesuada pellentesque elit eget gravida cum. Netus et
            malesuada fames ac.
          </p>
          <Link className={styles.learnMoreLink} href="/#">
            Learn more <FaLongArrowAltRight />
          </Link>
        </div>
      </section>

      <section className={styles.highlightSection}>
        <div className={styles.highlight}>
          <Image
            src={handmade}
            alt="handmade icon"
            className={styles.highlightIcon}
          />
          <h6>Handmade</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doeiusmod tempor.
          </p>
        </div>
        <div className={styles.highlight}>
          <Image
            src={payment}
            alt="handmade icon"
            className={styles.highlightIcon}
          />
          <h6>Secure payment</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doeiusmod tempor.
          </p>
        </div>
        <div className={styles.highlight}>
          <Image
            src={shipping}
            alt="handmade icon"
            className={styles.highlightIcon}
          />
          <h6>Free Shipping</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doeiusmod.
          </p>
        </div>
        <div className={styles.highlight}>
          <Image
            src={tracking}
            alt="handmade icon"
            className={styles.highlightIcon}
          />
          <h6>Order Tracking</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
        </div>
      </section>

      <section className={styles.categorySection}>
        <h2>Shop by Category</h2>
        <Link className={styles.viewallLink} href="/ProductsOverview">
          View all
        </Link>
        <div className={styles.categoryCards}>
          <div className={styles.categoryRings}>
            <p>Rings</p>
          </div>
          <div className={styles.categoryEarrings}>
            <p>Earrings</p>
          </div>
          <div className={styles.categoryNecklace}>
            <p>Necklaces</p>
          </div>
          <div className={styles.categorySets}>
            <p>Sets</p>
          </div>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <h4>Happy Customers</h4>
        <div className={styles.testimonials}>
          <div className={styles.testimonialCard}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <h6>Monica Geller</h6>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <h6>Rachel Green</h6>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <h6>Phoebe Buffay</h6>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
