import { Shadow } from "../Utils/utils";
const Planetype = ({ image, head, desc }) => {
  return (
    <Shadow classname={"flex items-start w-[48%] sm:w-[100%] mb-[15px]  p-[16px]"}>
      <img src={`/images/plane${image}.png`} alt="plane" />
      <div className="px-[8px]">
        <p className="font-semibold">{head}</p>
        <p className="text-[12px]">{desc}</p>
      </div>
    </Shadow>
  );
};

export default Planetype;
