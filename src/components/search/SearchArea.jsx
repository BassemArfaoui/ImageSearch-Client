import { IoMdSearch } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";

function SearchArea() {

    const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="w-full flex justify-center px-2 md:px-8 ">
      <div className="search-area border-2 bg-white border-gray-500 p-4 w-full rounded-2xl md:w-200 shadow-lg shadow-gray-200">
        <div className="search-box ">
          <input
            type="text"
            placeholder="Search an image"
            className="placeholder:text-gray-400 placeholder:text-xl focus:outline-0 text-xl w-full flex items-center font-roboto-mono"
          />
          <div className="flex justify-between mt-6 items-center">
            <span className="rounded-full border-2 p-1 flex justify-center items-center border-gray-600 cursor hover:outline-4 hover:outline-gray-200 cursor-pointer" >
              <IoMdAdd className="size-6 text-gray-600" />
            </span>
            <span className="rounded-full border-2 p-1 flex justify-center items-center border-gray-600 hover:outline-4 hover:outline-gray-200 cursor-pointer">
              <IoMdSearch className="size-6 text-gray-600"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchArea