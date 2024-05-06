import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import AvailableSearchLocations from './AvailableSearchLocations';


const SearchDateCard = ({
  label,
  index,
  isOpen,

}) => {
  return (
    <div
      className={`relative w-full h-full col-span-2 sm:col-span-3 hover:bg-card-primary flex flex-col items-start justify-center gap-3 transition-colors duration-300 cursor-pointer ${index !== 1 && 'border-l-2'} ${index === 3 && 'sm:border-l-0'}`}
    >

      <div className='flex flex-col items-start justify-between gap-2 sm:gap-1 px-4 py-3 sm:px-2 sm:py-1 w-full h-full'>
        <div className="flex items-center gap-2 sm:gap-1">
          <p className='text-sm sm:text-[10px] font-normal'>{label}</p>
          <FaAngleDown size={18} className='text-primary' />
        </div>
        <h4 className='text-xl sm:text-sm font-bold whitespace-nowrap'>{label}</h4>
        <p className='text-lg sm:text-xs whitespace-nowrap'>{label}</p>
      </div>
      {isOpen && <AvailableSearchLocations />}
    </div>
  )
}

export default SearchDateCard