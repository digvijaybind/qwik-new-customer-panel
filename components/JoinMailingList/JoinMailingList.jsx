const JoinMailingList = () => {
  return (
    <form
      className="mt-28 mb-20 font-poppins flex justify-center"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="sm:w-[75%] w-[70%]">
        <h4 className="font-bold text-xl mb-5 text-[#032E42]">
          Join Our Mailing List
        </h4>
        <div className="grid gap-4 sm:grid-cols-1 grid-cols-2">
          <div className="border flex px-3 py-2">
            <img src="/images/user-icon.svg" className="w-[20px] mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="flex-1 outline-none"
            />
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
          <button
            type="submit"
            className="px-8 py-2 bg-[#40D1F0] text-white rounded-full font-medium"
          >
            Get Quote Now
          </button>
        </div>
      </div>
    </form>
  );
};

export default JoinMailingList;
