import { MdEmail } from "react-icons/md";
import { PiWarningCircleFill } from "react-icons/pi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

export default function Wallet() {
  window.scroll(0, 0);

  return (
    <div className="wallet">
      <div className="bg-[#313131] p-3 rounded grid grid-cols-3 gap-6">
        <div className="border-r border-[#9999993f]">
          <p className="text-[#999] text-sm">Main Wallet</p>
          <p className="text-green-600">
            ৳ <span className="text-2xl font-medium">0</span>
          </p>
        </div>

        <div className="border-r border-[#9999993f]">
          <p className="text-[#999] text-sm">Bonus Wallet</p>
          <p className="text-green-600">
            ৳ <span className="text-2xl font-medium">0</span>
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-[#999] text-sm">Security Level</p>
            <p className="text-red-500 text-sm">Unverified</p>
          </div>
          <div>
            <MdEmail className="text-xl text-red-500" />
          </div>
        </div>
      </div>

      <div className="mt-2 bg-[#313131] p-3 rounded">
        <div className="border-b border-red-500 border-dashed pb-2">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg text-red-500 pl-3 relative after:absolute after:w-[3px] after:h-[70%] after:left-0 after:top-1 after:bg-red-500 after:rounded">
                Funds
              </p>
            </div>

            <div className="flex gap-1 text-sm sm:text-[15px]">
              <button className="px-4 py-1 rounded bg-red-500">Deposit</button>
              <button className="px-4 py-1 rounded bg-gray-500">
                Withdrawal
              </button>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h2 className="text-[15px]">Payment Method</h2>
          <ul className="flex flex-wrap mt-2 gap-2 payment_method">
            <li>
              <button className="active">
                <img
                  src="/images/PaymentMethod/nagad.png"
                  alt=""
                  className="w-6"
                />
                <p>Nagad</p>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/images/PaymentMethod/bkash.png"
                  alt=""
                  className="w-6"
                />
                <p>bKash</p>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/images/PaymentMethod/rocket.png"
                  alt=""
                  className="w-6"
                />
                <p>Rocket</p>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/images/PaymentMethod/bank-card.png"
                  alt=""
                  className="w-6"
                />
                <p>Local Bank</p>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/images/PaymentMethod/erc20.png"
                  alt=""
                  className="w-6"
                />
                <p>USDT TRC20</p>
              </button>
            </li>
            <li>
              <button>
                <img
                  src="/images/PaymentMethod/trc20.png"
                  alt=""
                  className="w-6"
                />
                <p>USDT ERC20</p>
              </button>
            </li>
          </ul>
        </div>

        <div className="mt-6 border-t border-[#b4b4b437] pt-4">
          <h2 className="text-[15px]">Payment Ammount</h2>
          <div className="mt-3 flex items-center gap-10 text-xs">
            <p>Amount</p>
            <p className="text-red-200 ">৳ 200 - ৳ 25,000</p>
          </div>
          <ul className="flex flex-wrap mt-2 gap-2 payment_method payment_account">
            <li>
              <button className="active">
                <p>50</p>
              </button>
            </li>
            <li>
              <button>
                <p>100</p>
              </button>
            </li>
            <li>
              <button>
                <p>200</p>
              </button>
            </li>
            <li>
              <button>
                <p>500</p>
              </button>
            </li>
            <li>
              <button>
                <p>1000</p>
              </button>
            </li>
            <li>
              <button>
                <p>2000</p>
              </button>
            </li>
            <li>
              <button>
                <p>5000</p>
              </button>
            </li>
            <li>
              <button>
                <p>10000</p>
              </button>
            </li>
            <li>
              <button>
                <p>15000</p>
              </button>
            </li>
            <li>
              <button>
                <p>20000</p>
              </button>
            </li>
          </ul>

          <div className="mt-4 border rounded border-[#7293e1] flex items-start gap-2 bg-[rgba(114,147,225,.4)] p-2">
            <p>
              <PiWarningCircleFill className="text-lg mt-px" />
            </p>
            <ul className="text-sm">
              <li>
                1- Deposit with unverified or unregistered account numbers on
                our site is not acceptable and may result in loss of funds
              </li>
              <li>
                2- We are not responsible for invalid deposits to accounts or
                wallets not listed on our site.
              </li>
              <li>
                3- Check your deposit history for more transaction updates. You
                are allowed to edit once and resubmit in case of incorrect TX
                ID, amount and wallet number.
              </li>
            </ul>
            <p></p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <div className="relative">
              <p className="absolute text-xs text-red-300 left-2 top-2.5">
                <FaBangladeshiTakaSign />
              </p>
              <input
                type="text"
                name=""
                className="px-3 py-1 rounded outline-none bg-transparent border border-[#b4b4b437] text-end pl-6"
                placeholder="0.00"
              />
            </div>
            <div>
              <button className="bg-red-500 px-6 py-1 rounded">Deposit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
