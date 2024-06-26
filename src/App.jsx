import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";

import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />

      <CartContainer />
    </main>
  );
}
export default App;
