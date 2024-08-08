import BlogCard from "@/components/blog";
import axios from "axios";

const Blogupdate = ({ posts }) => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-black h-[400px] w-full mt-2 relative">
        <div className="font-bold text-white absolute bottom-0 left-0 p-10">
          <p className="text-4xl mb-4">Our Blogs</p>
          <div className="flex text-lg">
            <p className="text-[#C5D5FF] pr-2">{"Air Ambulance Services >"}</p>
            <p>Services</p>
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="px-10 mt-8">
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-5">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const res = await axios.get(
      "https://test.salientdevs.com/wp-json/wp/v2/posts"
    );
    const posts = res.data;

    return {
      props: {
        posts,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default Blogupdate;
