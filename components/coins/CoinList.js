import React from "react";
import classes from "./CoinList.module.css";
import ListItem from "./ListItem";
const CoinList = (props) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
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
