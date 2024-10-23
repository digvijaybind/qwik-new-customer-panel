"use client";
import styles from "./Services.module.css";
import Updatecard from "@/components/shadowCard";
import services from "../../data/subservices.js";

const Services = ({ services }) => {
  return (
    <div className="font-sans">
      <div
        className="flex flex-col items-center justify-center font-sans bg-no-repeat bg-cover bg-center text-white sm:h-[20vh] h-[60dvh] sm:px-10 px-36 "
        style={{
          backgroundImage: "url('/images/location/Hero.svg')",
        }}
      >
        <div className="flex flex-col items-center">
          <div className="font-barlow font-bold text-[64px]">Our Services</div>
          <div className="font-barlow font-normal text-[24px]">
            Home - Services
          </div>
        </div>
      </div>
      <div className="bg-[#efefef]">
        <div className="text-center w-[50%] sm:w-[80%] m-auto py-[30px]">
          <h2 className="text-[25px] text-[#111]  font-extrabold relative inline-block font-sans">
            Our Services
            <span className="block bg-[#11B6E3] h-[3px] w-[45px] mx-auto mt-1"></span>
          </h2>
          <p className="pt-[10px] font-Poppins font-medium text-slate-700">
            At Qwiklif, We Are Dedicated To Providing The Highest Level Of Care
            And Service When It Matters Most.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-1 md:grid-cols-1 px-[10%] sm:px-[5px]  pb-10 ">
          {services?.map((data, i) => (
            <div className={`w-[50%] sm:w-[100%] mt-[20px]`} key={i}>
              <Updatecard
                img={data.img}
                head={data.head}
                text={data.text}
                slug={data.slug}
              ></Updatecard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    props: {
      services,
    },
  };
}
export default Services;
