import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commericialSlice from "./slices/commericialSlice";
import dedicatedSlice from "./slices/dedicatedSlice";
import privatejetSlice from "./slices/career/privatejetSlice";
import paramedicSlice from "./slices/career/paramedicSlice";
import aircraftOperatorSlice from "./slices/career/aircraftoperatorSlice";
import doctorSlice from "./slices/career/doctorSlice";
import hospitalSlice from "./slices/career/hospitalSlice";
import paymentSlice from "./slices/paymentSlice";


const rootReducer = combineReducers({
  commericial: commericialSlice,
  dedicated: dedicatedSlice,
  aircraftOperator: aircraftOperatorSlice,
  doctor: doctorSlice,
  privatejet: privatejetSlice,
  paramedic: paramedicSlice,
  hospital: hospitalSlice,
  payment: paymentSlice,
});

export const store = configureStore({
  reducer: rootReducer,  
});
