// import { useState } from "react";

export default function Signup() {
  // const [page, setPage] = useState(1);

  return (
    <section className="bg-gray-700 text-white py-5 md:py-10">
      <div className="container">
        <div className="min-h-[70vh] border-2 md:border-4 border-red-600 rounded">
          <div className="md:flex p-3 md:p-6 gap-6 items-center">
            <div className="md:w-[450px]">
              <div className="border-b-2 border-red-600 text-center pb-2 text-red-600 text-lg font-medium">
                <h2>Sign up</h2>
              </div>

              <form className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <p>Full Name</p>
                  <input
                    type="text"
                    className="w-full bg-gray-600 px-4 py-2 rounded outline-none border border-gray-600 focus:border-red-600"
                    placeholder=""
                    required
                    name="name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p>User Name</p>
                  <input
                    type="text"
                    className="w-full bg-gray-600 px-4 py-2 rounded outline-none border border-gray-600 focus:border-red-600"
                    placeholder="4-15 char, allow number"
                    required
                    name="userName"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p>Phone Number</p>
                  <input
                    type="text"
                    className="w-full bg-gray-600 px-4 py-2 rounded outline-none border border-gray-600 focus:border-red-600"
                    placeholder=""
                    required
                    name="number"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p>Email</p>
                  <input
                    type="email"
                    className="w-full bg-gray-600 px-4 py-2 rounded outline-none border border-gray-600 focus:border-red-600"
                    placeholder="example@gmail.com"
                    required
                    name="email"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p>Password</p>
                  <input
                    type="password"
                    className="w-full bg-gray-600 px-4 py-2 rounded outline-none border border-gray-600 focus:border-red-600"
                    placeholder="********"
                    required
                    name="passaword"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p>Refer Code</p>
                  <input
                    type="text"
                    className="w-full bg-gray-600 px-4 py-2 rounded outline-none border border-gray-600 focus:border-red-600"
                    placeholder="Enter if you have any"
                    name="referCode"
                  />
                </div>
                <div className="mt-2">
                  <button className="w-full bg-gray-600 px-4 py-2 rounded text-white hover:bg-red-600 duration-300">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden lg:block w-full">
              <img src="/images/signup.jpg" alt="" className="w-full rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
