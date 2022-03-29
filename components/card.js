import React from "react";
import { Icon } from "../icons/appIcons";

const Card = ({ placeholder, item, onRemove }) => {
  if (typeof placeholder !== "undefined") {
    return (
      <div className=" bg-white shadow-lg rounded-lg overflow-hidden md:max-w-sm h-64">
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex flex-col items-center">Empty</div>
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-white shadow-lg rounded-lg overflow-hidden md:max-w-sm h-64">
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-col items-center">
          <Icon name={item.icon} />
          <h1 className=" text-base font-medium">{item.name}</h1>
          <button
            onClick={() => onRemove(item)}
            className="text-sm text-red-500"
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
