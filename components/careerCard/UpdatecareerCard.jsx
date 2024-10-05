import React from "react";
import styles from "./UpdatecareerCard.module.css";
import Image from "next/image";

const UpdatecareerCard = ({
  image,
  height,
  width,
  headline,
  descripation,
  onClick,
}) => {
  return (
    <div
      className="block rounded-lg bg-white shadow-sm dark:bg-surface-dark cursor-pointer transition ease-in-out font-barlow h-full"
      onClick={onClick}
      style={{ height: "100%" }}
    >
      {/* Card Image Section */}
      <div className="px-[10px] py-[10px]">
        <Image
          src={image}
          height={200}
          width={300}
          alt="Qwiklif Air Ambulance"
          layout="responsive"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Card Content Section */}
      <div className="flex flex-col justify-between p-6 text-surface text-center dark:text-white h-[250px]">
        {/* Headline */}
        <h5 className="mb-2 text-lg text-center font-barlow font-black whitespace-nowrap overflow-hidden text-ellipsis">
          {headline}
        </h5>

        {/* Description */}
        <p className="mb-4 text-[16px] font-Inter text-sm overflow-hidden">
          {descripation}
        </p>

        {/* Apply Now Button */}
        <button
          type="button"
          className="inline-block font-barlow font-semibold rounded px-4 py-3 text-base uppercase leading-normal text-white bg-[#19c0f0] transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default UpdatecareerCard;
