import { useEffect } from "react";
import { useState } from "react";

export default function TopHeader() {
  const [time, setTime] = useState(null);
  useEffect(() => {
    const clock = () => {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();

      if (hours > 10) {
        hours = hours - 12;
      }
      hours = hours == 0 ? 12 : hours;

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      let finalClock = `${hours}:${minutes}:${seconds}`;
      setTime(finalClock);
    };
    clock();
    setInterval(clock, 1000);
  }, []);

  return (
    <section className="bg-gray-800 text-white border-b border-gray-700 hidden sm:block">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm">
            <p className="px-3 py-px">(GMT+6) {time}</p>
            <button className="flex items-center gap-1 px-3 py-px bg-gray-700">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1200px-Flag_of_Bangladesh.svg.png"
                alt=""
                className="w-6 h-6 rounded-full"
              />
              ৳ BDT বাংলা
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
