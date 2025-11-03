import React from "react";

const CartSummary = ({ products, total }) => {
  const delivery = 10;
  const subtotal = total;
  const grandTotal = subtotal + delivery;

  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Cart Summary</h2>

      <div className="flex justify-between mb-3 text-gray-700">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mb-3 text-gray-700">
        <span>Estimated Delivery & Handling</span>
        <span>${delivery.toFixed(2)}</span>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>${grandTotal.toFixed(2)}</span>
      </div>

      <div className="mt-6 flex flex-col gap-4">
      <div className="flex">
              <input
                type="email"
                placeholder="Enter coupon code"
                className="flex-1 px-4 py-1.5 border border-gray-300 rounded-l-md focus:outline-none focus:ring-[0.5px] focus:ring-gray-900 text-black"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition">
                Apply
              </button>
            </div>
        <button className="w-full bg-black text-white font-semibold py-3 rounded-full hover:opacity-90 transition">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
