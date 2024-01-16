const Career = () => {
  return (
    <div className="font-poppins">
      <img src="/images/career-banner.jpg" className="w-full" alt="banner" />
      <div className="flex justify-center">
        <div className="sm:w-full sm:px-10 w-[60%]">
          <h1 className="text-2xl font-bold font-Montserrat my-8">Career</h1>
          <form
            className="w-full sm:mb-10 mb-20"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                className="border px-3 py-2"
                type="text"
                name="firstname"
                placeholder="First Name"
              />
              <input
                className="border px-3 py-2"
                type="text"
                name="lastname"
                placeholder="Last Name"
              />
              <input
                className="border px-3 py-2"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className="border px-3 py-2"
                type="tel"
                name="mobile"
                placeholder="Mobile"
              />
              <input
                className="border px-3 py-2"
                type="text"
                name="position"
                placeholder="Position"
              />
              <input
                className="border px-3 py-2"
                type="text"
                name="currentlocation"
                placeholder="Current Location"
              />
            </div>
            <p className="my-3 text-[#7E7D7E]">
              What is your current employment status?
            </p>
            <div className="grid sm:grid-cols-2 grid-cols-4 gap-5">
              <div className="flex items-center">
                <input
                  type="radio"
                  value="Employed"
                  name="employmentstatus"
                  className="mr-3"
                />
                <label>Employed</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  value="Self Employed"
                  name="employmentstatus"
                  className="mr-3"
                />
                <label>Self Employed</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  value="Unemployed"
                  name="employmentstatus"
                  className="mr-3"
                />
                <label>Unemployed</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  value="Student"
                  name="employmentstatus"
                  className="mr-3"
                />
                <label>Student</label>
              </div>
            </div>
            <textarea
              className="border px-3 py-2 w-full mt-4"
              rows="10"
              name="message"
              placeholder="Your Message"
            ></textarea>
            <div className="my-3 border border-dashed rounded-md flex justify-center py-24 bg-slate-50">
              <div className="w-fit flex flex-col items-center">
                <img
                  src="/images/upload-icon.svg"
                  className="w-16"
                  alt="upload icon"
                />
                <p className="text-center">Upload Your Files</p>
              </div>
            </div>
            <p className="my-3 text-[#7E7D7E]">How did you hear about us?</p>
            <div className="grid sm:grid-cols-2 grid-cols-5 gap-5 mb-5">
              <div className="flex items-center">
                <input
                  type="radio"
                  value="Internet"
                  name="source"
                  className="mr-3"
                />
                <label>Internet</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  value="Instagram"
                  name="source"
                  className="mr-3"
                />
                <label>Instagram</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  value="LinkedIn"
                  name="source"
                  className="mr-3"
                />
                <label>LinkedIn</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  value="Facebook"
                  name="source"
                  className="mr-3"
                />
                <label>Facebook</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  value="Twitter"
                  name="source"
                  className="mr-3"
                />
                <label>Twitter</label>
              </div>
            </div>
            <div className="flex items-start my-2">
              <input type="checkbox" name="tnc" className="mr-2 mt-1" />
              <label className="text-sm">
                I have read and agree to the{" "}
                <a className="text-red-600">Candidate Disclosure Text</a>
              </label>
            </div>
            <div className="flex justify-end sm:my-5">
              <button
                type="submit"
                className="px-8 py-2 bg-[#40D1F0] text-white rounded-full font-medium"
              >
                Submit
              </button>
            </div>
            <p className="mt-3 text-xs text-[#7E7D7E]">
              *Any information you provide is confidential and will only be
              viewed by our recruiters in an effort to fill open positions. In
              addition, the information you provide is subject to our privacy
              policy practices
            </p>
          </form>
        </div>
      </div>
      <div className="bg-[#D8D8D8] h-[100px]"></div>
    </div>
  );
};

export default Career;
