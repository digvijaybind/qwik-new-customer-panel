import React from 'react'
import AvailableSearchLocations from './AvailableSearchLocations';


const SearchTravellersCard = ({
  label,
  index,
  isOpen,

}) => {
  return (
    <div
      className={`relative w-full h-full col-span-3 sm:col-span-4 hover:bg-card-primary flex flex-col items-start justify-center gap-3 transition-colors duration-300 cursor-pointer ${index !== 1 && 'border-l-2'}`}
    >
      <div className='flex flex-col items-start justify-between gap-2 sm:gap-1 px-4 py-3 sm:px-2 sm:py-1 w-full h-full'>
        <p className='text-[10px] font-normal'>{label}</p>
        <h4 className='text-xl sm:text-sm font-bold whitespace-nowrap'>{label}</h4>
        <p className='text-lg sm:text-xs whitespace-nowrap'>{label}</p>
      </div>
      {isOpen && <AvailableSearchLocations />}
    </div>
  )
}

export default SearchTravellersCard