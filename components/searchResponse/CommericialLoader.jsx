import React from "react";
import Loader from "../Utils/Loader";

const CommericialLoader = () => {
  return (
    <div>
      <div className="w-full flex flex-col gap-5">
        <button
          className={`cursor-none flex w-fit gap-1.5 capitalize items-center px-2.5 py-1 rounded-full text-xs ${
            type === "commercial"
              ? "bg-[#EBFDFF] text-primary"
              : "bg-[#FEF6F1] text-[#ED7D2D]"
          }`}
        >
          <img
            src={
              type === "commercial"
                ? "/images/searchResponse/commercialFlight.svg"
                : "/images/searchResponse/charteredFlight.svg"
            }
            alt={`${type} flights`}
            className="w-3"
          />
          {type} Flight
        </button>
        <div className="w-full flex flex-col rounded-md drop-shadow-md bg-white border border-gray-100">
          <Loader />
        </div>
      </div>
    </div>
  );
};

export default CommericialLoader;
