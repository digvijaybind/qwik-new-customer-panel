import styles from "./Location.module.css";
const AirAmbulanceCard = ({ city }) => (
  <div className={styles.card}>
    <h2>QwikLif Air Ambulance Services in {city}</h2>
    <p>
      Welcome to Qwiklif Air Ambulance, your trusted partner in medical
      emergency transportation. As a leading provider of international air
      ambulance services in {city}, we specialize in swift, safe, and expert
      medical repatriation globally. Our state-of-the-art equipment, experienced
      medical teams, and seamless logistics ensure a smooth and reliable
      transfer during critical times.
    </p>
    <p>Our Air Ambulance Services Include:</p>
    <ul>
      <li>
        International Air Ambulance Expertise: Qwiklif Air Ambulance specializes
        in international medical repatriation, catering to individuals requiring
        urgent medical attention or repatriation to and from {city}. Our fleet
        of advanced aircraft is equipped with cutting-edge medical technology to
        facilitate safe transfers across borders.
      </li>
      <li>
        Air Ambulance Services to India and Beyond: We understand the importance
        of timely medical care, especially during international emergencies.
        Qwiklif Air Ambulance offers dedicated services from {city} to India and
        a multitude of other countries worldwide. Whether it&apos;s transporting
        patients to major Indian cities like Mumbai, Delhi, or Chennai or
        facilitating transfers to various global destinations, our team ensures
        a swift and safe journey.
      </li>
      <li>
        Onboard Medical Expertise: Our air ambulance services come with highly
        qualified medical professionals, including doctors, nurses, and
        paramedics, who accompany patients throughout the journey. They provide
        specialized medical care, ensuring stability and comfort en route to the
        designated healthcare facility.
      </li>
    </ul>
    <p>Why Choose QwikLif Air Ambulance:</p>
    <ul>
      <li>
        Round-the-Clock Assistance: Our support team is available 24/7 to handle
        inquiries and emergencies, ensuring prompt and efficient service.
      </li>
      <li>
        Comprehensive Medical Care: We prioritize patient care and safety,
        providing comprehensive medical assistance and support throughout the
        transfer process.
      </li>
      <li>
        Global Reach: With a vast network and experience in international
        medical transportation, we guarantee reliable services worldwide.
      </li>
    </ul>
    <p>Contact Us for Emergency Air Ambulance Services in {city}:</p>
    <p>
      For immediate medical evacuation or inquiries about our air ambulance
      services in {city}, contact QwikLif Air Ambulance. Your health and safety
      are our priority.
    </p>
    <p>
      Get in touch with QwikLif Air Ambulance for immediate medical transport.
    </p>
    <p>
      Call now on +971 502825433 or visit{" "}
      <a href="https://qwiklif.com" target="_blank" rel="noopener noreferrer">
        qwiklif.com
      </a>
    </p>
  </div>
);

export default AirAmbulanceCard;
