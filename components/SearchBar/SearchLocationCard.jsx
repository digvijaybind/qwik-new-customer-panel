import React from 'react'
import { GoArrowSwitch } from "react-icons/go";
import AvailableSearchLocations from './AvailableSearchLocations';


const SearchLocationCard = ({
  label,
  index,
  isOpen
}) => {
  return (
    <div className={`relative w-full col-span-3 sm:col-span-5 sm:border-b-2 hover:bg-card-primary flex flex-col items-start justify-center gap-3 transition-colors duration-300 cursor-pointer ${index !== 1 && 'border-l-2'}`}>
      <div className={`flex flex-col items-start justify-between gap-2 sm:gap-1 px-4 py-3 sm:px-2 sm:py-1 w-full h-full ${index === 1 ? '!pl-4 !pr-6' : '!pl-6 !pr-4'}`}>
        <p className='text-[10px] font-normal'>{label}</p>
        <h4 className='text-xl sm:text-sm font-bold whitespace-nowrap'>{label}</h4>
        <p className='text-lg sm:text-xs whitespace-nowrap'>{label}</p>
      </div>
      {isOpen && <AvailableSearchLocations />}
      {/*  */}
      {index === 1 && <div className='w-fit absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer'>
        <div className="bg-white rounded-full w-10 sm:w-8 h-10 sm:h-8  flex items-center justify-center shadow hover:shadow-md shadow-primary/50 hover:shadow-primary/75 transition-shadow duration-300">
          <GoArrowSwitch size={20} fontWeight={700} />
        </div>
      </div>}
    </div>
  )
}

export default SearchLocationCard