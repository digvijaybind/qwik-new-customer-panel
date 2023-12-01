const Fleet = () => {
  return (
    <div>
      <img src="/images/challenger-605.jpg" alt="Challenger 605" className="w-full" />
      <h1 className="text-2xl font-bold uppercase text-center font-Montserrat my-8">Challenger 605</h1>
      <div className="text-center px-10 md:px-28 font-Montserrat text-[#848383]">
        <p>The Bombardier Challenger 605 is a true luxury aircraft, offering exceptional range, comfort, and technology. It&apos;s an ideal choice for long-distance missions and cases where patient comfort is a priority. The Bombardier Challenger 605 is a true luxury aircraft, offering exceptional range, comfort, and technology. It&apos;s an ideal choice for long-distance missions and cases where patient comfort is a priority. The Bombardier Challenger 605 is a true luxury aircraft, offering exceptional range, comfort, and technology. It&apos;s an ideal choice for long-distance missions and cases where patient comfort is a priority. The Bombardier Challenger 605 is a true luxury aircraft, offering exceptional range, comfort, and technology. It&apos;s an ideal choice for long-distance missions and cases where patient comfort is a priority.</p>
        <div className="my-10">
          <h2 className="font-semibold text-xl">Key Specifications:</h2>
          <p>Maximum Speed: 470 knots</p>
          <p>Maximum Range: 4,045 nautical miles</p>
          <p>Payload Capacity: Up to 2,147 pounds</p>
          <p>Medical Equipment: Outfitted with top-tier medical equipment for comprehensive patient care.</p>
          <p>Cabin Configuration: Spacious and luxurious, designed to provide the utmost comfort during the journey.</p>
        </div>
      </div>
      <img src="/images/challenger-605-flying.jpg" alt="Challenger 605" className="w-full" />
      <div className="px-10 md:px-28 my-10 md:my-28 font-Montserrat text-center">
        <h2 className="font-bold text-xl uppercase text-[#848383] mb-8 md:mb-16">Configuration</h2>
        <img src="/images/challenger-605-layout.png" alt="Challenger 605 Layout" className="w-full" />
      </div>
      <div className="px-10 mt-14 md:mt-28 mb-20 font-Montserrat text-center">
        <h2 className="font-bold text-xl uppercase text-[#848383] mb-8 md:mb-16">Range Map</h2>
        <img src="/images/challenger-605-map-range.png" alt="Challenger 605 Layout" className="w-full" />
      </div>
      <form className="mt-28 mb-20 font-Montserrat flex justify-center">
        <div className="w-[75%] md:w-[70%]">
          <h4 className="font-bold text-xl mb-5 text-[#032E42]">Join Our Mailing List</h4>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="border flex px-3 py-2">
              <img src="/images/user-icon.svg" className="w-[20px] mr-2" />
              <input type="text" name="name" placeholder="Name" className="flex-1 outline-none" />
            </div>
            <div className="border flex px-3 py-2">
              <img src="/images/email-icon.svg" className="w-[20px] mr-2" />
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="border flex px-3 py-2">
              <img src="/images/phone-icon.svg" className="w-[20px] mr-2" />
              <input type="tel" name="mobile" placeholder="Mobile" />
            </div>
            <div className="border flex px-3 py-2">
              <img src="/images/subject-icon.svg" className="w-[20px] mr-2" />
              <input type="text" name="subject" placeholder="Subject" />
            </div>
          </div>
          <div className="flex items-start my-2">
            <input type="checkbox" name="tnc" className="mr-2 mt-1" />
            <label className="text-sm">
              I have read and agree to the <a>Privacy Policy</a>
            </label>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-8 py-2 bg-[#40D1F0] text-white rounded-full font-medium">
              Get Quote Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Fleet;
