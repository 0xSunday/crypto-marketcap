import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
const Search = () => {
  return (
    <div className="flex felx-row max-w-[400px p-2 justify-end px-6 sm:px-10 ">
      <input
        type="text"
        placeholder="Bitcoin"
        className="border-2 border-black p-1 "
      />
      <button className="p-1 border-2 border-black border-l-0 px-3">
        <BiSearchAlt2 className="w-6 h-6"/>
      </button>
    </div>
  );
};

export default Search;