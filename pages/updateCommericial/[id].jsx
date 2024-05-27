//imported libarray and component
import React, { useEffect, useState } from 'react';
import styles from './updateCommericial.module.css';
import Doctors from '../../public/images/bookingIcon/doctor.png';
import Image from 'next/image';
import Airline from '../../public/images/commerialImages/Airline.svg';
import Strectres from '../../public/images/bookingIcon/strectres.png';
import Oxygen from '../../public/images/bookingIcon/oxygen.svg';
import Medicalequiment from '../../public/images/bookingIcon/medicalEquiment.png';
import Important from '../../db/important.json';
import ImageCarosel from '@/components/Imagecarosel/ImageCarosel';
import Signature from '../../public/images/Signature.svg';
import Point from '../../public/images/PointIcon.svg';
import Arrow from '../../public/images/commerialImages/arrow.svg';
import scheduleFlight from '../../public/images/commerialImages/scheduledFlight.png';
import Sarah from '../../public/images/ourstories/Sarah.jpg';
import John from '../../public/images/ourstories/john.jpg';
import Mircale from '../../public/images/ourstories/Miracle.jpg';
import Olivia from '../../public/images/ourstories/olivia.jpg';
import Emily from '../../public/images/ourstories/Emily.jpg';

//this blogs json
const blogs = [
  {
    image: Sarah,
    title: 'Miracle in the Sky: Sarah',
    description:
      ' Sarah, a young mother, found herself in a life-threatening situation when she experienced sudden cardiac arrest while vacationing in a remote area. Thanks to the swift response of the Qwiklif Air Ambulance team, Sarah was airlifted to a top-tier medical facility within the golden hour. The flying doctors on board provided critical care that stabilized her condition during the flight. Today, Sarah is back with her family, cherishing every moment of her second chance at life',
  },
  {
    image: John,
    title: ' Speeding Against Time: John Story of Survival',
    description:
      'When John, an adventurous hiker, suffered a severe fall in the mountains, his injuries were extensive and time was of the essence. The Qwiklif Air Ambulance paramedics arrived just in time, providing immediate care and rapid transport to a specialized trauma center. The team’s expertise and the aircraft advanced medical equipment played a crucial role in saving John life. Today, John is back on his feet, grateful for the heroes who rescued him.',
  },
  {
    image: Emily,
    title: ' High-Altitude Heroics: Emily Emergency Airlift',
    description:
      'Emily, an avid traveler, faced a critical medical emergency while on a high-altitude trek. Struggling to breathe due to altitude sickness and a pre-existing condition, her situation was dire. Qwiklif Air Ambulance’s rapid response and skilled crew ensured Emily received the oxygen and medical attention she needed during the flight. The seamless coordination between the air and ground teams ensured Emily’s safe transfer to a hospital, where she made a full recovery',
  },
  {
    image: Mircale,
    title: ' A Race Against the Clock: Saving Michael Life',
    description:
      'Michael story is a testament to the power of quick intervention. Suffering from a severe allergic reaction in a rural area, Michael’s condition deteriorated rapidly. Qwiklif Air Ambulance fast deployment and the flight paramedics quick actions kept Michael stable until they reached a well-equipped hospital. Their prompt response and expert care made all the difference, and Michael is now fully recovered and deeply thankful for the team life-saving efforts.',
  },
  {
    image: Olivia,
    title: ' From Crisis to Care: Olivia Flight to Safety',
    description:
      'Olivia, a young child with a rare medical condition, needed urgent specialized care not available locally. The Qwiklif Air Ambulance team quickly mobilized to transfer her to a childre hospital equipped to handle her condition. Throughout the journey, the team provided constant monitoring and care, ensuring Olivia remained stable. Her family watched in awe as the team worked tirelessly, and today, Olivia is thriving, thanks to the timely intervention and exceptional care she received',
  },
  // Add more blog objects as needed
];

