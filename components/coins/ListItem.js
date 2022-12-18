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
    <Link href={exploreLink}>
      <li className="flex flex-row items-center py-3 px-5 justify-center w-full border-b-2 border-b-black  hover:bg-black rounded-3xl ">
        <div className="flex flex-row w-full items-center ">
          <img
            src={image}
            alt={title}
            className="w-7 h-7 sm:w-10 sm:h-10 justify-center items-center"
          />

          <h3 className="px-2 sm:text-2xl text-xl font-semibold flex items-center">
            {title}
          </h3>
        </div>
        <div className="w-full justify-end sm:justify-start text-end sm:text-start">
          <h3 className="px-2 sm:text-2xl text-xl font-semibold">${price}</h3>
        </div>
        <div className="w-full hidden md:block">
          <h3 className={`px-2 text-2xl font-semibold`}>
            {price_change_percentage_24h}
          </h3>
        </div>
        <div className="hidden sm:block w-full">
          <h3 className="px-2 text-2xl font-semibold">${marketCap}</h3>
        </div>
      </li>
    </Link>
  );
};

export default ListItem;
