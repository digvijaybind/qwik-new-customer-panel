'use client';

import styles from './page.module.css';
import { Shadow } from '@/components/Utils/utils';
import { DateInput, TextInput } from '@/components/Form/input';
import Planedesc from '../../components/Planedesc/planedesc';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useData } from '../../context/DataContext';
import { Switch } from '@mui/material';
import Search from '../../public/images/search-white.svg';
import CommercialCard from '@/components/commercialCard/CommercialCard';
import Image from 'next/image';
import Landing from '../../public/images/Searchlanding.svg';
import axios from 'axios';
import moment from 'moment-timezone';
import DedicatedCard from '@/components/dedicatedCard/DedicatedCard';
import swal from 'sweetalert';
import CustomDatePicker from '@/components/date/CustomDatePicker';
import AircraftDetailsCard from '@/components/listing/AircraftDetailsCard';
import Loader from '@/components/Utils/Loader';
import countries from '../../db/country.json';
import { TiUserOutline } from 'react-icons/ti';
import { RiPriceTag3Line } from 'react-icons/ri';
import Link from 'next/link';
import { HiOutlineGlobeAlt } from 'react-icons/hi2';
import { IoAirplaneSharp } from 'react-icons/io5';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useSearchParams } from 'next/navigation';

const Listing = ({ id }) => {
  const searchParams = useSearchParams();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000); // Change threshold as needed
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

  const [formData, setFormData] = useState({
    originLocationCode: '',
    destinationLocationCode: '',
    departureDate: '',
    pax: 1,
    countryCode: '',
    mobile: '',
    max: 5,
  });
  const [aircraftData, setAircraftData] = useState({
    ResponseData: {
      AirCraftDatawithNotechStop: [
        {
          aircraft: {
            type: 'flight-offer',
            id: '1',
            source: 'GDS',
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: '2024-04-07',
            lastTicketingDateTime: '2024-04-07',
            numberOfBookableSeats: 9,
            itineraries: [
              {
                duration: 'PT2H55M',
                segments: [
                  {
                    departure: {
                      iataCode: 'BOM',
                      terminal: '2',
                      at: '2024-04-07T20:30:00',
                    },
                    arrival: {
                      iataCode: 'DXB',
                      terminal: '1',
                      at: '2024-04-07T21:55:00',
                    },
                    carrierCode: 'AI',
                    number: '983',
                    aircraft: {
                      code: '788',
                    },
                    operating: {
                      carrierCode: 'AI',
                    },
                    duration: 'PT2H55M',
                    id: '11',
                    numberOfStops: 0,
                    blacklistedInEU: false,
                  },
                ],
              },
            ],
            price: {
              currency: 'EUR',
              total: '133.25',
              base: '102.00',
              fees: [
                {
                  amount: '0.00',
                  type: 'SUPPLIER',
                },
                {
                  amount: '0.00',
                  type: 'TICKETING',
                },
              ],
              grandTotal: '133.25',
            },
            pricingOptions: {
              fareType: ['PUBLISHED'],
              includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ['AI'],
            travelerPricings: [
              {
                travelerId: '1',
                fareOption: 'STANDARD',
                travelerType: 'ADULT',
                price: {
                  currency: 'EUR',
                  total: '133.25',
                  base: '102.00',
                },
                fareDetailsBySegment: [
                  {
                    segmentId: '11',
                    cabin: 'ECONOMY',
                    fareBasis: 'SLOWBMAE',
                    class: 'S',
                    includedCheckedBags: {
                      weight: 30,
                      weightUnit: 'KG',
                    },
                  },
                ],
              },
            ],
          },
          price: {
            currency: 'EUR',
            total: '133.25',
            base: '102.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '133.25',
            totalPrice: 1539.8369999999998,
          },
        },
        {
          aircraft: {
            type: 'flight-offer',
            id: '3',
            source: 'GDS',
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: '2024-04-07',
            lastTicketingDateTime: '2024-04-07',
            numberOfBookableSeats: 9,
            itineraries: [
              {
                duration: 'PT3H',
                segments: [
                  {
                    departure: {
                      iataCode: 'BOM',
                      terminal: '2',
                      at: '2024-04-07T04:30:00',
                    },
                    arrival: {
                      iataCode: 'DXB',
                      terminal: '3',
                      at: '2024-04-07T06:00:00',
                    },
                    carrierCode: 'EK',
                    number: '501',
                    aircraft: {
                      code: '388',
                    },
                    operating: {
                      carrierCode: 'EK',
                    },
                    duration: 'PT3H',
                    id: '1',
                    numberOfStops: 0,
                    blacklistedInEU: false,
                  },
                ],
              },
            ],
            price: {
              currency: 'EUR',
              total: '168.54',
              base: '90.00',
              fees: [
                {
                  amount: '0.00',
                  type: 'SUPPLIER',
                },
                {
                  amount: '0.00',
                  type: 'TICKETING',
                },
              ],
              grandTotal: '168.54',
            },
            pricingOptions: {
              fareType: ['PUBLISHED'],
              includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ['EK'],
            travelerPricings: [
              {
                travelerId: '1',
                fareOption: 'STANDARD',
                travelerType: 'ADULT',
                price: {
                  currency: 'EUR',
                  total: '168.54',
                  base: '90.00',
                },
                fareDetailsBySegment: [
                  {
                    segmentId: '1',
                    cabin: 'ECONOMY',
                    fareBasis: 'VDIORIN1',
                    brandedFare: 'ECOSPCL',
                    brandedFareLabel: 'ECO SPECIAL',
                    class: 'V',
                    includedCheckedBags: {
                      weight: 25,
                      weightUnit: 'KG',
                    },
                    amenities: [
                      {
                        description: 'PRE RESERVED SEAT ASSIGNMENT',
                        isChargeable: true,
                        amenityType: 'PRE_RESERVED_SEAT',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: 'BEVERAGE',
                        isChargeable: false,
                        amenityType: 'MEAL',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: 'MEAL VOUCHER',
                        isChargeable: false,
                        amenityType: 'MEAL',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: '15 PERCENT MILES EARNED',
                        isChargeable: false,
                        amenityType: 'BRANDED_FARES',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: 'ENTERTAINMENT',
                        isChargeable: false,
                        amenityType: 'ENTERTAINMENT',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          price: {
            currency: 'EUR',
            total: '168.54',
            base: '90.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '168.54',
            totalPrice: 1947.64824,
          },
        },
        {
          aircraft: {
            type: 'flight-offer',
            id: '4',
            source: 'GDS',
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: '2024-04-07',
            lastTicketingDateTime: '2024-04-07',
            numberOfBookableSeats: 9,
            itineraries: [
              {
                duration: 'PT3H',
                segments: [
                  {
                    departure: {
                      iataCode: 'BOM',
                      terminal: '2',
                      at: '2024-04-07T10:10:00',
                    },
                    arrival: {
                      iataCode: 'DXB',
                      terminal: '3',
                      at: '2024-04-07T11:40:00',
                    },
                    carrierCode: 'EK',
                    number: '505',
                    aircraft: {
                      code: '77W',
                    },
                    operating: {
                      carrierCode: 'EK',
                    },
                    duration: 'PT3H',
                    id: '2',
                    numberOfStops: 0,
                    blacklistedInEU: false,
                  },
                ],
              },
            ],
            price: {
              currency: 'EUR',
              total: '168.54',
              base: '90.00',
              fees: [
                {
                  amount: '0.00',
                  type: 'SUPPLIER',
                },
                {
                  amount: '0.00',
                  type: 'TICKETING',
                },
              ],
              grandTotal: '168.54',
            },
            pricingOptions: {
              fareType: ['PUBLISHED'],
              includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ['EK'],
            travelerPricings: [
              {
                travelerId: '1',
                fareOption: 'STANDARD',
                travelerType: 'ADULT',
                price: {
                  currency: 'EUR',
                  total: '168.54',
                  base: '90.00',
                },
                fareDetailsBySegment: [
                  {
                    segmentId: '2',
                    cabin: 'ECONOMY',
                    fareBasis: 'VDIORIN1',
                    brandedFare: 'ECOSPCL',
                    brandedFareLabel: 'ECO SPECIAL',
                    class: 'V',
                    includedCheckedBags: {
                      weight: 25,
                      weightUnit: 'KG',
                    },
                    amenities: [
                      {
                        description: 'PRE RESERVED SEAT ASSIGNMENT',
                        isChargeable: true,
                        amenityType: 'PRE_RESERVED_SEAT',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: 'BEVERAGE',
                        isChargeable: false,
                        amenityType: 'MEAL',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: 'MEAL VOUCHER',
                        isChargeable: false,
                        amenityType: 'MEAL',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: '15 PERCENT MILES EARNED',
                        isChargeable: false,
                        amenityType: 'BRANDED_FARES',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: 'ENTERTAINMENT',
                        isChargeable: false,
                        amenityType: 'ENTERTAINMENT',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          price: {
            currency: 'EUR',
            total: '168.54',
            base: '90.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '168.54',
            totalPrice: 1947.64824,
          },
        },
        {
          aircraft: {
            type: 'flight-offer',
            id: '5',
            source: 'GDS',
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: '2024-04-07',
            lastTicketingDateTime: '2024-04-07',
            numberOfBookableSeats: 9,
            itineraries: [
              {
                duration: 'PT3H10M',
                segments: [
                  {
                    departure: {
                      iataCode: 'BOM',
                      terminal: '2',
                      at: '2024-04-07T19:20:00',
                    },
                    arrival: {
                      iataCode: 'DXB',
                      terminal: '3',
                      at: '2024-04-07T21:00:00',
                    },
                    carrierCode: 'EK',
                    number: '503',
                    aircraft: {
                      code: '77L',
                    },
                    operating: {
                      carrierCode: 'EK',
                    },
                    duration: 'PT3H10M',
                    id: '3',
                    numberOfStops: 0,
                    blacklistedInEU: false,
                  },
                ],
              },
            ],
            price: {
              currency: 'EUR',
              total: '168.54',
              base: '90.00',
              fees: [
                {
                  amount: '0.00',
                  type: 'SUPPLIER',
                },
                {
                  amount: '0.00',
                  type: 'TICKETING',
                },
              ],
              grandTotal: '168.54',
            },
            pricingOptions: {
              fareType: ['PUBLISHED'],
              includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ['EK'],
            travelerPricings: [
              {
                travelerId: '1',
                fareOption: 'STANDARD',
                travelerType: 'ADULT',
                price: {
                  currency: 'EUR',
                  total: '168.54',
                  base: '90.00',
                },
                fareDetailsBySegment: [
                  {
                    segmentId: '3',
                    cabin: 'ECONOMY',
                    fareBasis: 'VDIORIN1',
                    brandedFare: 'ECOSPCL',
                    brandedFareLabel: 'ECO SPECIAL',
                    class: 'V',
                    includedCheckedBags: {
                      weight: 25,
                      weightUnit: 'KG',
                    },
                    amenities: [
                      {
                        description: 'PRE RESERVED SEAT ASSIGNMENT',
                        isChargeable: true,
                        amenityType: 'PRE_RESERVED_SEAT',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: 'BEVERAGE',
                        isChargeable: false,
                        amenityType: 'MEAL',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: 'MEAL VOUCHER',
                        isChargeable: false,
                        amenityType: 'MEAL',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: '15 PERCENT MILES EARNED',
                        isChargeable: false,
                        amenityType: 'BRANDED_FARES',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: 'ENTERTAINMENT',
                        isChargeable: false,
                        amenityType: 'ENTERTAINMENT',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          price: {
            currency: 'EUR',
            total: '168.54',
            base: '90.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '168.54',
            totalPrice: 1947.64824,
          },
        },
        {
          aircraft: {
            type: 'flight-offer',
            id: '6',
            source: 'GDS',
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: '2024-04-07',
            lastTicketingDateTime: '2024-04-07',
            numberOfBookableSeats: 9,
            itineraries: [
              {
                duration: 'PT3H15M',
                segments: [
                  {
                    departure: {
                      iataCode: 'BOM',
                      terminal: '2',
                      at: '2024-04-07T15:35:00',
                    },
                    arrival: {
                      iataCode: 'DXB',
                      terminal: '3',
                      at: '2024-04-07T17:20:00',
                    },
                    carrierCode: 'EK',
                    number: '507',
                    aircraft: {
                      code: '77W',
                    },
                    operating: {
                      carrierCode: 'EK',
                    },
                    duration: 'PT3H15M',
                    id: '7',
                    numberOfStops: 0,
                    blacklistedInEU: false,
                  },
                ],
              },
            ],
            price: {
              currency: 'EUR',
              total: '168.54',
              base: '90.00',
              fees: [
                {
                  amount: '0.00',
                  type: 'SUPPLIER',
                },
                {
                  amount: '0.00',
                  type: 'TICKETING',
                },
              ],
              grandTotal: '168.54',
            },
            pricingOptions: {
              fareType: ['PUBLISHED'],
              includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ['EK'],
            travelerPricings: [
              {
                travelerId: '1',
                fareOption: 'STANDARD',
                travelerType: 'ADULT',
                price: {
                  currency: 'EUR',
                  total: '168.54',
                  base: '90.00',
                },
                fareDetailsBySegment: [
                  {
                    segmentId: '7',
                    cabin: 'ECONOMY',
                    fareBasis: 'VDIORIN1',
                    brandedFare: 'ECOSPCL',
                    brandedFareLabel: 'ECO SPECIAL',
                    class: 'V',
                    includedCheckedBags: {
                      weight: 25,
                      weightUnit: 'KG',
                    },
                    amenities: [
                      {
                        description: 'PRE RESERVED SEAT ASSIGNMENT',
                        isChargeable: true,
                        amenityType: 'PRE_RESERVED_SEAT',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: 'BEVERAGE',
                        isChargeable: false,
                        amenityType: 'MEAL',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: 'MEAL VOUCHER',
                        isChargeable: false,
                        amenityType: 'MEAL',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: '15 PERCENT MILES EARNED',
                        isChargeable: false,
                        amenityType: 'BRANDED_FARES',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: 'ENTERTAINMENT',
                        isChargeable: false,
                        amenityType: 'ENTERTAINMENT',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          price: {
            currency: 'EUR',
            total: '168.54',
            base: '90.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '168.54',
            totalPrice: 1947.64824,
          },
        },
        {
          aircraft: {
            type: 'flight-offer',
            id: '7',
            source: 'GDS',
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: '2024-04-07',
            lastTicketingDateTime: '2024-04-07',
            numberOfBookableSeats: 9,
            itineraries: [
              {
                duration: 'PT3H15M',
                segments: [
                  {
                    departure: {
                      iataCode: 'BOM',
                      terminal: '2',
                      at: '2024-04-07T22:20:00',
                    },
                    arrival: {
                      iataCode: 'DXB',
                      terminal: '3',
                      at: '2024-04-08T00:05:00',
                    },
                    carrierCode: 'EK',
                    number: '509',
                    aircraft: {
                      code: '77W',
                    },
                    operating: {
                      carrierCode: 'EK',
                    },
                    duration: 'PT3H15M',
                    id: '8',
                    numberOfStops: 0,
                    blacklistedInEU: false,
                  },
                ],
              },
            ],
            price: {
              currency: 'EUR',
              total: '168.54',
              base: '90.00',
              fees: [
                {
                  amount: '0.00',
                  type: 'SUPPLIER',
                },
                {
                  amount: '0.00',
                  type: 'TICKETING',
                },
              ],
              grandTotal: '168.54',
            },
            pricingOptions: {
              fareType: ['PUBLISHED'],
              includedCheckedBagsOnly: true,
            },
            validatingAirlineCodes: ['EK'],
            travelerPricings: [
              {
                travelerId: '1',
                fareOption: 'STANDARD',
                travelerType: 'ADULT',
                price: {
                  currency: 'EUR',
                  total: '168.54',
                  base: '90.00',
                },
                fareDetailsBySegment: [
                  {
                    segmentId: '8',
                    cabin: 'ECONOMY',
                    fareBasis: 'VDIORIN1',
                    brandedFare: 'ECOSPCL',
                    brandedFareLabel: 'ECO SPECIAL',
                    class: 'V',
                    includedCheckedBags: {
                      weight: 25,
                      weightUnit: 'KG',
                    },
                    amenities: [
                      {
                        description: 'PRE RESERVED SEAT ASSIGNMENT',
                        isChargeable: true,
                        amenityType: 'PRE_RESERVED_SEAT',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: 'BEVERAGE',
                        isChargeable: false,
                        amenityType: 'MEAL',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: 'MEAL VOUCHER',
                        isChargeable: false,
                        amenityType: 'MEAL',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: '15 PERCENT MILES EARNED',
                        isChargeable: false,
                        amenityType: 'BRANDED_FARES',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                      {
                        description: 'ENTERTAINMENT',
                        isChargeable: false,
                        amenityType: 'ENTERTAINMENT',
                        amenityProvider: {
                          name: 'BrandedFare',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          price: {
            currency: 'EUR',
            total: '168.54',
            base: '90.00',
            fees: [
              {
                amount: '0.00',
                type: 'SUPPLIER',
              },
              {
                amount: '0.00',
                type: 'TICKETING',
              },
            ],
            grandTotal: '168.54',
            totalPrice: 1947.64824,
          },
        },
      ],
      TicketAvailability: '2024-04-07',
    },
  });
  const [departureLocation, setDepartureLocation] = useState();
  const [destinationLocation, setDestinationLocation] = useState();
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const [aircraftDataLoading, setAircraftDataLoading] = useState(false);
  const [aircraftCommercialDataLoading, setCommercialAircraftDataLoading] =
    useState(false);
  const [CharteredData, setcharteredData] = useState({
    aircraftId: '6600c8c49e5f89641143cfbd',
    responseObj: {
      nearestOperatorWithPrice: [
        {
          operator: {
            _id: '655231a06ee915127c646175',
            Aircraft_type: 'Challenger 605',
            Tail_sign: 'absh',
            location: 'Mumbai',
            icao: 'VABB',
            country_name: 'India',
            charges_per_hour: 400000,
            speed: 5000,
            margin: 0,
            sr_no: 1,
            date: '2023-11-13T14:24:32.616Z',
            __v: 0,
          },
          distance: 2.1219988830695686,
          timeHours: 0.00042439977661391375,
          aviapagesResponse: {
            time: {
              airway: 0.21666666666666667,
            },
            airport: {
              arrival_airport: 'VABB',
              departure_airport: 'VABB',
            },
            aircraft: 'Challenger 605',
            distance: {
              great_circle: 0,
            },
          },
          totalTime: 14.65,
          techStopAirport: {
            selectedTechStops: ['UTAA', 'ENBR'],
            techStopTime: '0.5hour / 45minute',
            techStopCost: '50000rs',
          },
          TotalPriceWithTechStop: 6360000,
          totalPriceWithTechStopAndAdminMargin: 6360000,
        },
        {
          operator: {
            _id: '65525d142a7f5241c86e8770',
            Aircraft_type: 'Learjet 45',
            Tail_sign: 'anshfv',
            location: 'Mumbai',
            icao: 'VABB',
            country_name: 'India',
            charges_per_hour: 5000,
            speed: 50,
            margin: 0,
            sr_no: 1,
            date: '2023-11-13T17:29:56.486Z',
            __v: 0,
          },
          distance: 2.1219988830695686,
          timeHours: 0.042439977661391376,
          aviapagesResponse: {
            time: {
              airway: 0.21666666666666667,
            },
            airport: {
              arrival_airport: 'VABB',
              departure_airport: 'VABB',
            },
            aircraft: 'Challenger 605',
            distance: {
              great_circle: 0,
            },
          },
          totalTime: 14.65,
          techStopAirport: {
            selectedTechStops: ['UTAA', 'ENBR'],
            techStopTime: '0.5hour / 45minute',
            techStopCost: '50000rs',
          },
          TotalPriceWithTechStop: 178250,
          totalPriceWithTechStopAndAdminMargin: 178250,
        },
        {
          operator: {
            _id: '655364722a7f5241c86e87b7',
            Aircraft_type: 'Learjet 45',
            Tail_sign: 'asb',
            location: 'Mumbai',
            icao: 'VABB',
            country_name: 'India',
            charges_per_hour: 4000,
            speed: 50,
            margin: 0,
            sr_no: 1,
            date: '2023-11-15T00:00:00.000Z',
            __v: 0,
          },
          distance: 2.1219988830695686,
          timeHours: 0.042439977661391376,
          aviapagesResponse: {
            time: {
              airway: 0.21666666666666667,
            },
            airport: {
              arrival_airport: 'VABB',
              departure_airport: 'VABB',
            },
            aircraft: 'Challenger 605',
            distance: {
              great_circle: 0,
            },
          },
          totalTime: 14.65,
          techStopAirport: {
            selectedTechStops: ['UTAA', 'ENBR'],
            techStopTime: '0.5hour / 45minute',
            techStopCost: '50000rs',
          },
          TotalPriceWithTechStop: 162600,
          totalPriceWithTechStopAndAdminMargin: 162600,
        },
        {
          operator: {
            _id: '6553779a2a7f5241c86e87c6',
            Aircraft_type: 'Learjet 45',
            Tail_sign: 'acfgh',
            location: 'Mumbai',
            icao: 'VABB',
            country_name: 'India',
            charges_per_hour: 5000,
            speed: 5000,
            margin: 0,
            sr_no: 3,
            date: '2023-11-17T00:00:00.000Z',
            __v: 0,
          },
          distance: 2.1219988830695686,
          timeHours: 0.00042439977661391375,
          aviapagesResponse: {
            time: {
              airway: 0.21666666666666667,
            },
            airport: {
              arrival_airport: 'VABB',
              departure_airport: 'VABB',
            },
            aircraft: 'Challenger 605',
            distance: {
              great_circle: 0,
            },
          },
          totalTime: 14.65,
          techStopAirport: {
            selectedTechStops: ['UTAA', 'ENBR'],
            techStopTime: '0.5hour / 45minute',
            techStopCost: '50000rs',
          },
          TotalPriceWithTechStop: 178250,
          totalPriceWithTechStopAndAdminMargin: 178250,
        },
        {
          operator: {
            _id: '655387152a7f5241c86e8870',
            Aircraft_type: 'Learjet 45',
            Tail_sign: 'abcdf',
            location: 'Mumbai',
            icao: 'VABB',
            country_name: 'India',
            charges_per_hour: 50000,
            speed: 60000,
            margin: 0,
            sr_no: 1,
            date: '2023-11-16T00:00:00.000Z',
            __v: 0,
          },
          distance: 2.1219988830695686,
          timeHours: 0.000035366648051159475,
          aviapagesResponse: {
            time: {
              airway: 0.21666666666666667,
            },
            airport: {
              arrival_airport: 'VABB',
              departure_airport: 'VABB',
            },
            aircraft: 'Challenger 605',
            distance: {
              great_circle: 0,
            },
          },
          totalTime: 14.65,
          techStopAirport: {
            selectedTechStops: ['UTAA', 'ENBR'],
            techStopTime: '0.5hour / 45minute',
            techStopCost: '50000rs',
          },
          TotalPriceWithTechStop: 882500,
          totalPriceWithTechStopAndAdminMargin: 882500,
        },
      ],
      from: 'BOM',
      to: 'EWR',
      aircraft: 'Challenger 605',
    },
  });
  const [Charteredepature, setcharteredDepature] = useState('BOM');
  const [ChartereArrival, setchartereArrival] = useState('DXB');
  const [ChartereId, setchartereId] = useState();

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

  const AvaiapageSubmit = (data) => {
    console.log('formData', data);
  };

  const searchFlights = (data) => {
    setAircraftDataLoading(true);
    setCommercialAircraftDataLoading(true);
    const headers = {
      'Content-Type': 'application/json',
    };

    axios(`http://localhost:8000/customer/customerSearch`, {
      method: 'POST',
      data: data,
      headers: headers,
    })
      .then((response) => {
        setcharteredData(response.data.aviapages);
        setcharteredDepature(response.data.aviapages.responseObj.from);
        setchartereArrival(response.data.aviapages.responseObj.to);
        setchartereId();
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setAircraftDataLoading(false);
      });

    axios(`http://localhost:8000/customer/Amadeusairline`, {
      method: 'POST',
      data: data,
      headers: headers,
    })
      .then((response) => {
        console.log('Response:', response.data.ResponseData);
        setDepartureLocation(data?.originLocationCode);
        setDestinationLocation(data?.destinationLocationCode);
        setAircraftData(response.data);
        setSelectedCurrency('EUR');
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setCommercialAircraftDataLoading(false);
      });
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
  return (
    <div className="font-poppins bg-[#F4F9FD] flex flex-col items-center mb-8">
      <Image src={Landing} height={420} width={1874} alt="top background" />
      <SearchBar
        className="bottom-10"
        isMobile={isMobile}
        formData={formData}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      <div className="sm:px-10 px-36 w-full">
        <Shadow
          classname={`w-full font-bold mb-8 text-center p-[10px] grid grid-cols-2`}
        >
          <button
            className={`border-r-2 font-extrabold cursor-pointer hover:gray col-span-1`}
          >
            COMMERCIAL
          </button>
          <button className="font-extrabold cursor-pointer hover:opacity-100 col-span-1">
            CHARTERED
          </button>
        </Shadow>
        <div className="flex sm:flex-col gap-8">
          <div
            className={`grid grid-cols-1 gap-8 w-1/2 h-fit ${
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
                      <AircraftDetailsCard
                        key={'airacraft-list-item' + index}
                        aircraftData={data}
                        availticket={
                          aircraftData?.ResponseData?.TicketAvailability
                        }
                        selectedCurrency={selectedCurrency}
                        handleCurrencyChange={handleCurrencyChange}
                        departureLocation={departureLocation}
                        destinationLocation={destinationLocation}
                        aircraftId={aircraftData.aircraftId}
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
                        <AircraftDetailsCard
                          key={'airacraft-list-item' + index}
                          aircraftData={data}
                          availticket={
                            aircraftData?.ResponseData?.TicketAvailability
                          }
                          selectedCurrency={selectedCurrency}
                          handleCurrencyChange={handleCurrencyChange}
                          departureLocation={departureLocation}
                          destinationLocation={destinationLocation}
                          aircraftId={aircraftData.aircraftId}
                        />
                      );
                    }
                  )}
              </>
            )}
          </div>
          <div className="grid grid-cols-1 gap-8 w-1/2 h-fit">
            {aircraftDataLoading ? (
              <div className="flex justify-center items-center py-10 h-fit">
                <Loader className="h-6 w-6" />
              </div>
            ) : (
              <>
                {CharteredData?.responseObj?.nearestOperatorWithPrice?.map(
                  (data, index) => {
                    return (
                      <DedicatedCard
                        key={'airacraft-list-item' + index}
                        charteredData={data}
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
        {/* <button className="w-[90%] ml-[50%] transform translate-x-[-50%] rounded-[4px] my-[20px] px-[16px] py-[8px] bg-[#40D1F0] text-white font-[600] text-[14px]">
          Show more results
        </button> */}
      </div>
    </div>
  );
};

export default Listing;
