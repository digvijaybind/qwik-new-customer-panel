import JoinMailingList from "@/components/JoinMailingList/JoinMailingList";

const Learjet = () => {
  return (
    <div className="font-poppins">
      <img src="/images/learjet.jpg" alt="Challenger 605" className="w-full" />
      <h1 className="text-2xl font-bold uppercase text-center mt-12 mb-8">
        Learjet
      </h1>
      <div className="text-center sm:px-10 px-28 text-[#848383]">
        <p>
          Our Aircraft Fleet: Excellence in Every Journey At Qwiklif, our
          commitment to providing the best air ambulance services extends to the
          choice of aircraft in our fleet. We understand that every medical
          transport mission is unique, and having a versatile, reliable, and
          well-equipped fleet is essential to meet the diverse needs of our
          patients. Our fleet includes a selection of aircraft that represent
          the pinnacle of safety, technology, and performance.
        </p>
        <p>
          The LearJet, with its reputation for speed and agility, is an integral
          part of our fleet for critical cases that demand swift transportation.
          The LearJet, with its reputation for speed and agility, is an integral
          part of our fleet for critical cases that demand swift transportation.
          The LearJet, with its reputation for speed and agility, is an integral
          part of our fleet for critical cases that demand swift transportation.
          The LearJet, with its reputation for speed and agility, is an integral
          part of our fleet for critical cases that demand swift transportation.
          Here&apos;s what you can expect:
        </p>
        <div className="my-10">
          <h2 className="font-semibold text-xl">Key Specifications:</h2>
          <p>Maximum Speed: 465 knots</p>
          <p>Maximum Range: 1,437 nautical miles</p>
          <p>Payload Capacity: Up to 1,000 pounds</p>
          <p>
            Medical Equipment: Outfitted with top-tier medical equipment to
            ensure the highest level of care.
          </p>
          <p>
            Cabin Configuration: Desigend for quick and efficient patient
            transfer.
          </p>
        </div>
      </div>
      <img src="/images/learjet-flying.jpg" alt="Learjet" className="w-full" />
      <div className="sm:px-10 px-28 sm:my-10 my-28 text-center">
        <h2 className="font-bold text-xl uppercase text-[#848383] sm:mb-8 mb-16">
          Configuration
        </h2>
        <img
          src="/images/challenger-605-layout.png"
          alt="Challenger 605 Layout"
          className="w-full"
        />
      </div>
      <div className="px-10 sm:mt-14 mt-28 mb-20 text-center">
        <h2 className="font-bold text-xl uppercase text-[#848383] sm:mb-8 mb-16">
          Range Map
        </h2>
        <img
          src="/images/challenger-605-map-range.png"
          alt="Challenger 605 Layout"
          className="w-full"
        />
      </div>
      <JoinMailingList />
      <div className="bg-[#D8D8D8] h-[100px]"></div>
    </div>
  );
};

export default Learjet;
