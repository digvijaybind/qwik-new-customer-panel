// MediaSection.js
import React from "react";
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

import styles from "./MediaSection.module.css";
import Image from "next/image";
const MediaSection = () => {
  const mediaItems = [
    {
      title: "Airtransfer",
      description: "Description for Video 1",
      thumbnail: Airtransfer,
    },
    {
      title: "Ambulance",
      description: "Description for Ambulance",
      thumbnail: Ambulance,
    },
    {
      title: "beechcraft",
      description: "Description for beechcraft",
      thumbnail: beechcraft,
    },
    {
      title: "challenger",
      description: "Description for challenger",
      thumbnail: challenger,
    },
    {
      title: " doctor",
      description: "Description for  doctor",
      thumbnail: doctor,
    },
    {
      title: "challenger",
      description: "Description for challenger",
      thumbnail: challenger,
    },
    {
      title: "helicaptor",
      description: "Description for helicaptor",
      thumbnail: helicaptor,
    },
    {
      title: "learjet",
      description: "Description for learjet",
      thumbnail: learjet,
    },
    {
      title: "operation",
      description: "Description for operation",
      thumbnail: operation,
    },
    {
      title: "challenger",
      description: "Description for challenger",
      thumbnail: challenger,
    },
    {
      title: "machine ",
      description: "Description for machine ",
      thumbnail: machine,
    },
    {
      title: "airpatience ",
      description: "Description for airpatience ",
      thumbnail: airpatience,
    },
    {
      title: "strectre ",
      description: "Description for strectre ",
      thumbnail: strectre,
    },
    {
      title: "human",
      description: "Description for human",
      thumbnail: human,
    },

    // Add more media items as needed
  ];

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 flex justify-center">
        Media Section
      </h2>
      <div className="grid grid-cols-4  md:grid-cols-2 lg:grid-cols-3 gap-5 sm:grid-cols-1">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-lg shadow-md cursor-pointer ${styles.imageContainer}`}
          >
            <Image
              src={item.thumbnail}
              alt={`Thumbnail for ${item.title}`}
              className={`w-full h-48 object-cover mb-4 rounded ${styles.image}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaSection;
