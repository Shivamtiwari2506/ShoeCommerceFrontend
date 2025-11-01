// src/components/CartItem.jsx
import React from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";

const CartItem = ({ item, onIncrease, onDecrease }) => {

  return (
    <div className="bg-neutral-900 rounded-2xl p-5 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all">
      <img
        src={item?.imageURL}
        alt={item?.name}
        className="w-full h-52 object-cover rounded-xl mb-4"
      />

      <div>
        <h2 className="text-xl font-semibold mb-1">{item?.name}</h2>
        <p className="text-gray-400 text-sm mb-2">
          {item?.brand} • {item?.gender} • {item?.category}
        </p>
        <p className="text-lg font-medium mb-4">${item?.price}</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => onDecrease(item?.shoeId)}
            className="bg-neutral-800 p-2 rounded-lg hover:bg-neutral-700 transition"
          >
            <IconMinus size={16} />
          </button>
          <span className="text-white font-medium text-lg">{item?.quantity}</span>
          <button
            onClick={() => onIncrease(item?.shoeId)}
            className="bg-neutral-800 p-2 rounded-lg hover:bg-neutral-700 transition"
          >
            <IconPlus size={16} />
          </button>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="flex justify-center mt-4">
        <button className="w-full bg-white text-black px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition-all">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
