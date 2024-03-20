'use client';

import styles from './page.module.css';
import { Shadow } from '@/components/Utils/utils';
import { DateInput, TextInput } from '@/components/Form/input';
import Planedesc from '../../components/Planedesc/planedesc';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useData } from '../../context/DataContext';
import { Switch } from '@mui/material';
import Search from '../../public/images/search-white.svg';
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
import { TiUserOutline } from 'react-icons/ti';
import { RiPriceTag3Line } from 'react-icons/ri';
import Link from 'next/link';
import { HiOutlineGlobeAlt } from 'react-icons/hi2';
import { IoAirplaneSharp } from 'react-icons/io5';
const Listing = ({ id }) => {
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
    pax: 1,
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
    console.log('formData', formData);
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
  const handleInputChange = (field, e) => {
    const { name, value } = e.target;
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
        classname={`${styles.Top_container} bottom-[30px] mx-[30px] relative  lg:relative sm:static drop-shadow-xl bg-white px-7 py-7`}
      >
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center pb-4 text-sm">
            <div className="flex gap-5">
              <div className="flex items-center">
                <TiUserOutline className="text-base" />
                <select
                  className="border-none focus:outline-none"
                  name="pax"
                  value={formData?.pax}
                  onChange={(e) => handleInputChange('pax', e)}
                  defaultValue={'1'}
                >
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults</option>
                  <option value="5">5 Adults</option>
                  <option value="6">6 Adults</option>
                  <option value="7">7 Adults</option>
                  <option value="8">8 Adults</option>
                  <option value="9">9 Adults</option>
                  <option value="10">10 Adults</option>
                </select>
              </div>
              <div className="flex">
                <RiPriceTag3Line className="text-base" />
                <select className="border-none focus:outline-none">
                  <option value="Commercial">Commercial</option>
                  <option value="Commercial">Chartered</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              Looking for Air Ambulance Service?
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 grid grid-cols-12 gap-2 md:flex-col md:mb-3 sm:flex-col sm:mb-3 bg-primary/20 px-3">
              <div className="col-span-5 grid grid-cols-2">
                <div className="col-span-1 flex gap-3 items-center">
                  <IoAirplaneSharp className="min-w-[25px] min-h-[25px] p-1 border border-white rounded-full flex justify-center items-center" />
                  <input
                    className="bg-transparent py-3 focus:outline-none"
                    name="originLocationCode"
                    type="text"
                    placeholder="Arrival"
                    value={formData.originLocationCode}
                    onChange={(e) => handleInputChange('originLocationCode', e)}
                  />
                </div>
                <div className="col-span-1 flex gap-3 items-center">
                  <IoAirplaneSharp className="min-w-[25px] min-h-[25px] p-1 border border-white rounded-full flex justify-center items-center" />
                  <input
                    className="bg-transparent py-3 focus:outline-none"
                    name="destinationLocationCode"
                    type="text"
                    placeholder="Destination"
                    value={formData.destinationLocationCode}
                    onChange={(e) =>
                      handleInputChange('destinationLocationCode', e)
                    }
                  />
                </div>
              </div>
              <div className="col-span-2 border-l-2 border-white px-5 flex justify-between items-center">
                <input
                  className="col-span-3 bg-transparent py-3 focus:outline-none"
                  name="mobile"
                  type="tel"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e)}
                />
              </div>
              <div className="col-span-5 border-l-2 border-white px-5 flex justify-between items-center">
                <input
                  className="col-span-3 bg-transparent py-3 focus:outline-none"
                  name="departureDate"
                  type="date"
                  value={formData.departureDate}
                  onChange={(e) => handleInputChange('departureDate', e)}
                />
                <hr className="h-1 w-8 bg-white rounded-sm" />
                <select
                  value={formData.countryCode}
                  name="countryCode"
                  onChange={(e) => handleInputChange('countryCode', e)}
                  className="focus:outline-none bg-transparent border-none max-w-52"
                >
                  {countries.map((data) => {
                    return (
                      <option
                        value={data.code}
                        key={data.code}
                        class="text-black "
                      >
                        {data.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="md:justify-center sm:justify-center">
              {isMobile ? (
                <button className="px-14 py-2 rounded-md text-white font-semibold cursor-pointer bg-Bluedark  flex items-center gap-2 mt-2">
                  Search{' '}
                  <Image
                    src={Search}
                    height={23}
                    width={23}
                    alt="search icon"
                  />
                </button>
              ) : (
                <button className="bg-Bluedark flex justify-center items-center h-full w-[55px]">
                  <Image
                    src={Search}
                    height={24}
                    width={24}
                    alt="search icon"
                  />
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
                    console.log('data', data);
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
                        aircraftId={aircraftData.aircraftId}
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
                          aircraftId={aircraftData.aircraftId}
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
