import { useRouter } from 'next/router';
import React from 'react';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default Post;
