import Link from "next/link";
import styles from "./BlogCard.module.css"; // Import the CSS module

const BlogCard = ({ post }) => {
  // Assuming the image URL is in post.featured_image or a similar field
  const imageUrl = post.featured_image || "/default-image.jpg"; // Fallback image if none provided

  return (
    <div className={styles.blogCard}>
      {/* Display the banner image */}
      <div className={styles.blogImage}>
        <img src={imageUrl} alt={post.title.rendered} />
      </div>

      {/* Display the title */}
      <h2 className={styles.title}>{post.title.rendered}</h2>

      {/* Display the excerpt */}
      <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />

      {/* Read More link */}
      <Link href={`/blog/${post.slug}`}>
        <a className={styles.link}>Read More</a>
      </Link>
    </div>
  );
};

export default BlogCard;
