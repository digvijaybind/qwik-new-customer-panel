import React, { useState } from 'react';
import Image from 'next/image';
import SelectionComponent from '@/components/selection/SelectionComponent';
import aeroIcon from '../../public/images/aeroplaneicon.svg';
import DoctorIcon from '../../public/images/trusted_contact/doctor.svg';
import GlobalIcon from '../../public/images/counter/globalIcon.svg';
import CostEffectIcon from '../../public/images/counter/CostEffective.svg';
import CostEffective from '../../public/images/counter/CostEffective.png';
import DoctorOnboard from '../../public/images/fleet_tabs/doctor_onboard.png';
import GlobalCoverage from '../../public/images/fleet_tabs/global_coverage.png';
import Biggest_fleet from '../../public/images/fleet_tabs/biggest_fleet.png';
import { FaArrowRight } from 'react-icons/fa';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const faqs = [
  {
    index: 1,
    title: 'Biggest Fleet Network',
    icon: aeroIcon,
  },
  {
    index: 2,
    title: '24x7 Doctors On Board',
    icon: DoctorIcon,
  },
  {
    index: 3,
    title: 'Global Coverage',
    icon: GlobalIcon,
  },

  {
    index: 4,
    title: 'Cost-Effective Solution',
    icon: CostEffectIcon,
  },
];

const ChooseQwiklif = React.memo(() => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div>
      <div className="">
        <div className="flex sm:w-full sm:flex-col mt-3 sm:mt-0 sm:pt-0 mb-10 py-10 sm:mb-5 sm:py-2">
          <h2 className="font-sans font-extrabold text-2xl sm:text-2xl text-center border-r-2 border-[#19c0f0] sm:border-none pr-16 sm:pr-0 sm:mb-2 sm:w-full whitespace-nowrap ">
            Why Choose Qwiklif ?
            <hr class="bg-[#19c0f0] h-[3px] w-[100px] mt-2 sm:mx-auto sm:h-[3px]"></hr>
          </h2>

          <div className="sm:pl-0 pl-2">
            <p className="text-[#646464] text-lg text-center leading-[32px] ml-[10px] lg:ml-0 font-sans font-medium sm:ml-3">
              Fly Fast and Safe with Qwiklif Air Ambulance We have access to
              global hospitals including finest medic and eminent surgeons
              across the globe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-10 gap-12 sm:grid-cols-1 items-start sm:items-center sm:flex justify-center sm:flex-col mt-2 mb-8 sm:gap-4">
          <div className="col-span-3 sm:col-span-12 flex flex-col mb-5">
            {faqs.map(({ icon, index, title }) => (
              <ChooseQwiklifButton
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                icon={icon}
                tabIndex={index}
                title={title}
                key={title + index}
              />
            ))}
          </div>
          <div className="col-span-6 sm:col-span-12 sm:mb-10">
            {activeTab === 1 && (
              <SelectionComponent
                img={Biggest_fleet}
                title="Biggest Fleet Network"
                descripation="With the largest fleet, QwikLif can respond to emergencies quickly. Multiple aircraft options are available to meet various medical requirements, providing an ideal option for all situations."
              />
            )}
            {activeTab === 2 && (
              <SelectionComponent
                img={DoctorOnboard}
                title="24x7 Doctors on Board"
                descripation="Skilled doctors accompany every flight, providing real-time medical support throughout the journey. Immediate access to medical expertise ensures optimal care, enhancing the chances of a positive outcome."
              />
            )}
            {activeTab === 3 && (
              <SelectionComponent
                img={GlobalCoverage}
                title="Global Coverage"
                descripation="We provide seamless global coverage, connecting you to the best medical facilities worldwide.Whether you're in a bustling city or a remote area, our reach extends to every corner, making quality healthcare accessible wherever you are."
              />
            )}
            {activeTab === 4 && (
              <SelectionComponent
                img={CostEffective}
                title="Cost-Effective Solutions"
                descripation="We are committed to providing cost-effective air ambulance solutions without compromising on the standard of care. We suggest different modes of transfers like commercial stretchers and other customised transfer plans for making your medical flight cost effective."
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ChooseQwiklif;

const ChooseQwiklifButton = ({
  activeTab,
  setActiveTab,
  tabIndex,
  title,
  icon,
}) => {
  const isActive = activeTab === tabIndex;
  return (
    <button
      className={`h-[80px] px-4 bg-[#F0F4FF] mb-5 cursor-pointer flex items-center gap-8 sm:gap-4 hover:bg-[#19c0f0] rounded sm:w-full hover:text-white transition-colors duration-300  } font-sans`}
      onClick={() => setActiveTab(tabIndex)}
    >
      <div className="bg-[#19c0f0] rounded-full w-[55px] h-[55px] flex justify-center">
        <Image src={icon} height={40} width={35} alt={title} />
      </div>
      <div className="font-sans font-extrabold text-xl sm:flex justify-end sm:text-base">
        {title}
      </div>
      {isActive && (
        <div className="ml-auto  flex items-center justify-center w-[50px] h-[50px]">
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ color: '#fff', height: '30px', width: '30px' }}
          />
        </div>
      )}
    </button>
  );
};
