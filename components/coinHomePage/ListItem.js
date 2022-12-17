import React from "react";
import Button from "../ui/button";
import classes from "./ListItem.module.css";

import { AiOutlineArrowRight } from "react-icons/ai";

const ListItem = (props) => {
  const { id, title, price, marketCap, image } = props;

  const exploreLink = `/coins/${id}`;
  return (
    <li className={classes.item}>
      <img src={image} alt={title}  />

      <div className={classes.content}>
        <div className={classes.summary}>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div className={classes.date}>
            <div>
              <p >Price</p>
            </div>
            <div>
              <h4 className="font-semibold">${price}</h4>
            </div>
          </div>

          <div className={classes.address}>
            <div >
              <p>Market Cap</p>
            </div>
            <div>
              <h4 className="font-semibold">${marketCap}</h4>
            </div>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink} className={classes.Button}>
            Explore
            <AiOutlineArrowRight className={classes.icon} />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
