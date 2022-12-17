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
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/coins">All Coins</Link>i
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
