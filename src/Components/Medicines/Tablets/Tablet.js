import React, { useContext } from "react";
import CartContext from "../../../store/cartContext";
import classes from "./Tablet.module.css";
import TabletForm from "./TabletForm";

const Tablet = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price}`;

  const addToCart = (amount) => {
    cartCtx.addMedicine({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.Medicine}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <TabletForm id={props.id} onAddToCart={addToCart} />
      </div>
    </li>
  );
};

export default Tablet;
