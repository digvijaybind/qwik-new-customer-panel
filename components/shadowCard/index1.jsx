const ShadowCard = ({ img, head, text }) => {
  return (
    <div className="flex flex-col items-center justify-between shadow-md bg-white rounded-[10px] p-[15px] cursor-pointer font-sans transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 w-[500px] h-[450px]">
      <div className="w-full h-[60%] overflow-hidden">
        <img src={img} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="w-full h-[30%] flex flex-col justify-between px-[15px]">
        <p className="text-[19px] text-center text-[#111] py-[5px] font-bold font-Inter">
          {head}
        </p>
        <p className="text-[14px] text-center opacity-[90%] font-[500] py-[10px] font-Inter">
          {text}
        </p>
        <button className="border-[#396CF0] mt-[10px] mb-[10px] border-[1px] px-[10px] py-[5px] rounded-[5px] font-Inter mx-auto">
          <p className="text-[#396CF0] font-[500] font-Inter">{`See Details >`}</p>
        </button>
      </div>
    </div>
  );
};

export default ShadowCard;
