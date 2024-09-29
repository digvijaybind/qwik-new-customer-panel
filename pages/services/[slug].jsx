"use client";
import style from "./Services.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import servicesData from "@/data/subservices";

const Services = () => {
  const router = useRouter();
  const {
    img,
    head,
    text,
    slug,
    description,
    services,
    whyChooseUs,
    contactCTA,
  } = router.query;
  console.log("data of services ", router.query);

  const [details, setDetails] = useState({});
  console.log("deatils slugs", details);
  useEffect(() => {
    const articleDetails = servicesData?.find(
      (d) => d?.slug === router.query.slug,
    );
    setDetails(articleDetails);
  }, [router?.query?.slug]);

  
  return (
    <div className="font-Inter">
      <div
        className={`${style.servicesSlugHeader} bg-opacity-10 bg-center bg-no-repeat !bg-cover flex justify-center items-center pt-[220px] pb-32`}
      >
        <p className="text-white text-5xl font-bold font-arcaMajoraHeavy">
          {details?.head}
        </p>
      </div>
      <div className="py-10 px-20 flex items-center flex-col justify-center">
        <div className="w-8/12">
          <img src={details?.img} alt="Banner" className="w-full mb-6 h-[500px] object-cover object-top" />
          <h2 className="font-arcaMajoraHeavy font-semibold text-2xl">
            {details?.head}
          </h2>
          <hr className="bg-primary rounded-full h-[4px] w-16 mb-5 mt-3" />
          <p className="mb-10 text-opacity-10 font-medium">{details?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
