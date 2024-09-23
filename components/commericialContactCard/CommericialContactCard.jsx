"use client";
import React from "react";
import { useRouter } from "next/router";

const CommericialContactCard = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <div
      className={`w-[590px] h-[250px] border border-[#E5E7EB] shadow-lg rounded-lg transition-transform transform ease-in-out duration-300 hover:-translate-y-1 hover:scale-102 flex flex-col justify-between p-6 sm:w-[330px] sm:h-[300px]`}
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="text-xl font-semibold text-[#333]">
          No Commercial Stretcher Flight Available
        </h2>

        <p className="text-gray-600 mt-4 mb-6">
          We currently have no commercial stretcher flights available. For more
          information, please contact our team for assistance.
        </p>

        <div className="text-lg font-bold text-[#55CDF1]">
          Contact QwikLif Team
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          className="w-[180px] h-[50px] bg-[#55CDF1] hover:bg-[#49b7dc] rounded-full font-bold text-white transition-colors duration-200"
          onClick={handleContactClick}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CommericialContactCard;
