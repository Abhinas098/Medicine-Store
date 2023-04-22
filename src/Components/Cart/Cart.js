import React, { useContext } from "react";
import CartContext from "../../store/cartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartMedicine from "./CartMedicine";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount}`;
  const ifMedicine = cartCtx.Medicines.length > 0;

  const CartMedicineRemove = (id) => {
    cartCtx.removeMedicine(id);
  };

  const CartMedicineAdd = (Medicine) => {
    console.log(Medicine);
    cartCtx.addMedicine({ ...Medicine, amount: 1 });
  };
  const addProduct = () =>{
    alert('Successfully Orederd')
    props.onClose()
  }

  const Medicines = (
    <ul className={classes["cart-Medicines"]}>
      {cartCtx.Medicines.map((Medicine) => (
        <CartMedicine
          key={Medicine.id}
          name={Medicine.name}
          amount={Medicine.amount}
          price={Medicine.price}
          onRemove={CartMedicineRemove.bind(null, Medicine.id)}
          onAdd={CartMedicineAdd.bind(null, Medicine)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {Medicines}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        {ifMedicine && <button  onClick={addProduct} className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
