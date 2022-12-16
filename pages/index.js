import React from "react";
import classes from "../styles/Home.module.css";
import CoinList from "../components/coins/CoinList";
import { getFeaturedEvents } from "../dummyData";
const Home = () => {
  const featuredCoins = getFeaturedEvents();

  return (
    <div className={classes.homepage}>
      <CoinList items={featuredCoins} />
    </div>
  );
};

export default Home;
