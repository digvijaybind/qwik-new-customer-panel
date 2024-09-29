import React from "react";
import { useRouter } from "next/router";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Updatecard = ({
  img,
  head,
  text,
  slug,
  description,
  services,
  whyChooseUs,
  contactCTA,
}) => {
  const router = useRouter();
  const handlenavigate = (slug) => {
    router.push({
      pathname: `/services/${slug}`,
    });
  };
  return (
    <div className="flex justify-between sm:justify-stretch flex-row sm:flex-col sm:flex-wrap items-start shadow-md bg-white rounded-[10px] p-[15px] cursor-pointer font-sans transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500 border border-gray-200">
      <div className="w-full h-[100%] sm:h-[50%] overflow-hidden pb-5 rounded-sm sm:pb-2">
        <img src={img} className="w-full h-full object-cover hover:scale-110 duration-500 transition-all" alt="" />
      </div>
      <div className="w-full h-[30%] flex flex-col justify-between px-[15px]">
        <p className="text-[18px] text-center text-[#111] py-[5px] font-bold font-Poppins mb-3 sm:mb-2">
          {head}
        </p>
        <p className="text-[14px] text-center opacity-[90%] font-medium py-[10px] font-Poppins mb-3 sm:mb-2">
          {text}
        </p>

        <button
          className="border-[#396CF0] mt-[10px] mb-[10px] border-[1px] px-[15px] py-[7px] rounded-[5px] font-Poppins font-semibold mx-auto"
          onClick={() => handlenavigate(slug)}
        >
          <p className="text-[#396CF0] flex items-center gap-1 font-Poppins font-medium text-[15px] align-middle">
            See Details <MdOutlineKeyboardArrowRight className="text-xl" />
          </p>
        </button>
      </div>
    </div>
  );
};

export default Updatecard;
