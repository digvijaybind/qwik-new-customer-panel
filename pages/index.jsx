'use client';
import Image from 'next/image';
import { Inter, Montserrat } from '@next/font/google';
import styles from '../styles/page.module.css';
import Review from '@/components/review/Review';
import { TextInput, DateInput } from '../components/Form/input';
import { useState } from 'react';
import { Shadow } from '../components/Utils/utils';
import { useEffect } from 'react';
import { useData } from '../context/DataContext';
import { useRouter } from 'next/router';
const montesserat = Montserrat({ subsets: ['latin'] });
import Servicecard from '@/components/Servicecard/Servicecard';
import NewsUpdates from '@/components/NewsUpdates/NewsUpdate';
import Training from '../public/images/neona.png';
import MRO from '../public/images/dedicate_air.png';
import Aviation from '../public/images/ecmo.png';
import MR from '../public/images/medical_report.png';
import DM from '../public/images/doctor_medicine.png';
import TK from '../public/images/treat_kids.png';
import NewAwards from '../public/images/newsAwards.svg';
import newEarn from '../public/images/newsEarn.svg';
import newHelipcator from '../public/images/newshelicaptor.svg';
import newOnline from '../public/images/newsOnline.svg';
import Slider from 'react-slick';
import Navnew from '@/components/Nav/Navnew';
import Image1 from '../public/images/qwiklif1.jpg';
import Image2 from '../public/images/qwiklif2.jpg';
import Image3 from '../public/images/qwiklif3.jpg';
import Image4 from '../public/images/qwiklif4.jpg';
import Image5 from '../public/images/qwiklif5.jpg';
import Image6 from '../public/images/qwiklif6.jpg';
import MiniAeroplane from '../public/images/counter/aeroplane.png';
import Miniaircraft from '../public/images/counter/aeroplane2.png';
import Doctor from '../public/images/counter/doctor.png';
import Miniglobal from '../public/images/counter/global.png';
import Search from '../public/images/search.svg';
import AboutAircraft from '../public/images/Homepage/about.png';

import Cost from '../public/images/sliderIcon/Cost.svg';
import Global1 from '../public/images/sliderIcon/global.svg';
import SelectionComponent from '@/components/selection/SelectionComponent';
import Banner from '../public/images/gray_plane.jpeg';
import Biggest_fleet from '../public/images/fleet_tabs/Biggest_fleet.png';
import CostEffect from '../public/images/fleet_tabs/cost_effective.png';
import DoctorOnboard from '../public/images/fleet_tabs/doctor_onboard.png';
import GlobalCoverage from '../public/images/fleet_tabs/global_coverage.png';
import CountUp from 'react-countup';
import Aeroplane from '../public/images/aeroplane.png';
import CustomDatePicker from '@/components/date/CustomDatePicker';
import GlobalIcon from '../public/images/counter/globalIcon.svg';
import Trusted from '@/components/trusted/Trusted';
import aeroIcon from '../public/images/aeroplaneicon.svg';
import CostEffective from '../public/images/counter/COstEffective.svg';
import Honeycomb from '../public/images/honeycomb.png';
import Aeroplane1 from '../public/images/trusted_contact/aeroplane1.svg';
import DoctorIcon from '../public/images/trusted_contact/doctor.svg';
import Champion from '../public/images/trusted_contact/champion.svg';
const images = [Image1, Image2, Image3, Image4, Image5, Image6];

