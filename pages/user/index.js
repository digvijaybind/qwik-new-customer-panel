import { BlogsCard } from "@/components/blog/BlogsCard";
import React from "react";

const User = ({ blogs }) => {
  console.log("blogs", blogs);
  return (
    <div className="grid grid-cols-3 gap-4">
      {blogs &&
        blogs.map((data, index) => (
          <div key={index}>
            {data.yoast_head_json.og_image &&
              data.yoast_head_json.og_image.map((img, index) => {
                return (
                  <BlogsCard
                    key={index}
                    src={data.yoast_head_json.og_image.img}
                    title={data.title.rendered}
                    date={data.date}
                  />
                );
              })}
          </div>
        ))}
    </div>
  );
};
export async function getServerSideProps() {
  try {
    // Fetch data from the API route
    const apiResponse = await fetch(
      "https://dev.a2zqr.com/wp-json/wp/v2/posts"
    );

    // Check if the API request was successful
    if (!apiResponse.ok) {
      throw new Error(`Failed to fetch data. Status: ${apiResponse.status}`);
    }

    const blogs = await apiResponse.json();

    // Pass data to the page component as props
    return {
      props: {
        blogs,
      },
    };
  } catch (error) {
    console.error("Error fetching blog data:", error.message);

    return {
      props: {
        blogs: [],
      },
    };
  }
}

export default User;
