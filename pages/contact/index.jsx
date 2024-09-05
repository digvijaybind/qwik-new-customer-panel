import React, { useCallback, useState } from "react";
import styles from "./contact.module.css";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { EquieryApi } from "@/redux/slices/equirySlice";
import { useDispatch } from "react-redux";
import PhoneInput, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import CountryFlag from "react-country-flag";
import Select from "react-select";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
const CustomPhoneInput = React.forwardRef(
  ({ value, onChange, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        value={value}
        onChange={onChange}
        {...rest}
        className={`${styles.customPhoneInput} bg-[#dcdcdc]`}
        placeholder="Enter Number"
      />
    );
  }
);

CustomPhoneInput.displayName = "CustomPhoneInput";
const CustomCountrySelect = ({ value, onChange, labels, ...rest }) => {
  const countries = getCountries();

  const options = countries
    .map((country) => {
      const callingCode = getCountryCallingCode(country);

      if (!callingCode) {
        return null; // Skip this option if the country code is not valid
      }

      return {
        value: country,
        label: (
          <div className="flex items-center">
            <div className="mr-2"> (+{callingCode})</div>
            <CountryFlag
              countryCode={country}
              svg
              style={{ width: "20px", height: "20px" }}
            />
          </div>
        ),
      };
    })
    .filter(Boolean); // Remove any null values from the options array

  return (
    <div className="flex items-center">
      <Select
        {...rest}
        value={options.find((option) => option.value === value)}
        onChange={(option) => onChange(option.value)}
        options={options}
        className=""
        styles={{
          // Custom styles for the select component
          control: (provided) => ({
            ...provided,
            width: "8rem",
            minHeight: "2.5rem",
            backgroundColor: "#eeeee",
            border: "none",
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: "#ffffff",
            zIndex: 9999,
          }),
        }}
      />
      {/* <div className="h-full border-r border-gray-400"></div> */}
    </div>
  );
};

