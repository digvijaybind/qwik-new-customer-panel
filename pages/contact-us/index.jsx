import JoinMailingList from "@/components/JoinMailingList/JoinMailingList";
import styles from "../../styles/page.module.css";

const ContactUs = () => {
  return (
    <div className="font-Montserrat">
      <img src="/images/contact-us-banner.jpg" className="w-full" alt="banner" />
      <div className="flex sm:flex-col flex-row sm:px-10 px-36 sm:mt-2 mt-16">
        <div className="flex flex-col sm:w-full w-3/5 sm:px-2 px-24">
          <h1 className="text-2xl font-bold font-Montserrat my-8">Get in Touch</h1>
          <form
            className="w-full"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <input className="border px-3 py-2" type="text" name="firstname" placeholder="First Name" />
              <input className="border px-3 py-2" type="text" name="lastname" placeholder="Last Name" />
              <input className="border px-3 py-2" type="email" name="email" placeholder="Email" />
              <input className="border px-3 py-2" type="tel" name="mobile" placeholder="Mobile" />
            </div>
            <textarea className="border px-3 py-2 w-full mt-4" rows="10" name="message" placeholder="Your Message"></textarea>
            <div className="flex items-start my-2">
              <input type="checkbox" name="tnc" className="mr-2 mt-1" />
              <label className="text-sm">
                I have read and agree to the <a className="text-red-600">Privacy Policy</a>
              </label>
            </div>
            <div className="flex justify-end sm:my-5">
              <button type="submit" className="px-8 py-2 bg-[#40D1F0] text-white rounded-full font-medium">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col sm:w-full w-2/5 text-white">
          <div className="flex bg-[#33383E] sm:px-5 px-10 py-10">
            <div className="w-3/12">
              <span className="bg-[#40D1F0] h-[60px] w-[60px] flex justify-center items-center p-3">
                <img src="/images/location-icon.svg" alt="location icon" />
              </span>
            </div>
            <div className="flex-1">
              <p className="text-xl font-semibold">Our Location</p>
              <p className="text-xl font-semibold mb-3">Headquarters</p>
              <p className="text-md font-semibold text-[#848383]">Dubai</p>
              <p className="text-xl font-semibold mt-5 mb-3">Hanger Premise</p>
              <p className="text-md font-semibold text-[#848383]">Dubai</p>
            </div>
          </div>
          <div className={`${styles.contactInfoBg} flex sm:px-5 px-10 py-10`}>
            <div className="w-3/12">
              <span className="bg-[#40D1F0] h-[60px] w-[60px] flex justify-center items-center p-3">
                <img src="/images/call-icon.svg" alt="location icon" />
              </span>
            </div>
            <div className="flex-1 text-black">
              <p className="text-xl font-semibold">Tel: +90 216 709 17 72</p>
              <p className="text-xl font-semibold">Tel: +90 850 433 17 72</p>
              <p className="text-xl font-semibold">Fax: +90 (216) 709 18 48</p>
            </div>
          </div>
          <div className="flex bg-[#33383E] sm:px-5 px-10 py-10">
            <div className="w-3/12">
              <span className="bg-[#40D1F0] h-[60px] w-[60px] flex justify-center items-center p-3">
                <img src="/images/email-open-icon.svg" alt="location icon" />
              </span>
            </div>
            <div className="flex-1">
              <p className="text-xl font-semibold">Email us Now</p>
              <p className="text-md font-semibold text-[#848383]">sales@qwiklif.com</p>
              <p className="text-md font-semibold text-[#848383]">qwiklif@qwiklif.com</p>
            </div>
          </div>
        </div>
      </div>
      <JoinMailingList />
      <div className="bg-[#D8D8D8] h-[100px]"></div>
    </div>
  );
};

export default ContactUs;
