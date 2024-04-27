import React from 'react';
import Depature from '../../public/images/inputBox/Depature.svg';
import Destination from '../../public/images/inputBox/Destination.svg';
import Patience from '../../public/images/inputBox/Patience.svg';
import Phone from '../../public/images/inputBox/Phone.svg';
import Reverse from '../../public/images/inputBox/Reverse.svg';
import telephone from '../../public/images/inputBox/telephone.svg';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Image from 'next/image';

const AutoSuggestInput = ({
  name,
  type,
  placeholder,
  onFocus,
  value,
  onChange,
  className,
}) => {
  return (
    <div className="flex justify-around items-center bg-[#fff]  px-2 py-1 h-[50px] w-[240px] rounded shadow-2xl  shadow-[#e2e0e0]">
      <div className={`pr-2 ${className}`}>
        <FaArrowLeftLong style={{ fontWeight: 'normal' }} />
      </div>
      <input
        className={`bg-transparent py-3 focus:outline-none ${styles.InputText}`}
        name={name}
        type={type}
        placeholder={placeholder}
        onFocus={onFocus}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const MobileSearch = ({
  handleSubmit,
  formData,
  handleInputChange,
  className,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <Image src={Depature} width={24} height={24} />
        <div className="flex justify-start flex-col"></div>
      </div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <button></button>
    </div>
  );
};

export default MobileSearch;
