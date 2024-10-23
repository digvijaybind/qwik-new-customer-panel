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
  console.log("link", `/${link}`);

  return (
    <div className="w-[440px] h-auto bg-white drop-shadow-xl rounded-tl-lg overflow-hidden flex flex-col cursor-pointer rounded-md 2xl:gap-x-8 3xl:gap-x-8">
      {/* Image Section */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-70 object-cover object-top"
      />

      {/* Content Section */}
      <div className="flex flex-col w-full p-4">
        {/* Title */}
        <h2 className="text-xl font-barlow font-bold text-[#1E1E1E] mb-2">
          {title}
        </h2>

        {/* Description */}
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="mt-1 mb-2 font-barlow font-normal text-base text-gray-600 line-clamp-3"
        />

        {/* Read More Button */}
        <Link
          href={link}
          className="text-[#1E1E1E] font-barlow font-semibold  py-2   transition duration-200"
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
      <div
        className="flex flex-col items-center justify-center font-sans bg-no-repeat bg-cover bg-center text-white 
  sm:h-[20vh] h-[70vh] sm:px-10 px-36 relative overflow-hidden "
        style={{
          backgroundImage: " url('/images/location/Hero.svg')",
          backgroundSize: "cover", // Ensures the entire container is covered
          backgroundPosition: "center", // Centers the image within the container
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      >
        <div className="flex flex-col items-center relative z-10">
          <div className="font-barlow font-bold text-[64px]">Blog</div>
          <div className="font-barlow font-normal text-[24px]">Home - Blog</div>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
        {/* Optional overlay */}
      </div>
      <div className="px-20 py-10 flex flex-col">
        <div className="flex justify-center items-center flex-col">
          <div className="font-barlow font-normal text-[24px] text-[#1E1E1E]">
            News & Update
          </div>
          <div className="font-barlow text-[54px] font-bold bg-headline-gradient text-transparent bg-clip-text mb-2">
            Insights & Updates from Qwiklif.
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-4 gap-x-8 gap-y-8 mb-5 mt-5">
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
        <div>
          <PageStepper minStep={1} maxStep={7} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
