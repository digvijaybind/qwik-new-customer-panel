const Endpoint = {
  //All airports list api
  Allairports:`/all-airports`,//all airports list api 
  //search endpoint for dedicated and commericial flights
  CommericialSearch: `/customer/commericialSearch`, //Endpoints for searching commericial flights
  CommericialAircraftByid: `/customer/amadeus/aircraft/:concatenatedParam`, //Endpoints for searching commericial flights by id
  DedicatedSearch: `/customer/dedicatedSearch`, //Endpoints for searching dedicated flights
  DedicatedAircraftByid: `/customer/avipage/aircraft/:concatenatedParam`, //Endpoints for searching dedicated flights by id

  //payment api

  PaymentcreateOrder: `/rayzorpay/order`, //Endpoints for creating new order
  PaymentMethod: `/payment/paymentCapture`, //Endpoints for retriving payment method

  //career api for professionals
  DoctorCarrer: `/formData/register/doctor`, //Endpoints for doctor application
  ParamedicCareer: `/formData/register/paramedics`, //Endpoints for paramedic application
  AircraftOperatorcareer: `/formData/register/aircraft-Operator`, //Endpoints for aircraft operator application
  HospitalCareer: `/formData/register/hospital`, //Endpoints for hospital application
  ConfirmEquiry: `/equiry/confirmEquiry`, //Endpoints for confirm enquiry
  PrivateJetCareer: `/formData/register/private-Jet`, //Ednpoints for Private Jet application
};

export default Endpoint;