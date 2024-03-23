import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './Blogs.module.css';
const PostDetails = () => {
  const router = useRouter();

  const [postDetails, setPostDetails] = useState({});
  useEffect(() => {
    if (router.query?.slug) {
      axios({
        url: 'https://dev.a2zqr.com/wp-json/wp/v2/posts',
        method: 'GET',
        params: {
          _embed: 'true',
          slug: router.query?.slug,
        },
      })
        .then(({ data }) => {
          console.log(data);
          setPostDetails(data?.length > 0 ? data[0] : {});
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [router.query.slug]);
  return (
    <div>
      <div className={`bg-black ${styles.Image}   bg-black h-[400px] w-full`}>
        <div className=" font-[700] z-[100px] pl-[40px] sm:pl-[10px] relative  text-white">
          <p className="text-[35px] sm:text-[30px]  pt-[150px] sm:pt-[50px]">
            {postDetails?.title?.rendered}
          </p>
          <div className="flex pt-[30px] text-[20px]">
            <p className="text-[#C5D5FF] pr-[10px]">
              {'Air Ambulance Services >'}
            </p>
            <p> blog</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-[30px] rounded-[5px]'>
        {postDetails?._embedded &&
          postDetails?._embedded['wp:featuredmedia']?.length > 0 && (
            <img
              src={postDetails?._embedded['wp:featuredmedia'][0]?.source_url}
              className="w-[90%] sm:h-[300px] h-[500px] rounded-[5px]"
            />
          )}
      </div>

      <div className='px-[5%] mt-[5px] py-[20px]'
        dangerouslySetInnerHTML={{
          __html: postDetails?.excerpt?.rendered || '',
        }}
      ></div>
    </div>
  );
};

export default PostDetails;
