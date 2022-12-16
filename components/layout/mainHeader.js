import Link from "next/link";

import classes from "./mainHeader.module.css";
// import { FaBitcoin } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";

function MainHeader() {
  const searchToggle=(props)=>{

  }
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Crypto MarketCap</Link>
      </div>
      {/* <nav className={classes.navigation}> */}
      <button onClick={searchToggle}>
        <BiSearchAlt2 className="w-10 h-10 text-white" />
      </button>

      {/* <Link className={classes.link} href="/coins">
          All Coins
          <FaBitcoin className={classes.icon} />
        </Link> */}
      {/* <ul>
          <li>
          <Link href="/events">
            Browse All Events
            <AiOutlineArrowRight />
          </Link>
          </li>
        </ul> */}
      {/* </nav> */}
    </header>
  );
}

export default MainHeader;
