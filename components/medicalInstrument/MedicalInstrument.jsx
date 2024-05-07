import Image from 'next/image';
import React, { useState } from 'react';

const MedicalInstruments = ({ src, width, height, Title, descripation }) => {
  return (
    <div className="flex justify-around flex-col items-center mr-[5px]">
      <Image src={src} width={width} height={height} />
      <div className="font-black text-[8px] font-sans ml-3 ">{Title}</div>
      <div className="text-[12px] font-sans font-medium ml-2">
        {descripation}
      </div>
    </div>
  );
};

export default MedicalInstruments;
