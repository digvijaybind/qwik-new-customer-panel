import React from "react";
import styles from "./newFooter.module.css";
const Newfooter = () => {
  return (
    <div class="bg-[#111111] px-[50px] py-[10px]">
      <div class="grid grid-cols-5 gap-2">
        <div class="flex flex-col">
          <div class="text-white cursor-pointer font-PoppinsSemiBold text-[15px]">
            Qwiklif
          </div>
        </div>
        <div class="flex flex-col">
          <div class="text-white cursor-pointer font-PoppinsSemiBold text-[15px]">
            Fleet
          </div>
        </div>
        <div class="flex flex-col">
          <div class="text-white cursor-pointer font-PoppinsSemiBold text-[15px]">
            Our Services
          </div>
        </div>
        <div class="flex flex-col">
          <div class="text-white cursor-pointer font-PoppinsSemiBold text-[15px]">
            {" "}
            Our Locations
          </div>
        </div>
        <div class="flex flex-col">
          <div class="text-white cursor-pointer font-PoppinsSemiBold text-[15px]">
            Qwiklif Air Ambulance
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newfooter;
