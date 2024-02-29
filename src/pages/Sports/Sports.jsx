import SportGameCard from "../../components/SportsComponents/SportGameCard/SportGameCard";
import {
  useAllCategoriesQuery,
  useCategoryWaysGameQuery,
} from "../../Redux/category/categoryApi";
import { useEffect, useState } from "react";

export default function Sports() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { data } = useAllCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data: games, isLoading } = useCategoryWaysGameQuery(selectedCategory);

  useEffect(() => {
    if (data?.length > 0) {
      setSelectedCategory(data[0]?.id);
    }
  }, [data]);

  let content = null;
  if (isLoading) {
    content = (
      <>
        <div className="w-full bg-gray-600 rounded h-60"></div>
        <div className="w-full bg-gray-600 rounded h-60"></div>
      </>
    );
  }

  if (!isLoading && games?.length > 0) {
    content = games?.map((game) => (
      <SportGameCard key={game?.id} game={game} />
    ));
  }

  return (
    <section>
      <div className="container">
        <div className="bg-gray-800 text-white min-h-[80vh]">
          <div>
            <div className="border-b">
              <button>
                {data?.map((category) => (
                  <button
                    key={category?.id}
                    onClick={() => setSelectedCategory(category?.id)}
                    className={`px-2.5 py-1.5 ${
                      category?.id === selectedCategory &&
                      "bg-white text-red-600"
                    }`}
                  >
                    {category?.name}
                  </button>
                ))}
              </button>
            </div>

            <div className="p-2 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
