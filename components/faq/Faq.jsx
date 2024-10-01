import Link from "next/link";
import React from "react";

const Faq = () => {
  return (
    <div className="flex justify-center items-center  flex-col bg-[#f5fdff] px-20 py-20">
      <div className="font-barlow font-normal text-[24px]">FaQ </div>
      <div className="font-barlow text-[54px] bg-headline-gradient text-transparent">
        Why You Should Choose Our Services.
      </div>
      <div className=""></div>
      <Link href="/">
        <div className="w-[240px] h-[70px] bg-button-gradient mt-8 font-barlow font-semibold text-white flex justify-center items-center text-center rounded-md text-[24px] cursor-pointer hover:shadow-lg transition-shadow duration-300">
          <Link href="/blogs">Load More</Link>
        </div>
      </Link>
    </div>
  );
};

export default Faq;
