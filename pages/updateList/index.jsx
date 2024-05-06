'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateSearch from '@/components/SearchBar/UpdateSearch';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css';
import UpdatedDedicated from '@/components/dedicatedCard/UpdatedDedicated';
import MobileSearch from '@/components/mobileSearch/MobileSearch';
import UpdateCommericial from '@/components/commercialCard/UpdateCommericial';
import SearchBar from '@/components/SearchBar/SearchBar';
import Selectionbutton from '@/components/selectionButton/Selectionbutton';
import Mobilecard from '@/components/mobileCard/Mobilecard';
import MobileButton from '@/components/selectionButton/MobileButton';
import UpdateMobiletab from '@/components/selectionButton/UpdateMobiletab';
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

    axios(`http://localhost:8000/customer/dedicatedSearch`, {
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

  console.log('aircraftData', aircraftData);
  console.log('CharteredData', CharteredData);

  return (
    <div>
      <div className="sm:px-[20px] sm:py-[20px] font-sans bg-[#f4f4f4]">
        <div className="flex justify-center items-center">
          {/* <SearchBar
          className="bottom-10"
          isMobile={isMobile}
          formData={formData}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        /> */}
          {/* <MobileSearch
          formData={formData}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        /> */}
          {!isMobile ? (
            <UpdateSearch
              className=""
              isMobile={isMobile}
              formData={formData}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
            />
            // <SearchBar
            //   className="bottom-10"
            //   isMobile={isMobile}
            //   formData={formData}
            //   handleSubmit={handleSubmit}
            //   handleInputChange={handleInputChange}
            // />
          ) : (
            <div className="mt-5 mb-5">
              <MobileSearch
                formData={formData}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
              />
            </div>
          )}
        </div>

        <div className="px-[55px] py-[20px] bg-[#f4f4f4] sm:bg-transparent sm:px-[10px] sm:py-[10px]">
          {!isMobile ? (
            <div className="flex justify-around">
              {' '}
              <Selectionbutton
                selectedTab={selectedTab}
                handleTabChange={handleTabChange}
              />
            </div>
          ) : (
            <UpdateMobiletab
              selectedTab={selectedTab}
              handleTabChange={handleTabChange}
            />
          )}

          {!isMobile ? (
            <div className="grid grid-cols-2 gap-10 mt-[60px] mb-[30px] justify-between px-[10px] sm:px-[0px]">
              <div
                className={`commericial ${
                  styles.CommericialCard
                } shadow-2xl bg-[#fff] rounded-2xl  px-[20px] py-[50px] sm:px-[5px] sm:py-[10px] sm:max-w-4xl   ${
                  selectedTab === 'commercial'
                    ? 'transition ease-in-out delay-150 -translate-y-1 scale-105  duration-300 sm:transition sm:ease-in-out sm:delay-150-translate-y-1 sm:scale-103  sm:duration-300'
                    : ''
                }`}
              >
                <div
                  className={` h-[40px] w-[193px]  font-extrabold flex justify-center items-center rounded-sm relative bottom-[50px] right-[21px] sm:w-[193px]   ${
                    selectedTab === 'commercial'
                      ? 'bg-[#dbebeb] text-[#12B5E4]'
                      : 'bg-[#f5f5f5] text-[#D9D9D9]'
                  }`}
                >
                  Commericial Flight
                </div>
                <div className="grid grid-cols-1 gap-5">
                  <UpdateCommericial isMobile={isMobile} />
                </div>
              </div>
              <div
                className={`dedicated ${
                  styles.DedicatedCard
                } shadow-2xl bg-[#fff] rounded-2xl px-[20px] py-[50px] sm:px-[10px] sm:py-[10px]  ${
                  selectedTab === 'dedicated'
                    ? 'transition ease-in-out delay-150 -translate-y-1 scale-105  duration-300'
                    : ''
                }`}
              >
                <div
                  className={` h-[40px] w-[193px]  font-extrabold flex justify-center items-center rounded-sm relative bottom-[50px] right-[21px]  ${
                    selectedTab === 'dedicated'
                      ? 'bg-[#dbebeb] text-[#12B5E4]'
                      : 'bg-[#f5f5f5] text-[#D9D9D9]'
                  }`}
                >
                  Charter Flight
                </div>
                <div className="grid grid-cols-1 gap-5">
                  <UpdatedDedicated isMobile={isMobile} />
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-5">
              <Mobilecard selectedTab={selectedTab} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateList;
