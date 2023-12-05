// MediaSection.js
import React from "react";

const MediaSection = () => {
  const mediaItems = [
    {
      title: "Video Title 1",
      description: "Description for Video 1",
      thumbnail: "/video1-thumbnail.jpg",
    },
    {
      title: "Video Title 2",
      description: "Description for Video 2",
      thumbnail: "/video2-thumbnail.jpg",
    },
    // Add more media items as needed
  ];

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Media Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={item.thumbnail}
              alt={`Thumbnail for ${item.title}`}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaSection;
