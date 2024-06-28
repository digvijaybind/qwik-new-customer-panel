import React from 'react';
import { IoIosAirplane } from 'react-icons/io'; //import icon to use in header
const Aboutcard = ({ title, descripation }) => {
  return (
    <div className="flex flex-col justify-between items-start px-5 py-10 shadow-2xl shadow-gray-700/90 rounded-md cursor-pointer transition duration-300 hover:scale-104">
      {/*this is for icon */}
      <div className=" bg-[#19c0f0] mb-3 h-10 w-10 flex justify-center items-center rounded-full">
        <IoIosAirplane
          style={{ color: '#fff', height: '40px', width: '30px' }}
        />
      </div>
      {/*this is for title */}
      <div className="font-bold text-xl uppercase mb-2">{title}</div>
      {/*this is for descripation */}
      <div className="font-normal font-sans text-[16px]">{descripation}</div>
    </div>
  );
};

export default Aboutcard;
