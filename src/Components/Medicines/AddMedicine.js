import React, { useRef } from "react";
import classes from "./AddMedicine.module.css";

const AddMedicine = (props) => {
  const nameRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const description = descRef.current.value;
    const price = priceRef.current.value;

    const obj = {
      id: Math.random(),
      name: name,
      description: description,
      price: price,
    };
    props.onAddMedicine(obj);
  };
  return (
    <section className={classes.summary}>
      <form onSubmit={submitHandler}>
        <label>Medicine Name</label>
        <input type="text" ref={nameRef} required></input>
        <label>Description</label>
        <input type="text" ref={descRef} required></input>
        <label>Price</label>
        <input type="number" ref={priceRef} required></input>
        <button> Add Medicine </button>
      </form>
    </section>
  );
};

export default AddMedicine;
