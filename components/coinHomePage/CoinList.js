import React from "react";
import classes from "./CoinList.module.css";
import ListItem from "./ListItem";

const CoinList = (props) => {
  const { items, coin } = props;

  return (
    <ul className={classes.list}>
      {/* <h1>{coin.market_data.current_price.usd}</h1> */}
      {items.map((coins) => (
        <ListItem
          key={coins.id}
          id={coins.id}
          logo={coins.logo}
          image={coins.image}
          title={coins.title}
          price={coins.price}
          marketCap={coins.marketCap}
        />
      ))}
    </ul>
  );
};

export default CoinList;

export async function getServerSideProps() {
  const res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin");

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
  console.log(coin);
}
