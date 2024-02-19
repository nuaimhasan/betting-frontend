export default function ForgotPassword() {
  return (
    <section className="min-h-[70vh] flex justify-center items-center text-white">
      <div className="border rounded w-[90%] sm:w-[400px]">
        <div className="bg-gray-900 px-4 py-3 rounded-t">
          <h2>Reset Password</h2>
        </div>

        <form className="p-4">
          <div className="grid grid-cols-5 items-center gap-4">
            <p>Email:</p>
            <div className="col-span-4">
              <input
                type="email"
                className="outline-none px-2 py-1 w-full bg-gray-800 rounded"
                placeholder="Enter Your Email"
              />
            </div>
          </div>

          <div className="mt-4">
            <button className="w-full bg-red-600 text-white py-2 rounded">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
