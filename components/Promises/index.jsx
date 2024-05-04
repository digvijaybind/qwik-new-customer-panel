import React from 'react';
import Signature from '../../public/images/dummy-sign.png';
import Image from 'next/image';
const Promises = () => {
  return (
    <div
      style={{ boxShadow: '#000 0px 0px 10px 0px' }}
      className="px-6 py-6 border-r-[8px] font-sans"
    >
      {' '}
      <div className="grid grid-cols-1 items-center ">
        <div className="text-center font-sans font-extrabold">
          OUR GUARANTEE
        </div>
        <p>
          We Guarantee that when choosing Qwiklif, your loved ones shall be
          treated with professional and compassionate care. We consider every
          patient as family, we strive to perfection and continuously monitoring
          our operations. When choosing A provider, Remember that Qwiklif if
          world first Air ambulance service provider who give instant quote and
          support to patient when you come to inquiry itself
        </p>

        <div className="flex items-center flex-col font-sans font-extrabold">
          <Image
            src={Signature}
            height={130}
            width={130}
            className="justify-center"
          />
          <p> Qwiklif CEO</p>
        </div>
      </div>
    </div>
  );
};

export default Promises;
