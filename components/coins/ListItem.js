import Link from "next/link";
import React from "react";
// import Button from "../ui/button";
import classes from "./ListItem.module.css";

import Image from "next/image";

const ListItem = (props) => {
  const { id, title, price, marketCap, image, price_change_percentage_24h } =
    props;

  const exploreLink = `/coins/${id}`;
  return (
    <li className="flex flex-row items-center p-2 justify-center w-full border-b-2 border-b-black">
      <div className="flex flex-row w-full ">
        <img
          src={image}
          alt={title}
          className="w-10 h-10 justify-center items-center"
        />

        <h3 className="px-2 text-2xl font-semibold">{title}</h3>
      </div>
      <div className="w-full justify-end sm:justify-start text-end sm:text-start">
        <h3 className="px-2 text-2xl font-semibold">${price}</h3>
      </div>
      <div className="w-full hidden md:block">
        <h3 className={`px-2 text-2xl font-semibold`}>
          {price_change_percentage_24h}
        </h3>
      </div>
      <div className="hidden sm:block w-full">
        <h3 className="px-2 text-2xl font-semibold">${marketCap}</h3>
      </div>

      {/* <div className={classes.content}>
        <div className={classes.summary}>
          <h2 className="text-2xl font-semibold font-poppins ">{title}</h2>
          <div className={classes.date}>
            <div></div>
            <div>
              <h4>${price}</h4>
            </div>
          </div>

          <div className={classes.address}>
            <div>
              <p>Market Cap</p>
            </div>
            <div>
              <h4>${marketCap}</h4>
            </div>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink} className={classes.Button}>
            Explore
            <AiOutlineArrowRight className={classes.icon} />
          </Button>
        </div>
      </div> */}
    </li>
  );
};

export default ListItem;
