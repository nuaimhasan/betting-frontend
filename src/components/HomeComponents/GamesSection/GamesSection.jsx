import { Link } from "react-router-dom";
import { useCategoryWaysGameQuery } from "../../../Redux/category/categoryApi";
import SportGameCard from "../../SportsComponents/SportGameCard/SportGameCard";
import { IoIosArrowForward } from "react-icons/io";

export default function GamesSection({ category }) {
  const categoryId = category?.id;
  const { data, isLoading } = useCategoryWaysGameQuery(categoryId);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="py-3">
      <div className="pb-1.5 flex justify-between items-center border-b border-red-600 mb-3">
        <h2 className="border-l-4 border-red-600 pl-2 leading-4">
          {category?.name}
        </h2>
        <Link
          to="/sports"
          className="hover:text-red-600 duration-200 text-sm flex items-center gap-px"
        >
          More Game <IoIosArrowForward />
        </Link>
      </div>

      <div className="mb-3 rounded overflow-hidden">
        {category?.name === "Cricket" && (
          <Link to="https://www.cricbuzz.com/cricket-match/live-scores">
            <img
              src="/images/cricket_banner.jpg"
              alt=""
              className="w-full sm:h-60"
            />
          </Link>
        )}
        {category?.name === "Football" && (
          <Link to="https://www.goal.com/en-in/live-scores">
            <img
              src="/images/football.webp"
              alt=""
              className="w-full sm:h-60"
            />
          </Link>
        )}
        {category?.name === "Soccer" && (
          <Link to="https://www.livescore.in">
            <img
              src="/images/soccer-banner.jpg"
              alt=""
              className="w-full sm:h-60"
            />
          </Link>
        )}
        {category?.name === "Kabaddi" && (
          <Link to="https://www.flashscore.com/kabaddi">
            <img
              src="/images/kabaddi-banner.png"
              alt=""
              className="w-full sm:h-60"
            />
          </Link>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((game) => (
          <SportGameCard key={game?.id} game={game} />
        ))}
      </div>
    </div>
  );
}
