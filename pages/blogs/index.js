import React from "react";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("");
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
  return (
    <div className="">
      <BlogHeader />
      <div>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h2> {blog.title.rendered}</h2>
            <p>{blog.excerpt.rendered}</p>
            <Link href={`/blog/${blog.slug}`}>Read More</Link>
          </div>
        ))}
        ``
      </div>
    </div>
  );
};

export default Bloglist;
