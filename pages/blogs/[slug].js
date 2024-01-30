import axios from "axios";
import moment from "moment/moment";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const PostDetails = () => {
  const router = useRouter();

  const [postDetails, setPostDetails] = useState({});
  useEffect(() => {
    if (router.query?.slug) {
      axios({
        url: "https://dev.a2zqr.com/wp-json/wp/v2/posts",
        method: "GET",
        params: {
          _embed: "true",
          slug: router.query?.slug,
        },
      })
        .then(({data}) => {
          console.log(data);
          setPostDetails(data?.length > 0 ? data[0] : {});
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [router.query.slug]);
  return (
    <div className="p-[50px]">
      <div className="flex justify-center">
        <div className="w-1/2">
          <h1 className="font-bold text-3xl mb-5">
            {postDetails?.title?.rendered}
          </h1>
          <p className="font-thin  text-xl mt-5 mb-5 text-[#9b9ca2]">
            {moment(postDetails?.date).format("MMMM DD , YYYY")}
          </p>
          {postDetails?._embedded &&
            postDetails?._embedded["wp:featuredmedia"]?.length > 0 && (
              <img
                src={postDetails?._embedded["wp:featuredmedia"][0]?.source_url}
                className="w-full"
              />
            )}
          <div
            className="flex justify-center flex-col mt-5"
            dangerouslySetInnerHTML={{
              __html: postDetails?.content?.rendered || "",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
