import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import SportGameCard from "../../SportsComponents/SportGameCard/SportGameCard";

export default function CricketBet() {
  return (
    <section className="bg-gray-800  text-white pb-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2>Cricket Games</h2>
          <Link
            to="/sports"
            className="border rounded px-4 py-1 text-sm hover:bg-gray-700 duration-300"
          >
            Bet Now
          </Link>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mt-2"
        >
          <SwiperSlide>
            <SportGameCard />
          </SwiperSlide>
          <SwiperSlide>
            <SportGameCard />
          </SwiperSlide>
          <SwiperSlide>
            <SportGameCard />
          </SwiperSlide>
          <SwiperSlide>
            <SportGameCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
