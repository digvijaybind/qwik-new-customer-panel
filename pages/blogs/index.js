import ImageCarousel from '@/components/Imagecarousel/ImageCarousel';
import Nav from '@/components/Nav/nav';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './Blogs.module.css';
import axios from 'axios';
import Link from 'next/link';
import Blog from '@/components/blog/Blog';
const Blogs = ({ data }) => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios({
      url: 'https://dev.a2zqr.com/wp-json/wp/v2/posts',
      method: 'GET',
      params: {
        _embed: 'true',
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
      </div>
      <div className="px-5 font-lato">
        <div className="grid grid-cols-3 gap-8 mb-3">
          {allPosts?.length > 0 &&
            allPosts?.map((item, index) => {
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
            })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
