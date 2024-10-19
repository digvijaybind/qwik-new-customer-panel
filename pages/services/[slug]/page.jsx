// /app/[slug]/page.jsx

import { servicesData } from "../../../data/subservices"; // Import your services data

const ServicePage = ({ service }) => {
  if (!service) {
    return <div>Service not found</div>; // Handle the case where the service does not exist
  }

  return (
    <div>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      {/* Render other service details here */}
    </div>
  );
};

// This function will generate the static parameters for the dynamic route
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Fetch service data based on the slug
export async function getServiceBySlug(slug) {
  return servicesData.find((service) => service.slug === slug);
}

// Fetch the service data on the server side
export default async function Page({ params }) {
  const { slug } = params;
  const service = await getServiceBySlug(slug);

  return <ServicePage service={service} />;
}
