import axios from "axios";
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
    <div>
      <h1 className="font-bold text-3xl">{postDetails?.title?.rendered}</h1>
      {postDetails?._embedded &&
        postDetails?._embedded["wp:featuredmedia"]?.length > 0 && (
          <img
            src={postDetails?._embedded["wp:featuredmedia"][0]?.source_url}
            className="w-3/4"
          />
        )}
      <div
        dangerouslySetInnerHTML={{__html: postDetails?.excerpt?.rendered || ""}}
      ></div>
    </div>
  );
};

export default PostDetails;
