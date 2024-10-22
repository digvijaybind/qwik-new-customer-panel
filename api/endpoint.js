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
  DoctorCareer: `/career/register/doctor`,
  ParamedicCareer: `/career/register/paramedics`,
  AircraftOperatorcareer: `career/register/aircraft-Operator`,
  HospitalCareer: `/career/register/hospital`,
  ConfirmEquiry: `/equiry/confirmEquiry`,
  PrivateJetCareer: `/formData/register/private-Jet`,
  Insurance: `/career/InsuranceRegister`,
};

export default Endpoint;
