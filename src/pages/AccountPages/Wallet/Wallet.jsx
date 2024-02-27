import { useState } from "react";
import { MdEmail } from "react-icons/md";
import Deposit from "../../../components/AccountComponents/WalletCom/Deposit/Deposit";
import Withdrawal from "../../../components/AccountComponents/WalletCom/Withdrawal/Withdrawal";
import EmailVerifyModal from "../../../components/AccountComponents/WalletCom/EmailVerifyModal/EmailVerifyModal";
import { useSelector } from "react-redux";

export default function Wallet() {
  window.scroll(0, 0);
  const { loggedUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState("Deposit");
  const [emailVerify, setEmailVerify] = useState(false);

  return (
    <div className="wallet">
      <div className="bg-[#313131] p-3 rounded grid grid-cols-3 gap-6">
        <div className="border-r border-[#9999993f]">
          <p className="text-[#999] text-sm">Main Wallet</p>
          <p className="text-green-600">
            ৳{" "}
            <span className="text-2xl font-medium">
              {parseFloat(loggedUser?.main_wallet).toFixed(2)}
            </span>
          </p>
        </div>

        <div className="border-r border-[#9999993f]">
          <p className="text-[#999] text-sm">Bonus Wallet</p>
          <p className="text-green-600">
            ৳{" "}
            <span className="text-2xl font-medium">
              {parseFloat(loggedUser?.bonus_wallet).toFixed(2)}
            </span>
          </p>
        </div>

        {loggedUser?.email_verify === "0" ? (
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[#999] text-sm">Security Level</p>
              <p className="text-red-500 text-sm">Unverified</p>
            </div>
            <div>
              <button
                onClick={() => setEmailVerify(true)}
                className="bg-red-600 p-1.5 rounded-full text-white"
              >
                <MdEmail className="text-lg" />
              </button>
              {emailVerify && (
                <EmailVerifyModal
                  emailVerify={emailVerify}
                  setEmailVerify={setEmailVerify}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[#999] text-sm">Security Level</p>
              <p className="text-green-500 text-sm">Verified</p>
            </div>
          </div>
        )}
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
              <button
                onClick={() => setTab("Deposit")}
                className="px-4 py-1 rounded bg-red-500"
              >
                Deposit
              </button>
              <button
                onClick={() => setTab("Withdrawal")}
                className="px-4 py-1 rounded bg-gray-500"
              >
                Withdrawal
              </button>
            </div>
          </div>
        </div>
        {tab === "Deposit" && <Deposit />}
        {tab === "Withdrawal" && <Withdrawal />}
      </div>
    </div>
  );
}
