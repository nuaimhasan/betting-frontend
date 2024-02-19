import { MdClose } from "react-icons/md";

export default function EmailVerifyModal({ emailVerify, setEmailVerify }) {
  return (
    <>
      <button
        onClick={() => setEmailVerify(false)}
        className={`overlay ${emailVerify && "overlay_show"}`}
      ></button>
      <div
        className={`modal w-[400px] rounded-md ${emailVerify && "modal_show"}`}
      >
        <div className="bg-red-600 px-4 py-3 flex justify-between items-end">
          <p className="text-lg text-white">Email Verify</p>
          <button onClick={() => setEmailVerify(false)}>
            <MdClose className="text-xl hover:text-white duration-200" />
          </button>
        </div>
        <div className="p-4 bg-gray-100 text-gray-600">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <p className="">Email</p>
              <input
                type="text"
                name="email"
                className="px-3 py-1 rounded outline-none bg-transparent border border-[#b4b4b484] "
                placeholder="email"
                defaultValue="example@gmail.com"
              />
            </div>

            <div>
              <button className="w-full bg-red-600 text-white py-2 rounded">
                Send Code
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
