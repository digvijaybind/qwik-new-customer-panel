<<<<<<< HEAD
import React from 'react';
import Image from 'next/image';
import SampleBlog from '../../public/images/banner1.jpg';
const Blog = ({ title, description, imageUrl, index }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer transition duration-300 hover:scale-105">
      <Image
        className="w-full h-[160px]"
        src={imageUrl}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset {title}</div>
        <p
          className="text-gray-700 text-base"
          dangerouslySetInnerHTML={description}
        >
        </p>
=======
import React from "react";

const Blog = () => {
  return (
    <div className="flex-1 justify-center">
      <div class="font-lato  cursor-pointer text-[36px] font-[600]">
        The Impact of Technology on the Workplace: How Technology is Changing
      </div>
      <div>
        <img src="https://flowbite.com/docs/images/blog/image-1.jpg" />
      </div>
      <div class="font-lato text-[20px] text-[#3B3C4A]">
        Traveling is an enriching experience that opens up new horizons, exposes
        us to different cultures, and creates memories that last a lifetime.
        However, traveling can also be stressful and overwhelming, especially if
        you don't plan and prepare adequately. In this blog article, we'll
        explore tips and tricks for a memorable journey and how to make the most
        of your travels.
        <br /> One of the most rewarding aspects of traveling is immersing
        yourself in the local culture and customs. This includes trying local
        cuisine, attending cultural events and festivals, and interacting with
        locals. Learning a few phrases in the local language can also go a long
        way in making connections and showing respect.
>>>>>>> 52276b3068250cf77f1df4635ff9ca83d7eddcf4
      </div>
    </div>
  );
};

export default Blog;
