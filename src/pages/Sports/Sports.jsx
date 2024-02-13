import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SportGameCard from "../../components/SportsComponents/SportGameCard/SportGameCard";
import { FaBaseballBatBall } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

export default function Sports() {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <Tabs className="bg-gray-800 text-white">
              <TabList>
                <Tab>Cricket</Tab>
                <Tab>Football</Tab>
                <Tab>Soccer</Tab>
                <Tab>Tennis</Tab>
                <Tab>Kabaddi</Tab>
              </TabList>

              <div className="px-4 pb-4">
                <TabPanel>
                  <div className="grid md:grid-cols-2 gap-4">
                    <SportGameCard />
                    <SportGameCard />
                    <SportGameCard />
                    <SportGameCard />
                    <SportGameCard />
                    <SportGameCard />
                    <SportGameCard />
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>

          <div className="bg-gray-700 text-white">
            <div className="bg-gray-800 px-1 py-[9px]">
              <p className="text-sm text-center">Bet Slip</p>
            </div>

            <div className="px-2">
              <div className="border-b py-2 border-gray-500">
                <p className="text-xs flex items-center gap-2">
                  <FaBaseballBatBall /> Durdanto Dhaka VS Comilla Victorians
                </p>

                <div className="bg-gray-800 p-2 mt-1">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                      <button className="bg-red-600 rounded text-xs">
                        <MdOutlineClose />
                      </button>
                      <p className="text-sm">
                        Durdanto Dhaka{" "}
                        <small className="opacity-60">Match Odds</small>
                      </p>
                    </div>

                    <div>
                      <input
                        type="text"
                        name=""
                        className="w-20 rounded text-black px-1"
                      />
                    </div>
                  </div>

                  <div className="border-y border-gray-600 py-1 text-sm">
                    <span className="inline-block mt-1 bg-gray-400 px-4 rounded mr-1 cursor-pointer">
                      10
                    </span>
                    <span className="inline-block mt-1 bg-gray-400 px-4 rounded mr-1 cursor-pointer">
                      50
                    </span>
                    <span className="inline-block mt-1 bg-gray-400 px-4 rounded mr-1 cursor-pointer">
                      100
                    </span>
                    <span className="inline-block mt-1 bg-gray-400 px-4 rounded mr-1 cursor-pointer">
                      200
                    </span>
                    <span className="inline-block mt-1 bg-gray-400 px-4 rounded mr-1 cursor-pointer">
                      500
                    </span>
                    <span className="inline-block mt-1 bg-gray-400 px-4 rounded mr-1 cursor-pointer">
                      1000
                    </span>
                  </div>

                  <div className="text-end text-xs">
                    <p>
                      Profit: <span className="text-green-500">$100</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b py-2 border-gray-500">
                <p className="text-xs flex items-center gap-2">
                  <FaBaseballBatBall /> Durdanto Dhaka VS Comilla Victorians
                </p>

                <div className="bg-gray-800 p-2 mt-1">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                      <button className="bg-red-600 rounded text-xs">
                        <MdOutlineClose />
                      </button>
                      <p className="text-sm">
                        Durdanto Dhaka{" "}
                        <small className="opacity-60">Match Odds</small>
                      </p>
                    </div>

                    <div>
                      <input
                        type="text"
                        name=""
                        className="w-20 rounded text-black px-1"
                      />
                    </div>
                  </div>

                  <div className="border-y border-gray-600 py-1 text-sm">
                    <span className="inline-block mt-1 bg-gray-400 px-4 rounded mr-1 cursor-pointer">
                      10
                    </span>
                    <span className="inline-block mt-1 bg-gray-400 px-4 rounded mr-1 cursor-pointer">
                      50
                    </span>
                    <span className="inline-block mt-1 bg-gray-400 px-4 rounded mr-1 cursor-pointer">
                      100
                    </span>
                    <span className="inline-block mt-1 bg-gray-400 px-4 rounded mr-1 cursor-pointer">
                      200
                    </span>
                    <span className="inline-block mt-1 bg-gray-400 px-4 rounded mr-1 cursor-pointer">
                      500
                    </span>
                    <span className="inline-block mt-1 bg-gray-400 px-4 rounded mr-1 cursor-pointer">
                      1000
                    </span>
                  </div>

                  <div className="text-end text-xs">
                    <p>
                      Profit: <span className="text-green-500">$100</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <div className="text-end text-xs">
                  <p>
                    Liability: <span className="text-red-600">$100</span>
                  </p>
                </div>

                <div className="mt-1 flex justify-between items-center text-sm ">
                  <button className="border rounded-lg px-6 py-[2px] hover:bg-gray-600 duration-300">
                    Cancel All
                  </button>
                  <button className="border border-red-500 rounded-lg px-6 py-[2px] bg-red-600 hover:bg-red-700 duration-300">
                    Place Bets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
