'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateSearch from '@/components/SearchBar/UpdateSearch';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css';
import UpdatedDedicated from '@/components/dedicatedCard/UpdatedDedicated';
import MobileSearch from '@/components/mobileSearch/MobileSearch';
const UpdateList = () => {
  const searchParams = useSearchParams();
  const [isMobile, setIsMobile] = useState(false);
  const [selectedTab, setSelectedTab] = useState('commercial');
  const [airacraftData, setAircraftDataLoading] = useState(false);
  const [aircraftCommercialDataLoading, setCommercialAircraftDataLoading] =
    useState(false);
  const [CharteredData, setcharteredData] = useState({});
  const [Charteredepature, setcharteredDepature] = useState('BOM');
  const [ChartereArrival, setchartereArrival] = useState('DXB');
  const [ChartereId, setchartereId] = useState();
  const [CommericialId, setCommericialId] = useState();
  const [destinationLocation, setDestinationLocation] = useState();
  const [departureLocation, setDepartureLocation] = useState();
  const [aircraftData, setAircraftData] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const [selectedOption, setSelectedOption] = useState('Commericial');
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
  const [formData, setFormData] = useState({
    originLocationCode: '',
    destinationLocationCode: '',
    departureDate: '',
    pax: 1,
    countryCode: '',
    mobile: '',
    max: 5,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    searchFlights(formData);
  };
  const searchFlights = (data) => {
    setAircraftDataLoading(true);
    setCommercialAircraftDataLoading(true);

    const headers = {
      'Content-Type': 'application/json',
    };

    axios(`http://localhost:8000/customer/customerSearch`, {
      method: 'POST',
      headers: headers,
      data: data,
    })
      .then((response) => {
        setcharteredData(response.data.aviapages);
        console.log('Final data response line 116', response.data);
        setcharteredDepature(response.data.aviapages?.Response.from);
        setchartereArrival(response.data.aviapages.Response.to);
        setchartereId();
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setAircraftDataLoading(false);
      });

    axios(`http://localhost:8000/customer/commericialSearch`, {
      method: 'POST',
      headers: headers,
      data: data,
    })
      .then((response) => {
        setCommericialId(response.data.aircraftId);
        setdepatureLocation(data?.originLocationCode);
        setDestinationLocation(data?.destinationLocationCode);
        setAircraftData(response.data);
        setSelectedCurrency('EUR');
      })
      .catch((error) => {
        console.log('Error', error);
      })
      .finally(() => {
        setCommercialAircraftDataLoading(false);
      });
  };

  const handleInputChange = (field, e) => {
    const { name, value } = e.target;
    console.log('name, value', name, value);
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleCurrencyChange = () => {
    setSelectedCurrency(e.target.value);
  };

  const Dedicatedtab =
    selectedTab === 'dedicated'
      ? 'transition ease-in-out delay-150 -translate-y-1 scale-105  duration-300'
      : '';

  return (
    <div className="">
      <div className="">
        {/* <UpdateSearch
          className=""
          isMobile={isMobile}
          formData={formData}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        /> */}

        <MobileSearch
          formData={formData}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      </div>

      <div className="px-[70px] py-[20px] bg-[#f4f4f4] sm:px-[10px] sm:py-[10px]">
        <div className="flex justify-around mt-10">
          {/* <div className="grid grid-cols-3 gap-12">
            <div className="flex flex-col items-start justify-between w-[173px]">
              <div className="text-[12px] font-normal font-sans">
                Select your flight types
              </div>
              <div className="h-[30px] w-[120px] bg-[green] font-sans text-white font-extrabold text-[10px] flex justify-center  items-center text-center rounded">
                ON PRIORITY
              </div>
            </div>
            <div
              className={`commericial-tab h-[55px] w-[173px]  rounded flex justify-center items-center flex-col cursor-pointer  ${
                selectedTab === 'commercial'
                  ? 'bg-[#d9ebf1] border-2  border-[#55CDF1]  text-[#55CDF1]'
                  : 'border-2 border-[#959494]'
              } `}
              onInput={() => handleTabChange('commercial')}
            >
              <label className="mr-4 font-bold" for="radio1" name="radios">
                <input
                  type="radio"
                  name="tab"
                  id="radio1"
                  value="commercial"
                  checked={selectedTab === 'commercial'}
                  onChange={() => handleTabChange('commercial')}
                  className={`mr-2 inline-block ${styles.styledRadio} font-bold`}
                />
                Commercial
              </label>
              <p className="text-[#959494] text-[10px] font-sans font-normal ml-6">
                Price will be adjusted
              </p>
            </div>
            <div
              className={`dedicated-tab  h-[55px] w-[173px] ${
                styles.TabButton
              }  rounded flex justify-center items-center flex-col cursor-pointer  ${
                selectedTab === 'dedicated'
                  ? 'bg-[#d9ebf1] border-2 border-[#55CDF1] text-[#55CDF1]'
                  : 'border-2 border-[#959494]'
              }`}
              onInput={() => handleTabChange('dedicated')}
            >
              <div className="">
                <label className="mr-4 font-bold" for="radio1" name="radios">
                  <input
                    type="radio"
                    name="tab"
                    value="dedicated"
                    checked={selectedTab === 'dedicated'}
                    onChange={() => handleTabChange('dedicated')}
                    className={`mr-2 inline-block ${styles.styledRadio} font-bold`}
                  />
                  Dedicated
                </label>
                <p className="text-[#959494] text-[10px] font-sans font-normal ml-6">
                  Price will be adjusted
                </p>
              </div>
            </div>
          </div> */}

          {/* this is mobile navigation , and this is mobile view  */}
          <div className="Mobile-tab mt-10 flex flex-row items-center justify-between">
            <div className="flex flex-col justify-start">
              <span className="font-sans text-[8px] font-medium">
                Choose Flight Types
              </span>
              <div class="h-[20px] w-[50px] rounded-full bg-gradient-to-r from-green-400 to-green-800 flex justify-center items-center font-extrabold text-[8px] text-[#fff] font-sans">
                {' '}
                Priority
              </div>
            </div>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[120px] h-[50px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleSelectChange}
            >
              <option value="Commericial">Commericial</option>
              <option value="Dedicated">Dedicated</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 mt-[60px] mb-[30px] justify-between px-[20px] sm:px-[0px]">
          <div
            className={`commericial ${
              styles.CommericialCard
            } shadow-2xl bg-[#fff] rounded-2xl px-[30px] py-[50px] sm:px-[5px] sm:py-[10px] sm:max-w-4xl  ${
              selectedTab === 'commercial'
                ? 'transition ease-in-out delay-150 -translate-y-1 scale-105  duration-300 sm:transition sm:ease-in-out sm:delay-150-translate-y-1 sm:scale-103  sm:duration-300'
                : ''
            }`}
          >
            <div
              className={` h-[40px] w-[193px]  font-extrabold flex justify-center items-center rounded-sm relative bottom-[50px] right-[30px] sm:w-[193px]   ${
                selectedTab === 'commercial'
                  ? 'bg-[#dbebeb] text-[#12B5E4]'
                  : 'bg-[#f5f5f5] text-[#D9D9D9]'
              }`}
            >
              Commericial Flight
            </div>
            <UpdatedDedicated />
          </div>
          <div
            className={`dedicated ${
              styles.DedicatedCard
            } shadow-2xl bg-[#fff] rounded-2xl px-[30px] py-[50px] sm:px-[10px] sm:py-[10px]  ${
              selectedTab === 'dedicated'
                ? 'transition ease-in-out delay-150 -translate-y-1 scale-105  duration-300'
                : ''
            }`}
          >
            <div
              className={` h-[40px] w-[193px]  font-extrabold flex justify-center items-center rounded-sm relative bottom-[50px] right-[30px]  ${
                selectedTab === 'dedicated'
                  ? 'bg-[#dbebeb] text-[#12B5E4]'
                  : 'bg-[#f5f5f5] text-[#D9D9D9]'
              }`}
            >
              Charter Flight
            </div>
            <UpdatedDedicated />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateList;
