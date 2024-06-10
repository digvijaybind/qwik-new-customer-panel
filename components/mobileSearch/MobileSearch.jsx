import React, { useState } from 'react';
import Image from 'next/image';
import Depature from '../../public/images/inputBox/Depature.svg';
import Destination from '../../public/images/inputBox/Destination.svg';
import Phone from '../../public/images/inputBox/Phone.svg';
import Date from '../../public/images/inputBox/Date.svg';
import countries from '../../db/country.json';
import UpdateInputTo from '../updatesearch/UpdateInputTo';
import LeftImage from '../../public/images/inputimages/Flight.svg';
import RightImage from '../../public/images/inputimages/Dropdown.svg';
import CountryFlag from 'react-country-flag';
import UpdateInput from '../updatesearch/UpdateInput';
import PhoneInput, {
  getCountries,
  getCountryCallingCode,
} from 'react-phone-number-input';
import styles from '../updatesearch/UpdateSearch.module.css';
import Select from 'react-select';

const CustomPhoneInput = React.forwardRef(
  ({ value, onChange, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        value={value}
        onChange={onChange}
        {...rest}
        className={styles.customPhoneInput}
        placeholder="Enter Number"
      />
    );
  }
);
const MobileSearch = ({ onClick }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const handleSelectChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(
      countries.find((country) => country.code === countryCode)
    );
  };
  const CustomCountrySelect = ({ value, onChange, labels, ...rest }) => {
    const countries = getCountries();

    const options = countries
      .map((country) => {
        // const countryLabel = labels[country];
        const callingCode = getCountryCallingCode(country);

        if (!callingCode) {
          return null; // Skip this option if the country code is not valid
        }

        return {
          value: country,
          label: (
            <div className="flex items-center">
              <div className="mr-2"> (+{callingCode})</div>
              <CountryFlag
                countryCode={country}
                svg
                style={{ width: '20px', height: '20px' }}
              />
            </div>
          ),
        };
      })
      .filter(Boolean); // Remove any null values from the options array

    return (
      <div className="flex items-center">
        <Select
          {...rest}
          value={options.find((option) => option.value === value)}
          onChange={(option) => onChange(option.value)}
          options={options}
          className=""
          styles={{
            // Custom styles for the select component
            control: (provided) => ({
              ...provided,
              width: '8rem',
              minHeight: '2.5rem',
              backgroundColor: '#eeeee',
              border: 'none',
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor: '#ffffff',
              zIndex: 9999,
            }),
          }}
        />
        {/* <div className="h-full border-r border-gray-400"></div> */}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center font-sans  px-10 py-20  sm:py-2 bg-white borde-2 border-gray-700 shadow rounded relative bottom-20">
      <div className="w-[300px] h-[60px]  flex flex-row items-center rounded-lg mb-2 cursor-pointer">
        <UpdateInput
          LeftImage={LeftImage}
          RightImage={RightImage}
          RightIcon={false}
          LeftIcon={true}
          placeholder="Enter City"
          name="originLocationCode"
        />
      </div>
      <div className="w-[300px] h-[60px]  flex flex-row items-center rounded-lg mb-2 cursor-pointer">
        {/* <div className="text-[15px] font-extrabold">Dubai</div> */}
        <UpdateInputTo
          className="w-full"
          LeftImage={LeftImage}
          RightImage={RightImage}
          RightIcon={false}
          LeftIcon={true}
          placeholder="Enter City"
          name="destinationLocationCode"
        />
      </div>
      <div className="w-[300px] h-[60px] flex flex-row items-center rounded-lg mb-2 cursor-pointer">
        <UpdateInput
          type="date"
          className={`w-full `}
          LeftImage={LeftImage}
          RightImage={RightImage}
          RightIcon={false}
          LeftIcon={false}
        />
      </div>

      <div className="w-[300px] h-[60px]  flex flex-row items-center  rounded-lg mb-2">
        <div className="flex flex-col items-start">
          <PhoneInput
            defaultCountry="AE"
            className={`${styles.phoneInput} rounded-md h-[60px] font-bold text-[14px]`}
            placeholder="Enter Number"
            name="mobile"
            countrySelectComponent={CustomCountrySelect}
            inputComponent={CustomPhoneInput}
          />
        </div>
      </div>
      <button
        className="search bg-[#12B5E4] w-[300px] h-[41px] text-[#fff] text-center rounded-md font-extrabold hover:text-[#000]"
        onClick={onClick}
      >
        Search
      </button>
    </div>
  );
};

export default MobileSearch;
