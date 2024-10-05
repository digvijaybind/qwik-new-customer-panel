"use client";
import style from "./Services.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import servicesData from "@/data/subservices";

const Services = () => {
  const router = useRouter();
  const [details, setDetails] = useState({});

  useEffect(() => {
    // Ensure slug is available from the query string
    if (router?.query?.slug) {
      const articleDetails = servicesData.find(
        (d) => d.slug === router.query.slug,
      );
      setDetails(articleDetails || {}); // Set details if found, else set to an empty object
    }
  }, [router?.query?.slug]);

  // If no details are found (i.e., an invalid slug), you could return a 404-like message
  if (!details?.slug) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
        <p>The service you're looking for does not exist.</p>
      </div>
    );
  }
  const handleContactRedirect = () => {
    router.push("/contact"); // This will navigate to /contact-us page
  };

  return (
    <div className="font-Inter">
      {/* Banner Section */}
      <div
        className={`${style.servicesSlugHeader} bg-opacity-10 bg-center bg-no-repeat !bg-cover flex justify-center items-center pt-[220px] pb-32`}
        style={{ backgroundImage: `url(${details.bannerImage})` }}
      >
        <p className="text-white text-5xl font-bold font-arcaMajoraHeavy">
          {details?.head}
        </p>
      </div>

      {/* Content Section */}
      <div className="py-10 px-20 flex items-center flex-col justify-center">
        <div className="w-8/12 ">
          <img
            src={details?.img}
            alt={details?.head}
            className="w-full mb-6 h-[500px] object-cover object-top"
          />
          <h2 className="font-arcaMajoraHeavy font-semibold text-2xl">
            {details?.head}
          </h2>
          <hr className="bg-primary rounded-full h-[4px] w-16 mb-5 mt-3" />
          <p className="mb-10 text-opacity-10 font-medium">
            {details?.description}
          </p>
        </div>

        {/* Service Details */}
        <div className="w-8/12">
          <h3 className="text-xl font-bold mb-3">Services:</h3>
          <ul className="list-disc list-inside">
            {details?.services?.map((service, index) => (
              <li key={index} className="mb-2">
                {service}
              </li>
            ))}
          </ul>

          {/* Why Choose Us Section */}
          <h3 className="text-xl font-bold mt-8 mb-3">Why Choose Us:</h3>
          <ul className="list-disc list-inside">
            {details?.whyChooseUs?.map((reason, index) => (
              <li key={index} className="mb-2">
                {reason}
              </li>
            ))}
          </ul>

          {/* Contact CTA */}
          <button
            onClick={handleContactRedirect}
            className="text-lg bg-[#19c0f0] px-5 py-5 rounded-md font-semibold mt-5 mb-2"
          >
            Contact Us
          </button>
          <div className="mt-10 p-6 bg-blue-100 rounded-lg">
            <p>{details?.contactCTA}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
