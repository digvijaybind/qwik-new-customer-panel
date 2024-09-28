// MediaSection.js
import React from "react";
import Image from "next/image";
import styles from "./MediaSection.module.css";

// Importing all media images
import Airtransfer from "../../public/images/media/airtransfer.jpg";
import Ambulance from "../../public/images/media/ambulance.jpg";
import beechcraft from "../../public/images/media/beechcraft-b200-flying.jpg";
import challenger from "../../public/images/media/challenger-605-flying.jpg";
import doctor from "../../public/images/media/doctor.jpg";
import helicaptor from "../../public/images/media/helicaptor.svg";
import learjet from "../../public/images/media/learjet.jpg";
import operation from "../../public/images/media/operation.jpg";
import machine from "../../public/images/media/machine.jpg";
import airpatience from "../../public/images/media/airpatience.jpg";
import strectre from "../../public/images/media/strectre.jpg";
import human from "../../public/images/media/human.jpg";
import qwiklif1 from "../../public/images/qwiklif1.jpg";
import qwiklif2 from "../../public/images/qwiklif2.jpg";
import qwiklif3 from "../../public/images/qwiklif3.jpg";
import qwiklif4 from "../../public/images/qwiklif4.jpg";
import qwiklif5 from "../../public/images/qwiklif5.jpg";
import qwiklif6 from "../../public/images/qwiklif6.jpg";
import qwiklif7 from "../../public/images/qwiklif7.jpg";
import qwiklif8 from "../../public/images/qwiklif8.jpg";
import qwiklif9 from "../../public/images/qwiklif9.jpg";
import qwiklif10 from "../../public/images/qwiklif10.jpg";
import qwiklifimage3 from "../../public/images/qwiklifimage3.jpg";

// Media items data
const mediaItems = [
  {
    title: "Air Transfer",
    description: "Reliable air transfer services.",
    thumbnail: Airtransfer,
  },
  {
    title: "Ambulance",
    description: "Quick and efficient ambulance services.",
    thumbnail: Ambulance,
  },
  {
    title: "Beechcraft B200",
    description: "Flying high with Beechcraft B200.",
    thumbnail: beechcraft,
  },
  {
    title: "Challenger 605",
    description: "Smooth flights with Challenger 605.",
    thumbnail: challenger,
  },
  {
    title: "Doctor on Board",
    description: "Medical experts ready for emergencies.",
    thumbnail: doctor,
  },
  {
    title: "Helicaptor",
    description: "Fast aerial rescue services.",
    thumbnail: helicaptor,
  },
  {
    title: "Learjet",
    description: "High-speed Learjet journeys.",
    thumbnail: learjet,
  },
  {
    title: "Surgical Operation",
    description: "Professional and timely medical operations.",
    thumbnail: operation,
  },
  {
    title: "Advanced Medical Machine",
    description: "State-of-the-art medical equipment.",
    thumbnail: machine,
  },
  {
    title: "Air Patience",
    description: "Caring for patients during air transfers.",
    thumbnail: airpatience,
  },
  {
    title: "Stretcher",
    description: "Emergency transport with stretchers.",
    thumbnail: strectre,
  },
  {
    title: "Human Care",
    description: "Personal care for patients in transit.",
    thumbnail: human,
  },
  {
    title: "Air Ambulance 1",
    description: "Air ambulance services at your reach.",
    thumbnail: qwiklif1,
  },
  {
    title: "Air Ambulance 2",
    description: "Speedy and safe air ambulance service.",
    thumbnail: qwiklif2,
  },
  {
    title: "Air Ambulance 3",
    description: "Reliable and quick air transfer.",
    thumbnail: qwiklif3,
  },
  {
    title: "Air Ambulance 4",
    description: "Top-notch air ambulance service.",
    thumbnail: qwiklif4,
  },
  {
    title: "Air Ambulance 5",
    description: "Professional air ambulance crew.",
    thumbnail: qwiklif5,
  },
  {
    title: "Air Ambulance 6",
    description: "Experienced air ambulance pilots.",
    thumbnail: qwiklif6,
  },
  {
    title: "Air Ambulance 7",
    description: "Advanced air ambulance services.",
    thumbnail: qwiklif7,
  },
  {
    title: "Air Ambulance 8",
    description: "Air ambulance with latest tech.",
    thumbnail: qwiklif8,
  },
  {
    title: "Air Ambulance 9",
    description: "Prompt air ambulance assistance.",
    thumbnail: qwiklif9,
  },
  {
    title: "Air Ambulance 10",
    description: "Efficient air ambulance transportation.",
    thumbnail: qwiklif10,
  },
  {
    title: "Air Ambulance Emergency",
    description: "24/7 air ambulance services.",
    thumbnail: qwiklifimage3,
  },
];


const MediaSection = () => {
  return (
  
 

      <div className="container mx-auto mt-12 px-6">
        <div className="grid gap-8 grid-cols-4 sm:grid-cols-2 lg:grid-cols-3">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${styles.card} cursor-pointer`}
            >
              <div className="relative w-full h-64">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  
  );
};

export default MediaSection;
