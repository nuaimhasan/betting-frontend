import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

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
          <form className="flex flex-col gap-4 text-gray-800">
            <div className="flex flex-col gap-1.5">
              <p>Username</p>
              <input
                type="test"
                className="w-full px-4 py-2 bg-gray-50 rounded outline-none border border-gray-700 focus:border-red-600"
                placeholder="********"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <p>Password</p>
              <input
                type="password"
                className="w-full px-4 py-2 bg-gray-50 rounded outline-none border border-gray-700 focus:border-red-600"
                placeholder="********"
              />
            </div>
            <div className="text-end underline -mt-2">
              <Link
                onClick={() => setLoginModal(false)}
                to="/forgot-password"
                className="hover:text-red-600 duration-200"
              >
                Forgot Password
              </Link>
            </div>
            <div>
              <button className="w-full bg-gray-600 px-4 py-2 rounded text-white hover:bg-red-600 duration-300">
                Login
              </button>
            </div>
            <div className="-mt-2">
              Do not have an account?{" "}
              <Link
                onClick={() => setLoginModal(false)}
                to="/user/register"
                className="underline hover:text-red-600 duration-200"
              >
                Sign Up now!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
