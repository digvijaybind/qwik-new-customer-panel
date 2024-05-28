import React, { useState } from 'react';
import styles from './UpdateSearch.module.css';
import LeftImage from '../../public/images/inputimages/Flight.svg';
import RightImage from '../../public/images/inputimages/Dropdown.svg';
import UpdateInput from './UpdateInput';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import CustomPhoneInput from './CustomPhoneInput ';
import { useRouter } from 'next/router';
import PhoneInput, {
  getCountries,
  getCountryCallingCode,
} from 'react-phone-number-input';

const CustomCountrySelect = ({ value, onChange, labels, ...rest }) => {
  const countries = getCountries();

  return (
    <div className="flex items-center">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        {...rest}
        className="bg-[#eeee] px-1 py-1 rounded border-r-2 border-gray-400 mr-2"
        style={{ height: '100%' }}
      >
        {countries.map((country) => (
          <option key={country} value={country}>
            +{getCountryCallingCode(country)}
          </option>
        ))}
      </select>
      <div className="h-full border-r border-gray-400"></div>
    </div>
  );
};

const UpdateSearchNew = ({ className, onClick, onSubmit }) => {
  const [formData, setFormData] = useState({
    originLocationCode: '',
    destinationLocationCode: '',
    departureDate: '',
    mobile: '',
    countryCode: '',
    pax: 1,
  });
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handlePhoneChange = (value) => {
    if (typeof value === 'string') {
      const phoneNumber = parsePhoneNumberFromString(value);
      const countryCode = phoneNumber ? phoneNumber.country : '';
      setFormData((prevFormData) => ({
        ...prevFormData,
        mobile: value,
        countryCode: countryCode,
      }));
    }
  };
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
      className={`flex flex-col items-center ${className} py-[20px] px-[20px] bg-[#fff]  rounded-2xl min-w-min`}
    >
      <form onSubmit={handleSubmit} className="flex items-center flex-col">
        <div className={`${styles.container} px-[25px]  rounded-md`}>
          {/*this is From city search Input */}
          
          <div className={`${styles.searchBarSection} mr-2`}>
            <div className="font-sans font-black text-gray-400 text-[17px] mb-1">
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
            <div className="font-sans font-black text-gray-400 text-[17x] mb-1">
              To:
            </div>
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
            <div className="font-sans font-black text-gray-400 text-[17px] mb-1">
              Date:
            </div>
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
            <div className="font-sans font-black text-gray-400 text-[17px] mb-1">
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
                CustomPhoneInput={
                  <CustomPhoneInput
                    placeholderText="Enter Number"
                    placeholderColor="#000"
                  />
                }
                inputComponentProps={{
                  placeholderText: 'Enter Number',
                  placeholderColor: '#000',
                }}
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
