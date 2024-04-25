import ImageCarousel from '@/components/Imagecarousel/ImageCarousel';
import Nav from '@/components/Nav/nav';
import { BlogsCard } from '@/components/blog/BlogsCard';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import LandingImage from '../../public/images/qwiklif11.jpg';
import axios from 'axios';
import Link from 'next/link';
import styles from './Blogs.module.css';
const Blogs = ({ allPosts }) => {
  // const [allPosts, setAllPosts] = useState([]);

  // useEffect(() => {
  //   axios({
  //     url: 'https://dev.a2zqr.com/wp-json/wp/v2/posts',
  //     method: 'GET',
  //     params: {
  //       _embed: 'true',
  //       per_page: 100,
  //     },
  //   })
  //     .then(({ data }) => {
  //       console.log(data);
  //       setAllPosts(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="p-[50px] bg-[#f2f2f2]">
      <div>
        <div className={`bg-black ${styles.Image}   bg-black h-[400px] w-full`}>
          <div className=" font-[700] z-[100px] pl-[40px] relative  text-white">
            <p className="text-[50px]  pt-[150px]">All Posts</p>
            <div className="flex pt-[30px] text-[20px]">
              <p className="text-[#C5D5FF] pr-[10px]">
                {'Air Ambulance Services '}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-1 gap-8 mb-3 mt-[80px] ">
          {allPosts?.length > 0 &&
            allPosts?.map((item, index) => {
              return (
                <div
                  key={'blog-post-' + index}
                  className="rounded-md drop-shadow-lg bg-[#fff] p-5 font-sans"
                >
                  <img
                    src={
                      item?._embedded['wp:featuredmedia']?.length > 0
                        ? item?._embedded['wp:featuredmedia'][0]?.source_url
                        : ''
                    }
                    className="mb-[12px]"
                    alt=""
                  />
                  <Link
                    href={`blogs/${item?.slug}`}
                    className="font-semibold text-[17px] font-sans mb-3 mt-5"
                  >
                    {item?.title?.rendered}
                  </Link>
                  <div
                    className="font-sans mt-[12px]"
                    dangerouslySetInnerHTML={{
                      __html: item?.excerpt?.rendered || '',
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

export async function getServerSideProps() {
  // Fetch data from an API
  const res = await fetch(
    'https://dev.a2zqr.com/wp-json/wp/v2/posts?_embed=true&per_page=100'
  );
  const data = await res.json();

  // Return data as props
  return {
    props: {
      allPosts: data,
    },
  };
}

export default Blogs;

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://dev.a2zqr.com//wp-json/wp/v2/posts`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
