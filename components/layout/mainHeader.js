import Link from "next/link";
import React, { useContext, useState } from "react";
import classes from "./mainHeader.module.css";
// import { FaBitcoin } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import { data } from "autoprefixer";

function MainHeader() {
  // const data = useContext();
  const [search, setSearch] = useState(true);
  const searchToggle = (props) => {
    setSearch((prev) => {
      return !prev;
    });
    // <data.Provider value={search} />;
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Crypto MarketCap</Link>
      </div>
      {/* <nav className={classes.navigation}> */}
      <button
        onClick={searchToggle}
        className="px-2 py-2 hover:bg-slate-400 active:bg-slate-400 hover:text-black border-2 border-white"
      >
        <BiSearchAlt2 className="w-8 h-8 text-white hover:text-black" />
      </button>
    </header>
  );
}

export default MainHeader;

