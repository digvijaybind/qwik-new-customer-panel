import React from 'react';
import styles from './workWithus.module.css';
import ShadowCard from '@/components/shadowCard';
import Careercard from '../careerCard/careerCard';
import UpdatecareerCard from '../careerCard/UpdatecareerCard';

const WorkwithUs = () => {
  const service = [
    {
      img: 'https://qwiklif.com/wp-content/uploads/2024/01/1-230x230.png',
      head: 'Flying doctor/ Airborne Medical Professionals',
      text: 'Are you a medical professional who thrives in high-pressure situations and excels at making critical decisions? Join our team of Flying Doctors at Qwiklif Air Ambulance! Experience the thrill of providing life-saving care in challenging environments. Apply now and take your career to new heights!',
    },
    {
      img: 'https://qwiklif.com/wp-content/uploads/2024/01/5-230x230.png',
      head: 'Paramedics/Flight Paramedics',
      text: 'Join our team of Paramedics/Flight Paramedics at Qwiklif Air Ambulance! Make a real difference with your life-saving skills in a dynamic and rewarding environment. Apply now!',
    },
    {
      img: 'https://qwiklif.com/wp-content/uploads/2019/01/challenger-605_1-re-230x230.jpg',
      head: 'Aircraft Operator',
      text: 'Join Qwiklif Air Ambulance and be a part of our life-saving mission! We are looking for aircraft operators to partner with us and provide critical air ambulance services. Together, we can make a real difference. Join us today!',
    },
    {
      img: 'https://qwiklif.com/wp-content/uploads/2019/01/Untitled-design-2-230x230.png',
      head: 'Hospital/healthcare center',
      text: 'Partner with Qwiklif Air Ambulance and provide your patients with rapid and reliable medical transportation. Join us in our mission to save lives and make a difference. Partner with us today!',
    },
    {
      img: 'https://qwiklif.com/wp-content/uploads/2019/01/Untitled-design-3-230x230.png',
      head: 'Private Aircraft Owner',
      text: 'Own a private aircraft? Partner with Qwiklif Air Ambulance and help us provide life-saving medical transportation. Make a difference with your aircraft. Partner with us today!',
    },
    {
      img: 'https://qwiklif.com/wp-content/uploads/2019/01/Untitled-design-3-230x230.png',
      head: 'Pilots',
      text: 'Attention Pilots! Join the Qwiklif Air Ambulance team and be part of a mission that saves lives. Fly with us and make a real difference. Join our team today!',
    },
  ];
  return (
    <div className="font-sans">
      <div className={`bg-black ${styles.Image}   bg-black h-[400px] w-full`}>
        <div className=" font-[700] z-[100px] pl-[40px] sm:pl-[10px] relative  text-white">
          <p className="text-[50px]  pt-[150px] sm:pt-[100px]">
            Partner with us{' '}
          </p>
          <div className="flex pt-[30px] text-[20px]">
            <p className="text-[#C5D5FF] pr-[10px]">
              {'Air Ambulance Services >'}
            </p>
            <p> Partner with Us</p>
          </div>
        </div>
      </div>
      <div className="bg-[#efefef]">
        <div className="text-center w-[80%] sm:w-[80%] m-auto py-[30px]">
          <h2 className="text-[25px]  text-[#111] font-sans font-extrabold">
            partner with us
          </h2>
          <p className="pt-[10px] font-sans font-medium">
            At Qwiklif, we are dedicated to revolutionizing the air ambulance
            business, and we are always looking for professionals who share our
            passion for excellence and innovation. We invite flying doctors,
            paramedics, hospitals, aircraft operators, private jet owners, and
            pilots to join us in our mission to provide the highest quality air
            ambulance services.
          </p>
          <p className="pt-[10px] font-sans font-medium">
            If you are committed to delivering exceptional care and service, and
            if you thrive in a dynamic and challenging environment, we want to
            hear from you. Join us at Qwiklif and be a part of a team that is
            changing the way medical emergencies are handled, one flight at a
            time.
          </p>
        </div>
        <div className="flex justify-between sm:items-center px-[6%] py-[4%] flex-wrap">
          {service.map((data, i) => (
            <div
              className={`w-[30%] sm:w-[100%] mt-[20px] ${
                i == 4 ? 'mb-[20px]' : ''
              } `}
              key={i}
            >
              <UpdatecareerCard
                image={data.img}
                headline={data.head}
                descripation={data.text}
                height={80}
                width={80}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkwithUs;
