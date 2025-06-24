import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination, Autoplay, Keyboard]);

const ProductPage = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        direction: 'horizontal',
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2, // This is the special rule for 1024
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3, // Default when above 1280
            spaceBetween: 30,
          },
        },
      });
    }
  }, []);

  const products = Array(9).fill(null);

  return (
    <header className="bg-(--offWhite) pt-50 pb-25 text-(--darkText) dark:bg-(--darkerBG) dark:text-white">
      <div ref={swiperRef} className="swiper container h-full w-full border-2">
        <article className="swiper-wrapper">
          {products.map((_, index) => (
            <div
              key={index}
              className="swiper-slide flex min-h-100 items-center justify-center rounded-2xl border text-xl font-bold"
            >
              <span className="h-100 w-full rounded-[inherit] bg-white"></span>
            </div>
          ))}
        </article>

        {/* <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div> */}
        <div className="swiper-pagination "></div>
      </div>
    </header>
  );
};

export default ProductPage;
