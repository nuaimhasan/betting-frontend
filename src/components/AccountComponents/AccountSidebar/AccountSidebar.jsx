import { Link, NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import {
  MdAccountBalanceWallet,
  MdLocalOffer,
  MdLockPerson,
} from "react-icons/md";
import { TbGiftFilled } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import { ImUsers } from "react-icons/im";
import { useSelector } from "react-redux";

export default function AccountSidebar() {
  const { loggedUser } = useSelector((state) => state.user);

  return (
    <div>
      <div className="flex flex-col gap-2 justify-center items-center border-b pb-2 border-gray-600 mx-10 py-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png"
          alt=""
          className="w-16 h-16 rounded-full mx-auto"
        />
        <h3 className="text-center">{loggedUser?.name}</h3>
        <div className="flex items-center gap-1 text-sm text-red-500">
          <FaStar className="text-xs" />0
        </div>
      </div>

      <nav className="mt-5">
        <p className="pl-4 pb-2">Funds</p>
        <ul className="flex flex-col">
          <li>
            <NavLink to="/account/wallet">
              <span className="icon">
                <MdAccountBalanceWallet />
              </span>
              Wallet
            </NavLink>
          </li>
          <li>
            <NavLink to="/account/my-promotion">
              <span className="icon">
                <MdLocalOffer />
              </span>
              My Promotion
            </NavLink>
          </li>
          <li>
            <NavLink to="/account/my-promotion">
              <span className="icon">
                <TbGiftFilled />
              </span>
              Gift Points
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav className="mt-5">
        <p className="pl-4 pb-2">Profile</p>
        <ul className="flex flex-col">
          <li>
            <NavLink to="/account/profile">
              <span className="icon">
                <FiMonitor />
              </span>
              Personal Info
            </NavLink>
          </li>
          <li>
            <NavLink to="/account/reset-password">
              <span className="icon">
                <MdLockPerson />
              </span>
              Reset password
            </NavLink>
          </li>
          <li>
            <NavLink to="/account/referral">
              <span className="icon">
                <ImUsers />
              </span>
              Referral
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav className="community_social">
        <p className="pb-2 text-xs pt-2">community social</p>
        <ul className="grid grid-cols-2 gap-2">
          <li className="bg-gray-900">
            <Link to="/account/profile" target="_blank">
              <div>
                <span className="icon">
                  <FiMonitor />
                </span>
              </div>
              <p>Instagram</p>
            </Link>
          </li>
          <li>
            <Link to="" target="_blank">
              <div>
                <span className="icon">
                  <MdLockPerson />
                </span>
              </div>
              <p>Telegram</p>
            </Link>
          </li>
          <li>
            <Link to="/account/referral" target="_blank">
              <div>
                <span className="icon">
                  <ImUsers />
                </span>
              </div>
              <p>Facebook</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
