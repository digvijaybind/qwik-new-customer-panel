import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import servicesData from "../data/subservices.js";
import styles from "./common.module.css";

const SubServicePage = ({ service }) => {
  const router = useRouter();
  const { slug } = router.query;

  console.log("slug into line 10 ", slug);
  const [currentService, setCurrentService] = useState(service);

  useEffect(() => {
    if (slug && !currentService) {
      console.log("slug line 17", slug);
      const foundService = servicesData.find((item) => item.slug === slug);
      setCurrentService(foundService || null);
    }
  }, [slug, currentService]);

  if (router.isFallback || !currentService) {
    return <div>Loading...</div>;
  }

  return (
    <div className="subservice-page">
      <div
        className={`bg-black ${styles.Image}   bg-black h-[400px] w-full  mt-2`}
      >
        <div className=" font-[700] z-[100px] pl-[40px] sm:pl-[10px] relative  text-white">
          <p className="text-[50px]  pt-[150px] sm:pt-[100px] font-sans">
            Services{" "}
          </p>
          <div className="flex pt-[30px] text-[20px]">
            <p className="text-[#C5D5FF] pr-[10px]">
              {"Air Ambulance Services >"}
            </p>
            <p> {currentService.head}</p>
          </div>
        </div>
      </div>
      <div className="px-20 mb-10">
        <header className="subservice-header ">
          <Image
            src={currentService.bannerImage}
            alt={currentService.head}
            width={1200}
            height={500}
            priority
            className="banner-image"
          />
        </header>

        <section className="subservice-description">
          <p>{currentService.description}</p>
        </section>

        <section className="subservice-details">
          <h2>Our Services</h2>
          <ul className="service-list">
            {currentService.services.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="why-choose-us">
          <h2>Why Choose Us</h2>
          <ul className="why-choose-list">
            {currentService.whyChooseUs.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </section>

        <footer className="contact-cta">
          <p>{currentService.contactCTA}</p>
        </footer>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = servicesData.map((service) => ({
    params: { slug: service.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = servicesData.find((item) => item.slug === params.slug);

  return {
    props: {
      service: service || null,
    },
  };
}

export default SubServicePage;
