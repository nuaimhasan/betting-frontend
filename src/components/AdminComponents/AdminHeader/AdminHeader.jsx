import { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export default function AdminHeader({ setSidebar }) {
  const { pathname } = useLocation();
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".d_btn")) {
        setDropdown(false);
      }
    });
  }, []);

  return (
    <header className="py-3 px-6 bg-base-100 text-neutral shadow">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSidebar(true)}
            className="admin_sidebar_btn lg:hidden"
          >
            <HiOutlineMenuAlt2 className="text-xl" />
          </button>
          <div className="flex items-center text-[15px]">
            <Link to="/admin/dashboard">Dashboard</Link>
            {pathname !== "/admin/dashboard" && (
              <p className="hidden sm:block">{pathname}</p>
            )}
          </div>
        </div>

        <div className="relative">
          <button className="d_btn flex items-center gap-2">
            <img
              src="/images/demo.jpg"
              alt=""
              className="w-8 h-8 rounded-full "
              onClick={() => setDropdown(!dropdown)}
            />
          </button>

          {dropdown && (
            <div className="bg-gray-500 absolute top-[140%] right-0 w-40 bg-base-100 rounded shadow p-2">
              <button className="hover:bg-gray-100 text-red-500 w-full text-start px-2 py-1 rounded">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
