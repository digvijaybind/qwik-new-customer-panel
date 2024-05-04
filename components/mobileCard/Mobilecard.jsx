import React from 'react';
import UpdateCommericial from '../commercialCard/UpdateCommericial';
import UpdatedDedicated from '../dedicatedCard/UpdatedDedicated';

const Mobilecard = ({ selectedTab }) => {
  return (
    <div className="flex justify-center font-sans">
      {selectedTab === 'commercial' ? (
        <UpdateCommericial />
      ) : (
        <UpdatedDedicated />
      )}
    </div>
  );
};

export default Mobilecard;
