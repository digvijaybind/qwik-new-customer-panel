#fetching of api 

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CommericialApi, DedicatedApi } from '../path/to/your/slices'; // Update the path

const SearchResponse = () => {
  const commericialFlights = useSelector((state) => state.commericial.commericialflights);
  const dedicatedFlights = useSelector((state) => state.dedicated.dedicatedflights);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CommericialApi({ /* payload if needed */ }));
    dispatch(DedicatedApi({ /* payload if needed */ }));
  }, [dispatch]);

  return (
    <div>
      <h2>Commericial Flights:</h2>
      <ul>
        {commericialFlights.map((flight) => (
          <li key={flight.id}>{/* Display flight information here */}</li>
        ))}
      </ul>

      <h2>Dedicated Flights:</h2>
      <ul>
        {dedicatedFlights.map((flight) => (
          <li key={flight.id}>{/* Display flight information here */}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResponse;
