'use client';

import styles from './page.module.css';
import { Shadow } from '@/components/Utils/utils';
import { DateInput, TextInput } from '@/components/Form/input';
import Planedesc from '../../components/Planedesc/planedesc';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useData } from '../../context/DataContext';
import { Switch } from '@mui/material';
import Search from '../../public/images/search.svg';
import CommercialCard from '@/components/commercialCard/CommercialCard';
import Image from 'next/image';
import Landing from '../../public/images/Searchlanding.svg';
import axios from 'axios';
import moment from 'moment-timezone';
import DedicatedCard from '@/components/dedicatedCard/DedicatedCard';
import swal from 'sweetalert';
import CustomDatePicker from '@/components/date/CustomDatePicker';
import AircraftDetailsCard from '@/components/listing/AircraftDetailsCard';
import Loader from '@/components/Utils/Loader';
import countries from '../../db/country.json';
const Listing = () => {
  const { apiData } = useData();
  const [airdata, setAirData] = useState({});

  useEffect(() => {
    // setAirData(JSON?.parse(localStorage?.getItem("aircraft")));
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000); // Change threshold as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const convertTime = (data) => {
    const hours = Math.floor(data); // Extract whole hours
    const minutes = Math.round((data - hours) * 60); // Convert fractional part to minutes and round

    const result = `${hours}h ${minutes}m`;
    return result;
  };

  const url = 'http://localhost:8000/customer/Amadeusairline';
  const [formData, setFormData] = useState({
    originLocationCode: '',
    destinationLocationCode: '',
    departureDate: '',
    pax: 0,
    countryCode: '',
    mobile: '',
    max: 5,
  });
  const [aircraftData, setAircraftData] = useState([]);
  const [departureLocation, setDepartureLocation] = useState();
  const [destinationLocation, setDestinationLocation] = useState();
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const [aircraftDataLoading, setAircraftDataLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAircraftDataLoading(true);
    const headers = {
      'Content-Type': 'application/json',
    };
    axios(`http://localhost:8000/customer/Amadeusairline`, {
      method: 'POST',
      data: formData,
      headers: headers,
    })
      .then((response) => {
        console.log('Response:', response.data.ResponseData);
        setDepartureLocation(formData?.originLocationCode);
        setDestinationLocation(formData?.destinationLocationCode);
        setAircraftData(response.data);

        setSelectedCurrency('EUR');
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setAircraftDataLoading(false);
      });
  };

  console.log('aircraftData', aircraftData);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleCountryCodeChange = (event) => {
    const countryCodeValue = event.target.value;
    handleInputChange('countryCode', countryCodeValue);
  };

  return (
    <div className="font-poppins bg-[#F4F9FD] flex flex-col items-center mb-8">
      <Image src={Landing} height={420} width={1874} />

      <Shadow
        classname={`${styles.Top_container} px-[10px] py-[15px] bottom-[30px]  w-10/12 relative   lg:relative sm:static drop-shadow-xl border-8 border-solid border-[#14B4E3] p-4`}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row items-baseline justify-evenly  md:flex-col md:mb-3  sm:flex-col sm:mb-3 ">
            {/* From Input */}

            <TextInput
              className="w-[220px] md:w-[145px] sm:w-[100%] mr-[20px] md:mb-3 sm:mb-3"
              label="From"
              name="originLocationCode"
              value={formData.originLocationCode}
              onChange={(e) =>
                handleInputChange('originLocationCode', e.target.value)
              }
            />

            <div
              style={{ position: 'relative' }}
              className="mb-[15px] w-[200px] sm:w-[100%] mr-[20px] md:mb-3 sm:md-3"
            >
              <TextInput
                className="w-[220px]  md:w-[145px] sm:w-[100%] mr-[20px]"
                label="To"
                name="destinationLocationCode"
                value={formData.destinationLocationCode}
                onChange={(e) =>
                  handleInputChange('destinationLocationCode', e.target.value)
                }
              />
            </div>

            {/* Date Input */}
            <DateInput
              className="w-[160px] md:w-[145px] sm:w-[100%] mr-[20px] mb-[15px]"
              label="Date"
              name="departureDate"
              value={formData.departureDate}
              onChange={(e) =>
                handleInputChange('departureDate', e.target.value)
              }
            />

            <div>
              <select
                value={formData.countryCode}
                onChange={handleCountryCodeChange}
                className="w-36 h-[40px] text-black px-4 py-2 border rounded-lg  focus:outline-none  border-solid border-1 border-gray-600 mb-[15px]"
              >
                {countries.map((data) => {
                  return (
                    <option
                      value={data.code}
                      key={data.code}
                      class="text-black"
                    >
                      {data.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div class="md:mb-3 sm:mb-3">
              <TextInput
                className="w-[180px] md:w-[145px] sm:w-[100%] mr-[20px]"
                label="Mobile Number"
                name="mobile"
                placeholder="123-456-7890"
                value={formData.mobile}
                onChange={(e) => handleInputChange('mobile', e.target.value)}
              />
            </div>
            <TextInput
              className="w-[90px]  md:w-[145px] sm:w-[100%] mr-[20px] mb-[15px]"
              label="Pax"
              name="pax"
              value={formData.pax}
              onChange={(e) => handleInputChange('pax', e.target.value)}
            />

            <div className="md:justify-center sm:justify-center">
              {isMobile ? (
                <button className="px-20 py-2 rounded-md bg-[#40D1F0] text-xl font-semibold cursor-pointer">
                  Search
                </button>
              ) : (
                <button className="h-[45px] w-[45px] bg-[#40D1F0] flex justify-center align-middle rounded-md items-center shadow-lg hover:shadow-none">
                  <Image src={Search} height={24} width={24} />
                </button>
              )}
            </div>
          </div>
        </form>
      </Shadow>
      <div className="sm:px-10 px-36">
        <Shadow
          classname={`mt-2 w-full font-bold mb-8 text-center p-[10px] flex transform items-center`}
        >
          <button
            className={`border-r-2 w-[50%]   font-extrabold cursor-pointer hover:gray`}
          >
            COMMERCIAL
          </button>
          <button className="w-[50%] font-extrabold cursor-pointer hover:opacity-100">
            CHARTERED
          </button>
        </Shadow>
        {apiData?.nearestOperatorWithPrice?.length > 0 && (
          <p className="my-3 w-[90%] ml-[50%] transform translate-x-[-50%] font-semibold text-sm">
            Showing {apiData?.nearestOperatorWithPrice?.length} results
          </p>
        )}
        <div className="px-[5%] flex justify-between items-stretch flex-wrap">
          {apiData?.nearestOperatorWithPrice?.map((el, i) => (
            <Planedesc
              key={'reesult-item-' + i}
              name={el.operator.Aircraft_type}
              price={Math.ceil(el.price * 10) / 10}
              time={convertTime(el.totalTime)}
              speed={el.operator.speed}
              from={apiData.from}
              to={apiData.to}
            ></Planedesc>
          ))}
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-1 gap-8">
          <div
            class={`grid grid-rows-5 grid-cols-1 gap-8 ${
              isMobile &&
              !(
                aircraftDataLoading ||
                aircraftData?.ResponseData?.AirCraftDatawithNotechStop?.length >
                  0 ||
                aircraftData?.ResponseData?.AirCraftDatawithtechStop?.length > 0
              )
                ? 'hidden'
                : ''
            }`}
          >
            {aircraftDataLoading ? (
              <div className="flex justify-center items-center py-10">
                <Loader className="h-6 w-6" />
              </div>
            ) : (
              <>
                {aircraftData?.ResponseData?.AirCraftDatawithNotechStop?.map(
                  (data, index) => {
                    return (
                      <AircraftDetailsCard
                        key={'airacraft-list-item' + index}
                        aircraftData={data}
                        availticket={
                          aircraftData?.ResponseData?.TicketAvailability
                        }
                        selectedCurrency={selectedCurrency}
                        handleCurrencyChange={handleCurrencyChange}
                        departureLocation={departureLocation}
                        destinationLocation={destinationLocation}
                      />
                    );
                  }
                )}
                {(!aircraftData?.ResponseData?.AirCraftDatawithNotechStop ||
                  aircraftData?.ResponseData?.AirCraftDatawithNotechStop
                    ?.length === 0) &&
                  aircraftData?.ResponseData?.AirCraftDatawithtechStop?.map(
                    (data, index) => {
                      return (
                        <AircraftDetailsCard
                          key={'airacraft-list-item' + index}
                          aircraftData={data}
                          availticket={
                            aircraftData?.ResponseData?.TicketAvailability
                          }
                          selectedCurrency={selectedCurrency}
                          handleCurrencyChange={handleCurrencyChange}
                          departureLocation={departureLocation}
                          destinationLocation={destinationLocation}
                        />
                      );
                    }
                  )}
              </>
            )}
          </div>
          <div class="grid grid-cols-1 gap-8">
            <DedicatedCard />
            <DedicatedCard />
            <DedicatedCard />
            <DedicatedCard />
            <DedicatedCard />
          </div>
        </div>
        <button className="w-[90%] ml-[50%] transform translate-x-[-50%] rounded-[4px] my-[20px] px-[16px] py-[8px] bg-[#40D1F0] text-white font-[600] text-[14px]">
          Show more results
        </button>
      </div>
    </div>
  );
};

export default Listing;
