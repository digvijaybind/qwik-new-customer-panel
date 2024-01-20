import ImageCarousel from "@/components/Imagecarousel/ImageCarousel";
import Nav from "@/components/Nav/nav";
import {BlogsCard} from "@/components/blog/BlogsCard";
import Image from "next/image";
import React from "react";
import LandingImage from "../../public/images/qwiklif11.jpg";
import Blog from "@/components/blog/Blog";
const Blogs = ({data}) => {
  return (
    <div>
      {/* <Nav></Nav> */}
      {/* <BlogsCard /> */}
      <Image
        src={LandingImage}
        // sizes="100vw"
        style={{width: "100%", height: "430px"}}
        // height={150}
        alt="Picture of the author"
      />
      <div className="px-5 font-lato">
        <div className="justify-center">
          <div className="text-[64px] text-center font-lppato  text-{#000000} mb-5 mt-5 ">
            NEWS AND BLOGS
          </div>
        </div>
        <div className="justify-start">
          <div className="text-[48px]   text-{#000000} mb-3">Latest Post</div>
        </div>

        <div className="flex justify-center">
          {/* <BlogsCard /> */}
          {/* {data.length > 0 &&
            data.map((item) => {
              return (
                <div>
                  <BlogsCard title={item.title} date={item.date} />
                </div>
              );
            })} */}
          {/* <h1> this is blogs </h1> */}
          <Blog />
          {/* <BlogsCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://dev.a2zqr.com//wp-json/wp/v2/posts`);
  const data = await res.json();

  // Pass data to the page via props
  return {props: {data}};
}
