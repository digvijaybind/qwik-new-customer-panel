import React, { useState } from 'react';
import styles from './UpdateSearch.module.css';
import LeftImage from '../../public/images/inputimages/Flight.svg';
import RightImage from '../../public/images/inputimages/Dropdown.svg';
import UpdateInput from './UpdateInput';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { useRouter } from 'next/router';
import CountryFlag from 'react-country-flag';
import Select from 'react-select';
import PhoneInput, {
  getCountries,
  getCountryCallingCode,
} from 'react-phone-number-input';
import { useCallback } from 'react';
import UpdateInputTo from './UpdateInputTo';

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

const UpdateSearchNew = React.memo(
  ({ className, onClick, setFormData, formData = {} }) => {
    const router = useRouter();
    const handleChange = useCallback((e) => {
      const { name, value } = e.target;
      setFormData((formData) => ({
        ...formData,
        [name]: value,
      }));
    }, []);

    const handlePhoneChange = useCallback((value) => {
      if (typeof value === 'string') {
        const phoneNumber = parsePhoneNumberFromString(value);
        const countryCode = phoneNumber ? phoneNumber.country : '';
        setFormData((formData) => ({
          ...formData,
          mobile: value,
          countryCode: countryCode,
        }));
      }
    }, []);

    const handleSubmit = async (e) => {
      e.preventDefault();
      router.push({
        pathname: '/searchResponse',
        query: {
          pax: formData?.pax,
          originLocationCode: formData.originLocationCode,
          destinationLocationCode: formData.destinationLocationCode,
          mobile: formData.mobile,
          departureDate: formData.departureDate,
          countryCode: formData.countryCode,
        },
      });
    };

    console.log('formdata', formData);
    return (
      <div
        className={`flex flex-col items-center ${className} py-[30px] px-[20px] bg-[#fff]  rounded min-w-min shadow-2xl shadow-cyan-300/50`}
      >
        <form onSubmit={handleSubmit} className="flex items-center flex-col">
          <div className={`${styles.container} px-[25px]  rounded-md`}>
            {/*this is From city search Input */}

            <div className={`${styles.searchBarSection} mr-2`}>
              <div className="font-sans font-medium text-[#000] text-[17px] mb-3">
                From:
              </div>
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
              <div className="font-sans font-medium text-[#000] text-[17x] mb-3">
                To:
              </div>
              {/*input from city search bar */}
              <UpdateInputTo
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
              <div className="font-sans font-medium text-[#000] text-[17px] mb-3">
                Date:
              </div>
              {/* input from city search bar */}
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
              <div className="font-sans font-medium text-[#000] text-[17px] mb-3">
                Mobile Number:
              </div>
              {/*input from city search bar */}

              <div className="flex flex-row rounded-md">
                <PhoneInput
                  defaultCountry="AE"
                  className={`${styles.phoneInput} rounded-md h-[60px] font-bold text-[14px]`}
                  placeholder="Enter Number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handlePhoneChange}
                  countrySelectComponent={CustomCountrySelect}
                  inputComponent={CustomPhoneInput}
                />
              </div>
            </div>
          </div>
          <button
            className={`font-sans font-black text-[18px] ${styles.searchButton} px-[20px] py-[20px] rounded-full flex justify-center items-center mt-10 text-[#fff] `}
            onClick={onClick}
          >
            {' '}
            Search Now
          </button>
        </form>
      </div>
    );
  }
);

export default UpdateSearchNew;
