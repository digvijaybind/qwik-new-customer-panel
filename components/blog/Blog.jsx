import React from 'react';
import Image from 'next/image';
import SampleBlog from '../../public/images/banner1.jpg';
const Blog = ({ title, description, imageUrl, index }) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer transition duration-300 hover:scale-105">
      <Image
        class="w-full h-[160px]"
        src={imageUrl}
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset {title}</div>
        <p
          class="text-gray-700 text-base"
          dangerouslySetInnerHTML={description}
        >
        </p>
      </div>
    </div>
  );
};

export default Blog;
