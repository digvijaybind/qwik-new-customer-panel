import Image from 'next/image';
import React from 'react';

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <Image src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
