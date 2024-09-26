import React from "react";



const AboutAircraftUpdate = () => {
  return (
    <div className="grid grid-cols-2 px-20 py-20">
      {/* Left Section and images  */}
      <div className="LeftSection"></div>
      {/*Right section and images  */}
      <div className="Rightsection flex justify-start flex-col">
        <div className="font-barlowRegular text-[24px]">About qwiklif</div>
        <div className="text-[#0E98BE] font-barlowBold text-[54px]">
          Lorem ipsum dolor sit a met connecter.{" "}
        </div>
        <div className="font-barlowRegular text-[20px] text-[#1E1E1E]">
          Lorem ipsum dolor sit amet consectetur. Ut maecenas risus posuere
          elementum. Est vitae volutpat faucibus dictum amet pellentesque
          dapibus et in. Vitae tincidunt tellus diam mauris mi aliquet pretium
          arcu commodo. Volutpat malesuada sem nulla mollis quis sed quisque.
        </div>
        {/*this is table section */}
        <div className="grid grid-cols-2 grid-rows-2 gap-5">
          this section for cards and icons
        </div>
        {/*right Section and */}
        <div className="button"></div>
      </div>
    </div>
  );
};

export default AboutAircraftUpdate;
