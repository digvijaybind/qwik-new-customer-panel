import React from "react";

const Loader = ({ className }) => {
  return (
    <svg
      className={`animate-spin h-12 w-12 text-[#55CDF1] ${className ?? ""}`} // Increased size and changed color
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4" // Fixed the `stroke-width` typo to `strokeWidth`
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};
const DedicatedLoader = () => {
  return (
    <div
      className={`w-[590px] h-[210px] border-solid border-[1.5px] border-[#cdcdcd] rounded-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103 
      flex justify-center items-center px-[25px] py-[10px] sm:w-[330px] sm:h-[250px] sm:px-[10px] sm:py-[10px]`}
    >
      <Loader />
    </div>
  );
};

export default DedicatedLoader;
