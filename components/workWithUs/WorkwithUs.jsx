import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DoctorApi } from "../../redux/slices/career/doctorSlice";
import { ParamedicsApi } from "../../redux/slices/career/paramedicSlice";
import {
  Aircraftoperator,
  AircraftOperatorApi,
} from "../../redux/slices/career/aircraftoperatorSlice";
import { hospitalApi } from "@/redux/slices/career/hospitalSlice";
import { insuranceApi } from "@/redux/slices/career/insuranceSlice";
import styles from "./workWithus.module.css";
import UpdatecareerCard from "../careerCard/UpdatecareerCard";
import CustomModal from "../careermodal";
import flyingDoctor from "../../public/images/career/flyingDoctor.jpg";
import Insurancefirm from "../../public/images/career/AirAmbulanceInsurance.jpg";
import AircraftOperator from "../../public/images/career/AircraftOperator.jpg";
import hospital from "../../public/images/career/hospitals.jpg";
import Paramedics from "../../public/images/career/paramedics.jpg";
import Modal from "react-modal";
import Swal from "sweetalert2";

const WorkwithUs = () => {
  const dispatch = useDispatch(); // Initialize dispatch
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPayload, setCurrentPayload] = useState({});
  const [selectedHead, setSelectedHead] = useState("");
  const service = [
    {
      img: Insurancefirm,
      head: "MEDICAL_HEALTHCARE_INSURANCE",
      text: "Are you looking for medical healthcare insurance or a provider company? Partner with Qwiklif Air Ambulance to transfer your patients safely. Apply now and be a part of our mission to save lives together.",
      payload: {
        COMPANY_NAME: "",
        COMPANY_EMAIL: "",
        COMPANY_CONTACT_NUMBER: "",
        CONTACT_PERSON_NAME: "",
        CONTACT_PERSON_NUMBER: "",
      },
    },
    {
      img: hospital,
      head: "HOSPITAL/HEALTHCARE_CENTER",
      text: "Partner with Qwiklif Air Ambulance and provide your patients with rapid and reliable medical transportation. Join us in our mission to save lives and make a difference. Partner with us today to create real impact.",
      payload: {
        HOSPITAL_NAME: "",
        HOSPITAL_EMAIL: "",
        HOSPITAL_CONTACT_NUMBER: "",
        HOSPITAL_OWNER_NAME: "",
        HOSPITAL_LOCATION: "",
      },
    },
    {
      img: flyingDoctor,
      head: "FLYING_DOCTOR",
      text: "Are you a high-pressure decision-maker? Join Qwiklif Air Ambulance as a Flying Doctor! Provide life-saving care in challenging environments. Apply now and become a crucial part of our life-saving mission today.",
      payload: {
        DOCTOR_FULL_NAME: "",
        DOCTOR_CONTACT_NUMBER: "",
        DOCTOR_SPECIALITIES: "",
        DOCTOR_LOCATION: "",
        DOCTOR_DEGREES: "",
      },
    },
    {
      img: Paramedics,
      head: "PARAMEDICS_FLIGHT_PARAMEDICS",
      text: "Join our team of Paramedics/Flight Paramedics at Qwiklif Air Ambulance! Make a real difference with your life-saving skills in a dynamic and rewarding environment. Apply now and be a part of our life-saving mission!",
      payload: {
        FULL_NAME: "",
        EMAIL_ADDRESS: "",
        COUNTRY_OF_RESIDENCE: "",
        EDUCATION_DEGREES: "",
        CONTACT_NUMBER_WITH_COUNTRY_CODE: "",
      },
    },
    {
      img: AircraftOperator,
      head: "AIRCRAFT_OPERATOR",
      text: "Join Qwiklif Air Ambulance and be a part of our life-saving mission! We are looking for aircraft operators to partner with us and provide critical air ambulance services. Together, we can make a real difference. Join us today!",
      payload: {
        COMPANY_NAME: "",
        COMPANY_CONTACT_NUMBER: "",
        NUMBER_OF_COUNTRIES_PRESENCE: "",
        COMPANY_LOCATION: "",
        COMPANY_EMAIL: "",
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
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      let response;

      switch (selectedHead) {
        case "FLYING_DOCTOR":
          console.log("Submitting payload for Flying Doctor", currentPayload);
          response = await dispatch(DoctorApi(currentPayload));
          Swal.fire({
            title: "Thank you for Submit!",
            text: "Our Team will get back to you shortly",
            icon: "success",
          });

          break;

        case "HOSPITAL/HEALTHCARE_CENTER":
          console.log(
            "Submitting payload for Hospital/Healthcare Center",
            currentPayload,
          );
          response = await dispatch(hospitalApi(currentPayload));
          Swal.fire({
            title: "Thank you for Submit!",
            text: "Our Team will get back to you shortly",
            icon: "success",
          });
          break;

        case "PARAMEDICS_FLIGHT_PARAMEDICS":
          console.log(
            "Submitting payload for Paramedics/Flight Paramedics",
            currentPayload,
          );
          response = await dispatch(ParamedicsApi(currentPayload));
          Swal.fire({
            title: "Thank you for Submit!",
            text: "Our Team will get back to you shortly",
            icon: "success",
          });
          break;

        case "AIRCRAFT_OPERATOR":
          console.log(
            "Submitting payload for Aircraft Operator",
            currentPayload,
          );
          response = await dispatch(Aircraftoperator(currentPayload));
          Swal.fire({
            title: "Thank you for Submit!",
            text: "Our Team will get back to you shortly",
            icon: "success",
          });
          break;

        case "MEDICAL_HEALTHCARE_INSURANCE":
          console.log(
            "Submitting payload for Medical Healthcare Insurance",
            currentPayload,
          );
          response = await dispatch(insuranceApi(currentPayload));
          Swal.fire({
            title: "Thank you for Submit!",
            text: "Our Team will get back to you shortly",
            icon: "success",
          });
          break;

        default:
          console.log("Please select a valid option.");
          return;
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: error.message || "Something went wrong!",
      });
    } finally {
      closeModal(); // Close the modal after submission
    }
  };

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  return (
    <div className="font-sans">
      <div
        className="flex flex-col items-center justify-center font-sans bg-no-repeat bg-cover bg-center text-white sm:h-[20vh] h-[60dvh] sm:px-10 px-36  sm:py-16"
        style={{
          backgroundImage: "url('/images/location/Hero.svg')",
        }}
      >
        <div className="flex flex-col items-center">
          <div className="font-barlow font-bold text-[64px] sm:text-[44px]">
            Partner with us
          </div>
          <div className="font-barlow font-normal text-[24px] sm:text-[18px]">
            Home - Partner with us
          </div>
        </div>
      </div>
      <div className="bg-[#efefef]">
        <div className="text-center w-[80%] sm:w-[80%] m-auto py-[40px]">
          <h2 className="text-[20px] sm:text-[28px] text-[#111] font-barlow font-semibold">
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
          <div className="grid grid-cols-3 gap-10 sm:gap-6 px-[86px] pb-[30px] sm:pb-[10px] sm:px-[25px] sm:py-[20px] sm:grid-cols-1 md:grid-cols-1">
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