export default function Home() {
  // Once the task is done, set loading to false
  const router = useRouter();
  const [formData, setformData] = useState({});
  const [fromSearch, setfromSearch] = useState('');
  const [tosearch, setTosearch] = useState('');
  const [otherData, setOtherData] = useState({
    From: '',
    To: '',
    Pax: '',
    Date: '',
    Aircraft: 'Learjet 45',
  });
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cityMatch, setCitymatch] = useState([]);
  const [fieldType, setFieldtype] = useState('');
  const { loading, startLoading, stopLoading, setApiData } = useData();
  const [activeTab, setActiveTab] = useState(1);

  console.log('fieldType', fieldType);
  useEffect(() => {
    // Simulate an asynchronous task (e.g., fetching user data)
    const asyncTask = async () => {
      // Replace this with your actual async logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      stopLoading();
    };

    asyncTask();
  }, []);

  useEffect(() => {
    document.addEventListener('mouseup', function (e) {
      console.log('event FIred');
      let container1 = document.querySelector('#fromAutoComplete');
      console.log('container1', container1);
      let container2 = document.querySelector('#toAutoComplete');
      console.log('container2', container2);
      console.log(
        'container1 && !container1?.contains(e.target)',
        container1 && !container1?.contains(e.target)
      );
      console.log(
        'container1?.contains(e.target)',
        container1?.contains(e.target)
      );
      console.log(
        'container2 && !container2?.contains(e.target)',
        container2 && !container2?.contains(e.target)
      );
      console.log(
        'container2?.contains(e.target)',
        container2?.contains(e.target)
      );
      console.log(e.target);
      if (container1 && !container1?.contains(e.target)) {
        setFieldtype((state) => (state === 'From' ? '' : state));
      }
      if (container2 && !container2?.contains(e.target)) {
        setFieldtype((state) => (state === 'To' ? '' : state));
      }
    });
  }, []);

  const searchCity = (text) => {
    console.log('text', text);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}all-airports?q=${text}`)
      .then((response) => response.json())
      .then((result) => {
        console.log('result55', result);
        setCitymatch(result);
      })
      .catch((error) => console.log('error', error));
  };
  console.log('cityMatch', cityMatch);
  useEffect(() => {
    let interval = setTimeout(() => {
      if (fromSearch || tosearch) {
        searchCity(fieldType === 'From' ? fromSearch : tosearch);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [fromSearch, tosearch]);
  console.log('cityMatch', cityMatch);
  // useEffect(() => {
  //   handleSubmit();
  // }, [setApiData]);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(API_ENDPOINT.THIRD_API, {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       const responseData = await response.json();
  //       console.log("API response", responseData);
  //     } else {
  //       console.error("API error", response.statusText);
  //     }
  //   } catch (error) {
  //     console.log(error, "error");
  //   }
  // };

  const handleSelectChange = (e) => {
    setOtherData((pre) => ({
      ...pre,
      Aircraft: e.target.value,
    }));
  };
  const handleOtherInputChange = (field, e) => {
    const { name, value } = e.target;
    setOtherData((pre) => ({
      ...pre,
      [field]: value,
    }));
    // console.log(e, "handleOtherInputChange");
    // const {name, value} = e.target;
    // setOtherData({

    //   [field]: value,
    // });
  };

  const planetypes = [
    {
      no: 1,
      head: 'Airbus A-350',
      text: 'The Airbus A350 is a long-range, wide-body twin-engine jet airliner developed and produced by Airbus.',
    },
    {
      no: 2,
      head: 'G - 650',
      text: 'The Gulfstream G650 is a large business jet produced by Gulfstream Aerospace. The model is designated Gulfstream GVI in its type certificate, and may be configured to carry from 11 to 18 passengers.',
    },
    {
      no: 3,
      head: 'Boeing 777',
      text: 'The Boeing 777, commonly referred to as the Triple Seven, is an American long-range wide-body airliner developed and manufactured by Boeing Commercial Airplanes.',
    },
    {
      no: 4,
      head: 'Learjet',
      text: 'Learjet is a Canadian-owned aerospace manufacturer of business jets for civilian and military use based in Wichita, Kansas, United States. Founded in the late 1950s by William Powell Lear as Swiss American Aviation Corporation',
    },
    {
      no: 5,
      head: 'Sukhoi Superjet SSJ100 SSJ100',
      text: 'Sukhoi Superjet SSJ100 SSJ100, the first airliner in which engine and airframe have been designed together to optimize performance. The SSJ100 – a fusion of Russia’s famed aviation design.',
    },
    {
      no: 6,
      head: 'Gulf Stream 4',
      text: 'The Gulfstream IV (or G-IV or GIV) and derivatives are a family of twinjet aircraft, mainly for private or business use. They were designed and built by Gulfstream Aerospace.',
    },
  ];
  const plane = [
    {
      title: '1200',
      content1: 'Life',
      content2: 'Saves',
    },
    {
      title: '50',
      content1: 'Awards',
      content2: 'Gained',
    },
    {
      title: '20',
      content1: 'Years',
      content2: 'Experiences',
    },
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const services = [
    {
      title: `Neonatal and Pediatric Air\n Transfer Services`,
      description: `Expert Transport for Neonates and Pediatric\n Patients QwikLif Air Ambulance specializes in\n
      safe and expert…`,
      image: Training,
    },
    {
      title: `ECMO Initiation and Air\n Transfer Services`,
      description: `Expert ECMO Assistance with Global Air\n Ambulance Solutions QwikLif Air Ambulance\n specializes in expert ECMO…`,

      image: Aviation,
    },
    {
      title: `Dedicated Air Ambulance`,
      description: `Swift and Expert Medical Transport Anywhere,\n Anytime QwikLif Air Ambulance offers\n
      unparalleled specialized air ambulance…`,
      image: MRO,
    },
    {
      title: `Neonatal and Pediatric Air\n Transfer Services`,
      description: `Expert Transport for Neonates and Pediatric\n Patients QwikLif Air Ambulance specializes in\n
      safe and expert…`,
      image: Training,
    },
    {
      title: `ECMO Initiation and Air\n Transfer Services`,
      description: `Expert ECMO Assistance with Global Air\n Ambulance Solutions QwikLif Air Ambulance\n specializes in expert ECMO…`,

      image: Aviation,
    },
    {
      title: `Dedicated Air Ambulance`,
      description: `Swift and Expert Medical Transport Anywhere,\n Anytime QwikLif Air Ambulance offers\n
      unparalleled specialized air ambulance…`,
      image: MRO,
    },
  ];
  const newsUpdates = [
    {
      title: `Your Medical Records are Safe now a days.`,
      description: `Fummy text of the prnting and type news seting
industrs standard known prin aretertook a printing
and typenews…`,
      image: MR,
    },
    {
      title: `Medical Records are Safe Your now a days`,
      description: `Fummy text of the prnting and type news seting
industrs standard known prin aretertook a printing
and typenews…`,
      image: DM,
    },
    {
      title: `Your Medical Records are Safe
now a days.`,
      description: `Fummy text of the prnting and type news seting
industrs standard known prin aretertook a printing
and typenews…`,
      image: TK,
    },
    {
      title: `Your Medical Records are Safe now a days.`,
      description: `Fummy text of the prnting and type news seting
industrs standard known prin aretertook a printing
and typenews…`,
      image: MR,
    },
    {
      title: `Medical Records are Safe Your now a days`,
      description: `Fummy text of the prnting and type news seting
