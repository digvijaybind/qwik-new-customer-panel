import React from 'react';
import styles from './contact.module.css';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
const Contact = ({ mapInframeUrl }) => {
  return (
    <div className={`${styles.conatiner} bg-[#fff]`}>
      <div
        className={`bg-black ${styles.Image}   bg-black h-[400px] w-full  mt-2 flex justify-center items-center`}
      >
        <div className="font-sans font-bold text-[35px] text-[#fff] z-[1000] sm:font-bold">
          {' '}
          TALK TO THE <br />
          QWIKLIF TEAM
        </div>
      </div>
      <div className="flex justify-between relative bottom-[140px] px-[100px] sm:px-[20px] mt-10 flex justify-between w-full z-100 sm:flex-col sm:bottom-[60px] rounded-2xl">
        <div className="flex flex-col justify-center shadow-2xl rounded-2xl border-1 bg-[#fff] border-[#000] w-1/2 sm:w-full">
          <div className="font-sans  font-bold text-[30px] flex justify-center items-center flex-col text-[#262626] shadow-2xl px-[120px] py-[15px] sm:px-[50px] sm:font-bold">
            Get Quote Now
            <div className="flex justify-center items-center">
              <hr class="bg-[#000] h-[3px] w-[120px]"></hr>
            </div>
          </div>
          <form className="flex flex-col justify-center  px-[30px] py-[20px] bg-[#fff]">
            <div className="flex justify-between sm:flex-col">
              <div className="flex flex-col justify-start">
                <label className="font-bold text-[15px] bg-[#fff] mt-2 font-sans">
                  From : -
                </label>
                <input
                  type="text"
                  id="fname"
                  name="From"
                  placeholder="From"
                  className="w-full h-[40px] border-2 border-gray-200 rounded-md px-[40px] mt-2 bg-[#dcdcdc]"
                />
              </div>
              <div className="flex flex-col justify-start">
                <label
                  for="fname"
                  className="font-bold text-[15px] bg-[#fff] mt-2 font-sans"
                >
                  To:-
                </label>
                <input
                  type="text"
                  id="fname"
                  name="From"
                  placeholder="To"
                  className="w-full h-[40px] border-2 border-gray-200 rounded-md px-[40px] mt-2 bg-[#dcdcdc]"
                />
              </div>
            </div>
            <div className="flex justify-between sm:flex-col">
              <div className="flex flex-col ">
                <label
                  for="fname"
                  className="font-bold text-[15px] bg-[#fff] mt-2 font-sans"
                >
                  Email:-
                </label>
                <input
                  type="text"
                  id="fname"
                  name="Email Address"
                  placeholder="Email "
                  className="w-full h-[40px] border-2 border-gray-200 rounded-md px-[40px] mt-2 bg-[#dcdcdc]"
                />
              </div>
              <div className="flex flex-col ">
                <label
                  for="fname"
                  className="font-bold text-[15px] bg-[#fff] mt-2 font-sans"
                >
                  Phone Number :-
                </label>
                <input
                  type="text"
                  id="fname"
                  name="Phone Number"
                  placeholder="Phone Number"
                  className="w-full  h-[40px] border-2 border-gray-200 rounded-md px-[40px] mt-2 bg-[#dcdcdc]"
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
          className={`${styles.GetQuote} flex flex-col justify-center shadow-2xl w-1/3 sm:w-full sm:mt-5 bg-[#fff] rounded-md sm:py-[15px]`}
        >
          <div className="text-[30px] font-sans flex justify-center items-center flex-col text-center text-[#000] font-bold sm:font-bold">
            Our Address
            <div className="flex justify-center items-center">
              <hr class="bg-[#000] h-[3px] w-[150px]"></hr>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-[10px] font-sans mt-5 text-[#000] font-black flex justify-between flex-row items-center w-1/2 sm:w-2/3">
              <FaLocationDot style={{ height: '30px', width: '30px' }} />
              <div className="text-[13px] text-[#000] w-2/3  sm:font-medium sm:text-base">
                Qwiklif Air Ambulance ,Regus Dafza,8W Level 5,Dubai Airport
                freezone, Dubai.
              </div>
            </div>
            <div className="text-[10px] font-sans mt-5 text-[#000] font-black flex justify-between flex-row items-center w-1/2 sm:w-2/3">
              <MdEmail style={{ height: '30px', width: '30px' }} />
              <div className="text-[13px] text-[#000] w-2/3 cursor-pointer sm:font-medium sm:text-base">
                <a href="mailto:info@qwiklif.com"> info@qwiklif.com</a>
              </div>
            </div>
            <div className="text-[10px] font-sans mt-5 text-[#000] font-black flex justify-between flex-row items-center w-1/2 sm:w-2/3">
              <IoLogoWhatsapp style={{ height: '30px', width: '30px' }} />
              <div className="text-[13px] text-[#000] w-2/3 cursor-pointer sm:font-medium sm:text-base">
                <a href="tel:+971552087745">+971 55 208 7745</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our offices flex justify-center flex-col  bg-[#fff]  mb-5 relative bottom-[90px] sm:bottom-[30px] rounded-2xl">
        <div className="font-sans flex justify-center items-center flex-col bg-[#fff] font-bold text-[30px] text-[#262626] shadow-2xl px-[120px] sm:px-[50px] py-[15px] sm:font-bold">
          Our Office
          <div className="flex justify-center items-center">
            <hr class="bg-[#000] h-[4px] w-[150px]"></hr>
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
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3162862458075!2d55.36916767461331!3d25.259943629157895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d6a4db55dc3%3A0x494a904da22a2746!2sRegus%20-%20Dubai%2C%20DAFZ%20Freezone!5e0!3m2!1sen!2sae!4v1716456003858!5m2!1sen!2sae';
  return {
    props: {
      mapInframeUrl,
    },
  };
};

export default Contact;
