import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../Redux/user/authApi";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function LoginForm({ setLoginModal }) {
  const { loggedUser } = useSelector((store) => store.user);
  const [login, { isLoading, isError }] = useLoginMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/account/wallet";

  useEffect(() => {
    if (loggedUser !== undefined && !isError) {
      navigate(from, { replace: true });
    }
  }, [loggedUser, from, navigate, isError]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    const res = await login(formData);

    if (res?.data?.token) {
      Swal.fire("", "Login Success", "success");
      form.reset();
      setLoginModal(false);
    } else {
      Swal.fire("", "Something Went Wrong", "error");
    }
    if (res?.error) {
      Swal.fire("", "Something Went Wrong", "error");
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 text-white">
      <div className="flex flex-col gap-1.5">
        <p>Username</p>
        <input
          type="test"
          className="w-full px-4 py-2 bg-gray-50 rounded outline-none border border-gray-700 focus:border-red-600"
          placeholder="********"
          name="username"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <p>Password</p>
        <input
          type="password"
          className="w-full px-4 py-2 bg-gray-50 rounded outline-none border border-gray-700 focus:border-red-600"
          placeholder="********"
          name="password"
        />
      </div>
      <div className="text-end underline -mt-2">
        <Link
          onClick={() => setLoginModal(false)}
          to="/forgot-password"
          className="hover:text-red-600 duration-200 text-sm sm:text-base"
        >
          Forgot Password
        </Link>
      </div>
      <div>
        <button
          disabled={isLoading && "disabled"}
          className="w-full bg-gray-600 px-4 py-2 rounded text-white hover:bg-red-600 duration-300"
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </div>
      <div className="-mt-2 text-sm sm:text-base">
        Do not have an account?{" "}
        <Link
          to="/user/register"
          className="underline hover:text-red-600 duration-200"
        >
          Sign Up now!
        </Link>
      </div>
    </form>
  );
}
