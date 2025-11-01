// src/components/CartSummary.jsx
import React from "react";

const CartSummary = ({ products, total }) => {
  return (
    <div className="mt-12 bg-neutral-900 rounded-2xl p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Order Summary</h2>
      <div className="flex justify-between text-lg mb-2">
        <span>Total Items:</span>
        <span>{products.length}</span>
      </div>
      <div className="flex justify-between text-lg mb-4">
        <span>Total Price:</span>
        <span>${total}</span>
      </div>
      <button className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-all">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
