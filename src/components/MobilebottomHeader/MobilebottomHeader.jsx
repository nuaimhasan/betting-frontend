import { Link, NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { MdAccountBalanceWallet, MdAccountCircle } from "react-icons/md";
import { FaMoneyBill1Wave } from "react-icons/fa6";

export default function MobilebottomHeader() {
  const user = true;
  return (
    <div className="w-full fixed bottom-0 left-0 z-50 text-white text-[13px] lg:hidden">
      {user ? (
        <div className="grid grid-cols-4">
          <NavLink
            to="/"
            className="w-full flex flex-col items-center justify-center bg-gray-900 py-1"
          >
            <GoHomeFill className="text-lg" />
            Home
          </NavLink>
          <Link
            to="/account/wallet"
            className="w-full flex flex-col items-center justify-center bg-gray-900 py-1"
          >
            <MdAccountBalanceWallet className="text-lg" />
            Wallet
          </Link>
          <Link
            to=""
            className="w-full flex flex-col items-center justify-center bg-gray-900 py-1"
          >
            <FaMoneyBill1Wave className="text-lg" />
            Deposit
          </Link>
          <Link
            to="/account"
            className="w-full flex flex-col items-center justify-center bg-gray-900 py-1"
          >
            <MdAccountCircle className="text-lg" />
            My Account
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-3">
          <button className="w-full flex gap-1 items-center justify-center bg-white py-1">
            <img src="/images/BD.png" alt="" className="w-6 h-6 rounded-full" />
            <span className="text-black text-start">
              <p>DB</p> <p className="-mt-1">English</p>
            </span>
          </button>
          <a
            href="/guest/register"
            className="w-full flex items-center justify-center bg-gray-900 py-1"
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="w-full flex items-center justify-center bg-red-600 py-1"
          >
            Login
          </a>
        </div>
      )}
    </div>
  );
}
