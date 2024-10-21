"use client";
import styles from "./Services.module.css";
import Updatecard from "@/components/shadowCard";
import services from "../../data/subservices.js";

const Services = ({ services }) => {
  return (
    <div className="font-sans">
      <div
        className={`bg-black ${styles.Image}   bg-black h-[400px] w-full  mt-2`}
      >
        <div className=" font-[700] z-[100px] pl-[40px] sm:pl-[10px] relative  text-white">
          <p className="text-[50px]  pt-[150px] sm:pt-[100px] font-sans">
            Services{" "}
          </p>
          <div className="flex pt-[30px] text-[20px]">
            <p className="text-[#C5D5FF] pr-[10px]">
              {"Air Ambulance Services >"}
            </p>
            <p> Services</p>
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
