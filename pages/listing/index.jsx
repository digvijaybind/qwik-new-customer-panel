'use client';
import { Shadow } from '@/components/Utils/utils';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Landing from '../../public/images/Searchlanding.svg';
import axios from 'axios';
import Loader from '@/components/Utils/Loader';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useSearchParams } from 'next/navigation';
import UpdatedDedicated from '@/components/dedicatedCard/UpdatedDedicated';
import UpdateCommericial from '@/components/commercialCard/UpdateCommericial';

const Listing = ({ id }) => {
  const searchParams = useSearchParams();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const convertTime = (data) => {
    const hours = Math.floor(data);
    const minutes = Math.round((data - hours) * 60);
    const result = `${hours}h ${minutes}m`;
    return result;
  };
  const [formData, setFormData] = useState({
    originLocationCode: '',
    destinationLocationCode: '',
    departureDate: '',
    pax: 1,
    countryCode: '',
    mobile: '',
    max: 5,
  });
  const [aircraftData, setAircraftData] = useState({});
  const [departureLocation, setDepartureLocation] = useState();
  const [destinationLocation, setDestinationLocation] = useState();
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const [aircraftDataLoading, setAircraftDataLoading] = useState(false);
  const [aircraftCommercialDataLoading, setCommercialAircraftDataLoading] =
    useState(false);
  const [CharteredData, setcharteredData] = useState({});
  const [Charteredepature, setcharteredDepature] = useState('BOM');
  const [ChartereArrival, setchartereArrival] = useState('DXB');
  const [ChartereId, setchartereId] = useState();
  const [CommericialId, setCommericialId] = useState();
  useEffect(() => {
    if (
      searchParams.has('originLocationCode') &&
      searchParams.has('destinationLocationCode')
    ) {
      const formDetails = {
        originLocationCode: searchParams.get('originLocationCode'),
        destinationLocationCode: searchParams.get('destinationLocationCode'),
        departureDate: searchParams.get('departureDate'),
        pax: searchParams.get('pax'),
        countryCode: searchParams.get('countryCode'),
        mobile: searchParams.get('mobile'),
        max: 5,
      };
      setFormData(formDetails);
      searchFlights(formDetails);
    }
  }, [searchParams]);



  // const searchFlights = (data) => {
  //   setAircraftDataLoading(true);
  //   setCommercialAircraftDataLoading(true);
  //   const headers = {
  //     'Content-Type': 'application/json',
  //   };

  //   axios(`http://localhost:8000/customer/dedicatedSearch`, {
  //     method: 'POST',
  //     data: data,
  //     headers: headers,
  //   })
  //     .then((response) => {
  //       console.log('response dedicated 97', response);
  //       setcharteredData(response.data);
  //       response.data.forEach((data) => {
  //         setcharteredDepature(data.aviapages?.Response.from);
  //         setchartereArrival(data.aviapages?.Response.to);
  //         setchartereId();
  //       });
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     })
  //     .finally(() => {
  //       setAircraftDataLoading(false);
  //     });

  //   axios(`http://localhost:8000/customer/commericialSearch`, {
  //     method: 'POST',
  //     data: data,
  //     headers: headers,
  //   })
  //     .then((response) => {
  //       console.log('Response:', response.data);
  //       setCommericialId(response.data.aircraftId);
  //       setDepartureLocation(data?.originLocationCode);
  //       setDestinationLocation(data?.destinationLocationCode);
  //       setAircraftData(response.ResponseData);
  //       setSelectedCurrency('EUR');
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     })
  //     .finally(() => {
  //       setCommercialAircraftDataLoading(false);
  //     });
  // };

  const searchFlights = async (data) => {
    setAircraftDataLoading(true);
    setCommercialAircraftDataLoading(true);
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const dedicatedResponse = await axios.post(
        'http://localhost:8000/customer/dedicatedSearch',
        data,
        { headers }
      );
      console.log('Response dedicated:', dedicatedResponse.data);
      setCharteredData(dedicatedResponse.data);
      dedicatedResponse.data.forEach((data) => {
        setCharteredDepature(data.aviapages?.Response.from);
        setCharteredArrival(data.aviapages?.Response.to);
        setCharteredId();
      });
    } catch (error) {
      console.error('Error in dedicated search:', error);
    } finally {
      setAircraftDataLoading(false);
    }

    try {
      const commercialResponse = await axios.post(
        'http://localhost:8000/customer/commericialSearch',
        data,
        { headers }
      );
      console.log('Response commercial:', commercialResponse.data);
      setCommericialId(commercialResponse.data.aircraftId);
      setDepartureLocation(data?.originLocationCode);
      setDestinationLocation(data?.destinationLocationCode);
      setAircraftData(commercialResponse.data.ResponseData);
      setSelectedCurrency('EUR');
    } catch (error) {
      console.error('Error in commercial search:', error);
    } finally {
      setCommercialAircraftDataLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchFlights(formData);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };
  const handleInputChange = (field, e) => {
    const { name, value } = e.target;
    console.log('name, value', name, value);
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  const handleCountryCodeChange = (event) => {
    const countryCodeValue = event.target.value;
    handleInputChange('countryCode', countryCodeValue);
  };

  console.log('aircraftData', aircraftData);
  console.log('CharteredData', CharteredData);
  console.log('Charteredepature', Charteredepature);
  console.log('ChartereArrival', ChartereArrival);
  console.log('CharteredData', CharteredData);
  console.log('CharteredData', CharteredData);
  console.log('CommericialId', CommericialId);
  console.log('departureLocation', departureLocation);
  console.log('destinationLocation', destinationLocation);
  console.log('aircraftData', aircraftData);

  return (
    <div className="bg-[#F4F9FD] flex flex-col items-center mb-8 font-sans">
      <Image src={Landing} height={420} width={1874} alt="top background" />
      <SearchBar
        className="bottom-10"
        isMobile={isMobile}
        formData={formData}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      <div className="sm:px-5 px-36 w-full sm:mt-5">
        <Shadow
          classname={`w-full font-bold mb-8 text-center p-[10px] grid grid-cols-2 sm:grid-cols-1 sm:grid-rows-2 font-sans`}
        >
          <button
            className={`border-r-2 sm:border-r-0 font-extrabold cursor-pointer hover:gray col-span-1 `}
          >
            COMMERCIAL
          </button>
          <button className="font-extrabold cursor-pointer hover:opacity-100 col-span-1 sm:border-t-2 ">
            CHARTERED
          </button>
        </Shadow>
        <div className="flex sm:flex-col gap-8 sm:gap-5">
          <div
            className={`grid grid-cols-1 gap-8 w-full h-fit sm:w-full ${
              isMobile &&
              !(
                aircraftDataLoading ||
                aircraftData?.ResponseData?.AirCraftDatawithNotechStop?.length >
                  0 ||
                aircraftData?.ResponseData?.AirCraftDatawithtechStop?.length > 0
              )
                ? 'hidden'
                : ''
            }`}
          >
            {aircraftCommercialDataLoading ? (
              <div className="flex justify-center items-center h-fit py-10">
                <Loader className="h-6 w-6" />
              </div>
            ) : (
              <>
                {aircraftData?.ResponseData?.AirCraftDatawithNotechStop?.map(
                  (data, index) => {
                    console.log('data', data);
                    return (
                      <UpdateCommericial
                        key={'airacraft-list-item' + index}
                        aircraftData={data}
                        availticket={
                          aircraftData?.ResponseData?.TicketAvailability
                        }
                        selectedCurrency={selectedCurrency}
                        handleCurrencyChange={handleCurrencyChange}
                        departureLocation={departureLocation}
                        destinationLocation={destinationLocation}
                        CommericialId={CommericialId}
                      />
                    );
                  }
                )}
                {(!aircraftData?.ResponseData?.AirCraftDatawithNotechStop ||
                  aircraftData?.ResponseData?.AirCraftDatawithNotechStop
                    ?.length === 0) &&
                  aircraftData?.ResponseData?.AirCraftDatawithtechStop?.map(
                    (data, index) => {
                      return (
                        <UpdateCommericial
                          key={'airacraft-list-item' + index}
                          aircraftData={data}
                          availticket={
                            aircraftData?.ResponseData?.TicketAvailability
                          }
                          selectedCurrency={selectedCurrency}
                          handleCurrencyChange={handleCurrencyChange}
                          departureLocation={departureLocation}
                          destinationLocation={destinationLocation}
                          CommericialId={CommericialId}
                        />
                      );
                    }
                  )}
              </>
            )}
          </div>
          <div className="grid grid-cols-1 gap-8 w-full h-fit">
            {aircraftDataLoading ? (
              <div className="flex justify-center items-center py-10 h-fit">
                <Loader className="h-6 w-6" />
              </div>
            ) : (
              <>
                {CharteredData?.responseObj?.nearestOperatorWithPrice?.map(
                  (data, index) => {
                    return (
                      <UpdatedDedicated
                        key={'airacraft-list-item' + index}
                        charteredData={data}
                        AircraftType={data.operator.Aircraft_type}
                        selectedCurrency={selectedCurrency}
                        handleCurrencyChange={handleCurrencyChange}
                        charteredepature={Charteredepature}
                        chartereArrival={ChartereArrival}
                        chartereId={CharteredData.aircraftId}
                      />
                    );
                  }
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