industrs standard known prin aretertook a printing
and typenews…`,
      image: DM,
    },
    {
      title: `Your Medical Records are Safe
now a days.`,
      description: `Fummy text of the prnting and type news seting
industrs standard known prin aretertook a printing
and typenews…`,
      image: TK,
    },
  ];
  const Blogs = [
    {
      Title: 'Qwiklif Expands ...',
      date: '19 Nov 2023',
      descripation:
        "At Qwiklif we're committed to elevating healthcare through swift, top-notch air ambulance services. That's why ...",
      Cardimage: newHelipcator,
      buttontitle: 'Read More',
    },
    {
      Title: 'Qwiklif wins Air ...',
      date: '10 Apr 2023',
      descripation:
        'For the first time ever, Qwiklif wins the prestigious Air Ambulance of the Year Award at the ITIJ Awards 2022 which ...',
      Cardimage: NewAwards,
      buttontitle: 'Read More',
    },
    {
      Title: 'Qwiklif Earns ...',
      date: '19 Mar 2023',
      descripation:
        'Qwiklif, a global leader in the aviation industry, is soaring high with pride once again as we are thrilled to ...',
      Cardimage: newEarn,
      buttontitle: 'Read More',
    },
    {
      Title: 'QwiklifMag is Now Online!',
      date: '18 Mar 2023',
      descripation:
        'We are constantly on the move – whether it is with our ongoing commitment to enhancing investments or our constant efforts ...',
      Cardimage: newOnline,
      buttontitle: 'Read More',
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [services]);
  const [apiResponse, setApiResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'http://localhost:8000/customer/Amadeusairline';
    const apiPayload = {
      originLocationCode: otherData.From,
      destinationLocationCode: otherData.To,
      departureDate: otherData.Date,
      pax: otherData.Pax,
      max: 20,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Convert the payload to a query string and append it to the URL
        // ...

        // The rest of your fetch logic...
      });

      if (response.ok) {
        const data = await response.json();

        // Store the API response
        setApiResponse(data);

        // Use the response data as needed
        console.log('API Response:', data);
      } else {
        // Handle errors if the response status is not ok
        console.error('API Error:', response.statusText);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error:', error.message);
    }
  };

  const handleDateChange = (event) => {
    const selected = new Date(event.target.value);
    const today = new Date();

    if (selected < today) {
      setSelectedDate('');
    } else {
      setSelectedDate(event.target.value);
    }
  };
  const bookTypes = ['Dedicated Air Ambulance', 'Commercial stretcher'];
  const [SelectedIndex, setSelectedIndex] = useState(0);

  const handlePress = (item, index) => {
    setSelectedIndex(index);
  };

  const collapsable = [
    {
      header: '1. How quickly does an air ambulance travel?',
      description: `The type of aircraft, the distance traveled, the weather, and air traffic all affect how quickly an air ambulance travels. Air ambulances typically travel between 150 and 300 miles
    per hour, or 240 and 480 kilometers per hour. Helicopter air ambulances typically travel between 120 and 160 miles per hour (190 and 260 kilometers per hour), and they are
    frequently utilized in more urban or challenging environments. Longer distances are covered by fixed-wing air ambulances, such as jets or turboprop aircraft, which generally go
    faster—on average, 300 miles per hour (480 kilometers per hour) or more, depending on the kind of aircraft.`,
    },
    {
      header: '2. How much is the cost of an air ambulance in the US?',
      description: `The type of aircraft, the distance traveled, the weather, and air traffic all affect how quickly an air ambulance travels. Air ambulances typically travel between 150 and 300 miles
    per hour, or 240 and 480 kilometers per hour. Helicopter air ambulances typically travel between 120 and 160 miles per hour (190 and 260 kilometers per hour), and they are
    frequently utilized in more urban or challenging environments. Longer distances are covered by fixed-wing air ambulances, such as jets or turboprop aircraft, which generally go
    faster—on average, 300 miles per hour (480 kilometers per hour) or more, depending on the kind of aircraft.`,
    },
    {
      header: '3. What are the signs that you need an air ambulance?',
      description: `The type of aircraft, the distance traveled, the weather, and air traffic all affect how quickly an air ambulance travels. Air ambulances typically travel between 150 and 300 miles
    per hour, or 240 and 480 kilometers per hour. Helicopter air ambulances typically travel between 120 and 160 miles per hour (190 and 260 kilometers per hour), and they are
    frequently utilized in more urban or challenging environments. Longer distances are covered by fixed-wing air ambulances, such as jets or turboprop aircraft, which generally go
    faster—on average, 300 miles per hour (480 kilometers per hour) or more, depending on the kind of aircraft.`,
    },
    {
      header: '4. Is air ambulance service available in India?',
      description: `The type of aircraft, the distance traveled, the weather, and air traffic all affect how quickly an air ambulance travels. Air ambulances typically travel between 150 and 300 miles
    per hour, or 240 and 480 kilometers per hour. Helicopter air ambulances typically travel between 120 and 160 miles per hour (190 and 260 kilometers per hour), and they are
    frequently utilized in more urban or challenging environments. Longer distances are covered by fixed-wing air ambulances, such as jets or turboprop aircraft, which generally go
    faster—on average, 300 miles per hour (480 kilometers per hour) or more, depending on the kind of aircraft.`,
    },
    {
      header: '5.How do you choose a private air ambulance provider?',
      description: `The type of aircraft, the distance traveled, the weather, and air traffic all affect how quickly an air ambulance travels. Air ambulances typically travel between 150 and 300 miles
    per hour, or 240 and 480 kilometers per hour. Helicopter air ambulances typically travel between 120 and 160 miles per hour (190 and 260 kilometers per hour), and they are
    frequently utilized in more urban or challenging environments. Longer distances are covered by fixed-wing air ambulances, such as jets or turboprop aircraft, which generally go
    faster—on average, 300 miles per hour (480 kilometers per hour) or more, depending on the kind of aircraft.`,
    },
  ];

  const tasktab = [
    {
      img: Aeroplane1,
      title: 'Express Lane to Care',
      description:
        'Time is precious, especially during emergencies. Our air ambulances are not just vehicles; they are a beacon of hope on the fastest route to medical assistance. We pride ourselves on a lightning-quick response that bridges the gap between distress and relief',
    },
    {
      img: DoctorIcon,
      title: 'Innovation in Every Flight',
      description:
        "QwikLif Air Ambulance embraces cutting-edge medical technology. Think of our ambulances as flying hospitals, complete with state-of-the-art equipment. We're not just transporting patients; we're bringing a mobile medical unit to ensure the best care possible.",
    },
    {
      img: Champion,
      title: 'Angels in the Air:',
      description:
        "Behind the wings of our aircraft are skilled and compassionate medical professionals. Our team is not just here to transport; they're here to comfort. From experienced paramedics to caring nurses, our crew turns a challenging journey into a voyage of support and expertise.",
    },
  ];

  const [SelectedCollapseIndex, setSelectedCollapseIndex] = useState(-1);
  return (
    <main>
      <div class="font-Montserrat">
        <Navnew></Navnew>

        <Shadow
          classname={`${styles.Top_container} px-[10px] py-[15px] bottom-[135px]  mx-[30px] relative   lg:relative sm:static drop-shadow-xl border-8 border-solid border-[#14B4E3] p-4`}
        >
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row items-baseline justify-evenly md:flex-col md:mb-3 sm:flex-col sm:mb-3 ">
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
              />
              {/* Country Code Selection */}

              <div>
                <select
                  value={formData.countryCode}
                  className="w-36 h-[40px] px-4 py-2 border rounded-lg  focus:outline-none  border-solid border-1 border-gray-600 "
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
                  <option value="+379">
                    Holy See (Vatican City State) (VA)
                  </option>
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
                  <option value="+255">
                    Tanzania, United Republic of (TZ)
                  </option>
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
                <button className="h-[45px] w-[45px] bg-[#40D1F0] flex justify-center align-middle rounded-md items-center">
                  <Image src={Search} height={24} width={24} />
                </button>
              </div>
            </div>
          </form>
        </Shadow>
        <div class="px-10">
          {/* <div class="grid grid-cols-2 gap-5">
            <div class="w-full h-64 overflow-hidden">
              <Image src={AboutAircraft} />
            </div>
            <div class=""></div>
          </div> */}
          <div class="grid grid-cols-2 gap-2 sm:grid-cols-1">
            <Image src={AboutAircraft} height={460} width={620} />

            <div class="grid grid-rows-3 gap-3">
              <div class="text-[38px] text-[#111111] font-bold">
                Fastest{' '}
                <span class="text-[38px] text-[#11B6E3] font-bold">
                  Air Ambulance
                </span>
                <br />
                Services
              </div>
              <div class="text-[#7A7A7A] text-[16px]">
                Qwiklif Air Ambulance Service is your trusted partner for urgent
                International Air Ambulance Transportation worldwide. With a
                dedicated team of skilled professionals and state-of-the-art
                aircraft, we specialize in swift and safe medical transfers.
                With over 15+ Professional Doctors and paramedics and access to
                air ambulance aircraft worldwide in 20+ countries qwiklif Air
                Ambulance is ready for rapid response, We find the nearest
                aircraft available to you for quick response and affordable
                pricing, compare air ambulance prices from other air operators
                across the world.
              </div>
              <div class="text-[#7A7A7A] text-[16px]">
                We are a worldwide air ambulance company with emergency medical
                transport experience. Through our international air ambulance
                service, we can arrange quick, efficient medical evacuation
                flights worldwide to ensure you get where you need to, safely
                and quickly.
              </div>
            </div>
          </div>

          <div class=""></div>
        </div>

        <div className="w-[70%] mx-[15%] sm:w-[90%] sm:mx-[5%] lg:w-[80%] lg:mx-[10%]  flex flex-col  mt-[50px] lg:mt-[10px] items-center gap-[80px] xs:gap-[100px]">
          <div className="w-full flex flex-row  justify-between lg:gap-[60px] items-center sm:flex-col xl:gap-[50px]">
            <div className="flex flex-row gap-[30px]">
              <Image
                className="max-w-[50px] max-h-[50px] sm:max-w-[40px] sm:max-h-[40px]"
                src="/images/rapid_time.png"
                width={50}
                height={50}
                alt="rapid Time"
                layout="contain"
              />
              <div lass="w-full flex  flex-col items-start sm:gap-[10px]">
                <p className="font-bold leading-[32px] text-[20px]">
                  Rapid Response Time
                </p>
                <p className="text-[#646464] leading-[26px] text-[16px] font-normal">
                  QwikLif prides itself on its quick response times, ensuring
                  that
                  <br />
                  critical medical transport is initiated promptly.
                </p>
              </div>
            </div>
            <div className="flex flex-row  gap-[30px]">
              <Image
                className="max-w-[50px] max-h-[50px] sm:max-w-[40px] sm:max-h-[40px]"
                src="/images/saftey_first.png"
                width={50}
                height={50}
                alt="Safety First"
                layout="contain"
              />
              <div lass="w-full flex  flex-col items-start">
                <p className="font-bold leading-[32px] text-[20px]">
                  Safety First
                </p>
                <p className="text-[#646464] leading-[26px] text-[16px] font-normal">
                  Qwiklif pilots undergo rigorous training, and our aircraft are
                  regularly
                  <br />
                  maintained to meet or exceed industry safety standards.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row  justify-between lg:gap-[60px] items-center sm:flex-col xl:gap-[50px]">
            <div className="flex flex-row gap-[30px]">
              <Image
                className="max-w-[50px] max-h-[50px] sm:max-w-[40px] sm:max-h-[40px]"
                src="/images/state_art.png"
                width={50}
                height={50}
                alt="State Art"
              />
              <div lass="w-full flex  flex-col items-start sm:gap-[10px]">
                <p className="font-bold leading-[32px] text-[20px]">
                  State-of-the-Art Equipment
                </p>
                <p className="text-[#646464] leading-[26px] text-[16px] font-normal">
                  Our air ambulances are equipped with cutting-edge medical
                  <br /> technology to provide advanced life support, ensuring
                  the best
                  <br /> possible care during transport.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-[30px]">
              <Image
                className="max-w-[50px] max-h-[50px] sm:max-w-[40px] sm:max-h-[40px]"
                src="/images/patient.png"
                width={50}
                height={50}
                alt="rapid Time"
              />
              <div lass="w-full flex  flex-col items-start">
                <p className="font-bold leading-[32px] text-[20px]">
                  Patient-Centric Approach
                </p>
                <p className="text-[#646464] leading-[26px] text-[16px] font-normal">
                  We prioritize patient comfort and well-being, with a focus on
                  providing
                  <br /> a stress-free and comfortable experience for patients
                  and their
                  <br /> families.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="services" className="mt-[100px]">
          <h2 className="text-[#111111] font-bold text-[32px] leading-[34px] text-center">
            Our Air Ambulance Services
          </h2>
          <div className="flex justify-center items-center mt-[20px] mb-[30px]">
            <hr className="bg-[#11B6E3] h-[4px] w-[45px]" />
          </div>
          <div class="">
            <div className="w-[90%] mx-[5%] sm:w-full sm:mx-0">
              <Slider {...settings}>
                {services.map((item, index) => {
                  return (
                    <div
                      key={index}
                      class="grid grid-cols-3  gap-10 px-[4px] mb-[30px] mt-[20px] sm:grid-cols-1 sm:gap-4 sm:px-5"
                    >
                      <Servicecard
                        title={item.title}
                        description={item.description}
                        imageUrl={item.image}
                        index={index}
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>

        <div id="services" className="mt-[100px] w-full ">
          <h2 className="text-[#111111] font-bold text-[32px] leading-[34px] text-center">
            How to Book Air Ambulance
          </h2>
          <p className="text-[#413D3D] leading-[26px] text-[18px] font-normal text-center mt-[30px]">
            Here’s simple step to Book Air Ambulance
            <br /> Call now to our professional doctors to discuss patient
            medical condition
          </p>
          <div
            className={`w-[90%] mx-[5%] h-[550px] sm:h-[250px] lg:h-[330px] xl:h-[460px] ${styles.boxShadow} mt-[60px]`}
          >
            <div className="h-[60px] flex flex-row w-full md:flex-col sm:flex-col">
              {bookTypes.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`w-[50%] flex justify-center items-center h-full sm:w-[100%] md:w-[100%] ${
                      SelectedIndex === index
                        ? 'bg-[#14A4D4]'
                        : 'bg-[#F0F0F09C]'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedIndex(index);
                    }}
                  >
                    <div className="flex flex-row items-center justify-start gap-[10px] sm:flex-col">
                      {SelectedIndex === index ? (
                        <div>
                          <Image
                            className="w-[40px] h-[40px] sm:w-[20px] sm:h-[20px]"
                            src="/images/small_plane.svg"
                            width={40}
                            height={40}
                            alt="rapid Time"
                            layout="contain"
                            class="block sm:hidden"
                          />
                        </div>
                      ) : (
                        <div>
                          <Image
                            className="w-[40px] h-[40px] sm:w-[20px] sm:h-[20px]"
                            src="/images/small_plane.svg"
                            width={40}
                            height={40}
                            alt="rapid Time"
                            layout="contain"
                            class="block sm:hidden"
                          />
                        </div>
                      )}
                      <p
                        className={`font-normal text-[16px] leading-[26px] ${
                          SelectedIndex === index
                            ? 'text-[#fff]'
                            : 'text-[#000]'
                        }`}
                      >
                        {item}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {SelectedIndex === 0 ? (
              <Image
                className="w-full max-h-[490px] sm:h-[240px] lg:h-[320px] xl:h-[400px]"
                src="/images/ablance.png"
                width={40}
                height={40}
                alt="rapid Time"
                layout="responsive"
              />
            ) : (
              <Image
                className="w-full max-h-[490px] sm:h-[240px] lg:h-[320px] xl:h-[400px]"
                src="/images/commericial.png"
                width={40}
                height={40}
                alt="Another Image"
                layout="responsive"
              />
            )}
          </div>

          <div className="px-[50px] sm:px-[25px]">
            <div className="flex justify-around sm:w-full  sm:flex-col mt-10 mb-10 py-10">
              <div className="">
                <h2 className="text-[#000] font-bold text-[32px] leading-[34px] text-center">
                  Why choose Qwiklif?
                </h2>
                <div className="sm:flex justify-center">
                  <hr className="bg-[#11B6E3] h-[6px] w-[60px] mt-[20px] rounded-sm" />
                </div>
              </div>

              <div className="border-l-[2px] border-l-solid border-l-[#396CF0] sm:mt-5  sm:border-l-[3px]">
                <p className="text-[#646464] text-[18px] ml-5   leading-[32px] ml-[10px] lg:ml-0 font-medium sm:ml-3">
                  Fly Fast and Safe with Qwiklif Air Ambulance We have access to
                  global hospitals including finest
                  <br />
                  medic and eminent surgeons across the globe.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-10  gap-5 sm:grid-cols-1 items-start sm:items-center sm:flex justify-center sm:flex-col">
              <div className="col-span-3  flex flex-col mb-5">
                <button
                  className={`w-[410px] h-[80px] px-[30px] bg-[#F0F4FF] mb-5 cursor-pointer flex items-center justify-between hover:bg-[#396CF0] rounded sm:w-[280px] sm:justify-between  ${
                    activeTab === 1 ? styles.aboutPageMenuActive : ''
                  }`}
                  onClick={() => setActiveTab(1)}
                >
                  <div className="bg-[#396CF0] rounded-full w-[55px] h-[55px] flex justify-center">
                    <Image src={aeroIcon} height={40} width={35} />
                  </div>
                  <div className="font-semibold text-[20px] hover:text-[#fff] sm:flex justify-end">
                    Biggest Fleet Network
                  </div>
                </button>

                <button
                  className={`w-[410px] h-[80px] px-[30px] bg-[#F0F4FF] mb-5 cursor-pointer flex items-center justify-between hover:bg-[#396CF0] rounded sm:w-[280px] sm:justify-between sm:px-[10px] ${
                    activeTab === 2 ? styles.aboutPageMenuActive : ''
                  }`}
                  onClick={() => setActiveTab(2)}
                >
                  <div className="bg-[#396CF0] rounded-full w-[50px] h-[50px] flex justify-center items-center">
                    <Image src={DoctorIcon} width={30} height={25} />
                  </div>
                  <div className="font-semibold text-[20px] hover:text-[#fff]">
                    24X7 Doctors On Board
                  </div>
                </button>

                <button
                  className={`w-[410px] h-[80px] px-[30px] bg-[#F0F4FF] mb-5 cursor-pointer flex items-center justify-between hover:bg-[#396CF0] rounded sm:w-[280px] sm:justify-between sm:px-[10px] ${
                    activeTab === 3 ? styles.aboutPageMenuActive : ''
                  }`}
                  onClick={() => setActiveTab(3)}
                >
                  {' '}
                  <div className="bg-[#396CF0] rounded-full w-[50px] h-[50px] flex justify-center items-center">
                    <Image src={GlobalIcon} width={35} height={25} />
                  </div>
                  <div className="font-semibold text-[20px] hover:text-[#fff]">
                    Global Coverage
                  </div>
                </button>

                <button
                  className={`w-[410px] h-[80px] px-[30px] bg-[#F0F4FF] mb-5 cursor-pointer flex items-center justify-between hover:bg-[#396CF0] rounded sm:w-[280px] sm:justify-between sm:px-[10px] ${
                    activeTab === 4 ? styles.aboutPageMenuActive : ''
                  }`}
                  onClick={() => setActiveTab(4)}
                >
                  {' '}
                  <div className="bg-[#396CF0] rounded-full w-[50px] h-[50px] flex justify-center items-center">
                    <Image src={CostEffective} width={35} height={25} />
                  </div>
                  <div className="font-semibold text-[20px] hover:text-[#fff]">
                    Cost-Effective Solution
                  </div>
                </button>
              </div>
              <div className="col-span-7">
                {activeTab === 1 && (
                  <SelectionComponent
                    img={Biggest_fleet}
                    title="Biggest Fleet Network"
                    descripation="With the largest fleet, QwikLif can respond to emergencies quickly. Multiple aircraft options are available to meet various medical requirements, providing an ideal option for all situations."
                  />
                )}
                {activeTab === 2 && (
                  <SelectionComponent
                    img={CostEffect}
                    title="24x7 Doctors on Board"
                    descripation="Skilled doctors accompany every flight, providing real-time medical support throughout the journey. Immediate access to medical expertise ensures optimal care, enhancing the chances of a positive outcome."
                  />
                )}
                {activeTab === 3 && (
                  <SelectionComponent
                    img={DoctorOnboard}
                    title="Global Coverage"
                    descripation="We provide seamless global coverage, connecting you to the best medical facilities worldwide.Whether you're in a bustling city or a remote area, our reach extends to every corner, making quality healthcare accessible wherever you are."
                  />
                )}
                {activeTab === 4 && (
                  <SelectionComponent
                    img={GlobalCoverage}
                    title="Cost-Effective Solutions"
                    descripation="We are committed to providing cost-effective air ambulance solutions without compromising on the standard of care. We suggest different modes of transfers like commercial stretchers and other customised transfer plans for making your medical flight cost effective."
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className={`${styles.lower_plane} h-[600px] w-full mt-[80px] relative`}
          >
            <div className="flex flex-col items-center w-full">
              <h1 className="font-semibold text-[37px] leading-[48px] text-center text-white mt-[30px]">
                Fastest and best medical care
              </h1>
              <p className="font-medium text-[21px]   text-center text-white mt-[30px] sm:px-[10px]">
                Time is precious, especially during emergencies. Our air
                ambulances are not just vehicles; they are a beacon of hope on
                the
                <br />
                fastest route to medical assistance. We pride ourselves on a
                lightning-quick response that bridges the gap between distress
                and relief.
              </p>
              <button className="w-[300px] h-[60px] bg-transparent border-solid border-[1px] border-[#FFFFFF] rounded-[4px] mt-[60px] sm:mt-[30px] text-center text-[16px] leading-[26px] font-bold text-white  hover:bg-rgb(255 255 255)">
                Make an Appointment
              </button>
            </div>
            <div
              className={`${styles.lowerShadow} w-[90%] mx-[5%] h-[360px] sm:h-[1090px] absolute bg-white bottom-[-200px] items-center sm:bottom-[-960px] flex justify-evenly flex-row sm:flex-wrap sm:justify-center  sm:flex-col sm:items-center`}
            >
              {/* <Image
                className="max-w-[350px] max-h-[250px] mt-[60px] sm:mt-0"
                src="/images/fourfifty_plus.png"
                width={50}
                height={40}
                alt="rapid Time"
                layout="responsive"
              /> */}
              <div class="flex flex-col items-center">
                <Image src={MiniAeroplane} height={100} width={100} />
                <div className="font-bold text-[50px]">
                  <CountUp start={1} end={450} duration={5} />+
                </div>
                <div className="font-semibold text-black">Air Transfer</div>
              </div>

              <div class="flex flex-col items-center">
                <Image src={Miniaircraft} width={100} height={100} />
                <div className="font-bold text-[50px]">
                  <CountUp start={1} end={25} duration={8} />+
                </div>
                <div className="font-semibold text-black font-medium">
                  No of Fleet
                </div>
              </div>

              <div class="flex flex-col items-center">
                <Image src={Doctor} width={100} height={100} />
                <div className="font-bold text-[50px]">
                  <CountUp start={1} end={15} duration={10} />+
                </div>
                <div className="font-semibold text-black">Doctors</div>
              </div>
              <div class="flex flex-col items-center">
                <Image src={Miniglobal} width={100} height={100} />
                <div className="font-bold text-[50px]">
                  <CountUp start={1} end={7000} duration={5} /> +
                </div>
                <div className="font-semibold text-black">
                  Global Affiliation
                </div>
              </div>
            </div>
          </div>

          <div id="services" className="mt-[290px] sm:mt-[1090px]">
            <h1 className="text-[#11B6E3] font-medium text-[16px] leading-[26px] text-center mb-[10px]">
              Latest News
            </h1>
            <h2 className="text-[#111111] font-bold text-[32px] leading-[34px] text-center">
              Get Every News & Updates
            </h2>
            <div className="flex justify-center items-center mt-[20px] mb-[30px]">
              <hr className="bg-[#11B6E3] h-[4px] w-[45px]" />
            </div>
            <div class="">
              <div className="w-[90%] mx-[5%] sm:w-full sm:mx-0">
                <Slider {...settings}>
                  {newsUpdates.map((item, index) => {
                    return (
                      <div
                        key={index}
                        class="grid gap-4 grid-cols-3 px-[4px] mb-[30px] mt-[20px] sm:grid-cols-1 sm:gap-4 sm:px-5"
                      >
                        <NewsUpdates
                          title={item.title}
                          description={item.description}
                          imageUrl={item.image}
                          index={index}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
          {/* 
          <div id="services" className="mt-[90px]">
            <h2 className="text-[#111111] font-bold text-[32px] leading-[34px] text-center">
              Here's what our satisfied clients are saying
            </h2>
            <div className="flex justify-center items-center mt-[20px] mb-[30px]">
              <hr className="bg-[#11B6E3] h-[4px] w-[45px]" />
            </div>
            <div className="bg-[#11B6E3] h-[650px] sm:h-[500px] w-full flex flex-row justify-center items-center">
              <div className="flex flex-col items-center w-[32%] mx-[34%] gap-[30px] sm:w-[60%] sm:mx-[20%]">
                <p className="font-normal text-[16px] leading-[26px] text-white text-center">
                  Recently experienced Air Ambulance service to transfer my
                  relative from London to Delhi , and I can't thank them enough.
                  From the first call, their professionalism and prompt response
                  were outstanding. The medical team onboard was not only highly
                  skilled but also caring. They used advanced medical equipment
                  and doctors were providing reassurance throughout the journey.
                  QwikLif's worldwide coverage and seamless coordination make
                  them my go-to for emergency medical transportation. Highly
                  recommend!
                </p>
                <h1 className="text-[#FFFFFF] font-bold text-[22px] leading-[28px] text-center">
                  - Anshul
                </h1>
              </div>
            </div>
          </div> */}

          <div
            style={{
              background: `#007BFF url("/images/honeycomb.png")`,
            }}
          >
            <Review />
          </div>

          <div className="w-[90%] mx-[5%] flex flex-col items-start mt-[90px]">
            <div className="flex flex-col items-start w-full sm:items-center ">
              <h1 className="text-[#111111] font-bold text-[32px] leading-[34px] text-center mb-[20px]">
                Why you should choose our services
              </h1>
              <h2 className="text-[#646464] font-medium text-[16px] leading-[26px] text-center sm:mx-[5%]">
                Do you have questions about flying privately? Wondering more
                about Whether you’re flying in a small, medium, or large group,
              </h2>
              <div className="flex justify-center items-center mt-[20px] mb-[30px] sm:flex-row sm:w-full">
                <hr className="bg-[#11B6E3] h-[4px] w-[45px]" />
              </div>
            </div>

            <div className="flex-col items-start w-full mt-[40px] flex gap-[10px]">
              {collapsable.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex-col items-start w-full h-auto"
                  >
                    <div
                      className={`w-full flex-row justify-between items-center h-[90px] flex ${
                        SelectedCollapseIndex != index
                          ? 'bg-[#F1F7FA]'
                          : 'bg-[#11B6E3]'
                      }`}
                    >
                      <h4
                        className={`ml-[30px] ${
                          SelectedCollapseIndex === index
                            ? 'text-[#FFFFFF]'
                            : 'text-[#111111]'
                        } font-medium leading-[20px] text-[20px]`}
                      >
                        {item.header}
                      </h4>
                      <div
                        className={`flex flex-row justify-start items-center mr-[30px]`}
                      >
                        {SelectedCollapseIndex != index ? (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedCollapseIndex(index);
                            }}
                          >
                            <Image
                              className="w-[30px] h-[30px]"
                              src="/images/plus_icon.png"
                              width={35}
                              height={15}
                              alt="rapid Time"
                              layout="contain"
                            />
                          </button>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedCollapseIndex(-1);
                            }}
                          >
                            <Image
                              className="w-[30px] h-[30px]"
                              src="/images/minus_icon.png"
                              width={40}
                              height={40}
                              alt="rapid Time"
                              layout="contain"
                            />
                          </button>
                        )}
                      </div>
                    </div>

                    {SelectedCollapseIndex === index ? (
                      <div className="h-[180px] sm:h-[290px] bg-[#FBFBFB] w-full">
                        <p className="w-[90%] mx-[5%] text-[#7A7A7A] text-[16px] font-normal leading-[26px] pt-[50px] sm:pt-[30px]">
                          {item.description}
                        </p>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={`${styles.gray_plane} h-[900px] px-[100px] sm:h-[1300px] w-full mt-[90px] flex sm:flex-col items-center  grid grid-cols-2 gap-3 sm:grid-cols-1 `}
          >
            <div className="flex items-start flex-col">
              <div class="text-[#a9b5bf] text-[16px] font-semibold">
                QwikLif Air Ambulance
              </div>
              <div class="font-semibold text-[32px] text-[#fff] ">
                Your Trusted Global Air Ambulance <br /> Provider
              </div>
              {tasktab.map((data, index) => {
                return (
                  <div key={index} className="mb-3">
                    <Trusted
                      img={data.img}
                      title={data.title}
                      descripation={data.description}
                    />
                  </div>
                );
              })}
            </div>

            <div className="w-[480px] sm:max-w-[90%] sm:ml-[5%] sm:mr-[5%] bg-white h-[620px] flex flex-col items-start shadow-2xl rounded-lg">
              <div className="w-[90%] mx-[5%] my-[5%]">
                <div className="flex flex-col items-start sm:w-full sm:items-center ">
                  <h2 className="text-[#000] font-bold text-[32px] leading-[34px] text-center">
                    Get Quote Now
                  </h2>
                  <hr className="bg-[#11B6E3] h-[4px] w-[45px] mt-[20px]" />
                </div>

                <form
                  onSubmit={handleSubmit}
                  className={`mt-[30px] ${styles.form}`}
                >
                  <div className="flex flex-col  w-[90%] mx-[5%] gap-[30px] ">
                    <input
                      type="text"
                      value=""
                      placeholder="From *"
                      // className="border-[#DEE5E9] border-[1px] h-[50px] outline-0 rounded-md"
                      class=" h-[50px]  rounded-md  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                    />

                    <input
                      type="text"
                      value=""
                      placeholder="To *"
                      className=" rounded-md  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <div className="flex flex-row justify-between w-full ">
                      <input
                        type="text"
                        value=""
                        placeholder="Phone *"
                        className="h-[50px] w-[40%] rounded-md  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                      />
                      <input
                        type="text"
                        value=""
                        placeholder="E-mail*"
                        className=" h-[50px] w-[50%] rounded-md  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                      />
                    </div>

                    <div className="flex flex-row justify-between w-full ">
                      {/* <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        placeholder="Phone *"
                        className=" h-[50px] w-[50%] rounded-md  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                      /> */}
                      <CustomDatePicker className=" h-[50px] w-[25%] rounded-md  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" />
                      <input
                        type="text"
                        value=""
                        placeholder="Time*"
                        className=" h-[50px]  w-[40%]  rounded-md  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                      />
                    </div>

                    <button
                      className={`${styles.boxShado} w-full h-[50px] bg-[#11B6E3] rounded-[4px] mt-[25px] font-semibold text-[15px] leading-[22.5px] text-white hover:bg-[#3c70fa] shadow-lg shadow-[#11B6E3]`}
                    >
                      Get Quote
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
