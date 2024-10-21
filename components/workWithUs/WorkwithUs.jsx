import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DoctorApi } from "../../redux/slices/career/doctorSlice";
import { hospitalApi } from "../../redux/slices/career/hospitalSlice";
import { ParamedicApi } from "../../redux/slices/career/paramedicSlice";
import { AircraftOperatorApi } from "../../redux/slices/career/aircraftoperatorSlice";
import { InsuranceApi } from "../../redux/slices/career/insuranceSlice";
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
  const dispatch = useDispatch(); // Initialize dispatch
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPayload, setCurrentPayload] = useState({});
  const [selectedHead, setSelectedHead] = useState("");
  const service = [
    {
      img: Insurancefirm,
      head: "Medical_Healthcare_Insurance",
      text: "Are you looking for medical healthcare insurance or a provider company? Partner with Qwiklif Air Ambulance to transfer your patients safely. Apply now and be a part of our mission to save lives together.",
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
      head: "Hospital/healthcare_center",
      text: "Partner with Qwiklif Air Ambulance and provide your patients with rapid and reliable medical transportation. Join us in our mission to save lives and make a difference. Partner with us today to create real impact.",
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
      head: "Flying_doctor",
      text: "Are you a high-pressure decision-maker? Join Qwiklif Air Ambulance as a Flying Doctor! Provide life-saving care in challenging environments. Apply now and become a crucial part of our life-saving mission today.",
      payload: {
        fullName: "",
        contactNumberWithCountryCode: "",
        Specialities: "",
        Location: "",
        Degrees: "",
      },
    },
    {
      img: Paramedics,
      head: "Paramedics/Flight_Paramedics",
      text: "Join our team of Paramedics/Flight Paramedics at Qwiklif Air Ambulance! Make a real difference with your life-saving skills in a dynamic and rewarding environment. Apply now and be a part of our life-saving mission!",
      payload: {
        "Full Name": "",
        Email: "",
        Country: "",
        Degrees: "",
        "Contact (with country code)": "",
      },
    },
    {
      img: AircraftOperator,
      head: "Aircraft_Operator",
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

  const openModal = (data) => {
    if (data.payload) {
      setCurrentPayload(data.payload);
      setSelectedHead(data.head);
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedHead("");
  };

  const handleChange = (field, value) => {
    setCurrentPayload((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    switch (selectedHead) {
      case "Flying_doctor":
        console.log("payload data line 111", currentPayload);
        dispatch(DoctorApi(currentPayload));

        break;
      case "Hospital/healthcare_center":
        dispatch(hospitalApi(currentPayload));
        break;
      case "Paramedics/Flight_Paramedics":
        dispatch(ParamedicApi(currentPayload));
        break;
      case "Aircraft_Operator":
        dispatch(AircraftOperatorApi(currentPayload));
        break;
      case "Medical_Healthcare_Insurance":
        dispatch(InsuranceApi(currentPayload));
        break;
      default:
        console.log("Please select a valid option.");
        break;
    }
    closeModal(); // Close the modal after submission
  };

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  return (
    <div className="font-sans">
      <div className={`bg-black ${styles.Image} bg-black h-[400px] w-full`}>
        <div className="font-[700] z-[100px] pl-[40px] sm:pl-[10px] relative text-white">
          <p className="text-[50px] pt-[150px] sm:pt-[100px] font-extrabold font-barlow">
            Partner with us{" "}
          </p>
          <div className="flex pt-[30px] text-[20px] sm:text-[16px] sm:text-nowrap">
            <p className="text-[#C5D5FF] pr-[10px] sm:pr-[5px] ">
              {"Air Ambulance Services >"}
            </p>
            <p className="font-barlow font-semibold"> Partner with Us</p>
          </div>
        </div>
      </div>
      <div className="bg-[#efefef]">
        <div className="text-center w-[80%] sm:w-[80%] m-auto py-[40px]">
          <h2 className="text-[20px] text-[#111] font-barlow font-semibold">
            Partner with us
          </h2>
          <hr className="bg-[#11B6E3] h-[3px] w-[50px] mx-auto sm:mx-auto"></hr>
          <p className="pt-[8px] text-[16px] font-barlow font-normal">
            At Qwiklif, we are dedicated to revolutionizing the air ambulance
            business, and we are always looking for professionals who share our
            passion for excellence and innovation. We invite flying doctors,
            paramedics, hospitals, aircraft operators, private jet owners, and
            pilots to join us in our mission to provide the highest quality air
            ambulance services.
          </p>
        </div>
        <div id="root">
          <div className="grid grid-cols-3 gap-10 px-[86px] pb-[30px] sm:px-[25px] sm:py-[20px] sm:grid-cols-1 md:grid-cols-1">
            {service.map((data, i) => (
              <div className={` sm:w-[100%] mt-[20px] sm:mt-[15px]`} key={i}>
                <UpdatecareerCard
                  image={data.img}
                  headline={data.head}
                  descripation={data.text}
                  height={20}
                  width={80}
                  onClick={() => openModal(data)}
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
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default WorkwithUs;
