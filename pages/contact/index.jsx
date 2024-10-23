import React, { useCallback, useState } from "react";
import styles from "./contact.module.css";
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
import Image from "next/image";
import EmailIcon from "../../public/images/contact/email.svg";
import FacebookIcon from "../../public/images/gettouch/facebook.svg";
import InstagramIcon from "../../public/images/gettouch/Instagram.svg";
import LinkedinIcon from "../../public/images/gettouch/linkedin.svg";
import TelephoneIcon from "../../public/images/contact/phone.svg";
import whatsapp from "../../public/images/contact/whatsapp.svg";
import TwitterIcon from "../../public/images/gettouch/x.svg";
import location from "../../public/images/contact/location.svg";
import Map from "../../public/images/gettouch/Map.png";

// Social media links array
const socialMediaLinks = [
  {
    img: FacebookIcon,
    alt: "Facebook",
    url: "https://www.facebook.com/Qwiklif-Air-Ambulance",
  },
  {
    img: LinkedinIcon,
    alt: "LinkedIn",
    url: "https://ae.linkedin.com/company/qwiklif-air-ambulance-service",
  },
  { img: TwitterIcon, alt: "Twitter", url: "https://www.twitter.com" },
  {
    img: InstagramIcon,
    alt: "Instagram",
    url: "https://www.instagram.com/qwiklif/",
  },
];

// Contact Info Component
const ContactInfo = ({ icon, label, value }) => (
  <div className="flex items-center sm:items-start sm:justify-center  mt-5 cursor-pointer">
    <Image src={icon} alt={label} height={40} width={40} />
    <div className="ml-5 sm:max-w-[150px]">
      <span className="font-barlow font-normal text-[24px] sm:text-[18px]">
        {label}
      </span>
      <br />
      <span className="font-barlow font-semibold  text-[#1E1E1E] text-[24px] sm:text-[18px] ">
        {value}
      </span>
    </div>
  </div>
);

// Social Media Component
const SocialMedia = ({ links }) => (
  <div className="mt-10">
    <h3 className="font-barlow font-bold text-[28px] mb-3">
      Follow Us On Social Media
    </h3>
    <div className="flex space-x-4 sm:space-x-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={link.img} alt={link.alt} height={40} width={40} />
        </a>
      ))}
    </div>
  </div>
);

// Custom Phone Input Component
const CustomPhoneInput = React.forwardRef(
  ({ value, onChange, ...rest }, ref) => (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      {...rest}
      className={`${styles.customPhoneInput} bg-[#dcdcdc]`}
      placeholder="Enter Number"
    />
  ),
);

CustomPhoneInput.displayName = "CustomPhoneInput";

// Custom Country Select Component
const CustomCountrySelect = ({ value, onChange, ...rest }) => {
  const countries = getCountries();
  const options = countries
    .map((country) => {
      const callingCode = getCountryCallingCode(country);
      if (!callingCode) return null;
      return {
        value: country,
        label: (
          <div className="flex items-center">
            <span className="mr-2">(+{callingCode})</span>
            <CountryFlag
              countryCode={country}
              svg
              style={{ width: "20px", height: "20px" }}
            />
          </div>
        ),
      };
    })
    .filter(Boolean);

  return (
    <Select
      value={options.find((option) => option.value === value)}
      onChange={(option) => onChange(option.value)}
      options={options}
      styles={{
        control: (base) => ({
          ...base,
          width: "8rem",
          backgroundColor: "#eeeeee",
          border: "none",
        }),
        menu: (base) => ({ ...base, backgroundColor: "#ffffff", zIndex: 9999 }),
      }}
      {...rest}
    />
  );
};

