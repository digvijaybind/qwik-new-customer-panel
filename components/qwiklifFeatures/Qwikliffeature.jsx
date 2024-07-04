import React from "react";
import QwiklifFeatures from "@/data/QwiklifFeatures";
import QwiklifFeatureCard from "./QwiklifFeatureCard";

const QwiklifFeature = React.memo(() => {
  return (
    <div className="w-fit grid grid-cols-2 font-sans  sm:grid-cols-1 gap-6 sm:gap-4  xs:px-4">
      {QwiklifFeatures.map(({ icon, title, description }, key) => (
        <QwiklifFeatureCard
          key={title + key}
          icon={icon}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
});

QwiklifFeature.displayName = "QwiklifFeature";

export default QwiklifFeature;

{
  /* <div className="w-full h-full flex gap-8 sm:py-4 p-8 hover:shadow-2xl rounded-lg">
<Image
  className="max-w-[50px] max-h-[50px] sm:max-w-[40px] sm:max-h-[40px] object-contain"
  src="/images/rapid_time.png"
  width={50}
  height={50}
  alt="rapid Time"
/>

<div lass="w-full flex  flex-col items-start sm:gap-[10px]">
  <p className="text-xl font-sans font-extrabold text-slate-700">
    Rapid Response Time
  </p>
  <p className="text-[#646464] font-sans leading-[26px] text-[16px] font-normal">
    QwikLif prides itself on its quick response times, ensuring that
    critical medical transport is initiated promptly.
  </p>
</div>
</div>
<div className="w-full h-full flex gap-8 sm:py-4 p-8 hover:shadow-2xl rounded-lg">
<Image
  className="max-w-[50px] max-h-[50px] sm:max-w-[40px] sm:max-h-[40px] object-contain"
  src="/images/saftey_first.png"
  width={50}
  height={50}
  alt="Safety First"
/>
<div lass="w-full flex  flex-col items-start">
  <p className="text-xl font-sans font-extrabold text-slate-700">
    Safety First
  </p>
  <p className="text-[#646464] leading-[26px] text-[16px] font-normal">
    Qwiklif pilots undergo rigorous training, and our aircraft are
    regularly
    <br />
    maintained to meet or exceed industry safety standards.
  </p>
</div>
</div>

<div className="w-full h-full flex gap-8 sm:py-4 p-8 hover:shadow-2xl rounded-lg">
<Image
  className="max-w-[50px] max-h-[50px] sm:max-w-[40px] sm:max-h-[40px] object-contain"
  src="/images/state_art.png"
  width={50}
  height={50}
  alt="State Art"
/>
<div lass="w-full flex  flex-col items-start sm:gap-[10px]">
  <p className="text-xl font-sans font-extrabold text-slate-700">
    State-of-the-Art Equipment
  </p>
  <p className="text-[#646464] leading-[26px] text-[16px] font-sans font-normal">
    Our air ambulances are equipped with cutting-edge medical
    <br /> technology to provide advanced life support, ensuring the
    best
    <br /> possible care during transport.
  </p>
</div>
</div>
<div className="w-full h-full flex gap-8 sm:py-4 p-8 hover:shadow-2xl rounded-lg">
<Image
  className="max-w-[50px] max-h-[50px] sm:max-w-[40px] sm:max-h-[40px] object-contain"
  src="/images/patient.png"
  width={50}
  height={50}
  alt="rapid Time"
/>
<div lass="w-full flex  flex-col items-start">
  <p className="text-xl font-sans font-extrabold text-slate-700">
    Patient-Centric Approach
  </p>
  <p className="text-[#373333] leading-[26px] text-[16px] font-sans font-normal">
    We prioritize patient comfort and well-being, with a focus on
    providing
    <br /> a stress-free and comfortable experience for patients and
    their
    <br /> families.
  </p>
</div>
</div> */
}
