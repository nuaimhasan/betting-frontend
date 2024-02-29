import { Link, NavLink } from "react-router-dom";
import { FaMobileAlt, FaHome } from "react-icons/fa";
import categories from "../../Data/Categories";

export default function MenuHeader() {
  return (
    <section className="bg-gray-900 text-white text-sm hidden lg:block">
      <div className="container">
        <ul className="flex items-center menu_items">
          <li>
            <NavLink to="" className="block px-4 py-2">
              <FaHome className="text-xl" />
            </NavLink>
          </li>
          <li>
            <Link to="" className="block px-4 py-2">
              <FaMobileAlt className="text-xl" />
            </Link>
          </li>

          {categories?.map((category) => (
            <li key={category?._id}>
              <NavLink
                to={`/${category.name.toLowerCase()}`}
                className="block px-8 py-2"
              >
                {category?.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
