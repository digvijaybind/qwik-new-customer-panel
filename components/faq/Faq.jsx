import Link from "next/link";
import React, { useState } from "react";
import { homeCollapsable } from "../Utils/Constants";
import { FaMinus, FaPlus } from "react-icons/fa";

// FAQSection Component
const FAQSection = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle expanding/collapsing of the FAQ section
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="w-full border-2 border-opacity-50 border-gray-300 rounded-md transition-all duration-300">
      {/* FAQ header */}
      <div
        className={`flex justify-between items-center px-6 py-4 cursor-pointer ${
          isExpanded ? " text-black" : "bg-[#F1F7FA] text-black"
        } transition-all duration-300 rounded-t-md`}
        onClick={handleToggle}
      >
        <h4 className="font-barlow font-semibold text-[24px] sm:text-sm">
          {title}
        </h4>
        <button className="flex items-center justify-center w-8 h-8">
          {isExpanded ? (
            <div className="">
              <FaMinus className="text-xl" />
            </div>
          ) : (
            <div className="">
              <FaPlus className="text-xl" />
            </div>
          )}
        </button>
      </div>

      {/* Collapsible content */}
      {isExpanded && (
        <div className="bg-[#FBFBFB] px-6 py-4 border-t border-gray-200 rounded-b-md transition-all duration-300">
          <p className="text-gray-700 text-[18px] leading-relaxed font-barlow font-normal">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

// Main Faq Component
const Faq = () => {
  return (
    <div className="flex flex-col items-center bg-[#f5fdff] px-8 py-20">
      {/* FAQ Section Title */}
      <div className="font-barlow text-4xl mb-4">
        Frequently Asked Questions
      </div>

      {/* Section Subheading */}
      <div className="text-4xl sm:text-3xl font-barlow font-bold text-center mb-8 bg-headline-gradient text-transparent bg-clip-text">
        Why You Should Choose Our Services
      </div>

      {/* FAQ list container */}
      <div className="w-full max-w-4xl space-y-8 sm:space-y-4">
        {homeCollapsable.map((item, index) => (
          <FAQSection
            key={index}
            title={item.header}
            description={item.description}
          />
        ))}
      </div>

      {/* Load More Button */}
      <Link href="" legacyBehavior>
        <div className="w-[240px] h-[70px] bg-button-gradient mt-8 font-barlow font-semibold text-white flex justify-center items-center text-center rounded-md text-[24px] cursor-pointer hover:shadow-lg transition-shadow duration-300">
          Load More
        </div>
      </Link>
    </div>
  );
};

export default Faq;
