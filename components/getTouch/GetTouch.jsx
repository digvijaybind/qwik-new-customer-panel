import React from "react";
import Image from "next/image";
import EmailIcon from "../../public/images/gettouch/Email.svg";
import FacebookIcon from "../../public/images/gettouch/facebook.svg";
import InstagramIcon from "../../public/images/gettouch/Instagram.svg";
import LinkedinIcon from "../../public/images/gettouch/linkedin.svg";
import TelephoneIcon from "../../public/images/gettouch/telephone.svg";
import TwitterIcon from "../../public/images/gettouch/x.svg";
import Map from "../../public/images/gettouch/Map.png";

// Social media links array
const socialMediaLinks = [
  { img: FacebookIcon, alt: "Facebook", url: "https://www.facebook.com" },
  { img: LinkedinIcon, alt: "LinkedIn", url: "https://www.linkedin.com" },
  { img: TwitterIcon, alt: "Twitter", url: "https://www.twitter.com" },
  { img: InstagramIcon, alt: "Instagram", url: "https://www.instagram.com" },
];

// Contact Info Component
const ContactInfo = ({ icon, label, value }) => (
  <div className="flex items-center sm:items-start mt-5 ">
    <Image src={icon} alt={label} height={40} width={40} />
    <div className="ml-5">
      <span className="font-barlow font-normal text-[18px]">{label}</span>
      <br />
      <span className="font-barlow font-semibold text-[#1E1E1E] text-[24px]">
        {value}
      </span>
    </div>
  </div>
);

// Social Media Component
const SocialMedia = ({ links }) => (
  <div className="mt-10 ">
    <h3 className="font-barlow font-bold text-[28px] mb-3">
      Follow Us On Social Media
    </h3>
    <div className="flex space-x-4">
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

// Google Map Component
const GoogleMap = ({ mapImage, mapLink }) => (
  <div className="w-full h-[400px] sm:h-auto mt-10 lg:mt-0">
    <a href={mapLink} target="_blank" rel="noopener noreferrer">
      <Image
        src={mapImage} // Use the image prop for the Google Map image
        alt="Google Map"
        layout="responsive"
        width={1000} // Adjust as needed for responsiveness
        height={500} // Adjust for the image aspect ratio
        className="rounded-lg shadow-lg object-cover" // Styling for the image
      />
    </a>
  </div>
);

// Main Component
const GetTouch = ({ mapIframeUrl }) => {
  return (
    <div className="grid grid-cols-12  sm:grid-cols-1 gap-8 bg-[#f5fdff] px-20 sm:px-5 py-20 sm:items-center">
      {/* Get in touch content */}
      <div className="col-span-5 sm:col-span-1 flex flex-col justify-between items-start sm:items-center max-w-[575px]">
        <h1 className="font-barlow font-semibold text-[24px] text-[#1E1E1E]">
          Get In Touch With Qwiklif
        </h1>
        <h2 className="font-barlow font-bold text-[54px] bg-headline-gradient text-transparent bg-clip-text leading-tight">
          Your Trusted Global Air Ambulance Provider.
        </h2>
        <p className="font-barlow font-normal text-[18px] text-[#1E1E1E] mt-4">
          In emergencies, time is crucial. Our air ambulances are a beacon of
          hope, ensuring swift medical assistance with rapid response times that
          connect distress to relief.
        </p>

        {/* Contact Information */}
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

        {/* Social Media Links */}
        <SocialMedia links={socialMediaLinks} />
      </div>

      {/* Google Map */}
      <div className="col-span-7 sm:col-span-1">
        <GoogleMap  mapImage={Map} mapLink="" />
      </div>
    </div>
  );
};

// Server-side function to get the map URL

export default GetTouch;