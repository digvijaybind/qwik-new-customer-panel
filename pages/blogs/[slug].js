"use client";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../blog/Blogs.module.css";
import NewsUpdate2 from "@/components/NewsUpdates/NewsUpdate2";

const BlogsDetails = () => {
  const router = useRouter();
  const [postDetails, setPostDetails] = useState({});
  console.log("router.query?.slug", router.query?.slug);
  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        if (router.query?.slug) {
          const { data } = await axios.get(
            "https://qwiklif.com/wp-json/wp/v2/posts",
            {
              params: {
                _embed: "true",
                slug: router.query?.slug,
              },
            },
          );
          console.log("Fetched Data:", data); // Debugging step
          setPostDetails(data?.length > 0 ? data[0] : {});
        }
      } catch (error) {
        console.error("Failed to fetch post details:", error);
      }
    };

    fetchPostDetails();
  }, [router.query.slug]);
  console.log("postDetails", postDetails);
  return (
    <div className="mt-[50px] font-sans">
      {/* Header Section */}
      <div
        className="flex flex-col items-center justify-center font-sans bg-no-repeat bg-cover bg-center text-white sm:h-[20vh] h-[60dvh] sm:px-10 px-36"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url('/images/location/Hero.svg')",
        }}
      >
        <div className="flex flex-col items-center">
          <div className="font-barlow font-bold text-[64px]">Blog</div>
          <div className="font-barlow font-normal text-[24px]">Home - Blog</div>
        </div>
      </div>

      {/* Blog Image */}
      <div className="px-10 sm:px-5">
        <div className="flex justify-center mt-[30px] rounded-[5px]">
          {postDetails?._embedded &&
          postDetails?._embedded["wp:featuredmedia"]?.length > 0 ? (
            <img
              src={
                postDetails._embedded["wp:featuredmedia"][0]?.source_url ||
                "/images/fallback-image.jpg"
              }
              className="w-[90%] sm:h-[300px] h-[500px] rounded-[5px]"
              alt={postDetails?.title?.rendered || "Blog description"}
            />
          ) : (
            <img
              src="/images/fallback-image.jpg" // Fallback image
              className="w-[90%] sm:h-[300px] h-[500px] rounded-[5px]"
              alt="No image available"
            />
          )}
        </div>

        {/* Blog Content */}
        <div
          className="px-[5%] mt-[5px] py-[20px] text-[44px] sm:text-[24px] font-barlow font-semibold"
          dangerouslySetInnerHTML={{
            __html: postDetails?.title?.rendered,
          }}
        ></div>
        <div
          className="px-[5%] mt-[5px] py-[20px] font-barlow font-normal"
          dangerouslySetInnerHTML={{
            __html: postDetails?.content?.rendered,
          }}
        ></div>
      </div>
      <div className="mt-10">
        <NewsUpdate2 />
      </div>
    </div>
  );
};

export default BlogsDetails;
