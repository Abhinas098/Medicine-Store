import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import CartProvider from "./store/CartProvider";
import Medicines from "./Components/Medicines/Medicines";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const onOpenCart = () => {
    setCartShow(true);
  };

  const onCloseCart = () => {
    setCartShow(false);
  };

  return (
    <CartProvider>
      {cartShow && <Cart onClose={onCloseCart} />}
      <Header onOpen={onOpenCart} />
      <main>
        <Medicines />
      </main>
    </CartProvider>
  );
}

export default App;
