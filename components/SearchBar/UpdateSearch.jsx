import React, { useCallback, useEffect, useState } from 'react';
import styles from './Searchbar.module.css';
import { FaSearch } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import countries from '../../db/country.json';
import 'react-datepicker/dist/react-datepicker.css';
import Loader from '../Utils/Loader';
import _debounce from 'lodash/debounce';
import axios from 'axios';
import SearchButton from '../searchButton/SearchButton';

const InputSearch = (onChange, className, onBlur, value) => {
  return (
    <div className="flex justify-around items-center bg-[#fff] shadow-lg px-2 py-1 h-[50px] w-[200px] rounded">
      <div className="pr-2">
        <FaSearch />
      </div>
      <input
        type="text"
        placeholder="Enter City"
        className={`${className} shadow-2xl bg-[#fff] w-full h-[35px] focus:border-transparent`}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
};

const SampleInput = () => {};
const suggestions = [
  { name: 'New York' },
  { name: 'Los Angeles' },
  { name: 'Chicago' },
  { name: 'Houston' },
  { name: 'Phoenix' },
];

// const AutoSuggestInput = ({
//   name,
//   type,
//   placeholder,
//   onFocus,
//   value,
//   onChange,
//   SearchButton,
//   className,
// }) => {
//   return (
//     <div className="flex justify-around items-center bg-[#fff]  px-2 py-1 h-[50px] w-[200px] rounded shadow-2xl  shadow-[#e2e0e0]">
//       <div className={`pr-2 ${className} flex items-center`}>
//         <FaSearch />
//       </div>
//       <input
//         className={`bg-transparent py-3 focus:outline-none ${styles.InputText}`}
//         name={name}
//         type={type}
//         placeholder={placeholder}
//         onFocus={onFocus}
//         value={value}
//         onChange={onChange}
//       />
//     </div>
//   );
// };

const UpdateSearch = ({
  handleSubmit,
  formData,
  handleInputChange,
  ClassButton,
  isMobile = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [value, setValue] = useState('');
  const [activeInput, setactiveInput] = useState(null);
  const [formattedDate, setFormattedDate] = useState('');
  const [displayText, setDisplayText] = useState('Click here to enter text');
  const [searchResults, setSearchResults] = useState([]);
  const [originFocus, setOriginFocus] = useState(false);
  const [destinationFocus, setDestinationFocus] = useState(false);
  const [originSearch, setOriginSearch] = useState('');
  const [originSearchSelected, setoriginSearchSelected] = useState(null);
  const [destinationSearch, setDestinationSearch] = useState('');
  const [destinationSearchSelected, setdestinationSearchSelected] =
    useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const handleDivClick = (index) => {
    setactiveInput(index);
  };

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

  useEffect(
    (destinationSearch) => {
      if (destinationSearch) {
        searchCity(destinationSearch);
      } else {
        setSearchResults([]);
      }
    },
    [destinationSearch]
  );

  const handleClosePopup = () => {
    setIsOpen(false);
    setValue('');
    setactiveInput(null);
  };

  const handleInputBlur = () => {
    setIsOpen(false);
    setDisplayText(inputValue || 'Click here to enter text');
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    if (activeInput !== null) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [activeInput]);
  const handleDivClickdate = () => {
    setIsOpen(false);
  };

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
    <form onSubmit={handleSubmit} className={`${className}`}>
      <div
        className={`flex justify-center items-center mt-5 mb-5  h-[300px] bg-[] w-[1150px] rounded-md  ${className}`}
      >
        <div
          className={`bg-[#fff] w-[1100px] h-[220px] px-[20px] py-[5px] border-2  rounded-lg flex justify-center  items-center  rounded-5 ${className}`}
        >
          <div className="grid grid-cols-8 gap-0 rounded-5 border border-solid border-gray-300 box-border w-full h-[112px] rounded-[5px] sm:grid-cols-1">
            <div
              className="col-span-2 border-r-2 border-[#e7e7e7] hover:bg-[#e6f2f5]"
              onClick={() => handleDivClick(1)}
            >
              <div className={` rounded-[10px] px-[15px] py-[15px]`}>
                <label for="fromcity">
                  <span className="font-sans text-[15px] font-normal">
                    From
                  </span>
                </label>
                <div className="flex justify-center">
                  {isOpen &&
                  activeInput === 1 &&
                  !originSearchSelected &&
                  !originSearchSelected?.city_name ? (
                    <AutoSuggestInput
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
                  ) : (
                    <div>
                      <div className="flex-1 h-full py-2">
                        <div className="h-full w-fit bg-white text-sm flex items-center py-0.5 pl-2 border-l-2 border-white px-5 ">
                          {originSearchSelected?.city_name}{' '}
                          {originSearchSelected?.iata
                            ? `(${originSearchSelected?.iata})`
                            : null}
                          <FaX
                            className="mx-2 text-black text-xs cursor-pointer"
                            onClick={() => setoriginSearchSelected(null)}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
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
            </div>
            <div
              className="col-span-2 border-r-2 border-[#e7e7e7] hover:bg-[#e6f2f5]"
              onClick={() => handleDivClick(2)}
            >
              <div className={`  rounded-[5px]`}>
                <div
                  className={` hover:bg-[#e6f2f5] rounded-[10px] px-[10px] py-[10px]`}
                >
                  <label for="Tocity">
                    <span className="font-sans text-[15px] font-normal">
                      To
                    </span>
                  </label>
                  <div className="flex justify-center">
                    {isOpen && activeInput === 2 && (
                      <AutoSuggestInput
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
                  </div>
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
                            className="w-full px-3 py-1.5 hover:bg-primary/5 cursor-pointer border-l-2 border-white px-5"
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
                          ></li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-span-1 border-r-2 border-[#e7e7e7] hover:bg-[#e6f2f5]"
              onClick={() => handleDivClick(3)}
            >
              <div
                className={`hover:bg-[#e6f2f5] rounded-[5px] px-[10px] py-[10px] flex flex-col items-center`}
              >
                <label for="depature">
                  <span className="font-sans text-[15px] font-normal">
                    Date
                  </span>
                </label>
                <div className="flex justify-center">
                  {isOpen && activeInput >= 3 && !selectedDate && (
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      // name="departureDate"
                      value={formData.departureDate}
                      placeholderText="Select a date"
                      className="border-none focus:border-transparent"
                      onFocus={(e) => e.target.blur()}
                    />
                  )}
                  {selectedDate ? (
                    <span
                      onClick={() => {
                        {
                          setSelectedDate(null);
                          handleDivClick(4);
                        }
                      }}
                      className="font-sans font-extrabold text-[14px]"
                    >
                      {selectedDate.toDateString()}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-span-1 border-r-2 border-[#e7e7e7] px-[10px] py-[10px]">
              {formData.countryCode ? (
                <div className="flex flex-col">
                  <span className="font-sans text-[15px] font-normal">
                    Country Code
                  </span>
                  <div className="flex justify-center items-center">
                    <div className="bg-white  flex items-center py-0.5 pl-2 border-l-2 border-white px-5 font-sans font-extrabold text-[12px]">
                      {
                        countries.find(
                          (country) => country.code === formData.countryCode
                        )?.name
                      }
                      <FaX
                        className="mx-2 text-black text-xs cursor-pointer"
                        onClick={() =>
                          handleInputChange('countryCode', {
                            target: { name: 'countryCode', value: '' },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div for="countrycode" className="flex flex-col">
                  <span className="font-sans text-[15px] font-normal">
                    Country Code
                  </span>
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
              )}
            </div>
            <div
              className="col-span-2 border-r-2 border-[#e7e7e7] hover:bg-[#e6f2f5]"
              onClick={() => handleDivClick(5)}
            >
              <div className={`  rounded-[5px]  px-[10px] py-[10px]`}>
                <label for="mobile flex flex-col">
                  <span className="font-sans text-[15px] font-normal">
                    {' '}
                    Mobile no.
                  </span>
                  {activeInput === 5 && !formData.mobile ? (
                    <AutoSuggestInput
                      className={`col-span-3 bg-transparent  focus:outline-none  bg-[#fff]  px-2 py-1 h-[50px] w-[240px] rounded shadow-2xl  shadow-[#e2e0e0]  `}
                      name="mobile"
                      type="tel"
                      placeholder="Mobile"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange('mobile', e)}
                    />
                  ) : (
                    <div
                      className="font-sans font-extrabold text-[20px]"
                      onClick={() => handleDivClick(5)}
                    >
                      {formData.mobile}
                    </div>
                  )}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchButton className="relative top-[-65px]" />
    </form>
  );
};

export default UpdateSearch;
