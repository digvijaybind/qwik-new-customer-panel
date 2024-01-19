import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer class={`font-poppins ${styles.container}`}>
      <div class="mx-auto w-full max-w-screen-xl pb-12 px-10 py-10 lg:py-8 ">
        <div class="md:flex md:justify-around">
          <div class="grid grid-cols-7 gap-3 sm:gap-3 sm:grid-cols-1">
            <div>
              <h2
                class={`${styles.headline} mb-3 text-sm font-semibold text-white uppercase dark:text-white`}
              >
                ABOUT Us
              </h2>
              <ul class="text-white font-medium cursor-pointer">
                <Link href="/about">
                  <li class={`${styles.TextHead}mb-1`}>Company Profile</li>
                </Link>
                <li class={`${styles.TextHead}mb-1`}>Mission & Vision</li>
                <li class={`${styles.TextHead}mb-1`}>Milestone</li>
                <li class={`${styles.TextHead}mb-1`}>Policies</li>
                <Link href="/blogs">
                  <li class={`${styles.TextHead}mb-1`}>Our Blogs</li>
                </Link>
              </ul>
            </div>
            <div>
              <h2 class="mb-3 text-sm font-semibold text-white uppercase dark:text-white">
                SERVICES
              </h2>
              <ul class="text-white font-medium cursor-pointer">
                <li class={`${styles.Text}mb-1`}>Aviation</li>
                <li class={`${styles.Text}mb-1`}>MRO services</li>
                <li class={`${styles.Text}mb-1`}>Managnement</li>
                <li class={`${styles.Text}mb-1`}>Training</li>
              </ul>
            </div>
            <div>
              <h2 class="mb-3 text-sm font-semibold text-white uppercase ">
                FLEET
              </h2>
              <ul class="text-white dark:text-gray-400 font-medium cursor-pointer">
                <Link href="/fleet/Challenger-605">
                  <li class={`${styles.Text}mb-1`}>Challenger 605</li>
                </Link>
                <Link href="/fleet/Learjet">
                  <li class={`${styles.Text}mb-1`}>Learjet 45 XR</li>
                </Link>
                <Link href="/fleet/Beechcraft-B200">
                  <li class={`${styles.Text}mb-1`}>Beecraft B200</li>
                </Link>
              </ul>
            </div>
            <div>
              <h2 class="mb-3 text-sm font-semibold text-white uppercase dark:text-white cursor-pointer">
                Locations
              </h2>
              <ul class="text-white dark:text-gray-400 font-medium cursor-pointer">
                <li class="mb-1">Air Ambulance in UAE</li>
                <li class="mb-1">Air Ambulance in Saudi Arabia</li>
                <li class="mb-1">Air Ambulance in Qatar A</li>
                <li class="mb-1">Air Ambulance in Oman</li>
                <li class="mb-1">Air Ambulance in Kuwait</li>
                <li class="mb-1">Air Ambulance in Israel</li>
                <li class="mb-1">Air Ambulance in India</li>
              </ul>
            </div>
            <div>
              <h2 class="mb-3 text-sm font-semibold text-white uppercase dark:text-white">
                Locations
              </h2>
              <ul class="text-white dark:text-gray-400 font-medium cursor-pointer">
                <li class="mb-1">Air Ambulance in California</li>
                <li class="mb-1">Air Ambulance in Washington</li>
                <li class="mb-1">Air Ambulance in Canada</li>
                <li class="mb-1">Air Ambulance in Swedan</li>
                <li class="mb-1">Air Ambulance in France</li>
                <li class="mb-1">Air Ambulance in Singapore</li>
                <li class="mb-1">Air Ambulance in New Zealand</li>
              </ul>
            </div>
            <div>
              <h2 class="mb-3 text-sm font-semibold text-white uppercase dark:text-white">
                MEDIA
              </h2>
              <ul class="text-white sfont-medium cursor-pointer">
                <li class={`${styles.Text}mb-1`}>Credentials</li>
                <li class={`${styles.Text}mb-1`}> Brochure</li>
                <li class={`${styles.Text}mb-1`}> News</li>
                <li class={`${styles.Text}mb-1`}> Gallery</li>
                <li class={`${styles.Text}mb-1`}> Brochure</li>
                <li class={`${styles.Text}mb-1`}>Testimonial</li>
              </ul>
            </div>
            <div>
              <h2 class="mb-3 text-sm font-semibold text-white uppercase dark:text-white">
                CONTACT
              </h2>
              <ul class="text-white dark:text-gray-400 font-medium cursor-pointer">
                <li class={`${styles.Text}mb-1`}>Get in Touch</li>
                <li class={`${styles.Text}mb-1`}> Get A Quote</li>
                <Link href="/career">
                  <li class={`${styles.Text}mb-1`}> Career</li>
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
