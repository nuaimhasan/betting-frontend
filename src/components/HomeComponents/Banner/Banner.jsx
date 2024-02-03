import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function Banner() {
  return (
    <section>
      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Link to="/">
            <img
              src="/images/banner/banner.jpg"
              alt=""
              className="w-full h-32 lg:h-[550px]"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img
              src="/images/banner/banner1.jpg"
              alt=""
              className="w-full h-32 lg:h-[550px]"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img
              src="/images/banner/banner2.jpg"
              alt=""
              className="w-full h-32 lg:h-[550px]"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
