import React from 'react';
import AirlineQwiklif from '../../public/images/Map/AirlineQwiklif.gif';
import Image from 'next/image';
const Rotatemap = () => {
  return (
    <div>
      <Image
        src={AirlineQwiklif}
        width="1000"
        height="400"
        className="rounded-md"
      />
    </div>
  );
};

export default Rotatemap;
