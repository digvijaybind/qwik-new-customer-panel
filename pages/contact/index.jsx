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
  <div className="flex items-center sm:items-start mt-5 cursor-pointer">
    <Image src={icon} alt={label} height={40} width={40} />
    <div className="ml-5">
      <span className="font-barlow font-normal text-[24px]">{label}</span>
      <br />
      <span className="font-barlow font-semibold  text-[#1E1E1E] text-[24px]">
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
    Phone: "",
    Email: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(EquieryApi(formData));
      if (EquieryApi.fulfilled.match(response)) {
        Swal.fire({
          title: "Thank you for contacting us!",
          text: "Our Team will get back to you shortly",
          icon: "success",
        });
        setFormData({ From: "", To: "", Phone: "", Email: "" });
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
    const phoneNumber = parsePhoneNumberFromString(value);
    const countryCode = phoneNumber ? phoneNumber.country : "";
    setFormData((prevState) => ({ ...prevState, Phone: value, countryCode }));
  }, []);

  return (
    <div className={`${styles.container} bg-[#fff]`}>
      <header
        className="flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center text-white sm:h-[20vh] h-[90vh] sm:px-10 px-36"
        style={{ backgroundImage: "url('/images/location/Hero.svg')" }}
      >
        <div className="text-center">
          <h1 className="font-barlow font-bold text-[64px]">Contact us</h1>
          <p className="font-barlow text-[24px]">Home - contact us</p>
        </div>
      </header>
      <section className="flex flex-col items-center">
        <h2 className="font-barlow text-[54px] font-bold bg-headline-gradient text-transparent bg-clip-text mb-2">
          Get In Touch With Qwiklif.
        </h2>
      </section>
      <main className="px-20 sm:px-5 py-20 sm:py-10 bg-[#f5fdff]">
        <div className="grid grid-cols-12 sm:grid-cols-1 gap-8">
          <section className="col-span-6 sm:col-span-1 flex flex-col items-start sm:items-center max-w-[575px]">
            <h1 className="font-barlow font-semibold text-[24px] sm:text-center">
              Get In Touch With Qwiklif
            </h1>
            <h2 className="font-barlow font-bold text-[54px] sm:text-[34px] bg-headline-gradient text-transparent bg-clip-text leading-tight sm:text-center mt-3">
              Your Trusted Global Air Ambulance Provider.
            </h2>
            <p className="font-barlow font-normal text-[18px] mt-4 sm:text-center">
              In emergencies, time is crucial. Our air ambulances ensure swift
              medical assistance.
            </p>
            <div className="mt-8 space-y-4 sm:space-y-6">
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
          <section className="col-span-6 sm:col-span-1">
            <div className="bg-[#fff] px-10 py-20">
              <div className="">Get Quote Now</div>
            </div>
          </section>
        </div>
      </main>
      <div className="flex flex-col justify-center items-center mt-10  mb-5 sm:mb-0 py-5 px-20">
        <iframe
          src={mapInframeUrl}
          height="450"
          loading="lazy"
          className="w-full mt-3 mb-3 rounded-md"
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
