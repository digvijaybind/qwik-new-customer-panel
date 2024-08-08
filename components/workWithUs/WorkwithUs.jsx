import React, { useEffect, useState } from "react";
import styles from "./workWithus.module.css";
import UpdatecareerCard from "../careerCard/UpdatecareerCard";
import CustomModal from "../careermodal";
import flyingDoctor from "../../public/images/career/ProfessionalDoctor.jpg";
import Insurancefirm from "../../public/images/career/Insurance.jpg";
import AircraftOperator from "../../public/images/career/aircraftOperator.jpg";
import hospital from "../../public/images/career/Hospital.jpg";
import Paramedics from "../../public/images/career/paramedics.jpg";
import Modal from "react-modal";
import { fetchInsuranceData } from "@/redux/slices/career/InsuranceSlice";
import { useDispatch, useSelector } from "react-redux";
import { hospitalApi } from "@/redux/slices/career/hospitalSlice";
import { ParamedicsApi } from "@/redux/slices/career/paramedicSlice";
import { DoctorApi } from "@/redux/slices/career/doctorSlice";
import { aircraftOperator } from "@/redux/slices/career/aircraftoperatorSlice";
import Swal from "sweetalert2";
const actionMap = {
  insurance: fetchInsuranceData,
  hospital: hospitalApi,
  paramedics: ParamedicsApi,
  airoperator: aircraftOperator,
  doctor: DoctorApi,
};

const WorkwithUs = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPayload, setCurrentPayload] = useState({});
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.insurance); // Adjust based on actual state structure

  const service = [
    {
      img: Insurancefirm,
      head: "Medical Healthcare Insurance/Provider Company",
      text: "Partner with Qwiklif Air Ambulance to offer reliable medical insurance. Ensure patient safety and quality transfers. Apply now to join us.",
      payload: {
        type: "insurance",
        companyName: "",
        email: "",
        companyContactNumber: "",
        contactPerson: "",
        personContact: "",
      },
    },
    {
      img: hospital,
      head: "Hospital/Healthcare Center",
      text: "Join Qwiklif Air Ambulance for fast, reliable patient transfers. Support life-saving missions with us. Connect today and make a difference.",
      payload: {
        type: "hospital",
        hospitalName: "",
        email: "",
        contactNumberWithCountryCode: "",
        ownerName: "",
        location: "",
      },
    },
    {
      img: flyingDoctor,
      head: "Flying Doctor/Airborne Medical Professionals",
      text: "Become a Flying Doctor with Qwiklif. Provide critical care in challenging environments. Apply now and make a significant impact.",
      payload: {
        type: "doctor",
        fullName: "",
        specialities: "",
        degrees: "",
        location: "",
        contactNumberWithCountryCode: "",
      },
    },
    {
      img: Paramedics,
      head: "Paramedics/Flight Paramedics",
      text: "Join our team as a Paramedic or Flight Paramedic. Save lives and provide essential care during flights. Apply now to get involved.",
      payload: {
        type: "paramedics",
        fullName: "",
        email: "",
        country: "",
        degrees: "",
        contactNumberWithCountryCode: "",
      },
    },
    {
      img: AircraftOperator,
      head: "Aircraft Operator",
      text: "Partner with Qwiklif Air Ambulance for critical air ambulance services. Join us to make a real difference. Apply today to collaborate.",
      payload: {
        type: "airoperator",
        companyName: "",
        email: "",
        contactWithCountryCode: "",
        numberOfCountriesPresence: "",
        location: "",
      },
    },
  ];

  const openModal = (payload) => {
    if (payload) {
      // Only include relevant fields in currentPayload
      setCurrentPayload({ ...payload });
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

  const handleSubmit = async () => {
    const { type, ...formData } = currentPayload;
    const action = actionMap[type];
    if (action) {
      try {
        const result = await dispatch(action(formData));
        if (result.meta.requestStatus === "fulfilled") {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your application has been submitted successfully.",
            confirmButtonText: "OK",
          });
          closeModal();
        } else {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "There was an error submitting your application. Please try again.",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "There was an error submitting your application. Please try again.",
          confirmButtonText: "OK",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Unknown service type. Please try again.",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  return (
    <div className="font-sans">
      <div className={`bg-black ${styles.Image} h-[400px] w-full`}>
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
        <div className="text-center w-[90%] sm:w-[95%] mx-auto py-[40px] ">
          <h2 className="text-[22px] text-[#1a202c] font-poppins font-bold mb-[10px]">
            Partner with Us
          </h2>
          <hr className="bg-[#11B6E3] h-[4px] w-[50px] mx-auto mb-[20px]"></hr>
          <p className="text-[17px] text-[#333] font-poppins font-medium leading-relaxed">
            At Qwiklif, we are dedicated to revolutionizing the air ambulance
            business, and we are always looking for professionals who share our
            passion for excellence and innovation. We invite medical healthcare
            insurance or provider companies, hospitals and healthcare centers,
            flying doctors and airborne medical professionals, paramedics and
            flight paramedics, and aircraft operators to join us in our mission
            to provide the highest quality air ambulance services.
          </p>
        </div>

        <div id="root">
          <div className="grid grid-cols-3 gap-10 px-[86px] pb-[30px] sm:px-[25px] sm:py-[20px] sm:grid-cols-1">
            {service.map((data, i) => (
              <div className={`sm:w-[100%] mt-[20px] sm:mt-[15px]`} key={i}>
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
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default WorkwithUs;
