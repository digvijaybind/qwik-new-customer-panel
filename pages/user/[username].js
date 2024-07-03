import {useRouter} from "next/router";
import React from "react";

const Username = ({blogs}) => {
  const router = useRouter();
  const {username} = router.query;
  console.log("username", username);
  console.log("blogs", blogs);

  return (
    <div>
      {blogs &&
        blogs.map((data) => (
          <div key={data.id}>
            <div>{data.title.rendered}</div>
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

export default Username;
