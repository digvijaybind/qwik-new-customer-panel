import style from "./About.module.css";
import { aboutsList } from "../../utils/contants";
import Image from "next/image";
import styles from "./About.module.css"; // Adjust the path if necessary

const About = ({ details = {} }) => {
  return (
    <div className="font-Inter">
      <div
        className={`${styles.aboutSlugHeader} bg-opacity-10 bg-center bg-no-repeat bg-cover flex justify-center items-center pt-[220px] pb-32`}
      >
        <p className="text-white text-5xl font-bold font-arcaMajoraHeavy">
          {details?.head || "Default HeadLine"}
        </p>
      </div>
      <div className="py-10 px-20 flex items-center flex-col justify-center">
        <div className="w-8/12">
          <Image
            src={details?.img}
            alt="Banner"
            className="w-full mb-6"
            width={800} // Set the width of the image
            height={400} // Set the height of the image
          />
          <h2 className="font-arcaMajoraHeavy font-semibold text-2xl">
            {details?.head || "Default Headline"}
          </h2>
          <hr className="bg-primary rounded-full h-[4px] w-16 mb-5 mt-3" />
          <p className="mb-10 text-opacity-10 font-medium">
            {details?.text || "default Text"}
          </p>
        </div>
      </div>
    </div>
  );
};





export async function getStaticPaths() {
  const paths = aboutsList.map((about) => ({
    params: { slug: about.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const articleDetails = aboutsList.find((d) => d.slug === params.slug);

  if (!articleDetails) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      details: articleDetails,
    },
  };
}

export default About;
