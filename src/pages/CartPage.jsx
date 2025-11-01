// src/pages/CartPage.jsx
import React, { useEffect } from "react";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import EmptyCart from "../components/cart/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import {decryptData } from "../common/commonFunction";
import { fetchCartItems } from "../redux/actions/cartActions";
import Loader from "../utils/Loader";

const CartPage = () => {
  const dispatch = useDispatch();
  const {cart, loading} = useSelector((state) => state.cartState);


  const total = cart?.products?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    decryptData
    const userId = decryptData(localStorage.getItem("userId"));
    dispatch(fetchCartItems(userId));
  }, [])

  if(loading) {
    return <Loader/>;
  }

  if (!cart || !cart.products?.length) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Shopping Cart</h1>

      {/* Cart Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cart.products.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Cart Summary */}
      <CartSummary products={cart.products} total={total} />
    </div>
  );
};

export default CartPage;
