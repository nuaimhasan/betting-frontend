import { FaBaseballBatBall } from "react-icons/fa6";

export default function SportGameCard({
  game,

  bettingMatch,
  setBettingMatch,
}) {
  const {
    id,
    name,
    start_date,
    start_time,
    match_type,
    t1_name,
    t2_name,
    t1_icon,
    t2_icon,
    t1_short_name,
    t2_short_name,
    t1_win_offer,
    t2_win_offer,
    match_status,
    match_result,
  } = game;

  const handleSelectBet = (teamId, match) => {
    setBettingMatch({ teamId, match });
  };

  return (
    <div className="rounded bg-gray-600">
      <div className="p-3">
        <div className="flex justify-between items-center text-sm">
          <p className="flex items-center gap-2">
            <FaBaseballBatBall />
            {name}, {start_date},{start_time}
          </p>
          <p className="bg-gray-900 px-1 rounded">{match_type}</p>
        </div>

        <div className="flex justify-between items-center gap-4 mt-4">
          <div className="flex flex-col justify-center items-center">
            <img
              src={`${
                import.meta.env.VITE_BACKEND_ASSESTS_URL
              }/game/${t1_icon}`}
              alt=""
              className="w-11 h-11 rounded-full"
            />
            <p className="text-center">{t1_name}</p>
          </div>

          <div>
            <img src="/images/vs.png" alt="" className="w-10 mx-auto" />
          </div>

          <div className="flex flex-col justify-center items-center">
            <img
              src={`${
                import.meta.env.VITE_BACKEND_ASSESTS_URL
              }/game/${t2_icon}`}
              alt=""
              className="w-11 h-11 rounded-full"
            />
            <p className="text-center">{t2_name}</p>
          </div>
        </div>

        <div className="mt-4">
          <div>
            <h2 className="text-center relative after:absolute after:w-[36%] after:h-px after:bg-white after:left-0 after:top-3.5 before:absolute before:w-[36%] before:h-px before:bg-white before:right-0 before:top-3.5">
              Team Wins
            </h2>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-4 text-[15px]">
            <button
              onClick={() => handleSelectBet(1, game)}
              className={`flex justify-between items-center border rounded-lg px-4 py-1.5 hover:bg-red-700 duration-300 hover:border-red-700 ${
                bettingMatch?.match?.id == id &&
                bettingMatch?.teamId == 1 &&
                "bg-red-700 border-red-700"
              }`}
              disabled={match_status == 2 && "disabled"}
            >
              <p>{t1_short_name}</p>
              <p>{t1_win_offer}*</p>
            </button>

            <button
              onClick={() => handleSelectBet(2, game)}
              className={`flex justify-between items-center border rounded-lg px-4 py-1.5 hover:bg-red-700 duration-300 hover:border-red-700 ${
                bettingMatch?.match?.id == id &&
                bettingMatch?.teamId == 2 &&
                "bg-red-700 border-red-700"
              }`}
              disabled={match_status == 2 && "disabled"}
            >
              <p>{t2_short_name}</p>
              <p>{t2_win_offer}*</p>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-2 bg-gray-700 p-2 rounded-b">
        <p className="text-xs">
          {match_status == 0
            ? "Match Not Started"
            : match_status == 1
            ? "Match Ongoing"
            : match_status == 2 && "Match end"}
          {match_result == 1 && ` - ${t1_name} win`}
          {match_result == 2 && ` - ${t2_name} win`}
        </p>
      </div>
    </div>
  );
}
