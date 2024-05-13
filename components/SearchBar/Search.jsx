import React, { useCallback, useEffect, useState } from 'react';
import styles from './Searchbar.module.css';
import { FaSearch } from 'react-icons/fa';
import Autosuggest from 'react-autosuggest';
import DatePicker from 'react-datepicker';
import countries from '../../db/country.json';
import 'react-datepicker/dist/react-datepicker.css';
import Loader from '../Utils/Loader';
import _debounce from 'lodash/debounce';
import axios from 'axios';
import { FaCross, FaX } from 'react-icons/fa6';
import SearchLocationCard from './SearchLocationCard';
import SearchDateCard from './SearchDateCard';
import SearchTravellersCard from './SearchTravellersCard';

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

const Search = ({
  handleSubmit,
  formData,
  handleInputChange,
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

  // bg-[#78D8F4]
  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`relative bg-white w-full h-[220px] px-[25px] py-[40px] mb-20 border-2 rounded-lg flex justify-center items-center`}
      >
        {/* Search Container */}
        <div className="relative grid grid-cols-13 sm:grid-cols-10 rounded-md border-2 overflow-hidden w-full ">
          {/* From */}
          <SearchLocationCard index={1} label={'From'} />

          {/* To */}
          <SearchLocationCard index={2} label={'To'} />

          {/* Departure */}
          <SearchDateCard index={3} label={'Departure'} />

          {/* Return */}
          <SearchDateCard index={4} label={'Return'} />

          {/* Travellers and Class */}
          <SearchTravellersCard index={5} label={'Travellers & Class'} />
        </div>

        <div className="w-fit bg-[#6DDEFF] rounded-full px-6 sm:px-3 py-3 sm:py-1.5 shadow absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <button className={`w-full h-full `}>
            <p className="text-white text-lg sm:text-sm font-semibold sm:font-medium">
              {' '}
              Search Now
            </p>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
