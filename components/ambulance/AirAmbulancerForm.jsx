import React from 'react';
import { useRouter } from 'next/router';
import CustomDatePicker from '../date/CustomDatePicker';
import styles from '../../styles/page.module.css';

const AirAmbulancerForm = ({ formData }) => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    router.push({
      pathname: '/listing',
      query: {
        pax: formData?.pax,
        originLocationCode: formData.originLocationCode,
        destinationLocationCode: formData.destinationLocationCode,
        mobile: formData.mobile,
        departureDate: formData.departureDate,
        countryCode: formData.countryCode,
      },
    });
  };

  return (
    <div className="bg-white flex flex-col items-start shadow-2xl rounded-lg col-span-5 sm:col-span-1 py-10 sm:px-6 px-12 font-sans">
      <div className="flex flex-col items-start sm:w-full sm:items-center ">
        <h2 className="font-sans font-semibold text-3xl sm:text-2xl text-center">
          Get Quote Now
        </h2>
        <hr className="bg-[#11B6E3] h-[4px] w-[45px] mt-[20px]" />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`mt-[30px] w-full ${styles.form}`}
      >
        <div className="grid grid-cols-5 gap-3">
          <input
            type="text"
            value=""
            placeholder="From *"
            className=" h-[50px] col-span-5 sm:col-span-5  rounded-md  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
          />

          <input
            type="text"
            value=""
            placeholder="To *"
            className=" rounded-md  col-span-5 sm:col-span-5 !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
          />
          <input
            type="text"
            value=""
            placeholder="Phone *"
            className="h-[50px]  col-span-2 sm:col-span-5 sm:w-full rounded-md  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
          />
          <input
            type="text"
            value=""
            placeholder="E-mail*"
            className=" h-[50px]  col-span-3 sm:col-span-5 sm:w-full rounded-md  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
          />

          <CustomDatePicker
            containerClass="col-span-3 sm:col-span-5"
            ClassName="h-[50px] rounded-md  !border w-full !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
          />
          <input
            type="text"
            value=""
            placeholder="Time*"
            className="h-[50px] col-span-2 sm:col-span-5 rounded-md !border !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
          />
          <div className="col-span-5">
            <button
              className={`${styles.boxShado} w-full h-[50px] bg-[#19c0f0] rounded-[4px] mt-[25px] font-semibold text-[15px] leading-[22.5px] text-white hover:bg-[#4B68B8] shadow-lg shadow-[#19d3f0]`}
            >
              Get Quote
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AirAmbulancerForm;
