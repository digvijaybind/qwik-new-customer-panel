"use client";
import styles from "./Services.module.css";
import ShadowCard from "@/components/shadowCard";
const Services = ({ service }) => {
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
          <p className="pt-[10px] font-Inter font-medium text-slate-700">
            At Qwiklif, We Are Dedicated To Providing The Highest Level Of Care
            And Service When It Matters Most.
          </p>
        </div>
        <div className="flex justify-between sm:items-center px-[10%] flex-wrap mb-5">
          {service.map((data, i) => (
            <div className={`w-[47%] sm:w-[100%] mt-[20px]`} key={i}>
              <ShadowCard
                img={data.img}
                head={data.head}
                text={data.text}
              ></ShadowCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //static data
  const service = [
    {
      img: "https://qwiklif.com/wp-content/uploads/2024/01/1-230x230.png",
      head: "Neonatal and Pediatric Air Transfer Services",
      text: "Expert Transport for Neonates and Pediatric Patients QwikLif Air Ambulance specializes in safe and expert…",
    },
    {
      img: "https://qwiklif.com/wp-content/uploads/2024/01/5-230x230.png",
      head: "ECMO Initiation and Air Transfer Services",
      text: "Expert ECMO Assistance with Global Air Ambulance Solutions QwikLif Air Ambulance specializes in expert ECMO…",
    },
    {
      img: "https://qwiklif.com/wp-content/uploads/2019/01/challenger-605_1-re-230x230.jpg",
      head: "Dedicated Air Ambulance",
      text: "Swift and Expert Medical Transport Anywhere, Anytime QwikLif Air Ambulance offers unparalleled specialized air ambulance…",
    },
    {
      img: "https://qwiklif.com/wp-content/uploads/2019/01/Untitled-design-2-230x230.png",
      head: "International Patient Transfer",
      text: "Cost-Effective Air Ambulance Solutions Worldwide QwikLif Air Ambulance specializes in providing cost-effective and reliable international…",
    },
    {
      img: "https://qwiklif.com/wp-content/uploads/2019/01/Untitled-design-3-230x230.png",
      head: "Commercial Stretcher Transfer",
      text: "Efficient Patient Transport via Commercial Airlines with Stretcher Configurations QwikLif Air Ambulance offers reliable and…",
    },
  ];

  //pass data to component
  return {
    props: {
      service,
    },
  };
}
export default Services;
