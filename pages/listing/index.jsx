'use client';

import styles from './page.module.css';
import { Shadow } from '@/components/Utils/utils';
import { DateInput, TextInput } from '@/components/Form/input';
import Planedesc from '../../components/Planedesc/planedesc';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useData } from '../../context/DataContext';
import { Switch } from '@mui/material';
import Search from '../../public/images/search.svg';
import CommercialCard from '@/components/commercialCard/CommercialCard';
import Image from 'next/image';
import Landing from '../../public/images/Searchlanding.svg';
import axios from 'axios';
import CommercialImage from '../../public/images/commercial.svg';
import moment from 'moment-timezone';
import DedicatedCard from '@/components/dedicatedCard/DedicatedCard';
import swal from 'sweetalert';

const Listing = ({ isMobile }) => {
  const { apiData } = useData();
  const [airdata, setAirData] = useState({});

  useEffect(() => {
    // setAirData(JSON?.parse(localStorage?.getItem("aircraft")));
  }, []);

  const [isMobile1, setIsMobile1] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile1(window.innerWidth <= 1000); // Change threshold as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const convertTime = (data) => {
    const hours = Math.floor(data); // Extract whole hours
    const minutes = Math.round((data - hours) * 60); // Convert fractional part to minutes and round

    const result = `${hours}h ${minutes}m`;
    return result;
  };

  const [apiResponse, setApiResponse] = useState(null);

  // function handle(e) {
  //   const newdata = {...otherData};
  //   newdata[e.target.id] = e.target.value;
  //   setOtherData(newdata);
  //   console.log(newdata);
  // }
  const url = 'http://localhost:8000/customer/Amadeusairline';
  const [formData, setFormData] = useState({
    originLocationCode: '',
    destinationLocationCode: '',
    departureDate: '',
    pax: 0,
    countryCode: '',
    mobile: '',
    max: 5,
  });
  const [finalData, setFinaldata] = useState([]);
  const [ArrivalLocation, setArrivalLocation] = useState();
  const [depatureLocation, setdepatureLocation] = useState();
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [depatureDate, setdepatureDate] = useState();
  const [depatureTime, setdepatureTime] = useState();
  const [departureLocations, setDepartureLocations] = useState([]);
  const [arrivalLocations, setArrivalLocations] = useState([]);
  const [flightDurations, setFlightDurations] = useState([]);
  const [departureFormatted, setDepartureFormatted] = useState([]);
  const [arrivalFormatted, setArrivalFormatted] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');

  const [uniquePrice, setuniquePrice] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form submitted with data', formData);
    try {
      console.log('formdata in line 89', formData);
      const headers = {
        'Content-Type': 'application/json', // Adjust content type as needed
        // Add any other headers here
      };
      const response = await axios.post(
        `http://localhost:8000/customer/Amadeusairline`,
        formData,
        { headers }
      );
      console.log('Response:', response.data);
      // setFormData(response.data);
      setFinaldata(response.data);
      setSelectedCurrency('EUR');

      // const parsedDepartureDate = moment(
      //   response.data.ResponseData.departureDate
      // );
      // const formattedDepartureDate = parsedDepartureDate.format("DD MMM YYYY");

      // console.log("formattedDepartureDate", formattedDepartureDate);
      // setdepatureDate(formattedDepartureDate);
      console.log('final data line 113', response.data);
      // setFinaldata(response.data.ResponseData);

      setError(null);
      // const jsonData = await response.json();
      // console.log("response", jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  console.log('finalData', finalData);
  useEffect(() => {
    // Your API call and data processing logic here
    // Assuming finalData is available
    if (finalData?.AirCraftDatawithNotechStop?.length > 0) {
      finalData.AirCraftDatawithNotechStop.forEach((data) => {
        console.log('data line 125', data);
        data.aircraft.itineraries.forEach((innerData) => {
          innerData.segments.forEach((segmentData) => {
            const departureIataCode = segmentData.departure.iataCode;
            const arrivalIataCode = segmentData.arrival.iataCode;
            setDepartureLocations(departureIataCode);
            setArrivalLocations(arrivalIataCode);
            console.log('departureIataCode', departureIataCode);
            console.log('arrivalIataCode', arrivalIataCode);

            // const departureTime = moment(segmentData.departure.at).tz(
            //   "Asia/Dubai"
            // );
            // const arrivalTime = moment(segmentData.arrival.at).tz("Asia/Dubai");

            // const departureTime = moment.tz(
            //   segmentData.departure.at,
            //   "Asia/Dubai"
            // );
            // const arrivalTime = moment.tz(segmentData.arrival.at, "Asia/Dubai");
            // Assume segmentData.departure.at and segmentData.arrival.at are ISO 8601 formatted strings
            const departureTime = moment.tz(
              segmentData.departure.at,
              'Asia/Dubai'
            );
            const arrivalTime = moment.tz(segmentData.arrival.at, 'Asia/Dubai');

            const departureFormatted1 = departureTime.format('HH:mm');
            const arrivalFormatted1 = arrivalTime.format('HH:mm');
            setDepartureFormatted(departureFormatted1);
            setArrivalFormatted(arrivalFormatted1);

            // console.log("departureTime: ", departureTime.toString());
            // console.log("arrivalTime: ", arrivalTime.toString());

            console.log('arrivalFormatted', arrivalFormatted);

            console.log('departureFormatted', departureFormatted);

            // Check if the times are in the same timezone
            const sameTimezone =
              departureTime.utcOffset() === arrivalTime.utcOffset();

            console.log('Are the times in the same timezone? ', sameTimezone);

            // Calculate the flight duration
            const durationMs = arrivalTime.diff(departureTime);
            const duration = moment.duration(durationMs);
            const hours = Math.floor(duration.asHours());
            const minutes = duration.minutes();

            console.log('Time duration in hour', hours);
            console.log(
              `Flight duration: ${hours} hours and ${minutes} minutes`
            );

            console.log('departureTime line 182', departureFormatted);
            console.log('arrivalTime line 183', arrivalFormatted);

            // const sameTimezone = departureTime.isSame(arrivalTime, "minute");

            console.log('sameTimezone line 189', sameTimezone);
            // const departureTime = moment(segmentData.departure.at).tz("UTC");
            const departureTime1 = moment(departureTime);
            setDepartureFormatted((prev) => [
              ...prev,
              departureTime1.format('HH:mm'),
            ]);

            // const arrivalTime = moment(segmentData.arrival.at).tz("UTC");
            const arrivalTime1 = moment(arrivalTime);
            setArrivalFormatted((prev) => [
              ...prev,
              arrivalTime1.format('HH:mm'),
            ]);

            // const duration = moment.duration(arrivalTime.diff(departureTime));
            setFlightDurations((prev) => [...prev, duration.asHours()]);
            // setDepartureLocations((prev) => [...prev, departureIataCode]);
            // setArrivalLocations((prev) => [...prev, arrivalIataCode]);
          });
        });
        setTotalPrice(data.price.totalPrice);
        setuniquePrice(data.price.totalPrice);
      });

      // Assuming totalPrice is available from somewhere in your data
      const totalPrice = finalData.price?.totalPrice.toFixed(3);

      console.log('line 154 totalPrice', totalPrice);
    } else if (
      (!finalData?.AirCraftDatawithNotechStop ||
        finalData?.AirCraftDatawithNotechStop?.length === 0) &&
      finalData?.AirCraftDatawithtechStop?.length > 0
    ) {
      finalData?.AirCraftDatawithtechStop?.map((data, index) => {
        console.log('data line 167', data);
        data.aircraft.itineraries.forEach((innerData) => {
          innerData.segments.forEach((segmentData) => {
            const departureIataCode = segmentData.departure.iataCode;
            const arrivalIataCode = segmentData.arrival.iataCode;
            setDepartureLocations(departureIataCode);
            setArrivalLocations(arrivalIataCode);

            const departureTime = moment(segmentData.departure.at).tz(
              'Asia/Dubai'
            );
            const arrivalTime = moment(segmentData.arrival.at).tz('Asia/Dubai');

            // const departureTime = moment.tz(
            //   segmentData.departure.at,
            //   "Asia/Dubai"
            // );
            // const arrivalTime = moment.tz(segmentData.arrival.at, "Asia/Dubai");
            console.log('departureTime line 182', departureTime);
            console.log('arrivalTime line 183', arrivalTime);

            const sameTimezone = departureTime.isSame(arrivalTime, 'minute');

            console.log('sameTimezone line 189', sameTimezone);

            // Calculate the difference in milliseconds
            const durationMs = arrivalTime.diff(departureTime);

            console.log('flying duration time line 194', durationMs);

            // Convert milliseconds to hours and minutes
            const duration = moment.duration(durationMs);
            const hours = Math.floor(duration.asHours());

            console.log('flying duration time in hour', hours);
            const minutes = duration.minutes();

            console.log(
              `Flight duration: ${hours} hours and ${minutes} minutes`
            );

            // const departureTime = moment(segmentData.departure.at).tz(
            //   "Asia/Dubai"
            // );
            // const departureTime1 = moment(departureTime);
            // setDepartureFormatted((prev) => [
            //   ...prev,
            //   departureTime1.format("HH:mm"),
            // ]);

            // const arrivalTime = moment(segmentData.arrival.at).tz("Asia/Dubai");

            // const sameTimezone = departureTime.isSame(arrivalTime, "minute");
            console.log('sameTimezone line 189', sameTimezone);
            const arrivalTime1 = moment(arrivalTime);
            console.log('departureTime line 191', departureTime);
            console.log('arrivalTime line 192', arrivalTime);
            // setArrivalFormatted((prev) => [
            //   ...prev,
            //   arrivalTime1.format("HH:mm"),
            // ]);

            // const duration = moment.duration(arrivalTime.diff(departureTime));
            setFlightDurations((prev) => [...prev, duration.asHours()]);
            setDepartureLocations((prev) => [...prev, departureIataCode]);
            setArrivalLocations((prev) => [...prev, arrivalIataCode]);
          });
          const calculateTotalDuration = (segments) => {
            let totalDuration = 0;
            segments?.forEach((segment) => {
              const departureTime = moment(segment.departure.at).tz(
                'Asia/Dubai'
              );
              const arrivalTime = moment(segment.arrival.at).tz('Asia/Dubai');

              const duration = moment.duration(arrivalTime.diff(departureTime));
              totalDuration += duration.asMinutes(); // Convert duration to minutes and accumulate
            });
            return totalDuration;
          };
          const totalDurationInMinutes = calculateTotalDuration(
            innerData.segments
          );
          console.log('totalDurationInMinutes', totalDurationInMinutes);
        });
        setTotalPrice(data.price.totalPrice);
        setuniquePrice(data.price.totalPrice);
      });
    }
  }, [finalData]); 
  console.log('totalPrice line 216', totalPrice);
  console.log('arrivalLocations line 194', arrivalLocations);
  console.log('departureLocations line 195', departureLocations);

  const formatDate = (date) => {
    return date.toISOString().substr(0, 10); 
  };

  const currencySymbols = {
    EUR: '€',
    AED: 'AED',
    USD: '$',
    INR: '₹',
  };
  console.log(' totalPrice line 164 ', totalPrice);
  const handleChange = (event) => {
    setSelectedCurrency(event.target.value);
    // You can call a function here based on the selected currency
    switch (event.target.value) {
      case 'EUR':
        handleEUR();
        break;
      case 'AED':
        handleAED();
        break;
      case 'USD':
        handleUSD();
        break;
      case 'INR':
        handleINR();
        break;
      default:
        // console.error("Invalid currency selected.");
        return error;
    }
  };

  console.log(' totalPrice line 185 ', totalPrice);
  const handleEUR = async () => {
  
    const EuroPrice = uniquePrice.toFixed(2);
    alert('this is euro price');
    await setTotalPrice(EuroPrice);
    console.log('First iteration Euro', EuroPrice);
  };
  const handleAED = async () => {
    const PriceAED = uniquePrice * 3.95;
    alert('this is aed price');
    await setTotalPrice(PriceAED);
    console.log('First iteration AED', PriceAED);
    console.log('PriceAED', PriceAED.toFixed(2));
  };

  const handleUSD = async () => {
    alert('this is USD price');
    const PriceUsd = uniquePrice * 1.077;
    await setTotalPrice(PriceUsd);
    alert('Price', PriceUsd);
    console.log('PriceUsd', PriceUsd.toFixed(2));
  };

  const handleINR = async () => {
    alert('this is INR price');
    const PriceINR = uniquePrice * 89.42;
    alert('Price', PriceINR);
    await setTotalPrice(PriceINR);
    console.log('PriceINR ', PriceINR.toFixed(2));
  };

  const handleInpUTChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  const handleCountryCodeChange = (event) => {
    const countryCodeValue = event.target.value;
    handleInpUTChange('countryCode', countryCodeValue);
  }; 
  console.log('final data  line 228', finalData);
  return (
    <div className="font-poppins">
      <Image src={Landing} height={420} width={1874} />

      <Shadow
        classname={`${styles.Top_container} px-[10px] py-[15px] bottom-[135px]  mx-[30px] relative   lg:relative sm:static drop-shadow-xl border-8 border-solid border-[#14B4E3] p-4`}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row items-baseline justify-evenly  md:flex-col md:mb-3  sm:flex-col sm:mb-3 ">
            {/* From Input */}

            <TextInput
              className="w-[220px] md:w-[145px] sm:w-[100%] mr-[20px] md:mb-3 sm:mb-3"
              label="From"
              name="originLocationCode"
              value={formData.originLocationCode}
              onChange={(e) =>
                handleInpUTChange('originLocationCode', e.target.value)
              }
            />
            {/* <div
                className="absolute overflow-auto z-[100] max-h-[300px]"
                id="fromAutoComplete"
              >
                {fieldType === "From" &&
                  cityMatch?.length > 0 &&
                  cityMatch?.map((item, index) => (
                    <div
                      key={index + "city-match-item"}
                      className="bg-[#E6F7FF] hover:#B3E0FF px-3 py-2"
                      onClick={() => handleCityItemClick("From", item)}
                    >
                      <p className="text-[0.95rem] font-semibold text-blue-900">
                        {item?.icao}
                        {item?.iata ? `(${item?.iata})` : null}
                        {item?.icao || item?.iata ? "," : null} {item?.name}
                      </p>
                      <p className="text-[0.7rem]">
                        {item?.city_name}
                        {item?.city_name ? "," : null} {item?.country_name}
                      </p>
                    </div>
                  ))}
              </div> */}

            {/* To Input */}
            <div
              style={{ position: 'relative' }}
              className="mb-[15px] w-[200px] sm:w-[100%] mr-[20px] md:mb-3 sm:md-3"
            >
              <TextInput
                className="w-[220px]  md:w-[145px] sm:w-[100%] mr-[20px]"
                label="To"
                name="destinationLocationCode"
                value={formData.destinationLocationCode}
                onChange={(e) =>
                  handleInpUTChange('destinationLocationCode', e.target.value)
                }
              />
            </div>

            {/* Date Input */}
            <DateInput
              className="w-[160px] md:w-[145px] sm:w-[100%] mr-[20px] mb-[15px]"
              label="Date"
              name="departureDate"
              value={formData.departureDate}
              onChange={(e) =>
                handleInpUTChange('departureDate', e.target.value)
              }
            />
            {/* Country Code Selection */}

            <div>
              {/* <select className="border border-solid border-gray-300 rounded-md bg-white p-3 w-[160px]">
                <option value="+1" className="font-semibold text-[8px]">
                  USA
                </option>
                <option value="+91" className="font-semibold text-[8px]">
                  IN
                </option>
                <option value="+971" className="font-semibold text-[8px]">
                  UAE
                </option>
              </select> */}
              <select
                value={formData.countryCode}
                onChange={handleCountryCodeChange}
                className="w-32 px-4 py-2 border rounded-lg  focus:outline-none focus:border-blue-500"
              >
                <option>Sele country code</option>{' '}
                <option value="+93">Afghanistan (AF)</option>
                <option value="+358">Åland Islands (AX)</option>
                <option value="+355">Albania (AL)</option>
                <option value="+213">Algeria (DZ)</option>
                <option value="+1">American Samoa (AS)</option>
                <option value="+376">Andorra (AD)</option>
                <option value="+244">Angola (AO)</option>
                <option value="+1">Anguilla (AI)</option>
                <option value="+672">Antarctica (AQ)</option>
                <option value="+1">Antigua and Barbuda (AG)</option>
                <option value="+54">Argentina (AR)</option>
                <option value="+374">Armenia (AM)</option>
                <option value="+297">Aruba (AW)</option>
                <option value="+61">Australia (AU)</option>
                <option value="+43">Austria (AT)</option>
                <option value="+994">Azerbaijan (AZ)</option>
                <option value="+1">Bahamas (BS)</option>
                <option value="+973">Bahrain (BH)</option>
                <option value="+880">Bangladesh (BD)</option>
                <option value="+1">Barbados (BB)</option>
                <option value="+375">Belarus (BY)</option>
                <option value="+32">Belgium (BE)</option>
                <option value="+501">Belize (BZ)</option>
                <option value="+229">Benin (BJ)</option>
                <option value="+1">Bermuda (BM)</option>
                <option value="+975">Bhutan (BT)</option>
                <option value="+591">Bolivia (BO)</option>
                <option value="+387">Bosnia and Herzegovina (BA)</option>
                <option value="+267">Botswana (BW)</option>
                <option value="+55">Brazil (BR)</option>
                <option value="+246">
                  British Indian Ocean Territory (IO)
                </option>
                <option value="+673">Brunei Darussalam (BN)</option>
                <option value="+359">Bulgaria (BG)</option>
                <option value="+226">Burkina Faso (BF)</option>
                <option value="+257">Burundi (BI)</option>
                <option value="+855">Cambodia (KH)</option>
                <option value="+237">Cameroon (CM)</option>
                <option value="+1">Canada (CA)</option>
                <option value="+238">Cape Verde (CV)</option>
                <option>Cayman Islands (KY)</option>
                <option value="+236">Central African Republic (CF)</option>
                <option value="+235">Chad (TD)</option>
                <option value="+56">Chile (CL)</option>
                <option value="+86">China (CN)</option>
                <option value="+61">Christmas Island (CX)</option>
                <option value="+61">Cocos (Keeling) Islands (CC)</option>
                <option value="+57">Colombia (CO)</option>
                <option value="+269">Comoros (KM)</option>
                <option value="+242">Congo (CG)</option>
                <option value="+243">
                  Congo, The Democratic Republic of The (CD)
                </option>
                <option value="+682">Cook Islands (CK)</option>
                <option value="+506">Costa Rica (CR)</option>
                <option value="+225">Cote D'ivoire (CI)</option>
                <option value="+385">Croatia (HR)</option>
                <option value="+53">Cuba (CU)</option>
                <option value="+357">Cyprus (CY)</option>
                <option value="+420">Czech Republic (CZ)</option>
                <option value="+45">Denmark (DK)</option>
                <option value="+253">Djibouti (DJ)</option>
                <option value="+1">Dominica (DM)</option>
                <option value="+1">Dominican Republic (DO)</option>
                <option value="+593">Ecuador (EC)</option>
                <option value="+20">Egypt (EG)</option>
                <option value="+503">El Salvador (SV)</option>
                <option value="+240">Equatorial Guinea (GQ)</option>
                <option value="+291">Eritrea (ER)</option>
                <option value="+372">Estonia (EE)</option>
                <option value="+251">Ethiopia (ET)</option>
                <option value="+500">Falkland Islands (Malvinas) (FK)</option>
                <option value="+298">Faroe Islands (FO)</option>
                <option value="+679">Fiji (FJ)</option>
                <option value="+358">Finland (FI)</option>
                <option value="+33">France (FR)</option>
                <option value="+594">French Guiana (GF)</option>
                <option value="+689">French Polynesia (PF)</option>
                <option value="+262">French Southern Territories (TF)</option>
                <option value="+241">Gabon (GA)</option>
                <option value="+220">Gambia (GM)</option>
                <option value="+995">Georgia (GE)</option>
                <option value="+49">Germany (DE)</option>
                <option value="+233">Ghana (GH)</option>
                <option value="+350">Gibraltar (GI)</option>
                <option value="+30">Greece (GR)</option>
                <option value="+299">Greenland (GL)</option>
                <option value="+1">Grenada (GD)</option>
                <option value="+590">Guadeloupe (GP)</option>
                <option value="+1">Guam (GU)</option>
                <option value="+502">Guatemala (GT)</option>
                <option value="+44">Guernsey (GG)</option>
                <option value="+224">Guinea (GN)</option>
                <option value="+245">Guinea-bissau (GW)</option>
                <option value="+592">Guyana (GY)</option>
                <option value="+509">Haiti (HT)</option>
                <option value="+672">
                  Heard Island and Mcdonald Islands (HM)
                </option>
                <option value="+379">Holy See (Vatican City State) (VA)</option>
                <option value="+504">Honduras (HN)</option>
                <option value="+852">Hong Kong (HK)</option>
                <option value="+36">Hungary (HU)</option>
                <option value="+354">Iceland (IS)</option>
                <option value="+91">India (IN)</option>
                <option value="+62">Indonesia (ID)</option>
                <option value="+98">Iran, Islamic Republic of (IR)</option>
                <option value="+964">Iraq (IQ)</option>
                <option value="+353">Ireland (IE)</option>
                <option value="+44">Isle of Man (IM)</option>
                <option value="+972">Israel (IL)</option>
                <option value="+39">Italy (IT)</option>
                <option value="+1">Jamaica (JM)</option>
                <option value="+81">Japan (JP)</option>
                <option value="+44">Jersey (JE)</option>
                <option value="+962">Jordan (JO)</option>
                <option value="+7">Kazakhstan (KZ)</option>
                <option value="+254">Kenya (KE)</option>
                <option value="+686">Kiribati (KI)</option>
                <option value="+850">
                  Korea, Democratic People's Republic of (KP)
                </option>
                <option value="+82">Korea, Republic of (KR)</option>
                <option value="+965">Kuwait (KW)</option>
                <option value="+996">Kyrgyzstan (KG)</option>
                <option value="+856">
                  Lao People's Democratic Republic (LA)
                </option>
                <option value="+371">Latvia (LV)</option>
                <option value="+961">Lebanon (LB)</option>
                <option value="+266">Lesotho (LS)</option>
                <option value="+231">Liberia (LR)</option>
                <option value="+218">Libyan Arab Jamahiriya (LY)</option>
                <option value="+423">Liechtenstein (LI)</option>
                <option value="+370">Lithuania (LT)</option>
                <option value="+352">Luxembourg (LU)</option>
                <option value="+853">Macao (MO)</option>
                <option value="+389">
                  Macedonia, The Former Yugoslav Republic of (MK)
                </option>
                <option value="+261">Madagascar (MG)</option>
                <option value="+265">Malawi (MW)</option>
                <option value="+60">Malaysia (MY)</option>
                <option value="+960">Maldives (MV)</option>
                <option value="+223">Mali (ML)</option>
                <option value="+356">Malta (MT)</option>
                <option value="+692">Marshall Islands (MH)</option>
                <option value="+596">Martinique (MQ)</option>
                <option value="+222">Mauritania (MR)</option>
                <option value="+230">Mauritius (MU)</option>
                <option value="+269">Mayotte (YT)</option>
                <option value="+52">Mexico (MX)</option>
                <option value="+691">
                  Micronesia, Federated States of (FM)
                </option>
                <option value="+373">Moldova, Republic of (MD)</option>
                <option value="+377">Monaco (MC)</option>
                <option value="+976">Mongolia (MN)</option>
                <option value="+382">Montenegro (ME)</option>
                <option value="+1">Montserrat (MS)</option>
                <option value="+212">Morocco (MA)</option>
                <option value="+258">Mozambique (MZ)</option>
                <option value="+95">Myanmar (MM)</option>
                <option value="+264">Namibia (NA)</option>
                <option value="+674">Nauru (NR)</option>
                <option value="+977">Nepal (NP)</option>
                <option value="+31">Netherlands (NL)</option>
                <option value="+599">Netherlands Antilles (AN)</option>
                <option value="+687">New Caledonia (NC)</option>
                <option value="+64">New Zealand (NZ)</option>
                <option value="+505">Nicaragua (NI)</option>
                <option value="+227">Niger (NE)</option>
                <option value="+234">Nigeria (NG)</option>
                <option value="+683">Niue (NU)</option>
                <option value="+672">Norfolk Island (NF)</option>
                <option value="+1">Northern Mariana Islands (MP)</option>
                <option value="+47">Norway (NO)</option>
                <option value="+968">Oman (OM)</option>
                <option value="+92">Pakistan (PK)</option>
                <option value="+680">Palau (PW)</option>
                <option value="+970">
                  Palestinian Territory, Occupied (PS)
                </option>
                <option value="+507">Panama (PA)</option>
                <option value="+675">Papua New Guinea (PG)</option>
                <option value="+595">Paraguay (PY)</option>
                <option value="+51">Peru (PE)</option>
                <option value="+63">Philippines (PH)</option>
                <option value="+64">Pitcairn (PN)</option>
                <option value="+48">Poland (PL)</option>
                <option value="+351">Portugal (PT)</option>
                <option value="+1">Puerto Rico (PR)</option>
                <option value="+974">Qatar (QA)</option>
                <option value="+262">Reunion (RE)</option>
                <option value="+40">Romania (RO)</option>
                <option value="+7">Russian Federation (RU)</option>
                <option value="+250">Rwanda (RW)</option>
                <option value="+290">Saint Helena (SH)</option>
                <option value="+1">Saint Kitts and Nevis (KN)</option>
                <option value="+1">Saint Lucia (LC)</option>
                <option value="+508">Saint Pierre and Miquelon (PM)</option>
                <option value="+1">
                  Saint Vincent and The Grenadines (VC)
                </option>
                <option value="+685">Samoa (WS)</option>
                <option value="+378">San Marino (SM)</option>
                <option value="+239">Sao Tome and Principe (ST)</option>
                <option value="+966">Saudi Arabia (SA)</option>
                <option value="+221">Senegal (SN)</option>
                <option value="+381">Serbia (RS)</option>
                <option value="+248">Seychelles (SC)</option>
                <option value="+232">Sierra Leone (SL)</option>
                <option value="+65">Singapore (SG)</option>
                <option value="+421">Slovakia (SK)</option>
                <option value="+386">Slovenia (SI)</option>
                <option value="+677">Solomon Islands (SB)</option>
                <option value="+252">Somalia (SO)</option>
                <option value="+27">South Africa (ZA)</option>
                <option value="+500">
                  South Georgia and The South Sandwich Islands (GS)
                </option>
                <option value="+34">Spain (ES)</option>
                <option value="+94">Sri Lanka (LK)</option>
                <option value="+249">Sudan (SD)</option>
                <option value="+597">Suriname (SR)</option>
                <option value="+47">Svalbard and Jan Mayen (SJ)</option>
                <option value="+268">Swaziland (SZ)</option>
                <option value="+46">Sweden (SE)</option>
                <option value="+41">Switzerland (CH)</option>
                <option value="+963">Syrian Arab Republic (SY)</option>
                <option value="+886">Taiwan (TW)</option>
                <option value="+992">Tajikistan (TJ)</option>
                <option value="+255">Tanzania, United Republic of (TZ)</option>
                <option value="+66">Thailand (TH)</option>
                <option value="+670">Timor-leste (TL)</option>
                <option value="+228">Togo (TG)</option>
                <option value="+690">Tokelau (TK)</option>
                <option value="+676">Tonga (TO)</option>
                <option value="+1">Trinidad and Tobago (TT)</option>
                <option value="+216">Tunisia (TN)</option>
                <option value="+90">Turkey (TR)</option>
                <option value="+993">Turkmenistan (TM)</option>
                <option value="+1">Turks and Caicos Islands (TC)</option>
                <option value="+688">Tuvalu (TV)</option>
                <option value="+256">Uganda (UG)</option>
                <option value="+380">Ukraine (UA)</option>
                <option value="+971">United Arab Emirates (AE)</option>
                <option value="+44">United Kingdom (GB)</option>
                <option value="+1">United States (US)</option>
                <option value="+1">
                  United States Minor Outlying Islands (UM)
                </option>
                <option value="+598">Uruguay (UY)</option>
                <option value="+998">Uzbekistan (UZ)</option>
                <option value="+678">Vanuatu (VU)</option>
                <option value="+58">Venezuela (VE)</option>
                <option value="+84">Viet Nam (VN)</option>
                <option value="+1">Virgin Islands, British (VG)</option>
                <option value="+1">Virgin Islands, U.S. (VI)</option>
                <option value="+681">Wallis and Futuna (WF)</option>
                <option value="+212">Western Sahara (EH)</option>
                <option value="+967">Yemen (YE)</option>
                <option value="+260">Zambia (ZM)</option>
                <option value="+263">Zimbabwe (ZW)</option>
                {/* Add more options as needed */}{' '}
              </select>
            </div>

            {/* Mobile Number Input */}
            <div class="md:mb-3 sm:mb-3">
              <TextInput
                className="w-[180px] md:w-[145px] sm:w-[100%] mr-[20px]"
                label="Mobile Number"
                name="mobile"
                placeholder="123-456-7890"
                value={formData.mobile}
                onChange={(e) => handleInpUTChange('mobile', e.target.value)}
              />
            </div>

            {/* Pax Input */}
            <TextInput
              className="w-[90px]  md:w-[145px] sm:w-[100%] mr-[20px] mb-[15px]"
              label="Pax"
              name="pax"
              value={formData.pax}
              onChange={(e) => handleInpUTChange('pax', e.target.value)}
            />

            {/* Search Button */}
            <div className="md:justify-center sm:justify-center">
              {isMobile1 ? (
                <button className="w-[216px] rounded-md bg-[#40D1F0] text-[24px] font-semibold cursor-pointer">
                  Search
                </button>
              ) : (
                <button className="h-[45px] w-[45px] bg-[#40D1F0] flex justify-center align-middle rounded-md items-center">
                  <Image src={Search} height={24} width={24} />
                </button>
              )}
            </div>
          </div>
        </form>
      </Shadow>

      <Shadow
        classname={`mt-[20px] w-[90%]  font-bold mb-[15px] text-center p-[10px] flex  ml-[50%] transform translate-x-[-50%] items-center`}
      >
        <button
          className={`${styles.Right_border} w-[50%]   font-extrabold cursor-pointer hover:gray`}
        >
          COMMERCIAL
        </button>
        <button className="w-[50%] font-extrabold cursor-pointer hover:opacity-100">
          CHARTERED
        </button>
      </Shadow>
      {apiData?.nearestOperatorWithPrice?.length > 0 && (
        <p className="my-3 w-[90%] ml-[50%] transform translate-x-[-50%] font-semibold text-sm">
          Showing {apiData?.nearestOperatorWithPrice?.length} results
        </p>
      )}
      <div className="px-[5%] flex justify-between items-stretch flex-wrap">
        {apiData?.nearestOperatorWithPrice?.map((el, i) => (
          <Planedesc
            key={'reesult-item-' + i}
            name={el.operator.Aircraft_type}
            price={Math.ceil(el.price * 10) / 10}
            time={convertTime(el.totalTime)}
            speed={el.operator.speed}
            from={apiData.from}
            to={apiData.to}
          ></Planedesc>
        ))}
      </div>
      <div class="grid grid-cols-2">
        <div class="grid grid-rows-5 grid-cols-1 gap-4 px-[35px]">
          {finalData?.AirCraftDatawithNotechStop?.length > 0 &&
            finalData?.AirCraftDatawithNotechStop?.map((data, index) => {
              console.log('data line 300 ', data);

              // data.aircraft.itineraries.forEach((Innerdata) => {
              //   Innerdata.segments.forEach((segmentData) => {
              //     const departureIataCode = segmentData.departure.iataCode;
              //     const arrivalIataCode = segmentData.arrival.iataCode;

              //     console.log("departure", departureIataCode);
              //     console.log("arrival", arrivalIataCode);

              //     // Update state after collecting all necessary data
              //     setdepatureLocation(departureIataCode);
              //     setArrivalLocation(arrivalIataCode);
              //   });
              // });
              return (
                <div key={index}>
                  <div
                    className={`h-[277px] w-[680px] py-[20px] px-[20px] bg-[#fffafa]  rounded grid grid-cols-3 gap-5 items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer  transition-all duration-700 hover:scale-105`}
                  >
                    <div class="">
                      <Image
                        src={CommercialImage}
                        alt="Commercial Image"
                        // class="object-fill"
                        //   layout="fill"
                        class="h-64 w-100 object-none object-center"
                        //   className="rounded"
                        height={600}
                        width={400}
                      />
                    </div>
                    <div class="col-span-2">
                      <div class="grid grid-cols-3 gap-4 mb-5">
                        <div class="">
                          <span class="text-[#000000] text-[20px] font-semibold text-center">
                            {' '}
                            {departureFormatted[0]}
                          </span>
                          <br />
                          <span class="text-[#000000] text-[20px] font-semibold">
                            {departureLocations}
                          </span>
                        </div>
                        <div class="flex flex-col items-center">
                          <div class="">{flightDurations[0]}h</div>
                          <div class="bg-[#42D1E5] w-[40px] h-[3px]"></div>
                          <div class="text-[red] text-[14px]">Non-stop</div>
                        </div>
                        <div class="text-end">
                          <span class="text-[#000000] text-[20px] font-semibold text-center">
                            {' '}
                            {/* {Depatureformatted[0]} */}
                            {arrivalFormatted[0]}
                          </span>
                          <br />
                          <span class="text-[#000000] text-[20px] font-semibold ">
                            {arrivalLocations}
                          </span>
                          <br />
                          {/* <span class="font-medium">{arrivalLocations[0]}</span> */}
                        </div>
                      </div>
                      <div class="flex justify-between align-middle mb-3">
                        <div class="">
                          <div class="font-semibold">Included Perks :</div>
                          <div class="font-semibold text-[14px]">
                            -Stretcher ✅
                          </div>
                          <div class="font-semibold text-[14px]">
                            -Doctor OnBoard ✅
                          </div>
                          <div class="font-semibold text-[14px]">
                            -Medical Equipment ✅
                          </div>
                          <div class="font-semibold text-[14px]">
                            -Oxygen(4L/Min) ✅
                          </div>
                        </div>
                        <div class="">
                          <div>
                            <span class="font-semibold text-[17px] flex flex-row">
                              <br />
                              <div>
                                <select
                                  id="currencySelector"
                                  value={selectedCurrency}
                                  onChange={handleChange}
                                  class="mr-2"
                                >
                                  <option value="EUR">EUR</option>
                                  <option value="AED">AED</option>
                                  <option value="USD">USD</option>
                                  <option value="INR">INR</option>
                                </select>
                              </div>
                              {currencySymbols[selectedCurrency]}
                              {totalPrice}
                            </span>
                            <br />
                            <span class="font-medium text-[16px] italic">
                              Estimated Price
                            </span>
                          </div>
                          <div>
                            <span class="font-semibold text-[13px]">
                              Ticket Availability
                            </span>
                            <br />
                            <span class="font-semibold text-[14px]">
                              {depatureDate}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="rounded text-center align-middle border border-[#4BDCF0]  h-[31px] cursor-pointer text-[#4BDCF0] hover:bg-[#4BDCF0] hover:text-[#fff]">
                        <div>View Details</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          {(!finalData?.AirCraftDatawithNotechStop ||
            finalData?.AirCraftDatawithNotechStop?.length === 0) &&
            finalData?.AirCraftDatawithtechStop?.length > 0 &&
            finalData?.AirCraftDatawithtechStop?.map((data, index) => {
              return (
                <div key={index}>
                  <div
                    className={`h-[277px] w-[680px] py-[20px] px-[20px] bg-[#fffafa]  rounded grid grid-cols-3 gap-5 items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer transition-all duration-700 hover:scale-105`}
                  >
                    <div class="">
                      <Image
                        src={CommercialImage}
                        alt="Commercial Image"
                        // class="object-fill"
                        //   layout="fill"
                        class="h-64 w-100 object-none object-center"
                        //   className="rounded"
                        height={600}
                        width={400}
                      />
                    </div>
                    <div class="col-span-2">
                      <div class="grid grid-cols-3 gap-2 mb-5">
                        <div class="">
                          <span class="text-[rgb(0,0,0)] text-[20px] font-semibold text-center">
                            {' '}
                            {/* {Depatureformatted[0]} */}
                          </span>
                          <br />
                          <span class="font-medium">{departureLocations}</span>
                        </div>
                        <div class="flex flex-col items-center">
                          <div class="">2 h</div>
                          <div class="flex flex-row items-baseline">
                            <div class="bg-[#42D1E5] w-[50px] h-[5px] mr-1">
                              Stop+1
                            </div>
                            <div class="text-[red] text-[14px] ">
                              ({departureLocations[0]})
                            </div>
                          </div>
                        </div>
                        <div class="text-end">
                          <span class="text-[#000000] text-[20px] font-semibold ">
                            {/* {Arrivalformatted[1]} */}
                          </span>
                          <br />
                          <span class="font-medium">{arrivalLocations[1]}</span>
                        </div>
                      </div>
                      <div class="flex justify-between align-middle mb-3">
                        <div class="">
                          <div class="font-semibold">Included Perks :</div>
                          <div class="font-semibold text-[14px]">
                            -Stretcher ✅
                          </div>
                          <div class="font-semibold text-[14px]">
                            -Doctor OnBoard ✅
                          </div>
                          <div class="font-semibold text-[14px]">
                            -Medical Equipment ✅
                          </div>
                          <div class="font-semibold text-[14px]">
                            -Oxygen(4L/Min) ✅
                          </div>
                        </div>
                        <div class="">
                          <div>
                            <span class="font-semibold text-[17px]">
                              {/* € {data.price.totalPrice.toFixed(3)} */}
                              {currencySymbols[selectedCurrency]}
                              {totalPrice}
                              <br />
                              <select
                                id="currencySelector"
                                value={selectedCurrency}
                                onChange={handleChange}
                              >
                                <option value="EUR">EUR</option>
                                <option value="AED">AED</option>
                                <option value="USD">USD</option>
                                <option value="INR">INR</option>
                              </select>
                            </span>
                            <br />
                            <span class="font-medium text-[16px] italic">
                              Estimated Price
                            </span>
                          </div>
                          <div>
                            <span class="font-semibold text-[13px]">
                              Ticket Availability
                            </span>
                            <br />
                            <span class="font-semibold text-[14px]">
                              {depatureDate}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="rounded text-center align-middle border border-[#4BDCF0]  h-[31px] cursor-pointer text-[#4BDCF0] hover:bg-[#4BDCF0] hover:text-[#fff]">
                        <div>View Details</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div class="grid grid-cols-1 gap-4">
          <DedicatedCard />
          <DedicatedCard />
          <DedicatedCard />
          <DedicatedCard />
          <DedicatedCard />
        </div>
      </div>
      <button className="w-[90%] ml-[50%] transform translate-x-[-50%] rounded-[4px] my-[20px] px-[16px] py-[8px] bg-[#40D1F0] text-white font-[600] text-[14px]">
        Show more results
      </button>
    </div>
  );
};

export default Listing;
