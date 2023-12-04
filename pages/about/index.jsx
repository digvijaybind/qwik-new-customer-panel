import { useState } from "react";
import styles from "../../styles/page.module.css";
const About = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="font-Montserrat">
      <img src="/images/about-banner.jpg" className="w-full" />
      <div className="flex px-32 py-16">
        <div className="w-1/4">
          <ul className="w-full flex flex-col drop-shadow-xl bg-white">
            <li className={`px-5 text-sm font-medium py-4 border-b-2 cursor-pointer ${activeTab === 1 ? styles.aboutPageMenuActive : ""}`} onClick={() => setActiveTab(1)}>
              Company Profile
            </li>
            <li className={`px-5 text-sm font-medium py-4 border-b-2 cursor-pointer ${activeTab === 2 ? styles.aboutPageMenuActive : ""}`} onClick={() => setActiveTab(2)}>
              Mission and Vision
            </li>
            <li className={`px-5 text-sm font-medium py-4 border-b-2 cursor-pointer ${activeTab === 3 ? styles.aboutPageMenuActive : ""}`} onClick={() => setActiveTab(3)}>
              Milestones
            </li>
            <li className={`px-5 text-sm font-medium py-4 border-b-2 cursor-pointer ${activeTab === 4 ? styles.aboutPageMenuActive : ""}`} onClick={() => setActiveTab(4)}>
              Policies
            </li>
          </ul>
        </div>
        <div className="w-3/4 sm:pl-0 pl-12">
          {activeTab === 1 && (
            <>
              <h2 className="font-bold text-xl uppercase mb-4">Company Profile</h2>
              <p className="text-sm">To connect people in need of critical medical transportation with the best-equipped, fastest, and most cost-effective air ambulance services. We are driven by a passion for saving lives and ensuring that all patients receive the highest standard of care during their journey.</p>
            </>
          )}
          {activeTab === 2 && (
            <>
              <h2 className="font-bold text-xl uppercase mb-4">Mission and Vision</h2>
              <p className="text-sm">To connect people in need of critical medical transportation with the best-equipped, fastest, and most cost-effective air ambulance services. We are driven by a passion for saving lives and ensuring that all patients receive the highest standard of care during their journey.</p>
            </>
          )}
          {activeTab === 3 && (
            <>
              <h2 className="font-bold text-xl uppercase mb-4">Milestones</h2>
              <p className="text-sm">To connect people in need of critical medical transportation with the best-equipped, fastest, and most cost-effective air ambulance services. We are driven by a passion for saving lives and ensuring that all patients receive the highest standard of care during their journey.</p>
            </>
          )}
          {activeTab === 4 && (
            <>
              <h2 className="font-bold text-xl uppercase mb-4">Policies</h2>
              <p className="text-sm">To connect people in need of critical medical transportation with the best-equipped, fastest, and most cost-effective air ambulance services. We are driven by a passion for saving lives and ensuring that all patients receive the highest standard of care during their journey.</p>
            </>
          )}
        </div>
      </div>
      <div className="bg-[#D8D8D8] h-[100px]"></div>
    </div>
  );
};

export default About;
