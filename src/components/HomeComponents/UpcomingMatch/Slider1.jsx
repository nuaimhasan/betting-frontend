import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Slider1() {
  return (
    <div className="relative rounded overflow-hidden">
      <h2 className="absolute top-0 left-0 bg-red-500 w-full py-2 pl-3 text-white font-semibold">
        Favourites
      </h2>
      <Swiper navigation={true} modules={[Navigation]} className="pt-10 ">
        <SwiperSlide>
          <Link
            to="https://bxawscf.9wickets.pro/exchange/member/index.jsp?eventType=4"
            target="_blank"
          >
            <img
              src="/public/images/upcoming-match/image_100136.jpg"
              alt=""
              className="h-72 w-full"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="https://bxawscf.9wickets.pro/exchange/member/index.jsp?eventType=4"
            target="_blank"
          >
            <img
              src="/public/images/upcoming-match/image_100139.jpg"
              alt=""
              className="h-72 w-full"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="https://bxawscf.9wickets.pro/exchange/member/index.jsp?eventType=4"
            target="_blank"
          >
            <img
              src="/public/images/upcoming-match/image_100142.jpg"
              alt=""
              className="h-72 w-full"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="https://bxawscf.9wickets.pro/exchange/member/index.jsp?eventType=4"
            target="_blank"
          >
            <img
              src="/public/images/upcoming-match/image_95331.jpg"
              alt=""
              className="h-72 w-full"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
