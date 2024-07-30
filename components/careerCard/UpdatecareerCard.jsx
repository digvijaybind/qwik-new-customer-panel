import React from "react";
import styles from "./UpdatecareerCard.module.css";
import Image from "next/image";
const UpdatecareerCard = ({ image, height, width, headline, descripation }) => {
  return (
    <div className="block rounded-lg bg-white shadow-sm dark:bg-surface-dark cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-107  duration-30 font-poppins">
      <div className="px-[10px] py-[10px]">
        <Image
          src={image}
          height={height}
          width={width}
          alt="Qwiklif Air Ambulance"
          className="w-full h-[200px]"
        />
      </div>
      <div className="p-6 text-surface text-center dark:text-white">
        <h5 className="mb-2 text-lg text-center font-poppins font-medium">
          {headline}
        </h5>
        <p className="mb-4 text-normal font-poppins text-sm">{descripation}</p>
        <button
          type="button"
          className="inline-block  font-semibold rounded  px-6 pb-2 pt-2.5 text-xs uppercase leading-normal text-white bg-[#19c0f0] transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 font-poppins"
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default UpdatecareerCard;
