import PageStepper from "@/components/pagestepper/PageStepper";
import Link from "next/link";
import React from "react";

export async function getStaticProps() {
  const res = await fetch("https://qwiklif.com/wp-json/wp/v2/posts");
  const blogs = await res.json();
  return {
    props: {
      blogs,
    },
  };
}

const BlogCard = ({ imageSrc, title, description, link }) => {
  return (
    <div className="w-full sm:w-[100%] md:w-[650px] lg:w-[350px] xl:w-[450px] 2xl:w-[500px] 3xl:w-[430px] bg-white drop-shadow-xl rounded-lg overflow-hidden flex flex-col cursor-pointer mb-6">
      {/* Image Section */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[200px] 2xl:h-full 3xl:h-full md:h-full  sm:h-[250px] object-cover"
      />

      {/* Content Section */}
      <div className="flex flex-col w-full p-4">
        {/* Title */}
        <h2 className="text-md sm:text-lg md:text-xl 2xl:text-2xl 3xl:text-[20px]  3xl:text-[28px]font-barlow font-bold text-[#1E1E1E] mb-2">
          {title}
        </h2>

        {/* Description */}
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="mt-1 mb-2 font-barlow font-normal text-sm sm:text-base text-gray-600 line-clamp-3"
        />

        {/* Read More Button */}
        <Link
          href={link}
          className="text-[#1E1E1E] font-barlow font-semibold py-2 transition duration-200 hover:text-blue-600"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

const Blog = ({ blogs }) => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center font-sans bg-no-repeat bg-cover bg-center text-white 
        h-[50vh] sm:h-[30vh] px-10  sm:px-5 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/location/Hero.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center relative z-10">
          <div className="font-barlow font-bold text-[48px] sm:text-[54px] 2xl:text-[80px] ">
            Blog
          </div>
          <div className="font-barlow font-normal text-[18px] sm:text-[24px] 2xl:text-[32px] sm:text-nowrap">
            Home - Blog
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto sm:mx-auto px-4 lg:px-10 2xl:px-20 sm:px-5 py-10 flex flex-col">
        <div className="flex justify-center items-center flex-col mb-10">
          <div className="font-barlow font-normal text-[18px] sm:text-[24px] 2xl:text-[32px] text-[#1E1E1E]">
            News & Update
          </div>
          <div className="font-barlow text-[36px] sm:text-[54px] 2xl:text-[72px] font-bold bg-headline-gradient text-transparent bg-clip-text mb-2 sm:text-center md:text-center">
            Insights & Updates from Qwiklif
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2 3xl:grid-cols-3 gap-y-8 gap-x-6 mb-5 md:justify-items-center 3xl:px-14 2xl:px-10">
          {blogs?.map((blog) => (
            <BlogCard
              key={blog.id}
              imageSrc={blog.yoast_head_json?.og_image?.[0]?.url}
              title={blog.title.rendered}
              description={blog.excerpt.rendered}
              link={`/blogs/${blog.slug}`}
            />
          ))}
        </div>

        {/* Pagination Component */}
        <div className="sm:px-10">
          <PageStepper minStep={1} maxStep={7} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
