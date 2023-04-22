import React, { useContext } from "react";
import CartContext from "../../store/cartContext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartMedicines = cartCtx.Medicines.reduce((curNum, Medicine) => {
    return curNum + Medicine.amount;
  }, 0);

  return (
    <button onClick={props.onShow} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartMedicines}</span>
    </button>
  );
};

export default HeaderCartButton;
