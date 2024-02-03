import { useState } from "react";
import categories from "../../../../Data/Categories";
import "./MobileCategory.css";

export default function MobileCategory() {
  const [activeCategory, setActiveCategory] = useState("sports");
  const [subCategory, setSucCategory] = useState(
    categories[0]?.subCategories || {}
  );

  return (
    <section className="lg:hidden mobile_category">
      <div className="overflow-x-auto">
        <div className="inline-flex bg-gray-900">
          {categories?.map((category) => (
            <button
              key={category?._id}
              className={
                activeCategory.toLowerCase() === category?.name.toLowerCase() &&
                "active"
              }
              onClick={() => {
                setActiveCategory(category?.name);
                setSucCategory(category?.subCategories);
              }}
            >
              <img src={category?.icon} alt="" className="w-9" />
              <p className="text-white text-xs font-medium">{category?.name}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="py-2">
        <div className="container">
          <h2 className="font-medium text-[13px] text-white border-l-4 border-red-600 pl-1.5 leading-3">
            {activeCategory}
          </h2>
          <div className="mt-2 grid grid-cols-4 gap-[1px]">
            {subCategory?.map((subCategory) => (
              <div
                key={subCategory?._id}
                className="bg-gray-900 h-16 rounded flex flex-col justify-center items-center"
              >
                <img src={subCategory?.icon} alt="" className="w-8" />
                <p className="text-white text-xs font-medium">
                  {subCategory?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
