import React from 'react'
import AvailableSearchLocations from './AvailableSearchLocations';


const SearchTravellersCard = ({
  label,
  index,
  isOpen,

}) => {
  return (
    <div
      className={`relative w-full col-span-3 hover:bg-card-primary flex flex-col items-start justify-center gap-3 transition-colors duration-300 cursor-pointer ${index !== 1 && 'border-l-2'}`}
    >
      <div className='flex flex-col items-start gap-2 px-4 py-3 w-full'>
        <p className='text-sm font-normal'>{label}</p>
        <h4 className='text-xl font-bold'>{label}</h4>
        <p className='text-lg'>{label}</p>
      </div>
      {isOpen && <AvailableSearchLocations />}
    </div>
  )
}

export default SearchTravellersCard