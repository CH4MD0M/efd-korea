import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectCoverflow } from "swiper";

// Css
import "swiper/swiper-bundle.css";
import classes from "./ImageSlider.module.css";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const ImageSlider = () => {
    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            loop={true}
            autoplay={{
                delay: 3500,
            }}
            className={classes.mySwiper}
        >
            <SwiperSlide className={classes["swiper-slide"]}>
                <img src="/Image/Slider/slide-1.png" alt="slide1" />
            </SwiperSlide>
            <SwiperSlide className={classes["swiper-slide"]}>
                <img src="/Image/Slider/slide-2.png" alt="slide2" />
            </SwiperSlide>
            <SwiperSlide className={classes["swiper-slide"]}>
                <img src="/Image/Slider/slide-3.png" alt="slide3" />
            </SwiperSlide>
        </Swiper>
    );
};

export default ImageSlider;
