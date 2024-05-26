import React, { useState } from 'react';
import styles from './UpdateSearch.module.css';
import LeftImage from '../../public/images/inputimages/Flight.svg';
import RightImage from '../../public/images/inputimages/Dropdown.svg';
import UpdateInput from './UpdateInput';
import PhoneInput from 'react-phone-number-input';
import { valuesIn } from 'lodash';

const UpdateSearchNew = ({
  formData,
  setformData,
  className,
  onClick,
  onSubmit,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((previouformdata) => ({
      ...previouformdata,
      [name]: value,
    }));
  };

  return (
    <div
      className={`flex flex-col items-center ${className} py-[20px] bg-[#fff]  rounded-2xl min-w-min`}
    >
      <form onSubmit={onSubmit} className='flex items-center flex-col'>
        <div className={`${styles.container} px-[25px]  rounded-md`}>
          {/*this is From city search Input */}
          <div className={`${styles.searchBarSection} mr-2`}>
            <div className="font-sans font-black text-[15px] mb-8">From:</div>
            {/*input from city search bar */}
            <UpdateInput
              type="text"
              LeftImage={LeftImage}
              RightImage={RightImage}
              RightIcon={true}
              LeftIcon={true}
              placeholder="Enter City"
              name="originLocationCode"
              value={formData.originLocationCode}
              onChange={handleChange}
            />
          </div>

          {/* this is To or arrival location serach bar Input */}
          <div className={`${styles.searchBarSection} mr-2`}>
            <div className="font-sans font-black text-[15px] mb-8">To:</div>
            {/*input from city search bar */}
            <UpdateInput
              type="text"
              LeftImage={LeftImage}
              RightImage={RightImage}
              RightIcon={true}
              LeftIcon={true}
              placeholder="Enter City"
              name="destinationLocationCode"
              value={formData.destinationLocationCode}
              onChange={handleChange}
            />
          </div>

          {/*this is depature date  section */}
          <div className={`${styles.searchBarSection} mr-2`}>
            <div className="font-sans font-black text-[15px] mb-8">Date:</div>
            {/*input from city search bar */}
            <UpdateInput
              type="date"
              LeftImage={LeftImage}
              RightImage={RightImage}
              RightIcon={false}
              LeftIcon={false}
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
            />
          </div>
          <div className={`${styles.searchBarSection} mr-2 rounded-md`}>
            <div className="font-sans font-black text-[15px] mb-8">
              Mobile Number:
            </div>
            {/*input from city search bar */}

            <div className="flex flex-row rounded-md">
              <PhoneInput
                defaultCountry="AE"
                className={`${styles.phoneInput} rounded-md`}
                placeholder="Enter Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button
          className={`font-sans font-black text-[18px] ${styles.searchButton} px-[15px] py-[10px] rounded-full flex justify-center items-center mt-5 text-[#fff]`}
          onClick={onClick}
        >
          {' '}
          Search Now
        </button>
      </form>
    </div>
  );
};

export default UpdateSearchNew;
