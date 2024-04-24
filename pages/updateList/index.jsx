'use client';
import React, { useEffect, useState } from 'react';
import { Shadow } from '@/components/Utils/utils';
import { DateInput, TextInput } from '@/components/Form/input';
import Image from 'next/image';
import axios from 'axios';
import Loader from '@/components/Utils/Loader';
import UpdateSearch from '@/components/SearchBar/UpdateSearch';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css';
import UpdatedDedicated from '@/components/dedicatedCard/UpdatedDedicated';

const UpdateList = () => {
  const searchParams = useSearchParams();
  const [isMobile, setIsMobile] = useState(false);
  const [selectedTab, setSelectedTab] = useState('commercial');
  const [airacraftData, setAircraftDataLoading] = useState(false);
  const [aircraftCommercialDataLoading, setCommercialAircraftDataLoading] =
    useState(false);

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

    axios(`http://localhost:8000/customer/customerSearch`, {});
  };

  const handleInputChange = (field, e) => {
    const { name, value } = e.target;
    console.log('name, value', name, value);
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

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

  const Dedicatedtab =
    selectedTab === 'dedicated'
      ? 'transition ease-in-out delay-150 -translate-y-1 scale-105  duration-300'
      : '';

  return (
    <div className="">
      <div className="">
        <UpdateSearch
          className=""
          isMobile={isMobile}
          formData={formData}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      </div>
      <div className="px-[70px] py-[20px] bg-[#f4f4f4]">
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-12">
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
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-[60px] mb-[30px] justify-between px-[20px]">
          <div
            className={`commericial ${
              styles.CommericialCard
            } shadow-2xl bg-[#fff] rounded-2xl px-[30px] py-[50px] ${
              selectedTab === 'commercial'
                ? 'transition ease-in-out delay-150 -translate-y-1 scale-105  duration-300'
                : ''
            }`}
          >
            <div
              className={` h-[40px] w-[193px]  font-extrabold flex justify-center items-center rounded-sm relative bottom-[50px] right-[30px]  ${
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
            } shadow-2xl bg-[#fff] rounded-2xl px-[30px] py-[50px] ${
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
      {/* <SearchBar
        className="bottom-10"
        isMobile={isMobile}
        formData={formData}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      /> */}
    </div>
  );
};

export default UpdateList;
