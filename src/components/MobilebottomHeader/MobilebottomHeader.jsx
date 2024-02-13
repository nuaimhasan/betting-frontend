export default function MobilebottomHeader() {
  return (
    <div className="w-full fixed bottom-0 left-0 z-50 text-white text-[13px] lg:hidden">
      <div className="grid grid-cols-3">
        <button className="w-full flex gap-1 items-center justify-center bg-white py-1">
          <img src="/images/BD.png" alt="" className="w-6 h-6 rounded-full" />
          <span className="text-black text-start">
            <p>DB</p> <p className="-mt-1">English</p>
          </span>
        </button>
        <a
          href="/guest/register"
          className="w-full flex items-center justify-center bg-gray-900 py-1"
        >
          Sign Up
        </a>
        <a
          href="/login"
          className="w-full flex items-center justify-center bg-red-600 py-1"
        >
          Login
        </a>
      </div>
    </div>
  );
}
