import React from "react";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://qwiklif.com/wp-json/wp/v2/posts");
  const blogs = await res.json();
  return {
    props: {
      blogs,
    },
  };
}

const BlogHeader = () => {
  return (
    <div
      className="flex flex-col items-start justify-center font-sans bg-no-repeat bg-cover bg-center text-white sm:h-[20vh] h-[60dvh] sm:px-10 px-36"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url('/images/slider/1.png')",
      }}
    >
      <h2 className="sm:text-3xl text-[2.2rem] font-extrabold mb-0.5 drop-shadow">
        Our Blogs
      </h2>
      <p className="font-medium text-xl">
        <span className="text-primary/80">
          Air Ambulance Services &nbsp;&nbsp;&gt;&nbsp;&nbsp;
        </span>{" "}
        Our blogs
      </p>
    </div>
  );
};

const Bloglist = ({ blogs }) => {
  console.log("blogs", blogs);
  return (
    <div className="">
      <BlogHeader />
      <div className="grid grid-cols-3 gap-8   px-28 py-20">
        {blogs?.map((blog) => (
          <div key={blog?.id} className="bg-white drop-shadow-xl">
            <img
              src={blog?.yoast_head_json?.og_image?.[0]?.url}
              alt={blog?.title?.rendered}
              className="w-full aspect-[16/11] object-cover object-top"
            />
            <div className="w-full p-8">
              <h2 className="text-2xl font-semibold">
                {blog?.title?.rendered}
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: blog?.excerpt?.rendered }}
                className="mt-4 mb-6 text-base line-clamp-3"
              ></p>
              <Link
                href={`/blog/${blog?.slug}`}
                className="bg-[#19c0f0] text-white px-3 py-4 rounded-md"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
        ``
      </div>
    </div>
  );
};

export default Bloglist;
