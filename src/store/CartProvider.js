import React, { useReducer } from "react";
import CartContext from "./cartContext";

const defaultCartState = {
  Medicines: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.Medicine.price * action.Medicine.amount;

    const existingMedicineIndex = state.Medicines.findIndex(
      (Medicine) => Medicine.id === action.Medicine.id
    );
    const existingCartMedicine = state.Medicines[existingMedicineIndex];

    let updatedMedicines;
    if (existingCartMedicine) {
      const updatedMedicine = {
        ...existingCartMedicine,
        amount: existingCartMedicine.amount + action.Medicine.amount,
      };
      updatedMedicines = [...state.Medicines];
      updatedMedicines[existingMedicineIndex] = updatedMedicine;
    } else {
      updatedMedicines = state.Medicines.concat(action.Medicine);
    }
    return {
      Medicines: updatedMedicines,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingMedicineIndex = state.Medicines.findIndex(
      (Medicine) => Medicine.id === action.id
    );
    const existingMedicine = state.Medicines[existingMedicineIndex];
    const updateTotalAmount = state.totalAmount - existingMedicine.price;

    let updatedMedicines;
    if (existingMedicine.amount === 1) {
      updatedMedicines = state.Medicines.filter(
        (Medicine) => Medicine.id !== action.id
      );
    } else {
      const updatedMedicine = {
        ...existingMedicine,
        amount: existingMedicine.amount - 1,
      };
      updatedMedicines = [...state.Medicines];
      updatedMedicines[existingMedicineIndex] = updatedMedicine;
    }
    return {
      Medicines: updatedMedicines,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addMedicineToCart = (Medicine) => {
    dispatchCartAction({ type: "ADD", Medicine: Medicine });
  };
  const removeMedicineFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    Medicines: cartState.Medicines,
    totalAmount: cartState.totalAmount,
    addMedicine: addMedicineToCart,
    removeMedicine: removeMedicineFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
