import React, { useState } from "react";
import { IconHeart, IconMinus, IconPlus } from "@tabler/icons-react";
const CartItem = ({ item, onIncrease, onDecrease }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row items-start gap-5 border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-all duration-200">
      {/* Left: Product Image */}
      <img
        src={item?.imageURL}
        alt={item?.name}
        className="w-full sm:w-36 h-40 object-contain rounded-lg bg-gray-50"
      />

      {/* Right: Product Details */}
      <div className="flex flex-col justify-between w-full">
        {/* Price and Info */}
        <div>
          <p className="text-base sm:text-lg font-semibold text-gray-800">
            ${item?.price}
          </p>
          <h2 className="text-base sm:text-lg font-medium text-gray-900 mt-1">
            {item?.name}
          </h2>
          <p className="text-gray-500 text-sm">{item?.brand}</p>
          <p className="text-gray-500 text-sm">{item?.category}</p>
          <p className="text-gray-500 text-sm mt-1">Size M</p>
        </div>

        {/* Quantity & Favorite */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onDecrease(item?.shoeId)}
              className="border rounded-full p-2 hover:bg-gray-100 transition"
            >
              <IconMinus size={14} />
            </button>
            <span className="text-base font-medium">{item?.quantity}</span>
            <button
              onClick={() => onIncrease(item?.shoeId)}
              className="border rounded-full p-2 hover:bg-gray-100 transition"
            >
              <IconPlus size={14} />
            </button>
          </div>
          <button onClick={() => setIsFavorite(!isFavorite)}>
            <IconHeart
                size={22}
                fill={isFavorite ? "red" : "white"}
                color={isFavorite ? "red" : "gray"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
