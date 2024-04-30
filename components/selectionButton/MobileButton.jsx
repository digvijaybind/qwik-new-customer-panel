import React from 'react';
import styles from './Selectionbutton.module.css';
const MobileButton = ({ onChange }) => {
  return (
    <div className="mt-10 flex  justify-between font-sans">
      <div className="flex flex-col justify-between items-start">
        <span className="font-sans text-[10px] font-bold">
          Choose Flight Types
        </span>

        <div
          class={`h-[30px] w-[70px] rounded-full bg-gradient-to-r from-green-400 to-green-800 flex justify-center items-center font-extrabold text-[10px] text-[#fff] font-sans ${styles.backgroundContainer}`}
        >
          {' '}
          Priority
        </div>
      </div>

      {/* <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[120px] h-[50px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={() => onChange()}
      >
        <option value="Commericial">Commericial</option>
        <option value="Dedicated">Dedicated</option>
      </select> */}
      <div className="relative">
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[140px] h-[50px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-sans"
          onChange={() => onChange()}
        >
          <option value="Commericial">Commericial</option>
          <option value="Dedicated">Dedicated</option>
        </select>
        <label
          className="absolute left-4 text-gray-900 top-8  text-[8px] font-sans"
          htmlFor="countries"
        >
          Price adjust as subtitle
        </label>
      </div>
    </div>
  );
};

export default MobileButton;
