import React from 'react';
import styles from './UpdatecareerCard.module.css';
import Image from 'next/image';
const UpdatecareerCard = ({ image, height, width, headline, descripation }) => {
  return (
    <div class="block rounded-lg bg-white shadow-2xl dark:bg-surface-dark cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-107  duration-30">
      <div className="px-[10px] py-[10px]">
        <Image
          src={image}
          height={height}
          width={width}
          className="w-full h-[200px]"
        />
      </div>
      <div className="p-6 text-surface text-center dark:text-white">
        <h5 className="mb-2 text-xl text-center font-bold">{headline}</h5>
        <p className="mb-4 text-normal text-base">{descripation}</p>
        <button
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white bg-[#19c0f0] transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
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
