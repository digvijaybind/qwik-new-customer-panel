import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { IoAirplaneSharp } from 'react-icons/io5';
import { TiUserOutline } from 'react-icons/ti';
import { Shadow } from '../Utils/utils';
import Search from '../../public/images/search-white.svg';
import countries from '../../db/country.json';
import _debounce from 'lodash/debounce';
import axios from 'axios';
import {  FaX } from 'react-icons/fa6';
import Loader from '../Utils/Loader';
import styles from './Searchbar.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import Pax from '../../db/pax.json';

const SearchBar = ({
  className = '',
  handleSubmit,
  formData,
  handleInputChange,
  isMobile = false,
}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [originFocus, setOriginFocus] = useState(false);
  const [destinationFocus, setDestinationFocus] = useState(false);
  const [originSearch, setOriginSearch] = useState('');
  const [originSearchSelected, setOriginSearchSelected] = useState(null);
  const [destinationSearch, setDestinationSearch] = useState('');
  const [destinationSearchSelected, setDestinationSearchSelected] =
    useState('');
  const [searchLoading, setSearchLoading] = useState(false);



  const searchCity = useCallback(
    _debounce((text) => {
      setSearchLoading(true);
      axios(`http://localhost:8000/all-airports`, {
        method: 'GET',
        params: { q: text },
      })
        .then(({ data }) => {
          setSearchResults(data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setSearchLoading(false);
        });
    }, 400),
    []
  );

  useEffect(() => {
    if (originSearch) {
      searchCity(originSearch);
    } else {
      setSearchResults([]);
    }
  }, [originSearch]);

  useEffect(() => {
    if (destinationSearch) {
      searchCity(destinationSearch);
    } else {
      setSearchResults([]);
    }
  }, [destinationSearch]);

  useEffect(() => {
    const eventHandler = (e) => {
      const originContainer = document.getElementById(
        'originLocationContainer'
      );
      const destinationContainer = document.getElementById(
        'destinationLocationContainer'
      );
      if (originContainer && !originContainer?.contains(e.target)) {
        setOriginFocus(false);
      }
      if (destinationContainer && !destinationContainer?.contains(e.target)) {
        setDestinationFocus(false);
      }
    };
    document.addEventListener('mouseup', eventHandler);

    return () => document.removeEventListener('mouseup', eventHandler);
  }, []);

  return (
    <Shadow
      classname={`mx-36 sm:mx-5 relative lg:relative sm:static drop-shadow-xl bg-white px-7 sm:px-2 py-7 ${className} font-sans`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex justify-between items-center pb-4 text-sm">
          <div className="flex gap-5">
            <div className="flex items-center">
              <TiUserOutline className="text-base" />
              {Pax.map((index, data) => {
                <select
                  className={`border-none focus:outline-none ${styles.SelectText}`}
                  name="pax"
                  value={formData?.pax}
                  key={index}
                  onChange={(e) => handleInputChange('pax', e)}
                >
                  <option value={data.value}>{data.name}</option>
                </select>;
              })}
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col">
          <div className="flex-1 grid sm:grid-cols-1 grid-cols-11 gap-0.3 md:flex-col md:mb-3 sm:flex-col sm:mb-3">
            <div className="col-span-4 grid grid-cols-2 gap-0.3 sm:grid sm:grid-rows-1 sm:gap-2  border-white sm:mb-3">
              <div
                className="col-span-1 sm:col-span-1 flex gap-1 items-center relative border-r-2 border-white px-2 sm:px-5  bg-[#e7e5e5] sm:rounded-lg"
                id="originLocationContainer"
              >
                <IoAirplaneSharp className="min-w-[25px] min-h-[25px] p-1 border border-white rounded-full flex justify-center items-center ml-3 sm:hidden" />
                {!originSearchSelected && (
                  <input
                    className={`bg-transparent py-3 focus:outline-none ${styles.InputText}`}
                    name="originLocationCode"
                    type="text"
                    placeholder="From"
                    onFocus={() => setOriginFocus(true)}
                    value={formData.originLocationCode}
                    onChange={(e) => {
                      setOriginSearch(e.target.value);
                      handleInputChange('originLocationCode', e);
                    }}
                  />
                )}
                {originSearchSelected?.city_name && (
                  <div className="flex-1 h-full py-2">
                    <div className="h-full w-fit bg-white text-sm flex items-center py-0.5 pl-2 border-l-2 border-white px-5 ">
                      {originSearchSelected?.city_name}{' '}
                      {originSearchSelected?.iata
                        ? `(${originSearchSelected?.iata})`
                        : null}
                      <FaX
                        className="mx-2 text-black text-xs cursor-pointer"
                        onClick={() => setOriginSearchSelected(null)}
                      />
                    </div>
                  </div>
                )}
                <ul
                  className={`w-full absolute bottom-0 translate-y-full bg-white shadow-md max-h-48 overflow-y-auto ${
                    originFocus ? '' : 'hidden'
                  }`}
                >
                  {searchLoading && (
                    <div className="w-full flex justify-center py-3">
                      <Loader />
                    </div>
                  )}
                  {!searchLoading &&
                    searchResults?.map((location, index) => {
                      return (
                        <li
                          className="w-full px-3 py-1.5 hover:bg-primary/5 cursor-pointer"
                          key={'origin-search-result' + index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setOriginSearchSelected(location);
                            handleInputChange('originLocationCode', {
                              target: {
                                name: 'originLocationCode',
                                value: location?.iata ?? location?.city_name,
                              },
                            });
                            setOriginFocus(false);
                            setSearchResults([]);
                          }}
                        >
                          <p className="flex justify-between">
                            <span>{location?.city_name}</span>
                            <span className="text-gray-500 font-bold">
                              {location?.iata}
                            </span>
                          </p>
                          <p className="text-sm text-gray-400">
                            {location?.country_name}
                          </p>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div
                className="col-span-1 sm:col-span-1 flex gap-3 items-center  sm:px-5  relative  bg-[#e7e5e5] sm:rounded-lg"
                id="destinationLocationContainer"
              >
                <IoAirplaneSharp className="min-w-[25px] min-h-[25px] p-1 border border-white rounded-full flex justify-center items-center ml-3 sm:hidden" />
                {!destinationSearchSelected && (
                  <input
                    className={`bg-transparent py-3 focus:outline-none ${styles.InputText}`}
                    name="destinationLocationCode"
                    type="text"
                    placeholder="To"
                    onFocus={() => setDestinationFocus(true)}
                    value={formData.destinationLocationCode}
                    onChange={(e) => {
                      setDestinationSearch(e.target.value);
                      handleInputChange('destinationLocationCode', e);
                    }}
                  />
                )}
                {destinationSearchSelected?.city_name && (
                  <div className="flex-1 h-full py-2">
                    <div className="h-full w-fit bg-white text-sm flex items-center py-0.5 pl-2">
                      {destinationSearchSelected?.city_name}{' '}
                      {destinationSearchSelected?.iata
                        ? `(${destinationSearchSelected?.iata})`
                        : null}
                      <FaX
                        className="mx-2 text-black text-xs cursor-pointer"
                        onClick={() => setDestinationSearchSelected(null)}
                      />
                    </div>
                  </div>
                )}
                <ul
                  className={`w-full absolute bottom-0 translate-y-full bg-white shadow-md max-h-48 overflow-y-auto ${
                    destinationFocus ? '' : 'hidden'
                  }`}
                >
                  {searchLoading && (
                    <div className="w-full flex justify-center py-3">
                      <Loader />
                    </div>
                  )}
                  {!searchLoading &&
                    searchResults?.map((location, index) => {
                      return (
                        <li
                          className="w-full px-3 py-1.5 hover:bg-primary/5 cursor-pointer border-l-2 border-white px-5 "
                          key={'destination-search-result' + index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setDestinationSearchSelected(location);
                            handleInputChange('destinationLocationCode', {
                              target: {
                                name: 'destinationLocationCode',
                                value: location?.iata ?? location?.city_name,
                              },
                            });
                            setDestinationFocus(false);
                            setSearchResults([]);
                          }}
                        >
                          <p className="flex justify-between">
                            <span>{location?.city_name}</span>
                            <span className="text-gray-500 font-bold">
                              {location?.iata}
                            </span>
                          </p>
                          <p className="text-sm text-gray-400">
                            {location?.country_name}
                          </p>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className="col-span-2  border-l-2 sm:border-b-2 border-white px-2 sm:px-2 flex  border-r-2   sm:col-span-5  bg-[#e7e5e5] sm:mb-3 sm:rounded-lg">
              <input
                className={`bg-transparent py-3 focus:outline-none sm:max-w-80 ${styles.InputText} flex-1`}
                name="departureDate"
                type="date"
                value={formData.departureDate}
                onChange={(e) => handleInputChange('departureDate', e)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="col-span-2   border-white  sm:p-4 flex sm:col-span-5 bg-[#e7e5e5] sm:mb-3  sm:rounded-lg">
              <select
                value={formData.countryCode}
                name="countryCode"
                onChange={(e) => handleInputChange('countryCode', e)}
                className={`focus:outline-none bg-transparent border-none max-w-48 sm:max-w-80 ${styles.SelectText}`}
              >
                {countries.map((data) => (
                  <option
                    key={data.code} 
                    value={data.code}
                    className="text-black"
                  >
                    {data.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-3 px-3 border-l-2   flex justify-between items-center border-t-2 border-white sm:col-span-5 bg-[#e7e5e5] sm:rounded-lg">
              <input
                className={`col-span-3 bg-transparent py-3 focus:outline-none ${styles.InputText}`}
                name="mobile"
                type="tel"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={(e) => handleInputChange('mobile', e)}
              />
            </div>
          </div>

          <div className="flex md:justify-center sm:justify-center cursor-pointer ">
            {isMobile ? (
              <button className="px-14 py-2 rounded-md text-white font-semibold cursor-pointer bg-[#4B68B8] flex items-center gap-2 mt-2">
                Search{' '}
                <Image src={Search} height={23} width={23} alt="search icon" />
              </button>
            ) : (
              <button className="bg-[#4B68B8] flex justify-center items-center h-full w-[55px]">
                <Image src={Search} height={24} width={24} alt="search icon" />
              </button>
            )}
          </div>
        </div>
      </form>
    </Shadow>
  );
};

export default SearchBar;
