import React from "react";

const Post = () => {
      const router = useRouter();
      const {id} = router.query;
      
  return (
    <div>
      <div>Post application</div>
    </div>
  );
};

export default Post;
