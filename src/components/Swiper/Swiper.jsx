import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./Swiper.scss";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    title: "Аналитика 360",
    desc: "Комплексный разбор кандидата — от образования и достижений до потенциала и рисков. Всё прозрачно и наглядно.",
    img: "./charts.png",
    bg: "slide--blue",
  },
  {
    title: "Панель вакансий",
    desc: "Визуальное представление всех позиций компании — от открытия до закрытия. Удобно, быстро, эффективно.",
    img: "./table.png",
    bg: "slide--red",
  },
  {
    title: "Автоматический отбор",
    desc: "Удобный список кандидатов с указанием вакансии и статуса. AI помогает быстро отсеять неподходящих и выделить лучших.",
    img: "./table2.png",
    bg: "slide--green",
  },
];

const FunctionSwiper = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  return (
    <>
      <div className={`functions ${slides[activeIndex].bg}`}>
      <div className="container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={false}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="functions__swiper"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="functions__slide">
                <div className="functions__block">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_117_14620)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.0126 3.29623C13.66 2.44911 12.0962 1.99989 10.5003 2C9.14485 2.00012 7.80912 2.32436 6.60451 2.94569C5.3999 3.56702 4.36135 4.46742 3.57549 5.57175C2.78963 6.67609 2.27926 7.95235 2.08696 9.29404C1.89466 10.6357 2.026 12.004 2.47003 13.2846C2.91406 14.5652 3.6579 15.7211 4.63949 16.6557C5.62108 17.5904 6.81196 18.2768 8.11277 18.6576C9.41358 19.0384 10.7866 19.1026 12.1173 18.8449C13.448 18.5872 14.6977 18.015 15.7623 17.176L19.4143 20.828C19.6029 21.0102 19.8555 21.111 20.1177 21.1087C20.3799 21.1064 20.6307 21.0012 20.8161 20.8158C21.0015 20.6304 21.1066 20.3796 21.1089 20.1174C21.1112 19.8552 21.0104 19.6026 20.8283 19.414L17.1763 15.762C18.1642 14.5086 18.7794 13.0024 18.9514 11.4157C19.1233 9.82905 18.8451 8.22602 18.1485 6.79009C17.4519 5.35417 16.3651 4.14336 15.0126 3.29623ZM5.90406 5.90381C7.12305 4.68482 8.77635 4 10.5003 4C12.2242 4 13.8775 4.68482 15.0964 5.90381C16.3154 7.12279 17.0003 8.77609 17.0003 10.5C17.0003 12.2239 16.3154 13.8772 15.0964 15.0962C13.8775 16.3152 12.2242 17 10.5003 17C8.77635 17 7.12305 16.3152 5.90406 15.0962C4.68507 13.8772 4.00025 12.2239 4.00025 10.5C4.00025 8.77609 4.68507 7.12279 5.90406 5.90381Z"
                        fill="#FE5C06"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_117_14620">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>Умный отбор</p>
                </div>

                <h2 className="functions__title">Функции</h2>

                <div className="functions__tabs">
                  {slides.map((slide, i) => (
                    <button
                      key={i}
                      className={`functions__tab ${
                        activeIndex === i ? "active" : ""
                      }`}
                      onClick={() => handleTabClick(i)}
                    >
                      {slide.title}
                    </button>
                  ))}
                </div>

                <div className="functions__wrap">
                  <div className="functions__content">
                    <h3>{slide.title}</h3>
                    <p>{slide.desc}</p>
                    <button className="functions__btn">Подробнее</button>
                  </div>
                  <div className="functions__image">
                    <img src={slide.img} alt={slide.title} />
                  </div>
                </div>
                <div className="functions__btn2">Попробовать бесплатно</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </>
  );
};

export default FunctionSwiper;
