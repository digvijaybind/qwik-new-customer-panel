import {useRouter} from "next/router";

const PostDetails = (props) => {
  const router = useRouter();
  const {slug} = router.query;
  console.log("postId", slug);
  console.log(router);

  return (
    <div>
      <h1>PostDetails:-{slug}</h1>
    </div>
  );
};

export default PostDetails;
