import React, { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./TabletForm.module.css";

const TabletForm = (props) => {
  const amountInputRef = useRef();
  const [amountValid, setAmountValid] = useState(true);

  const addMedicineToCart = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNum);
  };

  return (
    <form onSubmit={addMedicineToCart} className={classes.form}>
      <Input
        ref={amountInputRef}
        lable="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountValid && <p>Enter a valid Amount(1-5).</p>}
    </form>
  );
};

export default TabletForm;
