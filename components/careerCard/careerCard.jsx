const Careercard = ({ img, head, text }) => {
  return (
    <div className="flex sm:flex-col  items-center sm:justify-center shadow-md bg-white rounded-[10px] px-[15px] py-[15px] cursor-pointer font-sans transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 ">
      <div className="mr-[15px]">
        <img src={img} className="w-[800px]" alt="" />
      </div>
      <div className="px-[15px]">
        <p className="text-[24px] sm:text-center text-[#111] py-[5px] font-bold font-sans">
          {head}
        </p>
        <p className="text-[16px] sm:text-center opacity-[90%] font-[500] py-[10px] font-sans">
          {text}
        </p>
        <button className="border-[#396CF0] mt-[20px] mb-[10px] sm:ml-[50%] sm:transform sm:translate-x-[-50%] border-[1px] px-[10px] py-[5px] rounded-[5px] font-sans">
          <p className="text-[#396CF0] font-[600] font-sans">{`Apply Now >`}</p>
        </button>
      </div>
    </div>
  );
};

export default Careercard;
