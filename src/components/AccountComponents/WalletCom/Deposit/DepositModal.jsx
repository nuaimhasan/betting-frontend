import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { useManualDepositMutation } from "../../../../Redux/deposit/depositApi";
import Swal from "sweetalert2";

export default function DepositModal({
  deposit,
  setDeposit,
  activeMethod,
  amount,
}) {
  const { loggedUser } = useSelector((store) => store.user);
  const [manualDeposit, { isLoading }] = useManualDepositMutation();

  const handleDepositConfirm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const detail = form.txId.value;
    const image = form.image.files[0];

    const formData = new FormData();
    formData.append("user_id", loggedUser?.id);
    formData.append("deposit_id", activeMethod?.id);
    formData.append("amount", amount);
    formData.append("detail", detail);
    formData.append("image", image);

    const res = await manualDeposit(formData);
    setDeposit(false);

    if (res?.data?.status === 200) {
      Swal.fire("", "Deposit request confirm", "success");
    } else {
      Swal.fire("", "something went wront", "error");
    }
  };
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
            <p>
              {activeMethod?.name} Personal Number: {activeMethod?.description}
            </p>
          </div>
          <form
            onSubmit={handleDepositConfirm}
            className="mt-2 flex flex-col gap-2"
          >
            <div className="flex flex-col gap-1">
              <p className="">Ammount</p>
              <input
                type="number"
                name="amount"
                className="px-3 py-1 rounded outline-none bg-transparent border border-[#b4b4b475] "
                placeholder="000"
                value={amount}
                readOnly
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="">TX ID</p>
              <input
                type="text"
                name="txId"
                className="px-3 py-1 rounded outline-none bg-transparent border border-[#b4b4b475] "
                placeholder="000"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="">Payment Screenshot</p>
              <input
                type="file"
                name="image"
                className="px-3 py-1 rounded outline-none bg-transparent border border-[#b4b4b475]"
                required
              />
            </div>

            <div>
              <button
                disabled={isLoading && "disabled"}
                className="w-full bg-red-600 text-white py-2 rounded"
              >
                {isLoading ? "Loading..." : "Confirm"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
