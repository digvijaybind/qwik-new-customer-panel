import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { IoAirplaneSharp } from 'react-icons/io5';
import { RiPriceTag3Line } from 'react-icons/ri';
import { TiUserOutline } from 'react-icons/ti';
import { Shadow } from '../Utils/utils';

import Search from '../../public/images/search-white.svg';
import countries from '../../db/country.json';
import _debounce from 'lodash/debounce';
import axios from 'axios';
import { FaCross, FaX } from 'react-icons/fa6';
import Loader from '../Utils/Loader';

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

  console.log('searchResults', searchResults);
  console.log('originSearchSelected', originSearchSelected);

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
    }, 300),
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
      classname={`mx-36 sm:mx-10 relative lg:relative sm:static drop-shadow-xl bg-white px-7 py-7 ${className} `}
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
          <div className="flex gap-2 items-center sm:hidden">
            Looking for Air Ambulance Service?
          </div>
        </div>
        <div className="flex sm:flex-col">
          <div className="flex-1 grid sm:grid-cols-1 grid-cols-12 gap-2 md:flex-col md:mb-3 sm:flex-col sm:mb-3 bg-primary/20">
            <div className="col-span-5 grid grid-cols-2">
              <div
                className="col-span-1 sm:col-span-2 flex gap-3 items-center relative"
                id="originLocationContainer"
              >
                <IoAirplaneSharp className="min-w-[25px] min-h-[25px] p-1 border border-white rounded-full flex justify-center items-center ml-3" />
                {!originSearchSelected && (
                  <input
                    className="bg-transparent py-3 focus:outline-none"
                    name="originLocationCode"
                    type="text"
                    placeholder="Arrival"
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
                    <div className="h-full w-fit bg-white text-sm flex items-center py-0.5 pl-2">
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
                className="col-span-1 sm:col-span-2 flex gap-3 items-center relative"
                id="destinationLocationContainer"
              >
                <IoAirplaneSharp className="min-w-[25px] min-h-[25px] p-1 border border-white rounded-full flex justify-center items-center ml-3" />
                {!destinationSearchSelected && (
                  <input
                    className="bg-transparent py-3 focus:outline-none"
                    name="destinationLocationCode"
                    type="text"
                    placeholder="Destination"
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
                          className="w-full px-3 py-1.5 hover:bg-primary/5 cursor-pointer"
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
            <div className="col-span-5 border-l-2 border-white px-5 flex sm:flex-col justify-between items-center sm:items-start sm:pb-4">
              <input
                className="bg-transparent py-3 focus:outline-none"
                name="departureDate"
                type="date"
                value={formData.departureDate}
                onChange={(e) => handleInputChange('departureDate', e)}
              />
              <hr className="h-1 w-8 sm:hidden bg-white rounded-sm" />
              <select
                value={formData.countryCode}
                name="countryCode"
                onChange={(e) => handleInputChange('countryCode', e)}
                className="focus:outline-none bg-transparent border-none max-w-52"
              >
                {countries.map((data, index) => {
                  return (
                    <option
                      key={data.code + '' + index}
                      value={data.code}
                      className="text-black "
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
                <Image src={Search} height={23} width={23} alt="search icon" />
              </button>
            ) : (
              <button className="bg-Bluedark flex justify-center items-center h-full w-[55px]">
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
