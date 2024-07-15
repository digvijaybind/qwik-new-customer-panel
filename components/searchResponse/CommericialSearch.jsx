import MedicalEquipmentCard from "./MedicalEquipmentCard";
import flightLogo from "../../public/images/airline-mini-logo/Indigo.png";
import Image from "next/image";
import React ,{useEffect,useState} from 'react'
const CommericialSearch = ({
  data,
  type = "commercial",
  aircraftData,
  availticket,
  activeTab
}) => {
   const [totalCost, setTotalCost] = useState(
    parseFloat((aircraftData?.price?.totalPrice).toFixed(2)) ?? 0
  );
  const [locationData, setLocationData] = useState({});
  const [totalTravelDuration, setTotalTravelDuration] = useState("");
  const [techStops, setTechStops] = useState([]);
  const [availableticket, setavailableticket] = useState("");
  const [airlineName, setairlineName] = useState("");
  const [airlineImage, setAirlineImage] = useState("");

console.log("locationData line 22",locationData);
 const getEUR = (price) => {
    const EuroPrice = price;
    return EuroPrice;
  };
  const getAED = (price) => {
    const PriceAED = price * 3.95;
    return PriceAED.toFixed(2);
  };

  const getUSD = (price) => {
    const PriceUsd = price * 1.077;
    return PriceUsd.toFixed(2);
  };

  const getINR = (price) => {
    const PriceINR = price * 89.42;
    return PriceINR.toFixed(2);
  };



  useEffect(() => {
    const actualTotalPrice = parseFloat(
      (aircraftData?.price?.totalPrice).toFixed(2)
    );
    switch (selectedCurrency) {
      case "EUR":
        setTotalCost(getEUR(actualTotalPrice));
        break;
      case "AED":
        setTotalCost(getAED(actualTotalPrice));
        break;
      case "USD":
        setTotalCost(getUSD(actualTotalPrice));
        break;
      case "INR":
        setTotalCost(getINR(actualTotalPrice));
        break;
      default:
        setTotalCost(0);
    }
  }, [aircraftData?.price?.totalPrice]);


  //  const airlineNames = {
  //   AC: "Air Canada",
  //   "6E": "IndiGo",
  //   AF: "Air France",
  //   AI: "Air India",
  //   AA: "American Airlines",
  //   BA: "British Airways",
  //   CX: "Cathay Pacific",
  //   DL: "Delta Air Lines",
  //   EK: "Emirates",
  //   EY: "Etihad Airways",
  //   KL: "KLM Royal Dutch Airlines",
  //   LH: "Lufthansa",
  //   QF: "Qantas",
  //   QR: "Qatar Airways",
  //   SQ: "Singapore Airlines",
  //   TK: "Turkish Airlines",
  //   UA: "United Airlines",
  //   VS: "Virgin Atlantic",
  //   THY: "Turkish Airlines",
  //   WY: "Oman Air",
  //   OMA: "Oman Air",
  //   SAA: "South African Airways",
  //   ANA: "All Nippon Airways",
  //   PAL: "Philippine Airlines",
  //   VIR: "Virgin Atlantic",
  //   MAU: "Air Mauritius",
  //   MH: "Malaysia Airlines",
  //   SV: "Saudia",
  // };

  // const AirlineImages = {
  //   AC: Aircanada,
  //   "6E": Indigo,
  //   AF: Airfrance,
  //   AI: AirIndia,
  //   AA: americanAirline,
  //   BA: BritishAirways,
  //   CX: cathayAirline,
  //   DL: DeltaAirline,
  //   EK: Emirates,
  //   EY: Ethiads,
  //   KL: KLMAirline,
  //   LH: Lufthansa,
  //   QF: Quantas,
  //   QR: QatarAirway,
  //   SQ: SingaporeAirline,
  //   TK: TurkishAirline,
  //   UA: UnitedAirline,
  //   VS: VirginAtlantic,
  //   THY: TurkishAirlineNew,
  //   WY: OmanAirline,
  //   OMA: OmanAirline,
  //   SAA: SouthAfrican,
  //   ANA: NipponAirline,
  //   PAL: PhillippinesAirlines,
  //   VIR: VirginAirline,
  //   MAU: Airmauritius,
  //   MH: malesiyaAirline,
  //   SV: SaudiAirline,
  // };




  const handleCurrencyChange=()=>{

  }
useEffect(()=>{
console.log("line 11 commericial aircraft data", aircraftData);
console.log("aircraftData?.price?.totalPrice",aircraftData?.price?.totalPrice)
console.log("line 12 commericial ticket date",availticket);
},[aircraftData,availticket])
  return (
    <div className="w-full flex flex-col gap-4">
      <button
        className={`cursor-none flex w-fit gap-1 capitalize items-center px-2.5 py-1 rounded-full text-xs ${
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
              <Image src={flightLogo} alt="flight logo" className="w-[30%] h-[20%]" />
              <div>
                <p className="font-bold">Indigo</p>
                <p className="text-[0.8rem] font-semibold text-black/50 mb-0">
                  Indigo
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
              <p className="sm:text-2xl text-2xl sm:mb-1 mb-2 font-black">$ 22,723</p>
              <p className="sm:text-base text-[12px] text-black/50 text-center">
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
            image="/images/bookingIcon/medicalEquipment.svg"
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

export const getServerSideProps=()=>{

}
export default CommericialSearch;
