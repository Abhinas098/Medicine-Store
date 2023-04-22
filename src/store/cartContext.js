import React from "react";

const CartContext = React.createContext({
  Medicines: [],
  totalAmount: 0,
  addMedicine: (Medicine) => {},
  removeMedicine: (id) => {},
  getItem: (Medicine) => {},
});

export default CartContext;
