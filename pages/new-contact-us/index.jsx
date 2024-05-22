import React from 'react';
import styles from './new-contact-us.module.css';
import HeaderBanner from '../../public/images/contact-us/HeaderBanner.svg';
import Image from 'next/image';
const ContactUs = () => {
  return (
    <div className={`${styles.Container}`}>
      <div className={`${styles.Banner} flex justify-center items-center`}>
        <div className="font-sans font-black text-[35px] text-[#fff]">
          {' '}
          TALK TO THE <br />
          QWIKLIF TEAM
        </div>
      </div>
      <div
        className={`${styles.GetQuoteWrapper} px-[100px] mt-5 flex justify-center w-full`}
      >
        <div className={`${styles.GetQuote} flex flex-col justify-center `}>
          <div className="font-sans flex justify-center font-black text-[30px] text-[#262626] shadow-2xl px-[120px]">
            Get Quote Now
          </div>
          <form className="flex flex-col justify-center  px-[50px] py-[20px] bg-[#fff]">
            <label className="font-bold text-[15px] bg-[#fff] mt-2 font-sans">
              From : -
            </label>
            <input
              type="text"
              id="fname"
              name="From"
              placeholder="From"
              className="w-full h-[40px] border-2 border-gray-200 rounded px-[40px] mt-2"
            />
            <label
              for="fname"
              className="font-bold text-[15px] bg-[#fff] mt-2 font-sans"
            >
              To:-
            </label>
            <input
              type="text"
              id="fname"
              name="From"
              placeholder="To"
              className="w-full h-[40px] border-2 border-gray-200 rounded px-[40px] mt-2"
            />
            <label
              for="fname"
              className="font-bold text-[15px] bg-[#fff] mt-2 font-sans"
            >
              Full name :-
            </label>
            <input
              type="text"
              id="fname"
              name="Full Name"
              placeholder="Full Name"
              className="w-full h-[40px] border-2 border-gray-200 rounded px-[40px] mt-2"
            />
            <div className="flex justify-between flex-row">
              <div className="flex flex-col ">
                <label
                  for="fname"
                  className="font-bold text-[15px] bg-[#fff] mt-2 font-sans"
                >
                  Email:-
                </label>
                <input
                  type="text"
                  id="fname"
                  name="Email Address"
                  placeholder="Email "
                  className="w-[300px] h-[40px] border-2 border-gray-200 rounded px-[40px] mt-2"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label
                  for="fname"
                  className="font-bold text-[15px] bg-[#fff] mt-2 font-sans"
                >
                  Phone Number :-
                </label>
                <input
                  type="text"
                  id="fname"
                  name="Phone Number"
                  placeholder="Phone Number"
                  className="w-[300px]  h-[40px] border-2 border-gray-200 rounded px-[40px] mt-2"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button className="font-sans bg-[#19C0F0] px-[20px] py-[20py] rounded-md mt-5 w-[150px] h-[40px] font-extrabold">
                Get Quote
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="our offices flex justify-center flex-col shadow-xl bg-[#fff] mt-5">
        <div className="font-sans flex justify-center font-black text-[30px] text-[#262626] shadow-2xl px-[120px] ">
          Our Office's
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default ContactUs;