//this component related to TravelDuration
const TravelDuration = () => {
  const [value, setValue] = useState(true);
  const handleClick = () => {
    setValue(!value);
  };
  return (
    <div className="border-2 border-[#000] rounded-lg w-full bg-[#fff] ">
      <div className="flex justify-between bg-[#27273F] min-h-[98px] w-full sm:flex-col">
        <div className="grid grid-cols-3 gap-6 px-[10px] py-[20px] items-center">
          <div className="depature font-sans text-[24px] font-black text-[#fff]">
            Mumbai
            <br />
            <span className="font-sans text-[14px] font-normal">india</span>
          </div>
          <div className="arrow">
            <Image src={Arrow} height={18} width={38} className="" />
          </div>
          <div className="arrival depature font-sans text-[24px] font-black text-[#fff]">
            Dubai
            <br />
            <span className="font-sans text-[14px] font-normal">UAE</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 px-[10px] py-[20px]">
          <div
            className={`${
              value ? '' : 'bg-[#12B5E4] rounded-md'
            }  px-[20px] py-[20px] text-[#fff]  cursor-pointer`}
            onClick={() => handleClick()}
          >
            April 27 | 11:00 AM
            <br /> <span className="text-[13px]">Departing</span>
          </div>
          <div
            className={`cursor-pointer ${
              value ? 'bg-[#12B5E4] rounded-md' : ''
            }`}
            onClick={() => handleClick()}
          >
            <div className="px-[20px] py-[20px] text-[#fff] rounded-md ">
              April 27 | 10:00 PM
              <br /> <span className="text-[13px]">Arrival</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[30px] py-[20px]">
        <div className="flex justify-between sm:flex-col">
          <div className="flex justify-around">
            <Image
              src={Airline}
              width={50}
              height={20}
              className="rounded-full "
            />
            <div className=" flex flex-col text-[19px] font-black ">
              Vistara
              <span className="text-[8px] text-[#323232] font-bold ">
                {' '}
                UK 583, UK 848
              </span>
            </div>
          </div>
          <div className="bg-[#e1e1f3] rounded-full w-[174px] sm:h-[40px] text-[#000] shadow-lg text-center  flex items-center justify-center text-[14px] font-bold sm:mt-5">
            Commericial plane
          </div>
        </div>
        <div className="flex justify-start flex-col ">
          <div className="bg-[#EEEEEE] rounded-md font-black flex items-center justify-center text-center h-[50px] sm:h-[30px] w-[201px] mt-5 mb-5 shadow-lg">
            Carriage summary
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-4 px-[20px] sm:grid-cols-1 sm:grid-rows-5 sm:gap-6">
            <div className="flex flex-row">
              <div className="bg-[#daf7ff] w-[45px] h-[40px]  shadow-2xl text-center flex justify-center items-center ">
                <Image
                  src={Strectres}
                  width={25}
                  height={15}
                  className="rounded-full "
                />
              </div>
              <div className=" flex flex-col text-[10px] font-black text-gray-400 ml-3">
                Stretcher :
                <span className="text-[12px] text-[#000000] font-bold ">
                  {' '}
                  1 stretcher per patient
                </span>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="bg-[#daf7ff] w-[45px] h-[40px]  shadow-2xl text-center flex justify-center items-center ">
                <Image
                  src={Doctors}
                  width={25}
                  height={15}
                  className="rounded-full "
                />
              </div>
              <div className=" flex flex-col text-[10px] font-black  text-gray-400 ml-3">
                Doctor onboard :
                <span className="text-[12px] text-[#323232] font-bold ">
                  {' '}
                  2 Doctors, 1 Head nurse, 1 Attendant
                </span>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="bg-[#daf7ff] w-[45px] h-[40px]  shadow-2xl text-center flex justify-center items-center ">
                <Image
                  src={Oxygen}
                  width={25}
                  height={15}
                  className="rounded-full "
                />
              </div>
              <div className=" flex flex-col text-[10px] font-black text-gray-400 ml-2">
                Oxygen :
                <span className="text-[12px] text-[#323232] font-bold  ">
                  {' '}
                  Oxygen(4L/Min)
                </span>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="bg-[#daf7ff] w-[45px] h-[40px]  shadow-2xl text-center flex justify-center items-center ">
                <Image
                  src={Medicalequiment}
                  width={25}
                  height={15}
                  className="rounded-full "
                />
              </div>
              <div className=" flex flex-col text-[10px] font-black text-gray-400 ml-2">
                Medical equipment :
                <span className="text-[12px] text-[#323232] font-bold ">
                  {' '}
                  Multiple medical aid equipment
                </span>
              </div>
            </div>
            <div className="flex flex-row col-span-2 sm:col-span-1">
              <div className="bg-[#daf7ff] w-[45px] h-[40px]  shadow-2xl text-center flex justify-center items-center ">
                <Image
                  src={Strectres}
                  width={25}
                  height={15}
                  className="rounded-full "
                />
              </div>
              <div className=" flex flex-col text-[10px] font-black text-gray-400 ml-2">
                Medical equipment :
                <span className="text-[12px] text-[#323232] font-bold ">
                  {' '}
                  Multiple medical aid equipment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-1 px-[10px]">
        <div className="rounded-md">
          <ImageCarosel />
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <Image src={Airline} height={80} width={95} objectFit="cover" />
          </div>
          <div className="">
            <Image
              src={scheduleFlight}
              height={80}
              width={95}
              objectFit="cover"
            />
          </div>
          <div className="">
            <Image src={Strectres} height={80} width={95} objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

//this component related to TotalFare and cost
const TotalFare = () => {
  return (
    <div className="flex flex-col justify-start px-[25px] h-[145px] py-[18px] shadow-2xl bg-[#fff] w-full  rounded-2xl font-sans border-2 border-[#000000] sm:px-[10px] sm:py-[10px]">
      <div className=" text-[16px] font-black">Fare Summary</div>
      <div className="flex justify-between mb-2">
        <div className="font-bold text-[12px] font-sans">Base Fare</div>
        <div className="font-medium text-[12px] font-sans">$ 20,765</div>
      </div>
      <div class="border-b border-gray-300"></div>
      <div className="flex justify-between mb-2">
        <div className="font-bold text-[12px] font-sans">Currency</div>
        <div className="font-medium text-[12px] ">AED</div>
      </div>
      <div class="border-b border-gray-300"></div>
      <div className="flex justify-between mb-2 mt-2 items-center">
        <div className="font-black text-[17px] ">Total Amount</div>
        <div className="font-bold text-[12px]">$ 22,765</div>
      </div>
    </div>
  );
};
//this compoenent related to Information
const InfomationHead = ({ title, descripation }) => {
  return (
    <div className="grid grid-cols-12 gap-1 mt-5 sm:grid sm:grid-cols-2 sm:w-[320px]">
      <div className="col-span-2 flex items-start justify-center sm:contents">
        <Image src={Point} width={26} height={26} />
      </div>
      <div className="col-span-8 sm:w-full">
        <div className="font-extrabold text-[16px] font-sans sm:px-[5px]">
          {title}
        </div>
        <li className="text-[12px] font-medium font-sans mt-3 sm:min-w-[320px] sm:px-[5px] ">
          {descripation}
        </li>
      </div>
    </div>
  );
};
//this component realted to ImportedInfo
const ImportantInfo = () => {
  return (
    <div className=" px-[30px] py-[30px] w-full   shadow-md mt-5 sm:px-[10px] sm:py-[10px] sm:w-full border-2 border-[#000] rounded-2xl">
      <div className="grid grid-rows-auto grid-cols-1">
        <div className="text-[18px] font-extrabold font-sans text-black text-center">
          Important Infomation
        </div>
        <div className="">
          {Important.map((data, index) => {
            return (
              <div key={index} className="gap-4">
                <InfomationHead
                  title={data.title}
                  descripation={data.descripation}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
//this component is OurStory and carosel
const OurStory = () => {
  return (
    <div className=" w-full shadow-md px-[30px] py-[30px] mt-5 rounded-2xl border-2 border-[#000]">
      <div className="">
        <div className="h-5 font-sans font-extrabold text-black text-[16px] text-center">
          Our Success Stories
        </div>
        <div className=" ">{/* <OurStories blogs={blogs} /> */}</div>
      </div>
    </div>
  );
};
//this component realted to payCondfirmation
const PayConfirmation = () => {
  return (
    <div className="flex flex-col justify-center px-[25px]  py-[20px] h-[250px] sm:h-[250px] shadow-2xl bg-[#fff] w-full  rounded-2xl mt-2 sm:mt-2 font-sans border-2 border-[#000000] sm:px-[10px] sm:py-[10px]">
      <div className="text-[16px] font-black text-center">
        Reserve Your Seat
      </div>
      <div className="flex justify-center items-center flex-col">
        <input
          className="border-2 w-[280px]  border-[#CBCBCB] rounded-md mt-5 px-[30px] py-[5px] text-center shadow-2xl text-[10px]"
          placeholder="Enter Your Name"
        />
        <input
          className="border-2 w-[280px] border-[#CBCBCB] rounded-md mt-5 px-[30px] py-[5px] text-center shadow-2xl text-[10px]"
          placeholder="Enter Your Phone Number"
        />
        <input
          className="border-2 w-[280px]  border-[#CBCBCB] rounded-md mt-5 px-[30px] py-[5px] text-center shadow-2xl text-[10px]"
          placeholder="Enter Your Email ID"
        />
        <button className="bg-[#12B5E4] w-[280px]  rounded-md mt-3 py-[7px] cursor-pointer text-[12px] text-[#fff] font-bold font-sans hover:text-[#323232]">
          Pay now
        </button>
      </div>
    </div>
  );
};
// this component is Gurrantee and promise
const Guarantee = () => {
  return (
    <div
      className="responsiveBoxSizing border-2  border-[#000] rounded-2xl flex flex-col items-center sm:justify-center sm:items-center  py-5 
          sm:w-full md:w-3/4 lg:w-11/12 xl:w-11/12 shadow-lg"
    >
      <div class="font-black text-lg font-sans sm:text-center">
        OUR GUARANTEE
      </div>
      <div class="font-sans text-sm font-medium mt-3 w-1/2 px-4 sm:w-80 sm:px-4">
        We guarantee that when choosing Qwiklif, your loved ones shall be
        treated with professional and compassionate care. We consider every
        patient as family, we strive for perfection, and continuously monitor
        our operations. When choosing a provider, remember that Qwiklif Air
        Ambulance is the world&apos first air ambulance service provider giving
        an instant quotation.
      </div>
      <div class="flex items-center flex-col justify-center mt-5">
        <Image src={Signature} width={200} height={125} />
        <div class="font-extrabold text-sm font-sans">CEO, QWIKLIF</div>
      </div>
    </div>
  );
};
//compoenent realted to Top section of Main component
const UpperSection = () => {
  return (
    <div className="grid grid-cols-9 gap-5 px-10 sm:grid-cols-1 sm:px-3 sm:gap-2">
      <div className="col-span-6 px-[20px] py-[15px] rounded-md w-full flex justify-center  sm:border-0 sm:border-none sm:bg-transparent sm:col-span-1 ">
        <TravelDuration />
      </div>
      <div className="col-span-3 px-[15px] py-[15px]  rounded-md  flex flex-col sm:col-span-1">
        <TotalFare />
        <PayConfirmation />
      </div>
    </div>
  );
};
//this is commericial Component where all compoenet structured and this is main component of commericial booking
const UpdateCommericial = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerHeight <= 1000);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={`${styles.Container}`}>
      <div className="px-[15px] font-sans z-0">
        <div className={`${styles.Section1_Container} w-full`}></div>
        <div className="relative bottom-[200px]">
          <div className="z-0">
            <UpperSection />
          </div>
          <div className="grid grid-col-9   mt-3  rounded-md bg-[#fff]">
            <div className="col-span-5  mb-5  shadow-2xl  px-10 py-10 sm:col-span-1 sm:mb-2 sm:px-3 sm:py-3 z-0">
              <Guarantee />
              {/* <OurStory/> */}
              <ImportantInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCommericial;
