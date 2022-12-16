import classes from "./CoinDetailsPage.module.css";
import React from "react";
import Image from "next/image";
import styles from "../../Styles";
import { AiOutlineLink } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

const CoinDetailsPage = (props) => {
  const {
    shotName,
    title,
    description,
    price,
    marketCap,
    circulatingSupply,
    totalSupply,
    website,
    creator,
    logo,
    image,
  } = props;

  return (
    <section className="sm:py-16 py-6 sm:px-16 px-6 flex flex-col sm:flex-row w-full flex-wrap justify-between items-baseline">
      <div className="sm:w-[30%] w-[100%] ">
        <div className="flex items-center ">
          <Image
            src={`/${logo}`}
            alt="bit coin"
            width={30}
            height={30}
            className="mr-2 "
          />
          <h1 className="font-poppins font-semibold xs:text-[40px] text-[30px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
            {`${title} (${shotName})`}
          </h1>
        </div>

        <div className=" hidden sm:flex flex-col">
          <div className="  sm:flex flex-wrap justify-start ">
            <a
              href={` /${website}`}
              className=" bg-gray flex items-center justify-center hover:bg-slate-500 bg-slate-400 rounded-3xl p-2 m-2 border border-black  "
            >
              <AiOutlineLink className="mr-1" /> {website}
            </a>
            <a
              href={` /${website}`}
              className=" bg-gray flex items-center justify-center hover:bg-slate-500 bg-slate-400 rounded-3xl p-2 m-2 border border-black  "
            >
              <FaRegNewspaper className="mr-1" /> whitepater
            </a>
            <a
              href={` /${website}`}
              className=" bg-gray flex items-center justify-center hover:bg-slate-500 bg-slate-400 rounded-3xl p-2 m-2 border border-black  "
            >
              <IoPeopleSharp className="mr-1" /> Community
            </a>
            <a
              href={` /${website}`}
              className=" bg-gray flex items-center justify-center hover:bg-slate-500 bg-slate-400 rounded-3xl p-2 m-2 border border-black  "
            >
              <FiSearch className="mr-1" /> Explorer
            </a>
          </div>
          <p className="py-5">Creator - {creator}</p>
        </div>
      </div>

      <div className="flex-col sm:w-[30%] w-[100%] mb-5 ">
        <div>
          <h1 className="font-poppins font-semibold xs:text-[40px] text-[30px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
            ${price}
          </h1>
        </div>
        <div className="mt-5">
          <div className="w-full flex justify-between leading-10 ">
            <p>MarketCap</p>
            <p className="font-semibold">${marketCap}</p>
          </div>
          <div className="w-full flex justify-between leading-10 ">
            <p>Circulating Supply</p>
            <p className="font-semibold">${circulatingSupply}</p>
          </div>
          <div className="w-full flex justify-between leading-10 ">
            <p>total Supply</p>
            <p className="font-semibold">${totalSupply}</p>
          </div>
        </div>
      </div>

      <div className="sm:w-[33%] w-[100%] my-5">
        <div>
          <h1 className="font-poppins font-semibold xs:text-[40px] text-[30px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
            About {title}
          </h1>
          <p className="text-12 font-poppins">{description}</p>
        </div>

        <div className=" flex sm:hidden flex-col my-5">
          <div className="  ">
            <a
              href={` /${website}`}
              className=" bg-gray flex items-center justify-center hover:bg-slate-500 bg-slate-400 rounded-3xl p-2 m-2 border border-black  "
            >
              <AiOutlineLink className="mr-1" /> {website}
            </a>
            <a
              href={` /${website}`}
              className=" bg-gray flex items-center justify-center hover:bg-slate-500 bg-slate-400 rounded-3xl p-2 m-2 border border-black  "
            >
              <FaRegNewspaper className="mr-1" /> whitepater
            </a>
            <a
              href={` /${website}`}
              className=" bg-gray flex items-center justify-center hover:bg-slate-500 bg-slate-400 rounded-3xl p-2 m-2 border border-black  "
            >
              <IoPeopleSharp className="mr-1" /> Community
            </a>
            <a
              href={` /${website}`}
              className=" bg-gray flex items-center justify-center hover:bg-slate-500 bg-slate-400 rounded-3xl p-2 m-2 border border-black  "
            >
              <FiSearch className="mr-1" /> Explorer
            </a>
          </div>
          <h2 className="py-5 text-2xl font-poppins">Creator - {creator}</h2>
        </div>
      </div>
    </section>
  );
};

export default CoinDetailsPage;
