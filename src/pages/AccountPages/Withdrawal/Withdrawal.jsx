import { Link } from "react-router-dom";
import WalletInfo from "../../../components/AccountComponents/WalletCom/WalletInfo/WalletInfo";
import { PiWarningCircleFill } from "react-icons/pi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useDepositMethodQuery } from "../../../Redux/deposit/depositApi";
import Swal from "sweetalert2";
import WithdrawalModal from "../../../components/AccountComponents/WalletCom/Withdrawal/WithdrawalModal/WithdrawalModal";
const numbers = [50, 100, 500, 1000, 1500, 2000, 5000, 10000, 15000, 20000];

export default function Withdrawal() {
  const [withdrawal, setWithdrawal] = useState(false);
  const { data, isLoading } = useDepositMethodQuery();
  const [activeMethod, setActiveMethod] = useState({});
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (!isLoading || data?.length > 0) {
      setActiveMethod(data[0]);
    }
  }, [data, isLoading]);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div className="wallet">
      <WalletInfo />

      <div className="mt-2 bg-[#313131] p-3 rounded">
        <div className="border-b border-red-500 border-dashed pb-2">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg text-red-500 pl-3 relative after:absolute after:w-[3px] after:h-[70%] after:left-0 after:top-1 after:bg-red-500 after:rounded">
                Funds
              </p>
            </div>

            <div className="flex gap-1 text-sm sm:text-[15px]">
              <Link
                to="/account/wallet/deposit"
                className="px-4 py-1 rounded bg-gray-500"
              >
                Deposit
              </Link>
              <Link
                to="/account/wallet/withdrawal"
                className="px-4 py-1 rounded bg-red-500"
              >
                Withdrawal
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-3">
            <h2 className="text-[15px]">Payment Method</h2>
            <ul className="flex flex-wrap mt-2 gap-2 payment_method">
              {data?.map((method) => (
                <li key={method?.id}>
                  <button
                    onClick={() => setActiveMethod(method)}
                    className={method?.id === activeMethod?.id && "active"}
                  >
                    <img
                      src={`${
                        import.meta.env.VITE_BACKEND_ASSESTS_URL
                      }/gateway/${method?.image}`}
                      alt=""
                      className="w-6"
                    />
                    <p>{method?.name}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border-t border-[#b4b4b437] pt-4">
            <h2 className="text-[15px]">Payment Ammount</h2>
            <div className="mt-3 flex items-center gap-10 text-xs">
              <p>Amount</p>
              <p className="text-red-200 ">
                ৳ {activeMethod?.min_limit} - ৳ {activeMethod?.max_limit}
              </p>
            </div>
            <ul className="flex flex-wrap mt-2 gap-2 payment_method payment_account">
              {numbers?.map((number, i) => (
                <li key={i}>
                  <button
                    onClick={() => setAmount(number)}
                    className={number === amount && "active"}
                  >
                    <p>{number}</p>
                  </button>
                </li>
              ))}
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
                  3- Check your deposit history for more transaction updates.
                  You are allowed to edit once and resubmit in case of incorrect
                  TX ID, amount and wallet number.
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
                  defaultValue={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div>
                <button
                  onClick={() => {
                    if (amount !== "") {
                      setWithdrawal(true);
                    } else {
                      Swal.fire("", "please select an amount", "warning");
                    }
                  }}
                  className="bg-red-500 px-6 py-1 rounded"
                >
                  Withdrawal
                </button>

                {withdrawal && (
                  <WithdrawalModal
                    withdrawal={withdrawal}
                    setWithdrawal={setWithdrawal}
                    activeMethod={activeMethod}
                    amount={amount}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
