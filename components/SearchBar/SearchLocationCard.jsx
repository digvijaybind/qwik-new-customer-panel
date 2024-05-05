import React from 'react'
import { GoArrowSwitch } from "react-icons/go";
import AvailableSearchLocations from './AvailableSearchLocations';


const SearchLocationCard = ({
  label,
  index,
  isOpen,

}) => {
  return (
    <div
      className={`relative w-full col-span-3 hover:bg-card-primary flex flex-col items-start justify-center gap-3 transition-colors duration-300 cursor-pointer ${index !== 1 && 'border-l-2'}`}
    >
      <div className={`flex flex-col items-start gap-2 py-3 w-full h-full justify-center ${index === 1 ? 'pl-4 pr-6' : 'pl-6 pr-4'}`}>
        <p className='text-sm font-normal'>{label}</p>
        <h4 className='text-xl font-bold'>{label}</h4>
        <p className='text-lg'>{label}</p>
      </div>
      {isOpen && <AvailableSearchLocations />}
      {/*  */}
      {index === 1 && <div className='w-fit absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer'>
        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:shadow-md shadow-primary/50 hover:shadow-primary/75 transition-shadow duration-300">
          <GoArrowSwitch size={24} fontWeight={700} />
        </div>
      </div>}
    </div>
  )
}

export default SearchLocationCard