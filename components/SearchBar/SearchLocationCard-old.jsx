import React from 'react'
import styles from './Searchbar.module.css';
import SearchAutoSuggestionInput from './SearchAutoSuggestionInput';
import AvailableSearchLocations from './AvailableSearchLocations';
import { FaX } from 'react-icons/fa6';



const SearchLocationCard = ({
  label,
  index,
  handleDivClick,
  isOpen,
  setIsOpen,
  activeInput,
  originSearchSelected,
  setOriginFocus,
  formData,
  setOriginSearch,
  handleInputChange,
  setoriginSearchSelected,
  originFocus,
  searchLoading,
  searchResults,
  setSearchResults,
  location
}) => {
  return (
    <div
      className={`hover:bg-[#e6f2f5] rounded-[10px] px-[15px] py-[15px]`}
    // onClick={() => handleDivClick(index)}
    >
      <label for={label + '-city'}>
        <span className="font-sans text-sm font-normal capitalize">
          {label}
        </span>
      </label>

      {isOpen ? (
        <SearchAutoSuggestionInput
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

      <AvailableSearchLocations />
    </div>
  )
}

export default SearchLocationCard



// import React from 'react'

// const SearchLocationCard = ({index}) => {
//   return (
//     <div className={`w-full ${index !== 1 && 'border-l-2' }`}>SearchLocationCard</div>
//   )
// }

// export default SearchLocationCard