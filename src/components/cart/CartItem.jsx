// src/components/CartItem.jsx
import React from "react";
import { IconTrash } from "@tabler/icons-react";

const CartItem = ({ item }) => {
  return (
    <div className="bg-neutral-900 rounded-2xl p-5 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all">
      <img
        src={item.imageURL}
        alt={item.name}
        className="w-full h-52 object-cover rounded-xl mb-4"
      />
      <div>
        <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
        <p className="text-gray-400 text-sm mb-2">
          {item.brand} • {item.gender} • {item.category}
        </p>
        <p className="text-lg font-medium mb-2">${item.price}</p>
        <p className="text-gray-400 text-sm mb-2">
          Quantity: <span className="text-white">{item.quantity}</span>
        </p>
        <p className="text-gray-400 text-sm">
          Items Left: <span className="text-white">{item.items_left}</span>
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3">
        <button className="w-full sm:w-auto bg-white text-black px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition-all">
          Checkout
        </button>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-600 px-4 py-2 rounded-xl hover:bg-neutral-800 transition-all">
          <IconTrash size={18} /> Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
