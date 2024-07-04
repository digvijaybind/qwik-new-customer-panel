import ImageCarousel from "@/components/Imagecarousel/ImageCarousel";
import Nav from "@/components/Nav/nav";
import {BlogsCard} from "@/components/blog/BlogsCard";
import Image from "next/image";
import React from "react";
import LandingImage from "../../public/images/qwiklif11.jpg";
import Blog from "@/components/blog/Blog";
const Blogs = ({data}) => {
  return (
    <div className="p-[50px]">
      {/* console.log("allPosts",allPosts) */}
      <div
        className={`bg-black ${styles.Image}   bg-black h-[400px] w-full  mt-2`}
      >
        <div className=" font-[700] z-[100px] pl-[40px] sm:pl-[10px] relative  text-white">
          <p className="text-[50px]  pt-[150px] sm:pt-[100px]">Our Blogs </p>
          <div className="flex pt-[30px] text-[20px]">
            <p className="text-[#C5D5FF] pr-[10px]">
              {'Air Ambulance Services >'}
            </p>
            <p> Services</p>
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
                <div
                  key={'blog-post-' + index}
                  className="rounded-md drop-shadow-md bg-white p-5"
                >
                  <img
                    src={
                      item?._embedded['wp:featuredmedia']?.length > 0
                        ? item?._embedded['wp:featuredmedia'][0]?.source_url
                        : ''
                    }
                  />
                  <Link
                    href={`blogs/${item?.slug}`}
                    className="font-semibold text-lg"
                  >
                    {item?.title?.rendered}
                  </Link>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item?.excerpt?.rendered || '',
                    }}
                  ></div>

                  <Blog
                    title={item?.title?.rendered}
                    description={{ __html: item?.excerpt?.rendered || '' }}
                    imageUrl={
                      item?._embedded['wp:featuredmedia']?.length > 0
                        ? item?._embedded['wp:featuredmedia'][0]?.source_url
                        : ''
                    }
                  />
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
