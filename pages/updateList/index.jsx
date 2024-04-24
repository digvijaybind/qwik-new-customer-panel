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

    axios(`http://localhost:8000/customer/customerSearch`,{
      
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
      <div className="px-[50px] py-[20px]">
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-start justify-between w-[173px]">
              <div className="text-[12px] font-normal font-sans">
                Select your flight types
              </div>
              <div className="h-[30px] w-[120px] bg-[green] font-sans text-white font-extrabold text-[10px] flex justify-center  items-center text-center rounded">
                ON PRIORITY
              </div>
            </div>
            <div
              className={`commericial-tab h-[55px] w-[173px]  border-2 border-[#959494] rounded flex justify-center items-center flex-col cursor-pointer  ${
                selectedTab === 'commercial'
                  ? 'bg-[#d9ebf1]  border-[#55CDF1] border-2 text-[#55CDF1]'
                  : ''
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
                  className={`mr-2 inline-block ${styles.styledRadio}`}
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
              } border-2 border-[#959494] rounded flex justify-center items-center flex-col cursor-pointer  ${
                selectedTab === 'dedicated'
                  ? 'bg-[#d9ebf1]  border-[#55CDF1] border-2 text-[#55CDF1]'
                  : ''
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
                    className={`mr-2 inline-block ${styles.styledRadio} font-extrabold`}
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
        <div className="grid grid-cols-2 gap-10">
          <div className={`commericial ${styles.CommericialCard} `}></div>
          <div className={`dedicated ${styles.DedicatedCard}`}></div>
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
