import Image from 'next/image';
import React from 'react';

const MedicalInstrumentPayMethod = ({
  src,
  width,
  height,
  Title,
  descripation,
}) => {
  return (
    <div className="flex justify-around flex-row items-center">
      <Image src={src} width={width} height={height} />
      <div className="font-black text-[12px] font-sans ml-3">{Title}</div>
      <div className="text-[12px] font-sans font-medium ml-2">
        {descripation}
      </div>
    </div>
  );
};

export default MedicalInstrumentPayMethod;
