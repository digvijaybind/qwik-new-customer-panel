import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commericialSlice from "./slices/commericialSlice";
import dedicatedSlice from "./slices/dedicatedSlice";
import privatejetSlice from "./slices/career/privatejetSlice";
import paramedicSlice from "./slices/career/paramedicSlice";
import aircraftOperatorSlice from "./slices/career/aircraftoperatorSlice";
import doctorSlice from "./slices/career/doctorSlice";
import hospitalSlice from "./slices/career/hospitalSlice";
import paymentSlice from "./slices/paymentSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// Configuration for Redux Persist
const persistConfig = {
  key: "root",
  storage,
};

// Combine all slices into a root reducer
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

// Apply persistence to the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store with persisted reducer and Redux DevTools integration
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

// Create the persistor object for Redux Persist
const persistor = persistStore(store);

export { store, persistor };
