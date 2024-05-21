import React from 'react';
import styles from './UpdateSearch.module.css';
import LeftImage from '../../public/images/inputimages/Flight.svg';
import RightImage from '../../public/images/inputimages/Dropdown.svg';
import UpdateInput from './UpdateInput';
const UpdateSearchNew = ({ className }) => {
  return (
    <div
      className={`flex flex-col items-center ${className} py-[20px] bg-[#fff]  rounded-2xl min-w-min`}
    >
      <div className={`${styles.container} px-[30px]  rounded-md`}>
        {/*this is From city search Input */}
        <div className={`${styles.searchBarSection} mr-2`}>
          <div className="font-sans font-black text-[21px] mb-5">From:</div>
          {/*input from city search bar */}
          <UpdateInput
            type="text"
            LeftImage={LeftImage}
            RightImage={RightImage}
            RightIcon={true}
            LeftIcon={true}
            placeholder="Enter City"
          />
        </div>

        {/* this is To or arrival location serach bar Input */}
        <div className={`${styles.searchBarSection} mr-2`}>
          <div className="font-sans font-black text-[21px] mb-5">To:</div>
          {/*input from city search bar */}
          <UpdateInput
            type="text"
            LeftImage={LeftImage}
            RightImage={RightImage}
            RightIcon={true}
            LeftIcon={true}
            placeholder="Enter City"
          />
        </div>

        {/*this is depature date  section */}
        <div className={`${styles.searchBarSection} mr-2`}>
          <div className="font-sans font-black text-[21px] mb-5">Date:</div>
          {/*input from city search bar */}
          <UpdateInput
            type="date"
            LeftImage={LeftImage}
            RightImage={RightImage}
            RightIcon={false}
            LeftIcon={false}
          />
        </div>
        {/* this is country code */}
        <div className={`${styles.searchBarSection} mr-2`}>
          <div className="font-sans font-black text-[21px] mb-5">
            Country code:
          </div>
          {/*input from city search bar */}
          <UpdateInput
            type="text"
            LeftImage={LeftImage}
            RightImage={RightImage}
            RightIcon={false}
            LeftIcon={false}
            placeholder="Enter country code"
          />
        </div>
        {/* this is mobile number */}
        <div className={`${styles.searchBarSection} mr-2`}>
          <div className="font-sans font-black text-[21px] mb-5">
            Mobile Number:
          </div>
          {/*input from city search bar */}
          <UpdateInput
            type="text"
            LeftImage={LeftImage}
            RightImage={RightImage}
            RightIcon={false}
            LeftIcon={false}
            placeholder="Enter a mobile number"
          />
        </div>
      </div>
      <button
        className={`font-sans font-black text-[18px] ${styles.searchButton} px-[20px] py-[20px] rounded-full flex justify-center items-center mt-3`}
      >
        {' '}
        Search Now
      </button>
    </div>
  );
};

export default UpdateSearchNew;
