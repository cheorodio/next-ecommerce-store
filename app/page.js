import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { FaLongArrowAltRight } from 'react-icons/fa';
import collectionImage1 from '../public/images/collection1.jpg';
import collectionImage2 from '../public/images/collection2.jpg';
import shipping from '../public/images/freeshipping.png';
import handmade from '../public/images/handmade.png';
import featuredProduct1 from '../public/images/product1.jpg';
import featuredProduct3 from '../public/images/product10.jpg';
import featuredProduct2 from '../public/images/product2.jpg';
import payment from '../public/images/securepayment.png';
import tracking from '../public/images/tracking.png';
import HeroSwiper from './components/HeroSwiper';
import styles from './page.module.scss';

export const metadata = {
  title: { default: 'Vida | Handmade Jewellery' },
  description: 'Dedicated for best quality handmade jewellery',
};

export default function Home() {
  return (
    <main>
      <section className={styles.heroSection}>
        <HeroSwiper />
      </section>

      {/* ========================= FEATURED SECTION ========================= */}
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
            <p>€35</p>
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
            <p>€45</p>
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
            <p>€39</p>
          </div>
        </Link>
      </section>
      {/* ========================= THE COLLECTION SECTION ========================= */}
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
            Each piece in our collection tells a unique story, making it not
            just a beautiful accessory, but a cherished symbol of love,
            friendship, or personal achievement. Whether you're treating
            yourself or searching for the perfect gift, our jewelry is sure to
            leave a lasting impression.
          </p>
          <Link className={styles.learnMoreLink} href="/#">
            Learn more <FaLongArrowAltRight />
          </Link>
        </div>
      </section>
      {/* ========================= ICONS SECTION ========================= */}
      <section className={styles.highlightSection}>
        <div className={styles.highlight}>
          <Image
            src={handmade}
            alt="handmade icon"
            className={styles.highlightIcon}
          />
          <h6>Handmade</h6>
          <p>
            Our handmade jewelleries are crafted using a variety of techniques
            and materials.
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
            At vida, we are committed to providing a safe and secure shopping
            experience.
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
            Free shipping is available for both domestic and international
            orders.
          </p>
        </div>
        <div className={styles.highlight}>
          <Image
            src={tracking}
            alt="handmade icon"
            className={styles.highlightIcon}
          />
          <h6>Order Tracking</h6>
          <p>
            Stay informed and track your order every step of the way with our
            convenient order tracking system.
          </p>
        </div>
      </section>
      {/* ========================= CATEGORY SECTION ========================= */}
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
      {/* ========================= TESTIMONIALS SECTION ========================= */}
      <section className={styles.testimonialsSection}>
        <h4>Happy Customers</h4>
        <div className={styles.testimonials}>
          <div className={styles.testimonialCard}>
            <p>
              "I absolutely love the earrings I purchased from vida. The design
              is exquisite, and the quality is outstanding. I receive
              compliments every time I wear them. I highly recommend their
              jewelry to anyone looking for elegance and style."
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
              "These earrings are absolutely stunning! The craftsmanship and
              attention to detail are exceptional, and they add a touch of
              elegance to any look. I'm thrilled with my purchase and can't wait
              to wear them again and again."
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
              "I am in love with the necklace I received from vida. The design
              is unique and eye-catching, and the quality is superb. It's become
              my go-to accessory for adding a touch of sophistication to my
              outfits."
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
