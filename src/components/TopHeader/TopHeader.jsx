export default function TopHeader() {
  return (
    <section className="bg-gray-600 text-white">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm">
            <p className="px-3 py-px">(GMT+6) 10:40:44</p>
            <button className="flex items-center gap-1 px-3 py-px bg-gray-700">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1200px-Flag_of_Bangladesh.svg.png"
                alt=""
                className="w-6 h-6 rounded-full"
              />
              ৳ BDT বাংলা
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
