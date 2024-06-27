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
      </div>
    </div>
  );
};

export default Blog;
