import { Link } from "react-router-dom";
import { FaMobileAlt, FaHome } from "react-icons/fa";

export default function MenuHeader() {
  return (
    <section className="bg-gray-600 text-white text-sm">
      <div className="container">
        <ul className="flex items-center">
          <li>
            <Link to="" className="block px-2 py-2 border-r border-white">
              <FaHome className="text-xl" />
            </Link>
          </li>
          <li>
            <Link to="" className="block px-2 py-2 border-r border-white">
              <FaMobileAlt className="text-xl" />
            </Link>
          </li>
          <li>
            <Link to="" className="block px-10 py-2 border-r border-white">
              Sports
            </Link>
          </li>
          <li>
            <Link to="" className="block px-10 py-2 border-r border-white">
              Casino
            </Link>
          </li>
          <li>
            <Link to="" className="block px-10 py-2 border-r border-white">
              Solt
            </Link>
          </li>
          <li>
            <Link to="" className="block px-10 py-2 border-r border-white">
              Arcade
            </Link>
          </li>
          <li>
            <Link to="" className="block px-10 py-2 border-r border-white">
              Fishing
            </Link>
          </li>
          <li>
            <Link to="" className="block px-10 py-2 border-r border-white">
              Crash
            </Link>
          </li>
          <li>
            <Link to="" className="block px-10 py-2 border-r border-white">
              Table
            </Link>
          </li>
          <li>
            <Link to="" className="block px-10 py-2 border-r border-white">
              Lottery
            </Link>
          </li>
          <li>
            <Link to="" className="block px-10 py-2 border-r border-white">
              Promotions
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
