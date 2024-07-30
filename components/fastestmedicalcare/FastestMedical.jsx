import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import FloatingBox from "../Utils/floatingBox/FloatingBox ";

const FastestMedical = React.memo(() => {
  const router = useRouter();
  return (
    <div
      className={`font-sans w-full  flex flex-col items-center mb-10 sm:mb-32 bg-cover bg-no-repeat h-full`}
      style={{
        backgroundImage: "url('/images/lower_plane.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center w-full">
        <h1 className="font-sans font-semibold text-4xl text-shadow-lg text-center text-white mt-[30px] md:text-xl sm:text-lg">
          Fastest and best medical care
        </h1>
        <p className="font-medium text-[18px] font-Inter  text-center text-white mt-[30px] sm:px-[10px] md:text-xl sm:text-lg">
          Time is precious, especially during emergencies. Our air ambulances
          are not just vehicles. they are a beacon of hope on the fastest route
          to medical assistance. We pride ourselves on a lightning-quick
          response that bridges the gap between distress and relief.
        </p>
        <Link href="/contact" className="sm:hidden md:hidden">
          <button
            className="w-[300px] h-[60px]   bg-transparent border-solid border-[1px] border-[#FFFFFF] rounded-[4px] mt-[60px] sm:mt-[30px] text-center text-[16px] font-Inter leading-[26px] font-bold text-white  hover:bg-rgb(255 255 255)"
            onClick={() => router.push("/contact")}
          >
            Make an Appointment
          </button>
        </Link>
      </div>
      <FloatingBox className="relative bottom-12 translate-y-1/2 sm:bottom-10 md:bottom-24 sm:h-1/2 shadow-2xl shadow-cyan-300/50" />
    </div>
  );
});

FastestMedical.displayName = "FastestMedical";
export default FastestMedical;
