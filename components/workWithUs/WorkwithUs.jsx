import React, { useEffect, useState } from "react";
import styles from "./workWithus.module.css";
import UpdatecareerCard from "../careerCard/UpdatecareerCard";
import CustomModal from "../careermodal";
import flyingDoctor from "../../public/images/career/flyingDoctor.jpg";
import Insurancefirm from "../../public/images/career/AirAmbulanceInsurance.jpg";
import AircraftOperator from "../../public/images/career/AircraftOperator.jpg";
import hospital from "../../public/images/career/hospitals.jpg";
import Paramedics from "../../public/images/career/paramedics.jpg";
import Modal from "react-modal";

const WorkwithUs = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPayload, setCurrentPayload] = useState({});

  const service = [
    {
      img: Insurancefirm,
      head: "Medical Healthcare Insurance/Provider company",
      text: "Are you looking for medical healthcare insurance or a provider company? Partner with qwiklif air ambulance to transfer your patience safely. Apply now",
      payload: {
        "Company Name": "",
        Email: "",
        "Contact Number": "",
        "Contact Person (with country code)": "",
        "Contact Number (with country code)": "",
      },
    },
    {
      img: hospital,
      head: "Hospital/healthcare center",
      text: "Partner with Qwiklif Air Ambulance and provide your patients with rapid and reliable medical transportation. Join us in our mission to save lives and make a difference. Partner with us today!",
      payload: {
        "Hospital Name": "",
        Email: "",
        "Contact Number (with country code)": "",
        "Owners Name": "",
        Location: "",
      },
    },
    {
      img: flyingDoctor,
      head: "Flying doctor/ Airborne Medical Professionals",
      text: "Are you a high-pressure decision-maker? Join Qwiklif Air Ambulance as a Flying Doctor! Provide life-saving care in challenging environments. Apply now!",
      payload: {
        "Full Name": "",
        "Country  (with  country code)": "",
        Specialities: "",
        Location: "",
        Degrees: "",
      },
    },
    {
      img: Paramedics,
      head: "Paramedics/Flight Paramedics",
      text: "Join our team of Paramedics/Flight Paramedics at Qwiklif Air Ambulance! Make a real difference with your life-saving skills in a dynamic and rewarding environment. Apply now!",
      payload: {
        "Full Name": "",
        Email: "",
        Country: "",
        Degrees: "",
        "Contact (with country code) ": "",
      },
    },
    {
      img: AircraftOperator,
      head: "Aircraft Operator",
      text: "Join Qwiklif Air Ambulance and be a part of our life-saving mission! We are looking for aircraft operators to partner with us and provide critical air ambulance services. Together, we can make a real difference. Join us today!",
      payload: {
        "Company Name": "",
        Email: "",
        "Contact (with country code)": "",
        "Number of Countries presence": "",
        Location: "",
      },
    },
  ];

  const openModal = (payload) => {
    if (payload) {
      setCurrentPayload(payload);
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (field, value) => {
    setCurrentPayload((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  return (
    <div className="font-sans">
      <div className={`bg-black ${styles.Image} bg-black h-[400px] w-full`}>
        <div className="font-[700] z-[100px] pl-[40px] sm:pl-[10px] relative text-white">
          <p className="text-[50px] pt-[150px] sm:pt-[100px] font-bold font-poppins">
            Partner with us{" "}
          </p>
          <div className="flex pt-[30px] text-[20px]">
            <p className="text-[#C5D5FF] pr-[10px]">
              {"Air Ambulance Services >"}
            </p>
            <p className="font-poppins font-normal"> Partner with Us</p>
          </div>
        </div>
      </div>
      <div className="bg-[#efefef]">
        <div className="text-center w-[80%] sm:w-[80%] m-auto py-[40px]">
          <h2 className="text-[20px] text-[#111] font-poppins font-semibold">
            Partner with us
          </h2>
          <hr className="bg-[#11B6E3] h-[3px] w-[50px] mx-auto sm:mx-auto"></hr>
          <p className="pt-[8px] text-[16px] font-poppins font-normal">
            At Qwiklif, we are dedicated to revolutionizing the air ambulance
            business, and we are always looking for professionals who share our
            passion for excellence and innovation. We invite flying doctors,
            paramedics, hospitals, aircraft operators, private jet owners, and
            pilots to join us in our mission to provide the highest quality air
            ambulance services.
          </p>
        </div>
        <div id="root">
          <div className="grid grid-cols-3  gap-10 px-[86px] pb-[30px] sm:px-[25px] sm:py-[20px] sm:grid-cols-1">
            {service.map((data, i) => (
              <div className={` sm:w-[100%] mt-[20px] sm:mt-[15px]`} key={i}>
                <UpdatecareerCard
                  image={data.img}
                  headline={data.head}
                  descripation={data.text}
                  height={18}
                  width={80}
                  onClick={() => openModal(data.payload)}
                />
              </div>
            ))}
          </div>
        </div>
        {modalIsOpen && (
          <CustomModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            payload={currentPayload}
            handleChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};

export default WorkwithUs;
