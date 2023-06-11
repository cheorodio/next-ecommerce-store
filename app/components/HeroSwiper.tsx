'use client';

import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import hero1 from '../../public/images/hero/hero1.jpg';
import hero2 from '../../public/images/hero/hero3.jpg';
import hero3 from '../../public/images/hero/hero4.jpg';
import hero4 from '../../public/images/hero/hero5.jpg';
import hero5 from '../../public/images/hero/hero7.jpg';
import styles from '../page.module.scss';

type Props = {
  id: number;
};

const sliderImages = [
  { id: 1, image: hero1 },
  { id: 2, image: hero2 },
  { id: 3, image: hero3 },
  { id: 4, image: hero4 },
  { id: 5, image: hero5 },
];

export default function HeroSwiper(props: Props) {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      className={styles.mySlider}
      // loopFillGroupWithBlank={true}
      // navigation={true}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      speed={1000}
      slidesPerView={1}
      spaceBetween={0}
      slidesPerGroup={1}
      loop={true}
    >
      {sliderImages.map((slide) => (
        <SwiperSlide className={styles.slider} key={`slider-div-${props.id}`}>
          <Image className={styles.sliderImage} src={slide.image} alt="" />

          <div className={styles.textBox}>
            <h1>Crafted with love, Worn with styles</h1>
            <p>
              Explore our diverse range of handcrafted jewellery, meticulously
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
