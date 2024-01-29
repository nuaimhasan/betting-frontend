import "./Casino.css";
import { Link } from "react-router-dom";

export default function Casino() {
  return (
    <section>
      <div>
        <img
          src="/images/casino/casinoBanner.jpg"
          alt=""
          className="w-full h-96"
        />
      </div>

      <div className="py-10">
        <div className="container">
          <div className="grid grid-cols-2 gap-4">
            <div className="casino_card">
              <div className="card_image">
                <img src="/images/casino/casino1.jpg" alt="" />

                <div className="card_image_tag">
                  <span>Baccarat</span>
                  <span>DragonTiger</span>
                  <span>Blackjack</span>
                  <span>Roulette</span>
                  <span>Dice</span>
                </div>
              </div>
              <div className="card_content">
                <h2 className="mt-2 border-l-4 border-red-600 px-2 text-2xl font-medium text-red-600">
                  PP
                </h2>
                <div className="p-3 flex flex-col gap-3">
                  <h3 className="text-gray-900">
                    Enjoy High Quality Live Streams with Gorgeous Dealers
                  </h3>
                  <p className="text-gray-500">
                    Play Your Favourite Megawheel, Sweet Bonanza Candyland,
                    Ruby, Mega Sic Bo
                  </p>
                  <Link
                    to="https://client.pragmaticplaylive.net/desktop/lobby/"
                    target="_blank"
                    className="mt-4 text-center bg-red-600 text-white rounded py-1.5 font-medium"
                  >
                    Play Game
                  </Link>
                </div>
              </div>
            </div>

            <div className="casino_card">
              <div className="card_image">
                <img src="/images/casino/casino2.jpg" alt="" />

                <div className="card_image_tag">
                  <span>Baccarat</span>
                  <span>DragonTiger</span>
                  <span>Blackjack</span>
                  <span>Roulette</span>
                  <span>Dice</span>
                </div>
              </div>
              <div className="card_content">
                <h2 className="mt-2 border-l-4 border-red-600 px-2 text-2xl font-medium text-red-600">
                  EVO
                </h2>
                <div className="p-3 flex flex-col gap-3">
                  <h3 className="text-gray-900">
                    Enjoy High Quality Live Streams with Gorgeous Dealers
                  </h3>
                  <p className="text-gray-500">
                    Play Your Favourite Megawheel, Sweet Bonanza Candyland,
                    Ruby, Mega Sic Bo
                  </p>
                  <Link
                    to="https://client.pragmaticplaylive.net/desktop/lobby/"
                    target="_blank"
                    className="mt-4 text-center bg-red-600 text-white rounded py-1.5 font-medium"
                  >
                    Play Game
                  </Link>
                </div>
              </div>
            </div>

            <div className="casino_card">
              <div className="card_image">
                <img src="/images/casino/casino2.jpg" alt="" />

                <div className="card_image_tag">
                  <span>Baccarat</span>
                  <span>DragonTiger</span>
                  <span>Blackjack</span>
                  <span>Roulette</span>
                  <span>Dice</span>
                </div>
              </div>
              <div className="card_content">
                <h2 className="mt-2 border-l-4 border-red-600 px-2 text-2xl font-medium text-red-600">
                  EVO
                </h2>
                <div className="p-3 flex flex-col gap-3">
                  <h3 className="text-gray-900">
                    Enjoy High Quality Live Streams with Gorgeous Dealers
                  </h3>
                  <p className="text-gray-500">
                    Play Your Favourite Megawheel, Sweet Bonanza Candyland,
                    Ruby, Mega Sic Bo
                  </p>
                  <Link
                    to="https://client.pragmaticplaylive.net/desktop/lobby/"
                    target="_blank"
                    className="mt-4 text-center bg-red-600 text-white rounded py-1.5 font-medium"
                  >
                    Play Game
                  </Link>
                </div>
              </div>
            </div>

            <div className="casino_card">
              <div className="card_image">
                <img src="/images/casino/casino1.jpg" alt="" />

                <div className="card_image_tag">
                  <span>Baccarat</span>
                  <span>DragonTiger</span>
                  <span>Blackjack</span>
                  <span>Roulette</span>
                  <span>Dice</span>
                </div>
              </div>
              <div className="card_content">
                <h2 className="mt-2 border-l-4 border-red-600 px-2 text-2xl font-medium text-red-600">
                  PP
                </h2>
                <div className="p-3 flex flex-col gap-3">
                  <h3 className="text-gray-900">
                    Enjoy High Quality Live Streams with Gorgeous Dealers
                  </h3>
                  <p className="text-gray-500">
                    Play Your Favourite Megawheel, Sweet Bonanza Candyland,
                    Ruby, Mega Sic Bo
                  </p>
                  <Link
                    to="https://client.pragmaticplaylive.net/desktop/lobby/"
                    target="_blank"
                    className="mt-4 text-center bg-red-600 text-white rounded py-1.5 font-medium"
                  >
                    Play Game
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
