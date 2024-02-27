import { MdClose } from "react-icons/md";
import LoginForm from "../LoginForm/LoginForm";

export default function LoginModal({ loginModal, setLoginModal }) {
  return (
    <>
      <button
        onClick={() => setLoginModal(false)}
        className={`overlay ${loginModal && "overlay_show"}`}
      ></button>
      <div
        className={`modal w-[400px] rounded-md ${loginModal && "modal_show"}`}
      >
        <div className="bg-red-600 px-4 py-3 flex justify-between items-end">
          <p className="text-lg text-white">Welcome to Betxfair</p>
          <button onClick={() => setLoginModal(false)}>
            <MdClose className="text-xl hover:text-white duration-200" />
          </button>
        </div>
        <div className="py-8 px-10 bg-gray-100">
          <LoginForm setLoginModal={setLoginModal} />
        </div>
      </div>
    </>
  );
}
