import { FaBaseballBatBall } from "react-icons/fa6";

export default function SportGameCard() {
  return (
    <div className="rounded p-3 bg-gray-600">
      <div className="flex justify-between items-center text-sm">
        <p className="flex items-center gap-2">
          <FaBaseballBatBall />
          BPL, 24-02-12
        </p>
        <p className="bg-gray-900 px-1 rounded">T20</p>
      </div>

      <div className="flex justify-between items-center gap-4 mt-4">
        <div className="flex flex-col justify-center items-center">
          <img
            src="/images/flags/dd.png"
            alt=""
            className="w-11 h-11 rounded-full"
          />
          <p className="text-center">Durdanto Dhaka</p>
        </div>

        <div>
          <img src="/images/vs.png" alt="" className="w-10 mx-auto" />
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            src="/images/flags/cv.png"
            alt=""
            className="w-11 h-11 rounded-full"
          />
          <p className="text-center">Comilla Victorians</p>
        </div>
      </div>

      <div className="mt-4">
        <div>
          <h2 className="text-center relative after:absolute after:w-[36%] after:h-px after:bg-white after:left-0 after:top-3.5 before:absolute before:w-[36%] before:h-px before:bg-white before:right-0 before:top-3.5">
            Team Wins
          </h2>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-4 text-[15px]">
          <button className="flex justify-between items-center border rounded-lg px-4 py-1.5 hover:bg-red-700 duration-300 hover:border-red-700">
            <p>DD</p>
            <p>3*</p>
          </button>

          <button className="flex justify-between items-center border rounded-lg px-4 py-1.5 hover:bg-red-700 duration-300 hover:border-red-700">
            <p>CV</p>
            <p>1*</p>
          </button>
        </div>
      </div>
    </div>
  );
}
