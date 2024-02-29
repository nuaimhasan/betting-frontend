import { MdEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import EmailVerifyModal from "../EmailVerifyModal/EmailVerifyModal";
import { useState } from "react";

export default function WalletInfo() {
  const { loggedUser } = useSelector((state) => state.user);
  const [emailVerify, setEmailVerify] = useState(false);

  return (
    <div className="bg-[#313131] p-3 rounded grid grid-cols-3 gap-6">
      <div className="border-r border-[#9999993f]">
        <p className="text-[#999] text-xs sm:text-sm">Main Wallet</p>
        <p className="text-green-600">
          ৳{" "}
          <span className="sm:text-2xl font-medium">
            {parseFloat(loggedUser?.main_wallet).toFixed(2)}
          </span>
        </p>
      </div>

      <div className="border-r border-[#9999993f]">
        <p className="text-[#999] text-xs sm:text-sm">Bonus Wallet</p>
        <p className="text-green-600">
          ৳{" "}
          <span className="sm:text-2xl font-medium">
            {loggedUser?.bonus_wallet
              ? parseFloat(loggedUser?.bonus_wallet).toFixed(2)
              : (0.0).toFixed(2)}
          </span>
        </p>
      </div>

      {loggedUser?.email_verify === "0" ? (
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[#999] text-xs sm:text-sm">Security Level</p>
            <p className="text-red-500 text-xs sm:text-sm">Unverified</p>
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
            <p className="text-[#999] text-xs sm:text-sm">Security Level</p>
            <p className="text-green-500 text-xs sm:text-sm">Verified</p>
          </div>
        </div>
      )}
    </div>
  );
}
