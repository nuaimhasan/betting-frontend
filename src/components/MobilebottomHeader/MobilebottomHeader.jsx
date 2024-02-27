import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { MdAccountBalanceWallet, MdAccountCircle } from "react-icons/md";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "../../Redux/account/accountSlice";
import { useEffect } from "react";

export default function MobilebottomHeader() {
  const { loggedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        (!e.target.closest(".account_sidebar") &&
          !e.target.closest(".account_btn")) ||
        e.target.closest(".account_sidebar nav ul li a")
      ) {
        dispatch(setSidebar(false));
      }
    });
  }, [dispatch]);

  return (
    <div className="w-full fixed bottom-0 left-0 z-50 text-white text-[13px] lg:hidden">
      {loggedUser ? (
        <div className="grid grid-cols-4">
          <NavLink
            to="/"
            className="w-full flex flex-col items-center justify-center bg-gray-900 py-1"
          >
            <GoHomeFill className="text-lg" />
            Home
          </NavLink>
          <NavLink
            to="/account/wallet/deposit"
            className="w-full flex flex-col items-center justify-center bg-gray-900 py-1"
          >
            <MdAccountBalanceWallet className="text-lg" />
            Deposit
          </NavLink>
          <NavLink
            to="/account/wallet/withdrawal"
            className="w-full flex flex-col items-center justify-center bg-gray-900 py-1"
          >
            <FaMoneyBill1Wave className="text-lg" />
            Withdrawal
          </NavLink>
          <button
            onClick={() => dispatch(setSidebar(true))}
            className="account_btn w-full flex flex-col items-center justify-center bg-gray-900 py-1"
          >
            <MdAccountCircle className="text-lg" />
            My Account
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3">
          <NavLink
            to="/"
            className="w-full flex flex-col items-center justify-center bg-gray-900 py-1"
          >
            <GoHomeFill className="text-lg" />
            Home
          </NavLink>
          <NavLink
            to="/user/register"
            className="w-full flex items-center justify-center bg-gray-900 py-1"
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/login"
            className="w-full flex items-center justify-center bg-gray-900 py-1"
          >
            Login
          </NavLink>
        </div>
      )}
    </div>
  );
}