const Contact = ({ mapInframeUrl }) => {
  const [formData, setFormData] = useState({
    From: "",
    To: "",
    Phone: "",
    Email: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name , and value", value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(EquieryApi(formData));

      if (EquieryApi.fulfilled.match(response)) {
        const result = await response.data;
        Swal.fire({
          title: "Thank you for contacting us!",
          text: "Our Team will get back to you shortly",
          icon: "success",
          // confirmButtonText: "OK",
          // customClass: {
          //   confirmButton: "bg-blue-500 text-white",
          // },
        });
        setFormData({ From: "", To: "", Phone: "", Email: "" });
      } else {
        console.error("Submission error:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handlePhoneChange = useCallback((value) => {
    if (typeof value === "string") {
      const phoneNumber = parsePhoneNumberFromString(value);
      const countryCode = phoneNumber ? phoneNumber.country : "";
      setFormData((formData) => ({
        ...formData,
        mobile: value,
        countryCode: countryCode,
      }));
    }
  }, []);

  return (
    <div className={`${styles.conatiner} bg-[#fff]`}>
      <div
        className={`bg-black ${styles.Image}   bg-black h-[400px] w-full  mt-2 flex justify-center items-center`}
      >
        <div className="font-Poppins font-bold text-[25px] text-[#fff] z-[1000] sm:font-bold sm:text-center">
          {" "}
          TALK TO THE QWIKLIF TEAM
        </div>
      </div>
      <div className="flex justify-between relative bottom-[140px] px-[100px] sm:px-[20px] mt-10  w-full z-100 sm:flex-col sm:bottom-[60px] rounded-2xl">
        <div className="flex flex-col justify-center shadow-xl rounded-2xl border-1 bg-[#fff] border-[#000] w-1/2 sm:w-full">
          <div className="font-Poppins  font-bold text-[30px] flex justify-center items-center flex-col text-[#262626] shadow-2xl px-[120px] py-[15px] sm:px-[50px] sm:font-bold">
            Get Quote Now
            <div className="flex justify-center items-center">
              <hr class="bg-[#19c0f0] h-[3px] w-[80px]"></hr>
            </div>
          </div>
          <form
            className="flex flex-col justify-center  px-[30px] py-[20px] bg-[#fff]"
            onSubmit={handlesubmit}
          >
            <div className="flex justify-between sm:flex-col">
              <div className="flex flex-col justify-start mr-3 sm:mr-0">
                <label className="font-bold text-[15px] bg-[#fff] mt-2 font-sans">
                  From : -
                </label>
                <input
                  type="text"
                  id="fname"
                  name="From"
                  placeholder="From"
                  value={formData.From}
                  onChange={handleChange}
                  className="w-full h-[40px] border-2 border-gray-200 rounded-md px-[40px] mt-2 bg-[#dcdcdc] focus:border-transparent focus:outline-none"
                />
              </div>
              <div className="flex flex-col justify-start mr-3 sm:mr-0 ">
                <label
                  for="fname"
                  className="font-bold text-[15px] bg-[#fff] mt-2 font-sans"
                >
                  To:-
                </label>
                <input
                  type="text"
                  id="fname"
                  name="To"
                  placeholder="To"
                  value={formData.To}
                  onChange={handleChange}
                  className="w-full h-[40px] border-2 border-gray-200 rounded-md px-[40px] mt-2 bg-[#dcdcdc] focus:border-transparent focus:outline-none"
                />
              </div>
            </div>
            <div className="flex justify-between sm:flex-col">
              <div className="flex flex-col justify-start mr-3 sm:mr-0  w-1/2 sm:w-full">
                <label
                  for="fname"
                  className="font-bold text-[15px] bg-[#fff] mt-2 font-sans"
                >
                  Email:-
                </label>
                <input
                  type="text"
                  id="fname"
                  name="Email"
                  placeholder="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  className="w-full h-[40px] border-2 border-gray-200 rounded-md px-[40px] mt-2 bg-[#dcdcdc] focus:border-transparent focus:outline-none"
                />
              </div>
              <div className="flex flex-col justify-start mr-3 sm:mr-0  w-1/2 sm:w-full">
                <label
                  for="fname"
                  className="font-bold text-[15px] bg-[#fff] mt-2 font-sans"
                >
                  Phone Number :-
                </label>

                <PhoneInput
                  defaultCountry="AE"
                  className={`${styles.phoneInput}  bg-[#dcdcdc]  rounded-md h-[40px] mt-2 font-bold text-[14px]`}
                  placeholder="Enter Number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handlePhoneChange}
                  countrySelectComponent={CustomCountrySelect}
                  inputComponent={CustomPhoneInput}
                />
              </div>
            </div>

            <div className="flex justify-center mt-8 sm:mt-4">
              <button className="font-sans bg-[#19C0F0] px-[20px] py-[20py] rounded-md mt-5 w-[150px] h-[40px] font-bold sm:font-bold">
                Get Quote
              </button>
            </div>
          </form>
        </div>
        <div
          className={`${styles.GetQuote} flex flex-col justify-center shadow-xl w-1/3 sm:w-full sm:mt-5 bg-[#fff] rounded-md sm:py-[15px]`}
        >
          <div className="text-[30px] font-Poppins flex justify-center items-center flex-col text-center text-[#000] font-bold sm:font-bold px-10">
            Our Address
            <div className="flex justify-center items-center">
              <hr class="bg-[#19c0f0] h-[3px] w-[60px]"></hr>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-[10px] font-sans mt-5 text-[#000] font-black flex justify-between flex-row items-center w-full sm:w-2/3 px-10 sm:px-0">
              <FaLocationDot style={{ height: "30px", width: "30px" }} />
              <div className="text-[13px] text-[#000] w-2/3  font-Poppins sm:font-medium sm:text-base">
                Qwiklif Air Ambulance ,Regus Dafza,8W Level 5,Dubai Airport
                freezone, Dubai.
              </div>
            </div>
            <div className="text-[10px] font-sans mt-5 text-[#000] font-black flex justify-between flex-row items-center w-full sm:w-2/3 px-10 sm:px-0 cursor-pointer">
              <a href="mailto:info@qwiklif.com">
                <MdEmail style={{ height: "30px", width: "30px" }} />
              </a>
              <div className="text-[13px] font-Poppins text-[#000] w-2/3 cursor-pointer sm:font-medium sm:text-base">
                <a href="mailto:info@qwiklif.com"> info@qwiklif.com</a>
              </div>
            </div>
            <div className="text-[10px] font-sans mt-5 text-[#000] font-black flex justify-between flex-row items-center w-full sm:w-2/3 px-10 sm:px-0 cursor-pointer">
              <a
                href="https://wa.me/971552087745"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp style={{ height: "30px", width: "30px" }} />
              </a>
              <div className="text-[13px] font-Poppins text-[#000] w-2/3 cursor-pointer sm:font-medium sm:text-base">
                <a href="tel:+971552087745">+971 55 208 7745</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our offices flex justify-center flex-col  bg-[#fff]  mb-5 relative bottom-[90px] sm:bottom-[30px] rounded-2xl">
        <div className="font-Poppins flex justify-center items-center flex-col bg-[#fff] font-bold text-[30px] text-[#262626] shadow-2xl px-[120px] sm:px-[50px] py-[15px] sm:font-bold">
          Our Office
          <div className="flex justify-center items-center">
            <hr class="bg-[#19c0f0] h-[3px] w-[60px]"></hr>
          </div>
        </div>
        <div className="W-full flex justify-center bg-[#fff] px-[100px] sm:px-[10px]">
          <iframe
            src={mapInframeUrl}
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full mt-3 mb-3 rounded-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const mapInframeUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3162862458075!2d55.36916767461331!3d25.259943629157895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d6a4db55dc3%3A0x494a904da22a2746!2sRegus%20-%20Dubai%2C%20DAFZ%20Freezone!5e0!3m2!1sen!2sae!4v1716456003858!5m2!1sen!2sae";
  return {
    props: {
      mapInframeUrl,
    },
  };
};

export default Contact;
