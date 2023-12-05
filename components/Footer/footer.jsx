import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div class="mx-auto w-full max-w-screen-xl pb-12 px-10 py-10 lg:py-8 ">
        <div class="md:flex md:justify-around">
          <div class="grid grid-cols-7 gap-3 sm:gap-3 sm:grid-cols-1">
            <div>
              <h2
                class={`${styles.headline} mb-3 text-sm font-semibold text-white uppercase dark:text-white`}
              >
                ABOUT QWIKLIF
              </h2>
              <ul class="text-white font-medium cursor-pointer">
                <Link href="/about">
                  <li class={`${styles.TextHead}mb-1`}>Company Profile</li>
                </Link>
                <li class={`${styles.TextHead}mb-1`}>Mission & Vision</li>
                <li class={`${styles.TextHead}mb-1`}>Milestone</li>
                <li class={`${styles.TextHead}mb-1`}>Policies</li>
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
                <li class="mb-1">Air ambulance in delhi</li>
                <li class="mb-1">Air ambulance in dubai</li>
                <li class="mb-1">Air ambulance in USA</li>
                <li class="mb-1">Air ambulance in UK</li>
                <li class="mb-1">Air ambulance in London</li>
                <li class="mb-1">Air ambulance in Kenya</li>
                <li class="mb-1">Air ambulance in Nairobi</li>
              </ul>
            </div>
            <div>
              <h2 class="mb-3 text-sm font-semibold text-white uppercase dark:text-white">
                Locations
              </h2>
              <ul class="text-white dark:text-gray-400 font-medium cursor-pointer">
                <li class="mb-1">Air ambulance in Australia</li>
                <li class="mb-1">Air ambulance in Toronto</li>
                <li class="mb-1">Air ambulance in California</li>
                <li class="mb-1">Air ambulance in Africa</li>
                <li class="mb-1">Air ambulance in Bangkok</li>
                <li class="mb-1">Air ambulance in Singapore</li>
                <li class="mb-1">Air ambulance in Mumbai</li>
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
