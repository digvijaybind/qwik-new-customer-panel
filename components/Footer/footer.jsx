import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className={`font-sans ${styles.container}`}>
      <div className="mx-auto w-full max-w-screen-xl pb-12 px-10 py-10 lg:py-8 ">
        <div className="md:flex md:justify-around">
          <div className="grid grid-cols-7 gap-3 sm:gap-3 sm:grid-cols-1">
            <div>
              <h2
                className={`${styles.headline} mb-3 text-sm font-semibold text-white uppercase dark:text-white`}
              >
                ABOUT Us
              </h2>
              <ul className="text-white font-medium cursor-pointer">
                <Link href="/about">
                  <li className={`${styles.TextHead}mb-1`}>Company Profile</li>
                </Link>
                <li className={`${styles.TextHead}mb-1`}>Mission & Vision</li>
                <li className={`${styles.TextHead}mb-1`}>Milestone</li>
                <li className={`${styles.TextHead}mb-1`}>Policies</li>
                <Link href="/blogs">
                  <li className={`${styles.TextHead}mb-1`}>Our Blogs</li>
                </Link>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-sm font-semibold text-white uppercase dark:text-white">
                SERVICES
              </h2>
              <ul className="text-white font-medium cursor-pointer">
                <li className={`${styles.Text}mb-1`}>Aviation</li>
                <li className={`${styles.Text}mb-1`}>MRO services</li>
                <li className={`${styles.Text}mb-1`}>Managnement</li>
                <li className={`${styles.Text}mb-1`}>Training</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-sm font-semibold text-white uppercase ">
                FLEET
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium cursor-pointer">
                <Link href="/fleet/Challenger-605">
                  <li className={`${styles.Text}mb-1`}>Challenger 605</li>
                </Link>
                <Link href="/fleet/Learjet">
                  <li className={`${styles.Text}mb-1`}>Learjet 45 XR</li>
                </Link>
                <Link href="/fleet/Beechcraft-B200">
                  <li className={`${styles.Text}mb-1`}>Beecraft B200</li>
                </Link>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-sm font-semibold text-white uppercase dark:text-white cursor-pointer">
                Locations
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium cursor-pointer">
                <li className="mb-1">Middle East (MENA)</li>
                <li className="mb-1">United States</li>
                <li className="mb-1">Africa</li>
                <li className="mb-1">Asia</li>
                <li className="mb-1">Europe</li>
                <li className="mb-1">North America</li>
                <li className="mb-1">South America</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-sm font-semibold text-white uppercase dark:text-white">
                Locations
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium cursor-pointer">
                <li className="mb-1">Air Ambulance in California</li>
                <li className="mb-1">Air Ambulance in Washington</li>
                <li className="mb-1">Air Ambulance in Canada</li>
                <li className="mb-1">Air Ambulance in Swedan</li>
                <li className="mb-1">Air Ambulance in France</li>
                <li className="mb-1">Air Ambulance in Singapore</li>
                <li className="mb-1">Air Ambulance in New Zealand</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-sm font-semibold text-white uppercase dark:text-white">
                MEDIA
              </h2>
              <ul className="text-white sfont-medium cursor-pointer">
                <li className={`${styles.Text}mb-1`}>Credentials</li>
                <li className={`${styles.Text}mb-1`}> Brochure</li>
                <li className={`${styles.Text}mb-1`}> News</li>
                <li className={`${styles.Text}mb-1`}> Gallery</li>
                <li className={`${styles.Text}mb-1`}> Brochure</li>
                <li className={`${styles.Text}mb-1`}>Testimonial</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-sm font-semibold text-white uppercase dark:text-white">
                CONTACT
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium cursor-pointer">
                <li className={`${styles.Text}mb-1`}>Get in Touch</li>
                <li className={`${styles.Text}mb-1`}> Get A Quote</li>
                <Link href="/career">
                  <li className={`${styles.Text}mb-1`}> Career</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
