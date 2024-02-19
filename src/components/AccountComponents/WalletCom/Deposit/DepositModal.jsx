import { MdClose } from "react-icons/md";

export default function DepositModal({ deposit, setDeposit }) {
  return (
    <>
      <button
        onClick={() => setDeposit(false)}
        className={`overlay ${deposit && "overlay_show"}`}
      ></button>
      <div className={`modal w-[400px] rounded-md ${deposit && "modal_show"}`}>
        <div className="bg-red-600 px-4 py-3 flex justify-between items-end">
          <p className="text-lg text-white">Nagad Deposit</p>
          <button onClick={() => setDeposit(false)}>
            <MdClose className="text-xl hover:text-white duration-200" />
          </button>
        </div>
        <div className="p-4 bg-gray-100 text-gray-600">
          <div>
            <p>Nagad Personal Number: 01XXXXXXXX</p>
          </div>
          <form className="mt-2 flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <p className="">TX ID</p>
              <input
                type="text"
                name="txId"
                className="px-3 py-1 rounded outline-none bg-transparent border border-[#b4b4b475] "
                placeholder="000"
              />
            </div>

            <div>
              <button className="w-full bg-red-600 text-white py-2 rounded">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
