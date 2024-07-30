import React from "react";
import styles from "./workWithus.module.css";
import UpdatecareerCard from "../careerCard/UpdatecareerCard";

const WorkwithUs = () => {
  const service = [
    {
      img: "https://qwiklif.com/wp-content/uploads/2024/01/1-230x230.png",
      head: "Medical Healthcare Insurance/Provider company",
      text: "Are you looking for medical healthcare insurance or a provider company? Partner with qwiklif air ambulance to transfer your patience safely.Apply now",
    },
    {
      img: "https://qwiklif.com/wp-content/uploads/2024/01/1-230x230.png",
      head: "Flying doctor/ Airborne Medical Professionals",
      text: "Are you a high-pressure decision-maker? Join Qwiklif Air Ambulance as a Flying Doctor! Provide life-saving care in challenging environments. Apply now!",
    },
    {
      img: "https://qwiklif.com/wp-content/uploads/2024/01/5-230x230.png",
      head: "Paramedics/Flight Paramedics",
      text: "Join our team of Paramedics/Flight Paramedics at Qwiklif Air Ambulance! Make a real difference with your life-saving skills in a dynamic and rewarding environment. Apply now!",
    },
    {
      img: "https://qwiklif.com/wp-content/uploads/2019/01/challenger-605_1-re-230x230.jpg",
      head: "Aircraft Operator",
      text: "Join Qwiklif Air Ambulance and be a part of our life-saving mission! We are looking for aircraft operators to partner with us and provide critical air ambulance services. Together, we can make a real difference. Join us today!",
    },
    {
      img: "https://qwiklif.com/wp-content/uploads/2019/01/Untitled-design-2-230x230.png",
      head: "Hospital/healthcare center",
      text: "Partner with Qwiklif Air Ambulance and provide your patients with rapid and reliable medical transportation. Join us in our mission to save lives and make a difference. Partner with us today!",
    },
    {
      img: "https://qwiklif.com/wp-content/uploads/2019/01/Untitled-design-3-230x230.png",
      head: "Private Aircraft Owner",
      text: "Own a private aircraft? Partner with Qwiklif Air Ambulance and help us provide life-saving medical transportation. Make a difference with your aircraft. Partner with us today!",
    },
  ];
  return (
    <div className="font-sans">
      <div className={`bg-black ${styles.Image}   bg-black h-[400px] w-full`}>
        <div className=" font-[700] z-[100px] pl-[40px] sm:pl-[10px] relative  text-white">
          <p className="text-[50px]  pt-[150px] sm:pt-[100px] font-bold font-poppins">
            Partner with us{" "}
          </p>
          <div className="flex pt-[30px] text-[20px]">
            <p className="text-[#C5D5FF] pr-[10px] ">
              {"Air Ambulance Services >"}
            </p>
            <p className="font-poppins font-normal"> Partner with Us</p>
          </div>
        </div>
      </div>
      <div className="bg-[#efefef]">
        <div className="text-center w-[80%] sm:w-[80%] m-auto py-[40px]">
          <h2 className="text-[18px]  text-[#111] font-poppins font-semibold">
            Partner with us
          </h2>
          <hr class="bg-[#11B6E3] h-[3px] w-[50px] mx-auto sm:mx-auto"></hr>
          <p className="pt-[8px]  text-[16px] font-poppins font-normal">
            At Qwiklif, we are dedicated to revolutionizing the air ambulance
            business, and we are always looking for professionals who share our
            passion for excellence and innovation. We invite flying doctors,
            paramedics, hospitals, aircraft operators, private jet owners, and
            pilots to join us in our mission to provide the highest quality air
            ambulance services.
          </p>
        </div>
        <div className="flex justify-between sm:items-center px-[86px] pb-[30px] sm:px-[25px] sm:py-[20px] sm: flex-wrap  ">
          {service.map((data, i) => (
            <div
              className={`w-[30%] sm:w-[100%] mt-[20px] sm:mt-[15px]`}
              key={i}
            >
              <UpdatecareerCard
                image={data.img}
                headline={data.head}
                descripation={data.text}
                height={18}
                width={80}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkwithUs;
