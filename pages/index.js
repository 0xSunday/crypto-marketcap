import React, { useState } from "react";
import classes from "../styles/Home.module.css";
import CoinList from "../components/coins/CoinList";
import { getFeaturedEvents } from "../dummyData";
import Search from "../components/layout/Search";
const Home = ({ filterdApiCoins }) => {
  const [search, setSearch] = useState(false);
  const featuredCoins = getFeaturedEvents();

  return (
    <div className={classes.homepage}>
      {search && <Search />}
      {/* <CoinList items={featuredCoins} /> */}
      <CoinList items={filterdApiCoins} />
    </div>
  );
};
export default Home;
export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
  );

  const filterdApiCoins = await res.json();

  console.log(filterdApiCoins);

  return {
    props: {
      filterdApiCoins,
    },
  };
};
