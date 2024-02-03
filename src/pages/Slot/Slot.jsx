import { FiSearch } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";

export default function Slot() {
  return (
    <section>
      <div>
        <img
          src="/images/slot/slotBanner.jpg"
          alt=""
          className="w-full h-40 lg:h-96"
        />
      </div>

      <div className="bg-white py-2">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center sm:gap-2">
              <FiSearch className="text-2xl text-gray-800 hidden md:block" />
              <input
                type="text"
                className="bg-gray-100 px-3 py-1 text-sm md:text-base rounded border focus:border-red-600 duration-200 text-gray-800"
                placeholder="Search Game"
              />
            </div>

            <button>
              <FaFilter className="text-gray-800" />
            </button>

            <div className="hidden md:flex items-center gap-3 text-gray-700">
              <p>Sort：</p>
              <button className="text-red-600">Recommend</button>
              <button>Latest</button>
              <button>Favorite</button>
              <button>A-Z</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-600 py-5 hidden lg:block"></div>

      <div className="py-2">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 md:gap-4">
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
            <div className="game_card">
              <img src="/images/slot/game1.jpeg" alt="" />
              <button className="wishlist_btn">
                <CiHeart />
              </button>
              <p>JILI Money Coming</p>
              <div className="btn_wrap">
                <Link to="">Play Game</Link>
              </div>
              <div className="inner_shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
