import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import Categories from "../../Data/Categories";

export default function MobileSidebar() {
  return (
    <div className="drawer-side">
      <label
        htmlFor="mobileSidebar"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="w-[80%] min-h-full bg-base-200 text-white text-sm">
        <li>
          <Link
            to=""
            className="flex items-center gap-2 px-4 py-2 border-b border-gray-500/60"
          >
            <span className="w-7 h-7 flex justify-center items-center bg-[#3C3C3C] rounded-full">
              <AiOutlineHome className="text-base" />
            </span>
            Home
          </Link>
        </li>

        {Categories.map((category) => (
          <li key={category?._id}>
            <Link
              to={`/${category?.name.toLowerCase()}`}
              className="flex items-center gap-2 px-4 py-2 border-b border-gray-500/60"
            >
              <span className="w-7 h-7 flex justify-center items-center bg-gray-800 rounded-full">
                <img src={category?.icon} alt="" className="w-7" />
              </span>
              {category?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
