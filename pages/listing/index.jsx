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
import SearchBar from '@/components/SearchBar/SearchBar';
import { useSearchParams } from 'next/navigation';
import Layout from '@/components/layout/Layout';

const Listing = ({ id }) => {
  const searchParams = useSearchParams();
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

  const [formData, setFormData] = useState({
    originLocationCode: '',
    destinationLocationCode: '',
    departureDate: '',
    pax: 1,
    countryCode: '',
    mobile: '',
    max: 5,
  });
  const [aircraftData, setAircraftData] = useState({});
  const [departureLocation, setDepartureLocation] = useState();
  const [destinationLocation, setDestinationLocation] = useState();
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const [aircraftDataLoading, setAircraftDataLoading] = useState(false);
  const [aircraftCommercialDataLoading, setCommercialAircraftDataLoading] =
    useState(false);
  const [CharteredData, setcharteredData] = useState({});
  const [Charteredepature, setcharteredDepature] = useState('BOM');
  const [ChartereArrival, setchartereArrival] = useState('DXB');
  const [ChartereId, setchartereId] = useState();
  const [CommericialId, setCommericialId] = useState();
  useEffect(() => {
    if (
      searchParams.has('originLocationCode') &&
      searchParams.has('destinationLocationCode')
    ) {
      const formDetails = {
        originLocationCode: searchParams.get('originLocationCode'),
        destinationLocationCode: searchParams.get('destinationLocationCode'),
        departureDate: searchParams.get('departureDate'),
        pax: searchParams.get('pax'),
        countryCode: searchParams.get('countryCode'),
        mobile: searchParams.get('mobile'),
        max: 5,
      };
      setFormData(formDetails);
      searchFlights(formDetails);
    }
  }, [searchParams]);

  const AvaiapageSubmit = (data) => {
    console.log('formData', data);
  };

  const searchFlights = (data) => {
    setAircraftDataLoading(true);
    setCommercialAircraftDataLoading(true);
    const headers = {
      'Content-Type': 'application/json',
    };

    axios(`http://localhost:8000/customer/customerSearch`, {
      method: 'POST',
      data: data,
      headers: headers,
    })
      .then((response) => {
        setcharteredData(response.data.aviapages);
        setcharteredDepature(response.data.aviapages.responseObj.from);
        setchartereArrival(response.data.aviapages.responseObj.to);
        setchartereId();
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setAircraftDataLoading(false);
      });

    axios(`http://localhost:8000/customer/Amadeusairline`, {
      method: 'POST',
      data: data,
      headers: headers,
    })
      .then((response) => {
        console.log('Response:', response.data.ResponseData);
        setCommericialId(response.data.aircraftId);
        setDepartureLocation(data?.originLocationCode);
        setDestinationLocation(data?.destinationLocationCode);
        setAircraftData(response.data);
        setSelectedCurrency('EUR');
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setCommercialAircraftDataLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchFlights(formData);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };
  const handleInputChange = (field, e) => {
    const { name, value } = e.target;
    console.log('name, value', name, value);
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
      <Image src={Landing} height={420} width={1874} alt="top background" />
      <SearchBar
        className="bottom-10"
        isMobile={isMobile}
        formData={formData}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      <div className="sm:px-5 px-36 w-full sm:mt-5">
        <Shadow
          classname={`w-full font-bold mb-8 text-center p-[10px] grid grid-cols-2 sm:grid-cols-1 sm:grid-rows-2`}
        >
          <button
            className={`border-r-2 sm:border-r-0 font-extrabold cursor-pointer hover:gray col-span-1 `}
          >
            COMMERCIAL
          </button>
          <button className="font-extrabold cursor-pointer hover:opacity-100 col-span-1 sm:border-t-2 ">
            CHARTERED
          </button>
        </Shadow>
        <div className="flex sm:flex-col gap-8 sm:gap-5">
          <div
            className={`grid grid-cols-1 gap-8 w-full h-fit sm:w-full ${
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
            {aircraftCommercialDataLoading ? (
              <div className="flex justify-center items-center h-fit py-10">
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
                        CommericialId={CommericialId}
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
                          CommericialId={CommericialId}
                        />
                      );
                    }
                  )}
              </>
            )}
          </div>
          <div className="grid grid-cols-1 gap-8 w-full h-fit">
            {aircraftDataLoading ? (
              <div className="flex justify-center items-center py-10 h-fit">
                <Loader className="h-6 w-6" />
              </div>
            ) : (
              <>
                {CharteredData?.responseObj?.nearestOperatorWithPrice?.map(
                  (data, index) => {
                    return (
                      <DedicatedCard
                        key={'airacraft-list-item' + index}
                        charteredData={data}
                        AircraftType={data.operator.Aircraft_type}
                        selectedCurrency={selectedCurrency}
                        handleCurrencyChange={handleCurrencyChange}
                        charteredepature={Charteredepature}
                        chartereArrival={ChartereArrival}
                        chartereId={CharteredData.aircraftId}
                      />
                    );
                  }
                )}
              </>
            )}
          </div>
        </div>
        {/* <button className="w-[90%] ml-[50%] transform translate-x-[-50%] rounded-[4px] my-[20px] px-[16px] py-[8px] bg-[#40D1F0] text-white font-[600] text-[14px]">
          Show more results
        </button> */}
      </div>
    </div>
  );
};

export default Listing;
