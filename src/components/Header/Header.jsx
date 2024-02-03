import { Link } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";
import { HiMenuAlt2 } from "react-icons/hi";
import MobileSidebar from "../MobileSidebar/MobileSidebar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 py-1.5 lg:py-2.5 bg-gray-900 border-b border-gray-700">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="drawer w-max lg:hidden">
            <input
              id="mobileSidebar"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content">
              <label htmlFor="mobileSidebar" className="drawer-button">
                <HiMenuAlt2 className="text-[25px] text-red-600 pt-1 cursor-pointer" />
              </label>
            </div>
            <MobileSidebar />
          </div>

          <Link to="">
            <img src="/images/logo.png" alt="" className="w-16 md:w-20" />
          </Link>

          <div className="hidden lg:flex items-center gap-2 text-[15px]">
            <div>
              <button
                className="bg-green-600 text-white px-6 py-1 rounded"
                onClick={() =>
                  document.getElementById("loginModal").showModal()
                }
              >
                Login
              </button>
              <LoginModal />
            </div>
            <Link
              to="/guest/register"
              className="bg-red-600 text-white px-6 py-1 rounded"
            >
              Sign Up
            </Link>
          </div>

          <div className="lg:hidden">
            <Link to="">
              <img src="/images/icons/download_app.svg" alt="" className="" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
