import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import icons
import LocationIcon from "../../public/images/topbanner/location.png";
import EmailIcon from "../../public/images/topbanner/Email.png";
import FacebookIcon from "../../public/images/topbanner/facebook.svg";
import TwitterIcon from "../../public/images/topbanner/x.png";
import InstagramIcon from "../../public/images/topbanner/instagram.png";
import LinkedInIcon from "../../public/images/topbanner/linkedin.png";

// Social media links data
const socialMediaLinks = [
  {
    href: "https://www.facebook.com/p/Qwiklif-Air-Ambulance-61554682497465/?_rdr",
    src: FacebookIcon,
    alt: "Facebook",
  },
  {
    href: "https://ae.linkedin.com/company/qwiklif-air-ambulance-service",
    src: LinkedInIcon,
    alt: "LinkedIn",
  },
  { href: "/", src: TwitterIcon, alt: "Twitter" },
  {
    href: "https://www.instagram.com/qwiklif/",
    src: InstagramIcon,
    alt: "Instagram",
  },
];

const TopBanner = () => {
  return (
    <div className="w-full h-auto bg-button-gradient flex flex-wrap justify-between items-center px-20 py-2 sm:px-10 md:px-20 md:py-4 sm:flex sm:items-center sm:justify-center">
      {/* Contact Information Section */}
      <div className="flex flex-wrap items-center space-x-6 sm:justify-center">
        {/* Address Section */}
        <div className="flex items-center cursor-pointer">
          <Image src={LocationIcon} height={3} width={20} alt="Location Icon" />
          <span className="font-barlow font-normal text-[20px] md:text-base text-white ml-2">
            dubai,uae
          </span>
        </div>

        {/* Email Section */}
        <div className="flex items-center cursor-pointer">
          <Image src={EmailIcon} height={20} width={20} alt="Email Icon" />
          <a
            href="mailto:Info@qwiklif.com"
            className="font-barlow font-normal text-[20px] md:text-base text-white ml-2 hover:underline"
          >
            Info@qwiklif.com
          </a>
        </div>
      </div>

      {/* Social Media Links Section */}
      <div className="flex space-x-4 items-center flex-row mt-3 md:mt-0">
        {socialMediaLinks.map(({ href, src, alt }) => (
          <Link key={alt} href={href} passHref legacyBehavior>
            <a
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 transition duration-300"
              aria-label={alt}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={src} width={18} height={18} alt={alt} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopBanner;
