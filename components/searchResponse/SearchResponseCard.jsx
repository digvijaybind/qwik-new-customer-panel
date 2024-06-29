import MedicalEquipmentCard from "./MedicalEquipmentCard";

const SearchResponseCard = ({ data, type = "commercial" }) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <button
        className={`cursor-none flex w-fit gap-1.5 capitalize items-center px-2.5 py-1 rounded-full text-xs ${
          type === "commercial"
            ? "bg-[#EBFDFF] text-primary"
            : "bg-[#FEF6F1] text-[#ED7D2D]"
        }`}
      >
        <img
          src={
            type === "commercial"
              ? "/images/searchResponse/commercialFlight.svg"
              : "/images/searchResponse/charteredFlight.svg"
          }
          alt={`${type} flights`}
          className="w-3"
        />
        {type} Flight
      </button>
      <div className="w-full flex flex-col rounded-md drop-shadow-md bg-white border border-gray-100">
        <div className="flex flex-col gap-10 p-7 sm:px-5">
          <div className="flex justify-between sm:flex-col sm:gap-8 items-center">
            <div className="flex items-center gap-3">
              <img
                src="/images/airline-mini-logo/learjet-405.svg"
                alt="flight logo"
                className="w-[21%]"
              />
              <div>
                <p className="font-bold">Challenger 605</p>
                <p className="text-[0.8rem] font-semibold text-black/50 mb-0">
                  Challenger 605
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="font-semibold flex flex-col items-center">
                <p className="text-xl mb-1">17:00</p>
                <p className="text-xs">Mumbai</p>
              </div>
              <span className="bg-primary text-white rounded-md text-xs px-3 py-1.5">
                {" "}
                4:00hr
              </span>
              <div className="font-semibold flex flex-col items-center">
                <p className="text-xl mb-1">21:00</p>
                <p className="text-xs">Dubai</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col font-semibold">
              <p className="sm:text-2xl text-3xl sm:mb-1 mb-2">$ 22,723</p>
              <p className="sm:text-sm text-[0.9rem] text-black/50 text-center">
                Flight / Patient
              </p>
            </div>
            <div className="flex flex-col font-medium">
              <button className="bg-primary text-white px-8 rounded-md py-2 mb-4 text-sm">
                Book Now
              </button>
              <p className="text-xs text-black/60 font-medium text-center">
                View Flight Details
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 text-[0.65rem] font-medium flex items-start justify-around sm:gap-3 gap-4 text-center px-6 py-3.5">
          <MedicalEquipmentCard
            image="/images/bookingIcon/strectres.png"
            title="Stretcher"
          />
          <MedicalEquipmentCard
            image="/images/bookingIcon/doctor.png"
            title="Doctor Onboard"
          />
          <MedicalEquipmentCard
            image="/images/bookingIcon/oxygen.svg"
            title="Oxygen"
          />
          <MedicalEquipmentCard
            image="/images/bookingIcon/medicalEquipment.png"
            title="Medical Equipment"
          />
          <MedicalEquipmentCard
            image="/images/bookingIcon/additionalEquipment.svg"
            title="Additional Equipment"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchResponseCard;
