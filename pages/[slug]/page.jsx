import { useRouter } from "next/router";
import servicesData from "@/data/subservices";

export default function DynamicPage({ service }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{service.title}</h1>
      <img src={service.bannerImage} alt={service.title} />
      <p>{service.description}</p>
      <ul>
        {service.services.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = servicesData.map((service) => ({
    params: { slug: service.slug },
  }));
  console.log("path of services", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const service = servicesData.find((service) => service.slug === slug);

  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      service,
    },
  };
}
