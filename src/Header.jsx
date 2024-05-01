import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

function Header() {
  return (
    <div>
      <div className="flex justify-between px-5 pt-4 pb-24 bg-customBrown text-white">
        <div class="flex  items-center">
          <IoIosSearch />
          <input
            type="text"
            placeholder="Search everywhere......"
            class="p-2 bg-transparent border-none outline-none text-gray-800 placeholder-white"
          />
        </div>
        <div className="flex gap-10 items-center">
          <div className="flex space-x-4">
            <img
              src="/public/Notification.svg"
              className="w-5 h-5 text-xs"
              alt=""
            />
            <FiMessageSquare className=" w-5 h-5" />
            <img
              className="w-4 h-4 text-xs"
              src="/public/Vector (14).svg"
              alt=""
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex gap-2 items-center">
              <img src="/public/User Profile.svg" alt="" />
              <p>Name,N</p>
            </div>
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
