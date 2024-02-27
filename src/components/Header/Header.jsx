import { Link } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";
import { HiMenuAlt2 } from "react-icons/hi";
import MobileSidebar from "../MobileSidebar/MobileSidebar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../Redux/user/userSlice";

export default function Header() {
  const { loggedUser } = useSelector((store) => store.user);
  const [loginModal, setLoginModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();

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
            <img src="/images/logo/logo.png" alt="" className="w-28 md:w-40" />
          </Link>

          <div className="hidden lg:flex items-center gap-2 text-[15px]">
            {loggedUser ? (
              <>
                <Link
                  to="/account/wallet"
                  className="bg-green-600 text-white px-4 py-1 rounded"
                >
                  Main Wallet - ৳{" "}
                  {parseFloat(loggedUser?.main_wallet).toFixed(2)}
                </Link>

                <button
                  onClick={() => dispatch(userLogout())}
                  className="bg-gray-600 text-white px-4 py-1 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
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
                  to="/user/register"
                  className="bg-red-600 text-white px-6 py-1 rounded"
                >
                  Sign Up
                </Link>
              </>
            )}
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
