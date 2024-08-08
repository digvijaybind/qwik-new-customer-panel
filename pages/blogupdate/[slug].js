import { useRouter } from "next/router";
import axios from "axios";

const BlogPost = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

// Fetch data at build time
export async function getStaticProps({ params }) {
  const { slug } = params;

  try {
    const res = await axios.get(
      `https://test.salientdevs.com/wp-json/wp/v2/posts?slug=${slug}`
    );
    const post = res.data.length > 0 ? res.data[0] : null;

    return {
      props: {
        post,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      props: {
        post: null,
      },
    };
  }
}

// Generate static paths at build time
export async function getStaticPaths() {
  try {
    const res = await axios.get(
      "https://test.salientdevs.com/wp-json/wp/v2/posts"
    );
    const posts = res.data;

    // Generate paths for all posts
    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }));

    return {
      paths,
      fallback: true, // true or 'blocking' to handle non-existent slugs
    };
  } catch (error) {
    console.error("Error fetching posts for paths:", error);
    return {
      paths: [],
      fallback: true,
    };
  }
}

export default BlogPost;
