import React, { useState } from "react";
import classes from "../../styles/Home.module.css";
import CoinList from "../../components/coins/CoinList";

import Search from "../../components/layout/Search";

const Home = ({ filterdApiCoins }) => {
  const [search, setSearch] = useState("");
  // const featuredCoins = getFeaturedEvents();

  const allCoins = filterdApiCoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChnage = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  // let searchIcon = false;

  return (
    <div className={`${classes.homepage} bg-zinc-900 text-white `}>
      {/* <div className="bg-black text-white "> */}
      <Search onChange={handleChnage} />
      {/* <CoinList items={featuredCoins} /> */}
      <CoinList items={allCoins} />
    </div>
  );
};
export default Home;
export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
  );

  const filterdApiCoins = await res.json();

  return {
    props: {
      filterdApiCoins,
    },
  };
};
