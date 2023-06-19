import { ReactElement } from "react";

import { Swiper, SwiperProps } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


interface CarouselProps extends SwiperProps {
  children: ReactElement[]
}

export default function Carousel({ children }: CarouselProps) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10
         }, 
          800: {
            slidesPerView: 2,
            spaceBetween: 30
         }, 
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
}