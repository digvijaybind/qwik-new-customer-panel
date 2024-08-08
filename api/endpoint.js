const Endpoint = {
  //All airports list api
  Allairports: `/all-airports`, //all airports list api
  //search endpoint for dedicated and commericial flights
  CommericialSearch: `/customer/commericialSearch`, //Endpoints for searching commericial flights
  CommericialAircraftByid: `/customer/amadeus/aircraft/:id `, //Endpoints for searching commericial flights by id
  DedicatedSearch: `/customer/dedicatedSearch`, //Endpoints for searching dedicated flights
  DedicatedAircraftByid: `/customer/avipage/aircraft/:concatenatedParam`, //Endpoints for searching dedicated flights by id

  //payment api

  PaymentcreateOrder: `/rayzorpay/order`, //Endpoints for creating new order
  PaymentMethod: `/payment/paymentCapture`, //Endpoints for retriving payment method

  //career api for professionals
  Insurancefirm: `/career/InsuranceRegister`,
  DoctorCarrer: `career/register/doctor`, //Endpoints for doctor application
  ParamedicCareer: `career/register/paramedics`, //Endpoints for paramedic application
  AircraftOperatorcareer: `career/register/aircraft-Operator`, //Endpoints for aircraft operator application
  HospitalCareer: `career/register/hospital`, //Endpoints for hospital application
  ConfirmEquiry: `/equiry/confirmEquiry`, //Endpoints for confirm enquiry
  PrivateJetCareer: `/formData/register/private-Jet`, //Ednpoints for Private Jet application
};

export default Endpoint;
