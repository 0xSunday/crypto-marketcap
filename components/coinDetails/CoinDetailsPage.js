import classes from "./CoinDetailsPage.module.css";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../../Styles";
import { AiOutlineLink } from "react-icons/ai";

import { FiSearch } from "react-icons/fi";

const CoinDetailsPage = (props) => {
  const [showMore, setShowMore] = useState(false);
  const {
    shotName,
    title,
    description,
    price,
    marketCap,
    circulatingSupply,
    totalSupply,
    website,

    explorer,
    image,

    marketRank,
    priceChangePercentage24h,
    high24,
    low24,
  } = props;

  const marketCapF = marketCap.toLocaleString("en-US");
  const circulatingSupplyF = circulatingSupply.toLocaleString("en-US");
  const totalSupplyF = totalSupply.toLocaleString("en-US");

  const priceChangePercentage24hF =
    Math.round(priceChangePercentage24h * Math.pow(10, 2)) / Math.pow(10, 2);
  return (
    <section className="md:py-16 py-6 md:px-16 px-6 flex flex-col md:flex-row w-full flex-wrap justify-between items-baseline">
      <div className="md:w-[30%] w-[100%] items-center">
        <div className="flex flex-col ">
          <div className="flex items-center ">
            <img
              src={image}
              alt={title}
              className="mr-2 w-10 h-10 -pl-1 md:pl-0"
            />
            <h1 className="font-poppins font-semibold xs:text-[40px] text-[30px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
              {`${title} (${shotName})`}
            </h1>
          </div>

          <div className="w-full h-10 flex items-center ">
            <p className="p-[1px] ml-0 md:ml-3 w-20 rounded-2xl  bg-red-500 text-center text-semibold">{`Rank #${marketRank}`}</p>
          </div>
        </div>

        <div className=" hidden md:flex flex-col">
          <div className="  md:flex flex-wrap justify-start ">
            <a
              href={` /${website}`}
              className=" bg-gray flex items-center justify-center hover:bg-slate-500 bg-slate-400 rounded-3xl p-2 m-2 border border-black  "
            >
              <AiOutlineLink className="mr-1" /> Website
            </a>

            <a
              href={explorer}
              className=" bg-gray flex items-center justify-center hover:bg-slate-500 bg-slate-400 rounded-3xl p-2 m-2 border border-black  "
            >
              <FiSearch className="mr-1" /> Explorer
            </a>
          </div>
        </div>
      </div>

      <div className="flex-col md:w-[30%] w-[100%] mb-5 items-center ">
        <div className="flex flex-row items-center">
          <h1 className="font-poppins font-semibold xs:text-[40px] text-[30px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
            ${price}
          </h1>

          <p className="w-20 h-10 border-2 border-black  bg-green-300 font-semibold flex items-center justify-center text-black ">{`${priceChangePercentage24hF}%`}</p>
        </div>
        <div className="mt-5">
          <div className="w-full flex justify-between leading-10 ">
            <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px]">
              24h High
            </p>
            <p className="font-semibold">{high24}</p>
          </div>

          <div className="w-full flex justify-between leading-10 ">
            <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px]">
              24h Low
            </p>
            <p className="font-semibold">{low24}</p>
          </div>
          <div className="w-full flex justify-between leading-10 ">
            <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px]">
              Market Cap
            </p>
            <p className="font-semibold">${marketCapF}</p>
          </div>
          <div className="w-full flex justify-between leading-10 ">
            <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px]">
              Circulating Supply
            </p>
            <p className="font-semibold">{circulatingSupplyF}</p>
          </div>
          <div className="w-full flex justify-between leading-10 ">
            <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px]">
              Total Supply
            </p>
            <p className="font-semibold">{totalSupplyF}</p>
          </div>
        </div>
      </div>

      <div className="md:w-[33%] w-[100%] my-5 ">
        <div>
          <h1 className="font-poppins font-semibold xs:text-[40px] text-[30px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
            About {title}
          </h1>
          <p className="font-poppins font-normal text-black text-[18px] leading-[30.8px]  ">
            {showMore ? description : `${description.substring(0, 500)}`}
            <button className="font-bold" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show less" : "Show more"}
            </button>
          </p>
        </div>

        <div className=" flex md:hidden flex-col my-5">
          <div className="  ">
            <a
              href={` /${website}`}
              className=" bg-gray flex items-center justify-center hover:bg-slate-500 bg-slate-400 rounded-3xl p-2 m-2 border border-black  "
            >
              <AiOutlineLink className="mr-1" /> Website
            </a>

            <a
              href={` /${website}`}
              className=" bg-gray flex items-center justify-center hover:bg-slate-500 bg-slate-400 rounded-3xl p-2 m-2 border border-black  "
            >
              <FiSearch className="mr-1" /> Explorer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinDetailsPage;
