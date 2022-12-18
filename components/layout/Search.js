import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
const Search = ({ ...rest }) => {
  return (
    <div className="flex felx-row max-w-[400px p-2 justify-center sm:justify-end px-6 sm:px-10 ">
      <input
        type="text"
        placeholder="Bitcoin"
        className="border-2 border-white p-1 bg-black active:border-0 focus:outline-0 border-r-0  "
        {...rest}
      />
      <button className="p-1 border-2 border-white  border-l-0 px-3 bg-black">
        <BiSearchAlt2 className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Search;
