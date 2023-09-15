import { Caveat, Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { getProducts } from '../database/products';
import collectionImage1 from '../public/images/collection1.jpg';
import collectionImage2 from '../public/images/collection2.jpg';
import shipping from '../public/images/icons/freeshipping.png';
import handmade from '../public/images/icons/handmade.png';
import payment from '../public/images/icons/securepayment.png';
import tracking from '../public/images/icons/tracking.png';
import HeroSwiper from './components/HeroSwiper';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: { default: 'Vida | Handmade Jewellery' },
  description: 'Dedicated for best quality handmade jewellery',
};

const caveat = Caveat({ subsets: ['latin'] });
const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default async function Home() {
  const products = await getProducts();
  return (
    <main>
      <section className={styles.heroSection}>
        <HeroSwiper />
      </section>

      {/* ========================= FEATURED SECTION ========================= */}
      <section className={styles.featuredProductsSection}>
        <div className={styles.featuredProductsTitle}>
          <h4 className={playfairDisplay.className}>Featured Products</h4>
          <Link className={styles.viewAllButton} href="/products">
            View All
          </Link>
        </div>

        <div className={styles.featuredProductsCards}>
          {products.slice(8, 12).map((product) => {
            return (
              <div
                key={`product-div-${product.id}`}
                className={styles.productCard}
              >
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={`/images/products/${product.name}.avif`}
                    width={200}
                    height={200}
                    alt={product.name}
                    priority={true}
                    className={styles.productImage}
                  />
                </Link>
                <div className={styles.productInfo}>
                  <Link
                    href={`/products/${product.id}`}
                    className={styles.categoryTitle}
                  >
                    {product.category}
                  </Link>
                  <div>
                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                    <Link href={`/products/${product.id}`}>
                      € {product.price}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* ========================= THE COLLECTION SECTION ========================= */}
      <section className={styles.collectionSection}>
        <div className={styles.collectionImageBox}>
          <Image
            className={styles.collectionImage1}
            src={collectionImage1}
            alt="necklace set on a woman"
            priority={true}
          />
          <Image
            className={styles.collectionImage2}
            src={collectionImage2}
            alt="ring set"
            priority={true}
          />
        </div>

        <div className={styles.collectionTextBox}>
          <h2 className={caveat.className}>The Collection</h2>
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
            priority={true}
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
            priority={true}
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
            priority={true}
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
            priority={true}
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
        <h2 className={playfairDisplay.className}>Shop by Category</h2>
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
