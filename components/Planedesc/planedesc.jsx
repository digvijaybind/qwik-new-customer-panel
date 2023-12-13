import {Shadow} from "../Utils/utils";
import {Checkbox} from "@mui/material";
const Planedesc = ({price, name, time, speed, from, to}) => {
  return (
    <div className="w-[48%] sm:w-[100%] mb-8">
      <Shadow classname={"flex sm:flex-col   items-start p-[15px]"}>
        <img
          className="mr-[10px] sm:w-full sm:mb-[20px]"
          src="/images/desc1.png"
          alt=""
        />
        <div className="w-full pr-4">
          <div className="flex justify-between items-center">
            <p className="font-bold">{`${name}`}</p>
            <p className="text-[#FF8682] font-bold text">₹{price}</p>
          </div>
          <div className="flex text-[14px] py-[10px] justify-between items-start">
            <div className="flex items-start">
              <Checkbox
                sx={{
                  "& .MuiSvgIcon-root": {fontSize: 28, marginRight: 0.3},
                  "&.MuiCheckbox-root": {padding: 0, marginRight: 0},
                }}
              ></Checkbox>
            </div>
            <p className="font-[600]">non-stop</p>
            <div>
              <p className="font-[600] text-end">{time}</p>
              <p className="text-[#A0A7A0] font-semibold">
                {from} - {to}
              </p>
            </div>
          </div>
          <div className="flex text-[12px] font-[600] justify-between">
            <p>{`Cruising Speed : ${speed} Km/Hr`}</p>
            <p>Cruising Altitude : 40,000</p>
          </div>
          <div className="flex text-[12px] py-[10px] font-medium border-b mb-4 pb-4">
            <p className="mr-[10px]">Included Perks:</p>
            <ul>
              <li>Doctor onboard✅</li>
              <li>Ventilator✅</li>
              <li>
                More than 2 passenger❌<br></br>(Apart from patient)
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="px-[16px] py-[8px] w-full rounded-[4px] bg-[#40D1F0] my-[10px]">
            <p className="text-[13px] font-[600]">
              Experience And Education Qualification of the Doctor
            </p>
          </div>
        </div>
      </Shadow>
    </div>
  );
};

export default Planedesc;
