import {useState} from "react";
import styles from "../../styles/page.module.css";
const About = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="font-Montserrat">
      <img src="/images/about-banner.jpg" className="w-full" />
      <div className="flex px-32 py-16">
        <div className="w-1/4">
          <ul className="w-full flex flex-col drop-shadow-xl bg-white">
            <li
              className={`px-5 text-sm font-medium py-4 border-b-2 cursor-pointer ${
                activeTab === 1 ? styles.aboutPageMenuActive : ""
              }`}
              onClick={() => setActiveTab(1)}
            >
              Company Profile
            </li>
            <li
              className={`px-5 text-sm font-medium py-4 border-b-2 cursor-pointer ${
                activeTab === 2 ? styles.aboutPageMenuActive : ""
              }`}
              onClick={() => setActiveTab(2)}
            >
              Mission and Vision
            </li>
            <li
              className={`px-5 text-sm font-medium py-4 border-b-2 cursor-pointer ${
                activeTab === 3 ? styles.aboutPageMenuActive : ""
              }`}
              onClick={() => setActiveTab(3)}
            >
              Milestones
            </li>
            <li
              className={`px-5 text-sm font-medium py-4 border-b-2 cursor-pointer ${
                activeTab === 4 ? styles.aboutPageMenuActive : ""
              }`}
              onClick={() => setActiveTab(4)}
            >
              Policies
            </li>
          </ul>
        </div>
        <div className="w-3/4 sm:pl-0 pl-12">
          {activeTab === 1 && (
            <>
              <h2 className="font-bold text-xl uppercase mb-4">
                Company Profile
              </h2>
              <p className="text-sm">
                About Qwiklif: An air ambulance company with give multiple
                choices of air ambulance cost which is closest to you, Qwiklif
                focuses on giving customer cost effective and safest patient
                transfer. Qwiklif is an air ambulance company which has wide
                network of aircraft fleet and professional intensivist to
                airlift the patient from anywhere in the world safely to the
                destination. Our Services 1. Dedicated air ambulance service:
                Fully equipped dedicated charter aircraft with stretcher
                configuration an best for patient transfer, We have largest
                network of air ambulance across the world to give you the best
                air ambulance cost - aircraft with ql image 2. Commercial
                Airline stretcher transfer Transferring patient in commercial
                airline is another best and cost effective option Commercial
                airline patient transfer works only if the patient is less on 4L
                of oxygen support - whatsapp 3. International Patient transfer
                Qwiklif offers International patient transfer service by
                dedicated air ambulance as well as commercial stretcher, Qwiklif
                takes care of all the documentation process for smooth transfer
                of patient. - 4. ECMO Initiation and Air Transfer: Qwiklif
                Expert ECMO team, Initiate ECMO,stabilises patient and then
                transfer the patient on ECMO using air ambulance across the
                world 5. Neonatal and pediatric Air Transfer Qwiklif neonatal
                team excels in transferring critical babies from one place to
                another using dedicated air ambulance with advance medical
                equipments on board
              </p>
            </>
          )}
          {activeTab === 2 && (
            <>
              <h2 className="font-bold text-xl uppercase mb-4">
                Mission and Vision
              </h2>
              <p className="text-sm">
                Our mission at Qwiklif is simple: to connect people in need of
                critical medical transportation with the best-equipped, fastest,
                and most cost-effective air ambulance services. We are driven by
                a passion for saving lives and ensuring that all patients
                receive the highest standard of care during their journey.
              </p>
            </>
          )}
          {activeTab === 3 && (
            <>
              <h2 className="font-bold text-xl uppercase mb-4">Milestones</h2>
              <p className="text-sm">
                The Qwiklif Difference What sets Qwiklif apart from the rest?
                It&apos;s our unwavering commitment to excellence, our extensive
                global network, and our dedication to affordability. 1. Largest
                Global Network: We take pride in being the largest air ambulance
                provider with a vast network of aircraft spanning across the
                globe. Whether you&apos;re in a bustling metropolis or a remote
                corner of the world, we can reach you and get you to where you
                need to be. 2. Swift Response: Time is of the essence in
                critical medical situations. Our team is on standby 24/7, ready
                to respond to your call at a moment&apos;s notice. We understand
                the urgency of your situation, and we act accordingly. 3.
                Top-Notch Medical Expertise: Our medical teams consist of highly
                skilled professionals with vast experience in critical care. We
                provide comprehensive in-flight medical care to ensure the
                safety and well-being of our patients. 4. Cutting-Edge Aircraft:
                Qwiklif only utilizes state-of-the-art aircraft equipped with
                the latest medical technology. We spare no expense in making
                sure that our patients receive the best care possible during
                their journey. 5. Affordability:We understand the financial
                strain that medical emergencies can cause. Qwiklif is committed
                to offering the most competitive pricing in the industry. We
                believe that every individual should have access to premium air
                ambulance services without the burden of excessive costs.
              </p>
            </>
          )}
          {activeTab === 4 && (
            <>
              <h2 className="font-bold text-xl uppercase mb-4">Policies</h2>
              <p className="text-sm">
                Qwiklif is founded on a set of core values that guide our every
                action: - Compassion: We understand the stress and anxiety that
                come with a medical emergency. Our team approaches every case
                with empathy, compassion, and a deep commitment to relieving the
                burden on the patient and their family. - Integrity: We maintain
                the highest level of integrity in all our operations. You can
                trust us to provide transparent, honest, and ethical service,
                from the first call to the safe arrival at the destination. -
                Innovation: We are constantly evolving and embracing new
                technologies and medical advancements to improve patient care
                and transportation. Innovation is at the heart of what we do. -
                Global Reach: Our extensive global network enables us to assist
                patients from any corner of the world. We believe that distance
                should never be an obstacle to receiving the best medical care.
                - Affordability: We&apos;re dedicated to making air ambulance
                services accessible to all by offering competitive pricing
                without compromising on quality. Your Trusted Air Ambulance
                Partner Qwiklif is more than just an air ambulance company. We
                are your trusted partner during the most challenging times. We
                are committed to redefining air ambulance services by providing
                unmatched quality, affordability, and global reach. When you
                choose Qwiklif, you&apos;re choosing excellence in medical
                transportation. Contact us today to learn more about our
                services and how we can assist you during a medical emergency.
                Qwiklif is here to provide the care and support you need when it
                matters most. Your safety and well-being are our top priorities.
              </p>
            </>
          )}
        </div>
      </div>
      <div className="bg-[#D8D8D8] h-[100px]"></div>
    </div>
  );
};

export default About;
