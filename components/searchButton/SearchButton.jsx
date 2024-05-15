import React from 'react';

const SearchButton = ({className}) => {
  return (
    <div>
      <button
        className={`w-[180px] h-[40px]  font-semibold   left-[500px]  rounded-full text-gray-800   hover:bg-[#85d4e9] hover:text-[#fff] bg-[#19c0f0]  ${className}`}
        style={{
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        Search Now
      </button>
    </div>
  );
};

export default SearchButton;