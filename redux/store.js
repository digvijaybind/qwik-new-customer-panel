import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commericialSlice from "./slices/commericialSlice";
import dedicatedSlice from "./slices/dedicatedSlice";
import privatejetSlice from "./slices/career/privatejetSlice";
import ParamedicSlice from "./slices/career/paramedicSlice";
import aircraftOperatorSlice from "./slices/career/aircraftoperatorSlice";
import DoctorSlice from "./slices/career/doctorSlice";
import hospitalSlice from "./slices/career/hospitalSlice";
import paymentSlice from "./slices/paymentSlice";
import InsuranceSlice from "./slices/career/InsuranceSlice";


const rootReducer = combineReducers({
  commericial: commericialSlice,
  dedicated: dedicatedSlice,
  aircraftOperator: aircraftOperatorSlice,
  doctor: DoctorSlice,
  privatejet: privatejetSlice,
  paramedic: ParamedicSlice,
  hospital: hospitalSlice,
  payment: paymentSlice,
  insurance: InsuranceSlice,
});
// Configure the Redux store with persisted reducer and Redux DevTools integration
const store = configureStore({
  reducer: rootReducer ,
  devTools: process.env.NODE_ENV !== "production",
});



export { store};
