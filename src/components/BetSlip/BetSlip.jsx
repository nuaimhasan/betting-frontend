import { useState } from "react";
import { MdClose, MdOutlineClose } from "react-icons/md";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { usePlaceBetMutation } from "../../Redux/bet/betApi";
import { FaBaseballBatBall } from "react-icons/fa6";
const numbers = [50, 100, 500, 1000, 1500, 2000, 5000, 10000];

export default function BetSlip({
  betSlip,
  setBetSlip,
  bettingMatch,
  setBettingMatch,
}) {
  const { loggedUser } = useSelector((store) => store.user);
  const [amount, setAmmount] = useState(0);
  const [placeBet, { isLoading }] = usePlaceBetMutation();

  const handlePlaceBet = async () => {
    const user_id = loggedUser?.id;
    const game_id = bettingMatch?.match?.id;
    const team = bettingMatch?.teamId;

    const data = {
      user_id,
      game_id,
      team,
      amount,
    };

    const res = await placeBet(data);

    if (res?.data?.status !== 200) {
      Swal.fire(
        "",
        res?.data?.message ? res?.data?.message : "something went wrong",
        "error"
      );
    }
    if (res?.data?.status == 200) {
      Swal.fire("", "Bet place success", "success");
      window.relode();
    }
  };

  return (
    <div
      className={`bg-gray-700 text-white fixed top-0 h-[100vh] z-50 w-[90%] sm:w-80 ${
        betSlip ? "right-0" : "-right-[100%]"
      }`}
    >
      <div className="bg-gray-800 px-1 py-[9px] flex justify-between items-center">
        <p className="text-sm text-center">Bet Slip</p>
        <button
          onClick={() => setBetSlip(false)}
          className="hover:text-red-600 duration-150"
        >
          <MdClose />
        </button>
      </div>

      <div className="px-2">
        <div className="border-b py-2 border-gray-500">
          <p className="text-xs flex items-center gap-2">
            <FaBaseballBatBall /> {bettingMatch?.match?.t1_name} VS{" "}
            {bettingMatch?.match?.t2_name}
          </p>

          <div className="bg-gray-800 p-2 mt-1">
            <div className="flex justify-between items-center">
              <div className="flex gap-1 items-center">
                <button
                  onClick={() => {
                    setBettingMatch(null);
                    setBetSlip(false);
                  }}
                  className="bg-red-600 rounded text-xs"
                >
                  <MdOutlineClose />
                </button>
                <p className="text-sm">
                  {bettingMatch?.teamId === 1
                    ? bettingMatch?.match?.t1_name
                    : bettingMatch?.match?.t2_name}{" "}
                  <small className="opacity-60">Match Odds</small>
                </p>
              </div>

              <div>
                <input
                  type="text"
                  name=""
                  className="w-20 rounded text-black px-1 placeholder:text-xs"
                  placeholder="100"
                  onChange={(e) => setAmmount(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="border-y border-gray-600 py-1 text-sm">
              {numbers?.map((number, i) => (
                <span
                  onClick={() => setAmmount(number)}
                  key={i}
                  className="inline-block mt-1 bg-gray-400 px-4 rounded mr-1 cursor-pointer"
                >
                  {number}
                </span>
              ))}
            </div>

            <div className="text-end text-xs">
              <p>
                Profit:{" "}
                <span className="text-green-500">
                  $
                  {bettingMatch?.teamId == 1
                    ? parseFloat(bettingMatch?.match?.t1_win_offer * amount)
                    : parseFloat(bettingMatch?.match?.t2_win_offer * amount)}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <div className="text-end text-xs">
            <p>
              Liability: <span className="text-red-600">${amount}</span>
            </p>
          </div>

          <div className="mt-1 flex justify-end items-center text-sm ">
            <button
              onClick={handlePlaceBet}
              className="border border-red-500 rounded-lg px-6 py-[2px] bg-red-600 hover:bg-red-700 duration-300"
            >
              {isLoading ? "Loading..." : "Place Bets"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
