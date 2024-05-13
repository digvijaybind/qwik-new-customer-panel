// import React from 'react'
// import Loader from '../Utils/Loader';

// const AvailableSearchLocations = ({
//     searchResults,
//     setOriginSearchSelected,
//     handleInputChange,
//     setOriginFocus,
//     setSearchResults,
//     originFocus
// }) => {
//     return (
//         <div>
//             <ul
//                 className={`w-full absolute bottom-0 translate-y-full bg-white shadow-md max-h-48 overflow-y-auto ${originFocus ? '' : 'hidden'
//                     }`}
//             >
//                 {searchLoading && (
//                     <div className="w-full flex justify-center py-3">
//                         <Loader />
//                     </div>
//                 )}
//                 {!searchLoading &&
//                     searchResults?.map((location, index) => {
//                         return (
//                             <li
//                                 className="w-full px-3 py-1.5 hover:bg-primary/5 cursor-pointer"
//                                 key={'origin-search-result' + index}
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     setOriginSearchSelected(location);
//                                     handleInputChange('originLocationCode', {
//                                         target: {
//                                             name: 'originLocationCode',
//                                             value: location?.iata ?? location?.city_name,
//                                         },
//                                     });
//                                     setOriginFocus(false);
//                                     setSearchResults([]);
//                                 }}
//                             >
//                                 <p className="flex justify-between">
//                                     <span>{location?.city_name}</span>
//                                     <span className="text-gray-500 font-bold">
//                                         {location?.iata}
//                                     </span>
//                                 </p>
//                                 <p className="text-sm text-gray-400">
//                                     {location?.country_name}
//                                 </p>
//                             </li>
//                         );
//                     })}
//             </ul>
//         </div>
//     )
// }

// export default AvailableSearchLocations

import React from 'react';

const AvailableSearchLocations = () => {
  return <div>AvailableSearchLocations</div>;
};

export default AvailableSearchLocations;
