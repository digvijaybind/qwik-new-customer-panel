// NewsUpdate2.js
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";

// BlogCard Component: Displays individual blog post details
const BlogCard = ({ image, title, description, link }) => {
  return (
    <div className="bg-white drop-shadow-xl p-4 rounded-md">
      {/* Blog Image */}
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover object-top rounded-md"
        />
      ) : (
        <div className="w-full h-[200px] bg-gray-200 rounded-md"></div> // Placeholder if no image
      )}
      {/* Blog Content */}
      <div className="w-full p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="mt-2 mb-4 text-base line-clamp-3"
        ></p>
        <Link href={link}>
          <div className="bg-primary text-white px-4 py-2 rounded-sm inline-block hover:bg-primary-dark transition-colors">
            Read More
          </div>
        </Link>
      </div>
    </div>
  );
};

// Main Component: Renders the blog carousel with heading and button
const NewsUpdate2 = ({ blogs = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    centerMode: true,
    centerPadding: "40px",
  };

  return (
    <div className="flex justify-center items-center flex-col p-8">
      {/* Heading Section */}
      <div className="font-barlow font-semibold text-[24px] text-[#1E1E1E] mb-2">
        News & Update
      </div>
      <div className="bg-headline-gradient text-transparent bg-clip-text text-[54px] font-barlow font-bold text-center mb-8">
        Insights & Updates from Qwiklif
      </div>

      {/* Card Slider */}
      <div className="w-full max-w-7xl px-4">
        {blogs.length > 0 ? (
          <Slider {...settings}>
            {blogs.map((blog) => (
              <div key={blog.id} className="p-4">
                <BlogCard
                  image={blog.yoast_head_json?.og_image?.[0]?.url || ""}
                  title={blog.title?.rendered || "No Title"}
                  description={blog.excerpt?.rendered || "No Description"}
                  link={`/blog/${blog.slug}`}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="text-center text-gray-500">No News available</div>
        )}
      </div>

      {/* "Read More" Button */}
      <Link href="/blogs">
        <div className="w-[240px] h-[70px] bg-button-gradient mt-8 font-barlow font-semibold text-white flex justify-center items-center text-center rounded-md text-[24px] cursor-pointer hover:shadow-lg transition-shadow duration-300">
          Read More
        </div>
      </Link>
    </div>
  );
};

// Fetch data using getStaticProps
export async function getStaticProps() {
  try {
    const res = await fetch("https://qwiklif.com/wp-json/wp/v2/posts");

    if (!res.ok) {
      console.error(`Error fetching blogs: ${res.status}`);
      return { props: { blogs: [] } };
    }

    const blogs = await res.json();

    // Validate response structure
    if (!Array.isArray(blogs)) {
      console.error("Invalid response structure: Blogs is not an array");
      return { props: { blogs: [] } };
    }

    return {
      props: {
        blogs,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error("Failed to fetch blogs:", error.message);
    return {
      props: {
        blogs: [],
      },
    };
  }
}

export default NewsUpdate2;
