import { useAllCategoriesQuery } from "../../../Redux/category/categoryApi";
import GamesSection from "../GamesSection/GamesSection";

export default function CategoryWiseGame() {
  const { data: categories, isLoading } = useAllCategoriesQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section className="lg:bg-gray-800 text-white pb-5">
      <div className="container">
        {categories?.map((category) => (
          <GamesSection key={category?.id} category={category} />
        ))}
      </div>
    </section>
  );
}