// Main Contact Component
const Contact = ({ mapInframeUrl }) => {
  const [formData, setFormData] = useState({
    From: "",
    To: "",
    FirstName: "",
    LastName: "",
    Phone: "",
    Email: "",
    Message: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name, value", name, value);
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e) => {

    try {
      const response = await dispatch(EquieryApi(formData));
      if (EquieryApi.fulfilled.match(response)) {
        Swal.fire({
          title: "Thank you for contacting us!",
          text: "Our Team will get back to you shortly",
          icon: "success",
        });
        setFormData({
          From: "",
          To: "",
          FirstName: "",
          LastName: "",
          Phone: "",
          Email: "",
          Message: "",
        });
        console.log("form submission", response.data);
      } else {
        console.error("Submission error:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Error",
        text: "An error occurred. Please try again.",
        icon: "error",
      });
    }
  };

  const handlePhoneChange = useCallback((value) => {
    // Check if the value is a string
    if (typeof value === "string") {
      const phoneNumber = parsePhoneNumberFromString(value); // Specify the default country if necessary
      const countryCode = phoneNumber ? phoneNumber.country : "";

      // Validate phone number
      if (phoneNumber && phoneNumber.isValid()) {
        setFormData((prevState) => ({
          ...prevState,
          Phone: value,
          countryCode,
        }));
      } else {
        // Optionally, handle invalid phone number case
        console.error("Invalid phone number");
        // You can also set an error state if needed
      }
    } else {
      // Handle cases where value is not a string
      console.error("Phone number value must be a string");
    }
  }, []);

  return (
    <div className={`${styles.container} bg-[#fff]`}>
      <header
        className="flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center text-white sm:h-[20vh] h-[70vh] sm:px-10 px-36 sm:py-24"
        style={{
          backgroundImage: " url('/images/location/Hero.svg')",
          backgroundSize: "cover", // Ensures the entire container is covered
          backgroundPosition: "center", // Centers the image within the container
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      >
        <div className="text-center">
          <h1 className="font-barlow font-bold text-[64px] sm:text-[44px]">
            Contact us
          </h1>
          <p className="font-barlow text-[24px]  sm:text-[18px]">
            Home - contact us
          </p>
        </div>
      </header>
      <section className="flex flex-col items-center">
        <h2 className="font-barlow text-[54px] sm:text-[34px] sm:text-center font-bold bg-headline-gradient text-transparent bg-clip-text mt-10 mb-5">
          Get In Touch With Qwiklif.
        </h2>
      </section>
      <main className="px-20 sm:px-5 py-20 sm:py-10 bg-[#f5fdff]">
        <div className="grid grid-cols-12 sm:grid-cols-1 gap-4">
          <section className="col-span-5 sm:col-span-1 flex flex-col items-start sm:items-center max-w-[575px]">
            <h1 className="font-barlow font-semibold text-[24px] sm:text-center">
              Get In Touch With Qwiklif
            </h1>
            <h2 className="font-barlow font-bold text-[54px] sm:text-[34px] bg-headline-gradient text-transparent bg-clip-text leading-tight sm:text-center mt-3 2xl:text-[34px]">
              Your Trusted Global Air Ambulance Provider.
            </h2>
            <p className="font-barlow font-normal text-[18px] mt-4 sm:text-center">
              In emergencies, time is crucial. Our air ambulances ensure swift
              medical assistance.
            </p>
            <div className="mt-8 space-y-4 sm:space-y-6 sm:flex sm:items-center  sm:flex-col">
              <ContactInfo
                icon={TelephoneIcon}
                label="Contact No."
                value="+971 50 2825433"
              />
              <ContactInfo
                icon={EmailIcon}
                label="Email Address"
                value="info@gmail.com"
              />
              <ContactInfo
                icon={whatsapp}
                label="WhatsApp No."
                value="+971502825433"
              />
              <ContactInfo
                icon={location}
                label="Address"
                value="QWIKLIF PORTAL L.L.C, Regus Dafza, 8W Level 5, Dubai Airport Freezone, Dubai."
              />
            </div>
          </section>
          <section className="col-span-7 sm:col-span-1">
            <div className="bg-[#fff] px-5 py-5 flex justify-between items-center flex-col rounded-md">
              <div className="font-barlow font-semibold text-[36px] bg-headline-gradient text-transparent bg-clip-text">
                Get Quote Now
              </div>
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-2"
                onSubmit={handleSubmit}
              >
                {/* First row: From and To */}
                <div className="flex flex-col sm:col-span-2 md:col-span-2">
                  <label
                    htmlFor="from"
                    className="text-gray-700 font-bold mb-2 inline-flex items-center"
                  >
                    From
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="from"
                    name="From"
                    value={formData.From}
                    onChange={handleChange}
                    className="w-[350px] 2xl:w-[300px] sm:w-full h-[60px] bg-[#F7F7F7] rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-none border px-4 py-2"
                    placeholder="Enter From..."
                    required
                  />
                </div>
                <div className="flex flex-col sm:col-span-2  md:col-span-2">
                  <label
                    htmlFor="to"
                    className="text-gray-700 font-bold mb-2 inline-flex items-center"
                  >
                    To
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="to"
                    name="To"
                    value={formData.To}
                    onChange={handleChange}
                    className="w-[350px] 2xl:w-[300px] sm:w-full h-[60px] bg-[#F7F7F7] rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-none border px-4 py-2 focus:outline-none"
                    placeholder="Enter To..."
                    required
                  />
                </div>

                {/* Second row: Name and Surname */}
                <div className="flex flex-col sm:col-span-2  md:col-span-2 ">
                  <label
                    htmlFor="firstName"
                    className="text-gray-700 font-bold mb-2 inline-flex items-center"
                  >
                    First Name
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="FirstName"
                    value={formData.FirstName}
                    onChange={handleChange}
                    className="border sm:w-full bg-[#F7F7F7] rounded-md w-full h-[60px] px-4 py-2 focus:outline-none 2xl:w-[300px]"
                    placeholder="Enter First Name..."
                    required
                  />
                </div>
                <div className="flex flex-col sm:col-span-2  md:col-span-2">
                  <label
                    htmlFor="lastName"
                    className="text-gray-700 font-bold mb-2 inline-flex items-center"
                  >
                    Last Name
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="LastName"
                    value={formData.LastName}
                    onChange={handleChange}
                    className="border sm:w-full bg-[#F7F7F7] rounded-md w-full h-[60px] px-4 py-2 focus:outline-none 2xl:w-[300px]"
                    placeholder="Enter Last Name..."
                    required
                  />
                </div>

                {/* Third row: Phone and Email */}
                <div className="flex flex-col sm:col-span-2  md:col-span-2">
                  <label
                    htmlFor="phone"
                    className="text-gray-700 font-bold mb-2 inline-flex items-center"
                  >
                    Phone
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <PhoneInput
                    id="phone"
                    name="Phone"
                    value={formData.Phone}
                    onChange={handlePhoneChange}
                    defaultCountry="AE"
                    placeholder="Enter Phone Number"
                    className="border rounded-md bg-[#F7F7F7] w-full h-[60px] px-4 py-2 focus:outline-none 2xl:w-[300px]"
                    required
                    countrySelectProps={{
                      className:
                        "bg-[#f0f4f8] border border-gray-300 h-[60px] rounded-l-md focus:outline-none",
                    }} // Country selector styles
                    inputProps={{
                      className:
                        "border border-gray-300 h-[70px] rounded-r-md focus:outline-none",
                    }} // Phone number input styles
                  />
                </div>
                <div className="flex flex-col sm:col-span-2  md:col-span-2">
                  <label
                    htmlFor="email"
                    className="text-gray-700 font-bold mb-2 inline-flex items-center"
                  >
                    Email
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    className="border rounded-md bg-[#F7F7F7] w-full h-[60px] px-4 py-2 focus:outline-none 2xl:w-[300px]"
                    placeholder="Enter Email..."
                    required
                  />
                </div>

                {/* Fourth row: Message */}
                <div className="col-span-2 ">
                  <div className="flex flex-col">
                    <label
                      htmlFor="message"
                      className="text-gray-700 font-bold mb-2 inline-flex items-center"
                    >
                      Message
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="Message"
                      value={formData.Message}
                      onChange={handleChange}
                      className="border rounded-md bg-[#F7F7F7] w-full h-[150px] px-4 py-2 focus:outline-none"
                      placeholder="Enter Message..."
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="h-[60px] w-full bg-button-gradient text-white rounded-md flex justify-center items-center cursor-pointer sm:mt-6 md:mt-8 lg:mt-10 font-barlow font-normal text-[24px]"
                  >
                    Request A Call Back
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
      <div className="flex flex-col justify-center items-center mt-10  mb-5 sm:mb-0 py-5 px-20 sm:px-5">
        <iframe
          className="w-full h-[550px] sm:h-[450px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.544473465372!2d55.36567!3d25.253509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4352cbb60fbd%3A0x25a91cd665ba1c5!2sDubai%20Airport%20Freezone!5e0!3m2!1sen!2sae!4v1656603853156!5m2!1sen!2sae"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const mapInframeUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3...";
  return {
    props: { mapInframeUrl },
  };
};

export default Contact;
