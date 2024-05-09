import React, { useState } from 'react';

const UpdateHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-end">
      <button
        className="block lg:hidden px-2 text-gray-800 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-75 flex justify-end">
          <div className="bg-white w-2/3 h-full shadow-lg">
            <ul className="">
              <li
                onClick={() => router.push('/')}
                className="font-semibold text-[16px] p-2   hover:gray"
              >
                Home
              </li>
              <li
                onClick={() => router.push('/services')}
                className="font-semibold text-[16px] p-2 hover:gray"
              >
                Services
              </li>
              <li
                onClick={() => router.push('/blog')}
                className="font-semibold text-[16px] p-2 hover:gray"
              >
                Partner with Us
              </li>
              <li className="font-semibold text-[16px] p-2 hover:gray">
                Our Location
              </li>
              <li className="font-semibold text-[16px] p-2 hover:">About</li>
              <li className="font-semibold text-[16px] p-2 hover:">Contact</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateHamburgerMenu;
