import React, { useState } from "react";
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";
import { IoMdMale, IoMdFemale } from "react-icons/io";
import AddToCartButton from "./AddToCartButton";
import { IconHeart } from "@tabler/icons-react";

const GenderIcon = ({ gender }) => {
  const IconComponent =
    gender === "MEN" || gender === "KIDS" ? IoMdMale : IoMdFemale;
  return <IconComponent size={20} aria-hidden="true" />;
};

const ShoeCard = React.memo(({ shoe, shoeDetail }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group relative w-full border-2 overflow-hidden rounded-xl shadow-sm hover:shadow-md bg-white mx-1.5 sm:mx-2">
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="p-1 absolute top-0 right-0 z-10 rounded-full transition-colors focus:outline-none"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <IconHeart
          size={22}
          fill={isFavorite ? "red" : "white"}
          color={isFavorite ? "red" : "gray"}
        />
      </button>

      {/* Image Container */}
      <div className="relative h-40 sm:h-56 md:h-64 w-full cursor-pointer">
        <img
          src={shoe?.imageURL}
          alt={shoe?.name}
          onClick={() => shoeDetail(shoe)}
          className="w-full h-full object-cover p-4 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 pb-12 sm:pb-4 relative">
        {/* Top Row */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-sm sm:text-base font-semibold line-clamp-1 pr-2 w-52">
            {shoe?.name}
          </h3>
          <GenderIcon gender={shoe?.gender} />
        </div>

        {/* Price and Rating */}
        <div className="flex justify-between items-center mt-2 md:mt-1">
          <span className="text-base sm:text-lg font-bold">${shoe?.price}</span>
          <div className="flex items-center bg-black/70 text-white text-xs sm:text-sm px-2 py-1 rounded-full">
            <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
            <span className="ml-1">4.5</span>
          </div>
        </div>

        {/* Desktop Add to Cart Button */}
        <div className="hidden sm:block mt-3">
          <AddToCartButton shoe={shoe} />
        </div>
      </div>

      {/* Mobile Add to Cart Button */}
      <div className="sm:hidden absolute bottom-0 left-0 right-0">
        <AddToCartButton
          className="opacity-90 hover:opacity-100 transition-opacity rounded-t-none"
          shoe={shoe}
        />
      </div>
    </div>
  );
});

ShoeCard.displayName = "ShoeCard";

export default ShoeCard;
