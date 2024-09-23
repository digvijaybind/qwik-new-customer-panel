import { combineReducers, configureStore } from "@reduxjs/toolkit";

import commericialSlice from "./slices/commericialSlice";
import dedicatedSlice from "./slices/dedicatedSlice";
import privatejetSlice from "./slices/career/privatejetSlice";
import paramedicSlice from "./slices/career/paramedicSlice";
import aircraftOperatorSlice from "./slices/career/aircraftoperatorSlice";
import doctorSlice from "./slices/career/doctorSlice";
import hospitalSlice from "./slices/career/hospitalSlice";
import paymentSlice from "./slices/paymentSlice";
import commericialdetailSlice from "./slices/commericialdetailSlice";

// Combine all slices into a root reducer
const rootReducer = combineReducers({
  commericial: commericialSlice,
  commericialdetails: commericialdetailSlice,
  dedicated: dedicatedSlice,
  aircraftOperator: aircraftOperatorSlice,
  doctor: doctorSlice,
  privatejet: privatejetSlice,
  paramedic: paramedicSlice,
  hospital: hospitalSlice,
  payment: paymentSlice,
});
console.log("commericialdetails store",commericialdetailSlice)
// Configure store using the root reducer without persisting
export const store = configureStore({
  reducer: rootReducer,
});
