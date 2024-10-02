import React from "react";
import Image from "next/image";
import EmailIcon from "../../public/images/gettouch/Email.svg";
import FacebookIcon from "../../public/images/gettouch/facebook.svg";
import InstagramIcon from "../../public/images/gettouch/Instagram.svg";
import LinkedinIcon from "../../public/images/gettouch/linkedin.svg";
import TelephoneIcon from "../../public/images/gettouch/telephone.svg";
import TwitterIcon from "../../public/images/gettouch/x.svg";

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
const GoogleMap = ({ iframeUrl }) => (
  <div className="w-full h-[400px] mt-10 lg:mt-0">
    <iframe
      src={iframeUrl}
      width="100%"
      height="100%"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-lg shadow-lg"
      style={{ border: 0 }} // Ensure border is properly set
    />
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
        <GoogleMap iframeUrl={mapIframeUrl} />
      </div>
    </div>
  );
};

// Server-side function to get the map URL
export const getServerSideProps = async () => {
  const mapIframeUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3162862458075!2d55.36916767461331!3d25.259943629157895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d6a4db55dc3%3A0x494a904da22a2746!2sRegus%20-%20Dubai%2C%20DAFZ%20Freezone!5e0!3m2!1sen!2sae!4v1716456003858!5m2!1sen!2sae";

  return {
    props: {
      mapIframeUrl,
    },
  };
};

export default GetTouch;
