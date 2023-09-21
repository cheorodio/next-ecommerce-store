import Image from 'next/image';
import aboutIcon from '../../public/images/icons/aboutIcon.png';
import iconGiveBack from '../../public/images/icons/iconGiveBack.png';
import iconHandmade from '../../public/images/icons/iconHand.png';
import iconSustainable from '../../public/images/icons/iconSustainable.png';
import styles from './story.module.scss';

export const metadata = {
  title: { default: 'Vida | Handmade Jewellery' },
  description: 'Dedicated for best quality handmade jewellery',
};
export default function OurStoryPage() {
  return (
    <main className={styles.storyContainer}>
      <div className={styles.header}>
        <h1>Our Story</h1>
      </div>

      <div className={styles.aboutSection}>
        <Image
          className={styles.diamondIcon}
          src={aboutIcon}
          alt=""
          priority={true}
        />
        <p>
          Welcome to our world of exquisite handmade jewellery! We are a
          passionate team of skilled artisans dedicated to creating unique,
          one-of-a-kind pieces that beautifully capture the essence of art and
          craftsmanship. Our jewellery is meticulously crafted with love,
          attention to detail, and a deep appreciation for the timeless beauty
          of handiwork.
        </p>
        <p>
          At our jewellery studio, we believe that each piece of jewellery tells
          a story. Our inspiration comes from the enchanting wonders of nature,
          diverse cultures, and the ever-evolving world of fashion. We aim to
          create wearable art that not only enhances your personal style but
          also connects you to the beauty and significance of the natural world.
        </p>
      </div>

      <div className={styles.fromTheFounder}>
        <div className={styles.imageContainer} />
        <div className={styles.textContainer}>
          <h4>From the Founder</h4>
          <p>
            As a lifelong lover of jewellery, I always found myself captivated
            by the transformative power of beautifully crafted pieces. The way
            jewellery can accentuate one's style, evoke emotions, and become a
            cherished symbol of personal stories fascinated me.
          </p>
          <p>
            Driven by my passion for jewellery and a desire to create a platform
            that could connect people with exceptional pieces from the comfort
            of their own homes, I embarked on the journey of founding our
            e-commerce business. I recognized the immense potential of the
            digital landscape to reach a wider audience, break down geographical
            barriers, and offer a convenient and personalized shopping
            experience.
          </p>
        </div>
      </div>

      <div className={styles.iconsSection}>
        <h2>Why Choose Us</h2>
        <div className={styles.reasons}>
          <div>
            <Image
              src={iconHandmade}
              alt=""
              className={styles.icon}
              priority={true}
            />
            <h3>Quality Craftsmanship</h3>
            <p>
              We are committed to upholding the highest standards of
              craftsmanship. Each jewellery piece is meticulously handcrafted
              ensuring exceptional quality that surpasses expectations. Our
              artisans' expertise and passion shine through in every intricate
              detail, resulting in heirloom-worthy jewellery that lasts a
              lifetime.
            </p>
          </div>

          <div>
            <Image
              src={iconGiveBack}
              alt=""
              className={styles.icon}
              priority={true}
            />
            <h3>Giving Back</h3>
            <p>
              We are committed to making a positive impact in the communities we
              serve. Through charitable initiatives and partnerships, we strive
              to give back and support causes that align with our values. We
              believe that by using our platform to create change, we can
              contribute to a more equitable and compassionate world.
            </p>
          </div>

          <div>
            <Image
              src={iconSustainable}
              alt=""
              className={styles.icon}
              priority={true}
            />
            <h3>Sustainability and Ethics</h3>
            <p>
              We are dedicated to promoting sustainable practices. By sourcing
              ethically and responsibly gemstones and utilizing recycled metals,
              we aim to minimize our environmental impact and contribute to a
              more sustainable future. Our commitment to ethical practices
              extends to our relationships with suppliers, artisans, and
              customers.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
