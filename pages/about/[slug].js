import { aboutContent } from "../../data/aboutContent"; 
import Image from "next/image";
import { useRouter } from "next/router";


const SectionPage = ({ section }) => {
  if (!section) {
    return <div>Section not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="banner">
        <Image
          src={section.bannerImage}
          alt={section.title}
          width={1200}
          height={400}
          className="rounded-lg shadow-md"
        />
        <h1 className="text-4xl font-bold mt-6">{section.title}</h1>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: section.content }}
        className="mt-8"
      ></div>
    </div>
  );
};

// Server-side Rendering - Fetch data
export async function getServerSideProps({ params }) {
  const section =
    aboutContent.sections.find((sec) => sec.slug === params.slug) || null;

  return {
    props: {
      section,
    },
  };
}

export default SectionPage;
