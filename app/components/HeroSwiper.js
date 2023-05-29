// Import Swiper styles
'use client';

import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import hero1 from '../../public/images/hero1.jpg';
// import hero2 from '../../public/images/hero2.jpg';
import hero3 from '../../public/images/hero3.jpg';
import hero4 from '../../public/images/hero4.jpg';
import hero5 from '../../public/images/hero5.jpg';
// import hero6 from '../../public/images/hero6.jpg';
import hero7 from '../../public/images/hero7.jpg';
import styles from '../page.module.scss';

const sliderImages = [
  { id: 1, image: hero1 },
  // { id: 2, image: hero2 },
  { id: 3, image: hero3 },
  { id: 4, image: hero4 },
  { id: 5, image: hero5 },
  // { id: 6, image: hero6 },
  { id: 7, image: hero7 },
];

export default function HeroSwiper() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      className={styles.mySlider}
      loopFillGroupWithBlank={true}
      navigation={true}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      speed={2000}
      slidesPerView={1}
      spaceBetween={0}
      slidesPerGroup={1}
      loop={true}
    >
      {sliderImages.map((slide) => (
        <SwiperSlide
          className={styles.slider}
          key={`slider-div-${sliderImages.id}`}
        >
          <Image className={styles.sliderImage} src={slide.image} alt="" />

          <div className={styles.textBox}>
            <h1>Crafted with love, worn with styles</h1>
            <p>
              Explore our diverse range of handcrafted jewelry, meticulously
              designed to reflect individuality and celebrate personal style.
            </p>

            <Link href="/products" className={styles.productLink}>
              View products
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
