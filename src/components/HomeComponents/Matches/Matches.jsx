import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Matches() {
  const [matches, setMatches] = useState([]);
  const apiKey = "3b30b5a7-0dab-45a7-8ff5-2eec04193e7d";
  useEffect(() => {
    fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setMatches(data?.data);
      });
  }, []);

  return (
    <section className="bg-gray-800 pt-5 text-white">
      <div className="container">
        <h2>All Matches</h2>

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
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="mt-2"
        >
          {matches?.map((match) => (
            <SwiperSlide key={match?.id}>
              <div className="bg-gray-500 w-full rounded">
                <div className="p-2">
                  <div className="flex justify-between items-center">
                    <p className="mt-2 text-xs">{match?.date}</p>
                    <p className="bg-gray-900 px-1 py-px rounded w-max text-xs">
                      {match?.matchType.toUpperCase()}
                    </p>
                  </div>

                  <div className="text-sm mt-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <img
                          src={match?.teamInfo[0]?.img}
                          alt=""
                          className="w-5 h-4 rounded"
                        />
                        <p>{match?.teamInfo[0]?.name}</p>
                      </div>

                      <div>
                        <p>
                          {match?.score[0]?.r ? match?.score[0]?.r : 0}-
                          {match?.score[0]?.w ? match?.score[0]?.w : 0} (
                          {match?.score[0]?.o ? match?.score[0]?.o : 0})
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <img
                          src={match?.teamInfo[1]?.img}
                          alt=""
                          className="w-5 h-4 rounded"
                        />
                        <p>{match?.teamInfo[1]?.name}</p>
                      </div>

                      <div>
                        <p>
                          {match?.score[1]?.r ? match?.score[1]?.r : 1}-
                          {match?.score[1]?.w ? match?.score[1]?.w : 1} (
                          {match?.score[1]?.o ? match?.score[1]?.o : 1})
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-2 text-xs">
                    {match?.venue?.length > 45
                      ? match?.venue.slice(0, 45) + "..."
                      : match?.venue}
                  </p>
                </div>

                <div className="bg-gray-700 p-2 rounded-b text-xs">
                  {match?.status}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
