import { Link } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";

export default function Header() {
  return (
    <header className="py-2.5">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="">
            <img src="/images/logo.png" alt="" className="w-32" />
          </Link>

          <div className="flex items-center gap-2 text-[15px]">
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
        </div>
      </div>
    </header>
  );
}
