'use client';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './Blogs.module.css';

const BlogsDetails = () => {
  const router = useRouter();
  const [postDetails, setPostDetails] = useState({});

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        if (router.query?.slug) {
          const { data } = await axios.get(
            'https://dev.a2zqr.com/wp-json/wp/v2/posts',
            {
              params: {
                _embed: 'true',
                slug: router.query?.slug,
              },
            }
          );
          setPostDetails(data?.length > 0 ? data[0] : {});
        }
      } catch (error) {
        console.error('Failed to fetch post details:', error);
      }
    };

    fetchPostDetails();
  }, [router.query.slug]);

  return (
    <div className="mt-50px font-sans">
      <div className={`bg-black ${styles.Image} bg-black h-400px w-full`}>
        <div className="font-700 z-100px pl-40px sm:pl-10px relative text-white">
          <p className="text-30px sm:text-30px pt-150px sm:pt-50px font-sans">
            {postDetails?.title?.rendered}
          </p>
          <div className="flex pt-30px text-20px">
            <p className="text-#C5D5FF pr-10px font-sans">
              {'Air Ambulance Services >'}
            </p>
            <p className="font-sans"> blog</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-30px rounded-5px">
        {postDetails?._embedded &&
          postDetails?._embedded['wp:featuredmedia']?.length > 0 && (
            <img
              src={postDetails?._embedded['wp:featuredmedia'][0]?.source_url}
              className="w-90% sm:h-300px h-500px rounded-5px"
              alt="blog descripation"
            />
          )}
      </div>
      <div
        className="px-5% mt-5px py-20px font-sans"
        dangerouslySetInnerHTML={{
          __html: postDetails?.excerpt?.rendered || '',
        }}
      ></div>
    </div>
  );
};

export default BlogsDetails;
