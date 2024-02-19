import { PiWarningCircleFill } from "react-icons/pi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useState } from "react";
import DepositModal from "./DepositModal";

export default function Deposit() {
  const [deposit, setDeposit] = useState(false);

  return (
    <div>
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
              1- Deposit with unverified or unregistered account numbers on our
              site is not acceptable and may result in loss of funds
            </li>
            <li>
              2- We are not responsible for invalid deposits to accounts or
              wallets not listed on our site.
            </li>
            <li>
              3- Check your deposit history for more transaction updates. You
              are allowed to edit once and resubmit in case of incorrect TX ID,
              amount and wallet number.
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
            <button
              onClick={() => setDeposit(true)}
              className="bg-red-500 px-6 py-1 rounded"
            >
              Deposit
            </button>

            {deposit && (
              <DepositModal deposit={deposit} setDeposit={setDeposit} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
