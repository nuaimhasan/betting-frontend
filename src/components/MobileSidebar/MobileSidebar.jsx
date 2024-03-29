import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
import Categories from "../../Data/Categories";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLogout } from "../../Redux/user/userSlice";

export default function MobileSidebar({ sidebar, setSidebar }) {
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.closest(".sidebar ul li a")) {
        setSidebar(false);
      }
    });
  }, [setSidebar]);

  return (
    <>
      <button
        onClick={() => setSidebar(false)}
        className={`overlay ${sidebar && "overlay_show"}`}
      ></button>

      <div className={`sidebar ${sidebar && "sidebar_show"}`}>
        <ul className="text-white text-sm">
          <li>
            <Link
              to="/"
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

          <li>
            <button
              onClick={() => dispatch(userLogout())}
              className="w-full flex items-center gap-2 px-4 py-2 border-b border-gray-500/60 text-red-600"
            >
              <span className="w-7 h-7 flex justify-center items-center bg-[#3C3C3C] rounded-full">
                <MdOutlineLogout className="text-base" />
              </span>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
