import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

export default function ToggleModalAdd() {
  const [toggle, setToggle] = useState(true);
  return (
    <div
      className={`fixed bottom-12 md:bottom-10 left-1 md:left-10 z-50 ${
        !toggle && "hidden"
      }`}
    >
      <div className="relative">
        <button
          onClick={() => setToggle(false)}
          className="absolute top-0 -right-1 w-6 h-6 rounded-full bg-red-600 flex justify-center items-center"
        >
          <MdOutlineClose className="text-white" />
        </button>
        <img
          src="/images/modal_add.gif"
          alt=""
          className="w-24 h-24 md:w-36 md:h-36 rounded-full"
        />
      </div>
    </div>
  );
}
