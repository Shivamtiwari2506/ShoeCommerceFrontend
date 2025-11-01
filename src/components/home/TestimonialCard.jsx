import { Tooltip } from "antd";
import React from "react";
import { IconUserCircle } from '@tabler/icons-react';

const TestimonialCardComponent = ({ name, message, image, rating }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col flex-none gap-4 hover:shadow-lg hover:scale-105 transition-transform transition-shadow w-96 h-44 border">
      <div className="flex items-center gap-4">
        {image ? <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        /> : <IconUserCircle stroke={2} color="gray" className="w-12 h-12 rounded-full" />}
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < (rating ?? 0) ? "text-yellow-400" : "text-gray-300"}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <Tooltip title={`“${message}”`}>
        <div className="text-gray-600 italic text-sm line-clamp-2 overflow-x-hidden h-10 text-wrap">
          “{message}”
        </div>
      </Tooltip>
    </div>
  );
};

export const TestimonialCard = React.memo(TestimonialCardComponent);
