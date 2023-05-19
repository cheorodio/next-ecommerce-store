'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { heroImages } from '../database/heroImageSwiper';
import styles from './styles.module.scss';

export default function HeroSwiper() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
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
      speed={1000}
      slidesPerView={1}
      spaceBetween={0}
      slidesPerGroup={1}
      loop={true}
    >
      {heroImages.map((slide) => (
        <SwiperSlide key={`slide-${slide.id}`}>
          <Image
            src={`/images/${slide.image}.png`}
            alt="Jewellery"
            className={styles.heroSwiperImages}
            height={450}
            width={1000}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
