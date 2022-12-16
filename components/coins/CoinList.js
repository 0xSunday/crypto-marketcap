import React from "react";
import classes from "./CoinList.module.css";
import ListItem from "./ListItem";
const CoinList = (props) => {
  const { items } = props;

  return (
    <ul className="flex flex-col w-full p-5 sm:p-10  ">
      <div className="flex flex-row sm:justify-between justify-between py-2 ">
        <p className=" w-full ml-14">Name</p>
        <p className=" w-full text-center sm:text-start sm:-ml-8 ">price</p>
        <p className="hidden md:block w-full p">24h %</p>
        <p className="hidden sm:block w-full ">maketcap</p>
      </div>
      {items.map((coins) => (
        <ListItem
          key={coins.id}
          id={coins.id}
          image={coins.image}
          title={coins.name}
          price={coins.current_price}
          marketCap={coins.market_cap}
          price_change_percentage_24h={coins.price_change_percentage_24h}
        />
      ))}
    </ul>
  );
};

export default CoinList;
