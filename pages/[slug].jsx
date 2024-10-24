import { useRouter } from "next/router";
import servicesData from "@/data/subservices";
import Image from "next/image";
import style from "./common.module.css";
import GetTouch from "@/components/getTouch/GetTouch";
import ServiceUpdate from "@/components/Servicecard2/ServiceUpdate";
import Link from "next/link";
export default function DynamicPage({ service }) {
  const router = useRouter();
  console.log("service", service);
  console.log("images in servics", service.bannerImage);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-Inter">
      <div
        className="flex flex-col items-center justify-center font-sans bg-no-repeat bg-cover bg-center text-white 
  sm:h-[20vh] h-[70vh] sm:px-10 px-36 relative overflow-hidden "
        style={{
          backgroundImage: " url('/images/location/Hero.svg')",
          backgroundSize: "cover", // Ensures the entire container is covered
          backgroundPosition: "center", // Centers the image within the container
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      >
        <div className="flex flex-col items-center relative z-10">
          <div className="font-barlow font-bold text-[44px]">
            {service.title}
          </div>
          <div className="font-barlow font-normal text-[24px]">
            Home - Services-{service.title}
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
        {/* Optional overlay */}
      </div>
      <div className="py-10 px-20 flex items-center flex-col justify-center">
        <div className="w-11/12">
          <img
            src={service?.bannerImage}
            alt="Banner"
            className="w-full mb-6 rounded-md"
          />
          <h2 className="font-barlow text-[54px] font-semibold mt-5 mb-5">
            {service?.head}
          </h2>
          <div className="flex flex-col">
            <div className="text-[28px] text-normal font-barlow mb-5">
              {service?.description}
            </div>
            <div className="text-[28px] text-normal font-barlow mb-5">
              {service?.services}
            </div>
            <div className="text-[28px] text-normal font-barlow mb-5">
              {service?.whyChooseUs}
            </div>
            <button className="w-full h-[70px] bg-button-gradient text-white rounded-[4px_0px_0px_0px] flex justify-center items-center cursor-pointer mt-10 sm:mt-6 md:mt-8 lg:mt-10 font-barlow font-normal text-[24px]">
              <Link href="/contact">Get Quote Now</Link>
            </button>
            <button className="w-full h-[70px] bg-[#F7F7F7] text-[#1E1E1E] rounded-[4px_0px_0px_0px] flex justify-center items-center cursor-pointer mt-10 sm:mt-6 md:mt-8 lg:mt-10 font-barlow font-normal text-[24px] shadow-sm">
              <Link href="/contact">Request A Call Back</Link>
            </button>
          </div>
        </div>
      </div>
      <div>
        <ServiceUpdate showSeeMoreButton={false} />
      </div>
      <div className="mt-20 sm:mt-10">
        <GetTouch />
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
