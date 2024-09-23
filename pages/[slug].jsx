import { useRouter } from "next/router";
import servicesData from "@/data/subservices";
import Image from "next/image";
import style from "./common.module.css";
export default function DynamicPage({ service }) {
  const router = useRouter();

  console.log("images in servics", service.bannerImage);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-Inter">
      <div
        className={`${style.aboutSlugHeader} bg-opacity-10 bg-center bg-no-repeat bg-cover flex justify-start items-center pt-[220px] pb-32 flex-col`}
      >
        <div className="flex flex-col justify-start">
          <div className="font-extrabold text-5xl text-[#fff] mb-5">
            {service.title}
          </div>
          <div className="whitespace-nowrap overflow-hidden font-medium text-[#c5d5ff]">
            Qwiklif Air Ambulance | Air Ambulance Service in Dubai|
            International Air Ambulance |{" "}
            <span className="text-[#fff]">{service.title}</span>
          </div>
        </div>
      </div>

      <div className="py-10 px-20 flex items-center flex-col justify-center">
        <div className="w-8/12">
          <img
            src={service?.bannerImage}
            alt="Banner"
            className="w-full mb-6"
          />
          <h2 className="font-arcaMajoraHeavy font-semibold text-2xl">
            {service?.head}
          </h2>
          <hr className="bg-primary rounded-full h-[4px] w-16 mb-5 mt-3" />
          <p className="mb-10 text-opacity-10 font-medium">{service?.text}</p>
        </div>
      </div>
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
