import React from "react";
import CommercialImage from "../../public/images/commercial.svg";
import Image from "next/image";

const DedicatedCard = () => {
  return (
    <div
      className={`h-[277px] w-[680px] py-[20px] px-[20px] bg-[#fffafa]  rounded grid grid-cols-3 gap-5 items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer  transition-all duration-700 hover:scale-105`}
    >
      <div class="">
        <Image
          src={CommercialImage}
          alt="Commercial Image"
          // class="object-fill"
          //   layout="fill"
          class="h-64 w-100 object-none object-center"
          //   className="rounded"
          height={600}
          width={400}
        />
      </div>

      <div class="col-span-2">
        <div class="grid grid-cols-3 gap-2 mb-5">
          <div class="">
            <span class="text-[#000000] text-[20px] font-semibold text-center">
              {" "}
              21:40
            </span>
            <br />
            <span class="font-medium">New delhi</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="">02 h 55 m</div>
            <div class="bg-[#42D1E5] w-[40px] h-[3px]"></div>
            <div class="text-[#6D7278]">Non stop</div>
          </div>
          <div class="text-end">
            <span class="text-[#000000] text-[20px] font-semibold ">00:35</span>
            <br />
            <span class="font-medium">Bengaluru</span>
          </div>
        </div>
        <div class="flex justify-between align-middle mb-3">
          <div class="">
            <div class="font-semibold">Included Perks :</div>
            <div class="font-semibold text-[14px]">-Stretcher ✅</div>
            <div class="font-semibold text-[14px]">-Doctor OnBoard ✅</div>
            <div class="font-semibold text-[14px]">-Medical Equipment ✅</div>
            <div class="font-semibold text-[14px]">-Oxygen(4L/Min) ✅</div>
          </div>
          <div class="">
            <div>
              <span class="font-semibold text-[17px]">€ 120000</span>
              <br />
              <span class="font-medium text-[16px] italic">
                Estimated Price
              </span>
            </div>
            <div>
              <span class="font-semibold text-[13px]">Ticket Availability</span>
              <br />
              <span class="font-semibold text-[14px]">Specific date</span>
            </div>
          </div>
        </div>
        <div class="rounded text-center align-middle border border-[#4BDCF0]  h-[31px] cursor-pointer text-[#4BDCF0] hover:bg-[#4BDCF0] hover:text-[#fff]">
          <div>View Details</div>
        </div>
      </div>
    </div>
  );
};

export default DedicatedCard;
