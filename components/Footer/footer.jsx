import React from "react";
import styles from "./footer.module.css";
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
                <li class={`${styles.TextHead}mb-1`}>Company Profile</li>
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
                <li class={`${styles.Text}mb-1`}>Challenger 605</li>
                <li class={`${styles.Text}mb-1`}>Learjet 45 XR</li>
                <li class={`${styles.Text}mb-1`}>Beecraft B200</li>
              </ul>
            </div>
            <div>
              <h2 class="mb-3 text-sm font-semibold text-white uppercase dark:text-white cursor-pointer">
                Legal
              </h2>
              <ul class="text-white dark:text-gray-400 font-medium cursor-pointer">
                <li class="mb-1">Privacy Policy</li>
                <li>Terms &amp; Conditions</li>
              </ul>
            </div>
            <div>
              <h2 class="mb-3 text-sm font-semibold text-white uppercase dark:text-white">
                MEDICAL
              </h2>
              <ul class="text-white dark:text-gray-400 font-medium cursor-pointer">
                <li class={`${styles.Text}mb-1`}>Medical Team</li>
                <li class={`${styles.Text}mb-1`}>Medical Equipment</li>
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
                <li class={`${styles.Text}mb-1`}> Career</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
