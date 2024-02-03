import { Link } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";
import { HiMenuAlt2 } from "react-icons/hi";
import MobileSidebar from "../MobileSidebar/MobileSidebar";
import { useState } from "react";

export default function Header() {
  const [loginModal, setLoginModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  return (
    <header className="sticky top-0 z-50 py-2.5 bg-gray-900 border-b border-gray-700">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="drawer w-max lg:hidden">
            <button onClick={() => setSidebar(true)}>
              <HiMenuAlt2 className="text-[25px] text-red-600 pt-1 cursor-pointer" />
            </button>
            <MobileSidebar sidebar={sidebar} setSidebar={setSidebar} />
          </div>

          <Link to="">
            <img src="/images/logo.png" alt="" className="w-[70px] md:w-20" />
          </Link>

          <div className="hidden lg:flex items-center gap-2 text-[15px]">
            <div>
              <button
                className="bg-green-600 text-white px-6 py-1 rounded"
                onClick={() => setLoginModal(true)}
              >
                Login
              </button>

              <LoginModal
                setLoginModal={setLoginModal}
                loginModal={loginModal}
              />
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
