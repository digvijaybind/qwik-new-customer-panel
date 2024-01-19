import React from "react";
import styles from "../../styles/page.module.css";
const Popular = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold mb-5">
          Popular Fleets <br />
          Right Now
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-[#40D1F0] px-3 py-3 h-fit rounded-md">
            <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.04 19L9.3852 12L17.04 5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button className="bg-[#7ab7c5] px-3 py-3 h-fit rounded-md">
            <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.80469 5L17.4595 12L9.80469 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 grid-cols-2 gap-7">
        <div className={`${styles.popularFleetBg} px-6 sm:py-6 py-16 flex flex-col justify-end`}>
          <img src="/images/challenger-605.png" alt="Challenger 605" className="sm:mb-0 mb-16" />
          <div className="bg-white px-4 py-4 flex items-center justify-between rounded-md">
            <div>
              <p className="text-sm font-semibold">BOMBARDIER</p>
              <p className="text-xs">Challenger 605</p>
            </div>
            <button className="bg-slate-950 text-white rounded-md text-sm px-4 py-2">Read More</button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-7">
          <div className={`${styles.popularFleetBg} px-6 py-6 flex flex-col justify-between items-center`}>
            <img src="/images/learjet45.png" alt="Learjet 45 XR" className="w-[75%]" />
            <div className="bg-white px-4 py-4 flex items-center justify-between rounded-md sm:w-full w-[75%]">
              <div>
                <p className="text-sm font-semibold">BOMBARDIER</p>
                <p className="text-xs">Learjet 45 XR</p>
              </div>
              <button className="bg-slate-950 text-white rounded-md text-sm px-4 py-2">Read More</button>
            </div>
          </div>
          <div className={`${styles.popularFleetBg} px-6 py-6 flex flex-col justify-between items-center`}>
            <img src="/images/beechcraft-b200.png" alt="Beechcraft B200" />
            <div className="bg-white px-4 py-4 flex items-center justify-between rounded-md sm:w-full w-[75%]">
              <div>
                <p className="text-sm font-semibold">BOMBARDIER</p>
                <p className="text-xs">Beechcraft B200</p>
              </div>
              <button className="bg-slate-950 text-white rounded-md text-sm px-4 py-2">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
