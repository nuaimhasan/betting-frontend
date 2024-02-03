import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { EffectCoverflow } from "swiper/modules";

export default function ForMobile() {
  return (
    <>
      <h2 className="font-semibold text-white border-l-4 border-red-600 pl-2 leading-4">
        Favourites
      </h2>
      <Swiper
        className="mt-3"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
      >
        <SwiperSlide>
          <Link
            to="https://bxawscf.9wickets.pro/exchange/member/index.jsp?eventType=4"
            target="_blank"
          >
            <img
              src="/images/upcoming-match/image_100139.jpg"
              alt=""
              className="h-36 lg:h-72 w-[90%] rounded"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="https://bxawscf.9wickets.pro/exchange/member/index.jsp?eventType=4"
            target="_blank"
          >
            <img
              src="/images/upcoming-match/image_100139.jpg"
              alt=""
              className="h-36 lg:h-72 w-[90%] rounded"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="https://bxawscf.9wickets.pro/exchange/member/index.jsp?eventType=4"
            target="_blank"
          >
            <img
              src="/images/upcoming-match/image_100142.jpg"
              alt=""
              className="h-36 lg:h-72 w-[90%] rounded"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="https://bxawscf.9wickets.pro/exchange/member/index.jsp?eventType=4"
            target="_blank"
          >
            <img
              src="/images/upcoming-match/image_95331.jpg"
              alt=""
              className="h-36 lg:h-72 w-[90%] rounded"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
