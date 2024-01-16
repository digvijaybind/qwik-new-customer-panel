// components/AirAmbulancePage.js

import React from "react";
import Head from "next/head";

const Mumbai = () => {
  return (
    <div className="font-poppins bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center animate-bgColorChange">
      <Head>
        <title>Air Ambulance Services in Delhi | Your Company Name</title>
        <meta
          name="description"
          content="Discover reliable air ambulance services in Delhi providing expert care and rapid response for critical patient transfers. 24/7 availability, global reach, and customized transfer plans."
        />
        <meta
          property="og:title"
          content="Air Ambulance Services in Delhi | Your Company Name"
        />
        <meta
          property="og:description"
          content="Discover reliable air ambulance services in Delhi providing expert care and rapid response for critical patient transfers. 24/7 availability, global reach, and customized transfer plans."
        />
        <meta property="og:image" content="/path/to/your/meta-image.jpg" />
        <meta
          name="twitter:title"
          content="Air Ambulance Services in Delhi | Your Company Name"
        />
        <meta
          name="twitter:description"
          content="Discover reliable air ambulance services in Delhi providing expert care and rapid response for critical patient transfers. 24/7 availability, global reach, and customized transfer plans."
        />
        <meta name="twitter:image" content="/path/to/your/meta-image.jpg" />
      </Head>

      <div className="flex justify-center flex-col text-white animate-fadeIn">
        <h1 className="text-4xl font-semibold mb-6">
          Air Ambulance Services in Delhi
        </h1>

        <p className="text-lg mb-4">
          When emergencies strike, quick and efficient medical transportation is
          crucial. Discover reliable air ambulance services in Delhi providing
          expert care and rapid response for critical patient transfers.
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            Why Choose Our Air Ambulance Services?
          </h2>
          <ul className="list-disc pl-5">
            <li>Swift Response</li>
            <li>Advanced Medical Care</li>
            <li>24/7 Availability</li>
            <li>Global Reach</li>
            <li>Customized Transfer Plans</li>
          </ul>
        </div>

        <div className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold">
            How Our Air Ambulance Process Works
          </h2>
          <ol className="list-decimal pl-5">
            <li>Emergency Call</li>
            <li>Medical Evaluation</li>
            <li>Coordination and Logistics</li>
            <li>In-Flight Medical Care</li>
          </ol>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">
            Contact Us for Air Ambulance Services in Delhi
          </h2>
          <p>
            For immediate assistance or to inquire about our air ambulance
            services in Delhi, contact our 24/7 hotline at [Your Contact Number]
            or visit our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mumbai;
