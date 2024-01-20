import ImageCarousel from "@/components/Imagecarousel/ImageCarousel";
import Nav from "@/components/Nav/nav";
import { BlogsCard } from "@/components/blog/BlogsCard";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LandingImage from "../../public/images/qwiklif11.jpg";
import axios from "axios";
import Link from "next/link";
const Blogs = ({ data }) => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios({
      url: "https://dev.a2zqr.com/wp-json/wp/v2/posts",
      method: "GET",
      params: {
        _embed: "true",
        per_page: 100,
      },
    })
      .then(({ data }) => {
        console.log(data);
        setAllPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-[50px]">
      {/* console.log("allPosts",allPosts) */}
      <Image src={LandingImage} alt="Picture of the author" className="h-[430px] w-full" />
      <div className="px-5 font-lato">
        <div className="justify-center">
          <div className="text-[64px] text-center font-lato  text-{#000000} mb-5 mt-5 ">
            NEWS AND BLOGS
          </div>
        </div>
        <div className="justify-start">
          <div className="text-[48px]   text-{#000000} mb-3">Latest Post</div>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-3">
          {allPosts?.length > 0 &&
            allPosts?.map((item, index) => {
              return (
                <div key={"blog-post-" + index} className="rounded-md drop-shadow-md bg-white p-5">
                  <img
                    src={
                      item?._embedded["wp:featuredmedia"]?.length > 0
                        ? item?._embedded["wp:featuredmedia"][0]?.source_url
                        : ""
                    }
                  />
                  <Link href={`blogs/${item?.slug}`} className="font-semibold text-lg">
                    {item?.title?.rendered}
                  </Link>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item?.excerpt?.rendered || "",
                    }}
                  ></div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://dev.a2zqr.com//wp-json/wp/v2/posts`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
