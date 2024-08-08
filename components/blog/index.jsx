import Link from "next/link";
import styles from "./BlogCard.module.css";

const BlogCard = ({ post }) => {
  const imageUrl =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "default-image.jpg";

  console.log("imageUrl: line 9 ", imageUrl);

  return (
    <div className={`${styles.blogCard} cursor-pointer`}>
      <div className={styles.blogImage}>
        <img src={imageUrl} alt={post.title.rendered} />
      </div>
      <Link href={`/blogupdate/${post.slug}`} passHref>
        <h2 className={styles.title}>{post.title.rendered}</h2>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
    </div>
  );
};

export default BlogCard;
