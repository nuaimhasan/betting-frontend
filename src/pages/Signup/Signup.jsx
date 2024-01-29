export default function Signup() {
  return (
    <section className="bg-gray-700 text-white py-10">
      <div className="container">
        <div className="min-h-[70vh] border-4 border-red-600 rounded">
          <div className="flex p-6 gap-6 items-center">
            <div className="w-[450px]">
              <div className="border-b-2 border-red-600 text-center pb-2 text-red-600 text-lg font-medium">
                <h2>Sign up</h2>
              </div>

              <form className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <p>Username</p>
                  <input
                    type="text"
                    className="w-full bg-gray-600 px-4 py-2 rounded outline-none border border-gray-600 focus:border-red-600"
                    placeholder="4-15 char, allow number"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p>Password</p>
                  <input
                    type="password"
                    className="w-full bg-gray-600 px-4 py-2 rounded outline-none border border-gray-600 focus:border-red-600"
                    placeholder="********"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p>Confirm Password</p>
                  <input
                    type="password"
                    className="w-full bg-gray-600 px-4 py-2 rounded outline-none border border-gray-600 focus:border-red-600"
                    placeholder="********"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p>Choose Currency</p>
                  <select className="w-full bg-gray-600 px-4 py-2 rounded outline-none border border-gray-600 focus:border-red-600">
                    <option value="BDT">BDT</option>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p>Refer Code</p>
                  <input
                    type="text"
                    className="w-full bg-gray-600 px-4 py-2 rounded outline-none border border-gray-600 focus:border-red-600"
                    placeholder="Enter if you have any"
                  />
                </div>
                <div className="mt-2">
                  <button className="w-full bg-gray-600 px-4 py-2 rounded text-white hover:bg-red-600 duration-300">
                    Next
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full">
              <img src="/images/signup.jpg" alt="" className="w-full rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
