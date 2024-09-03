import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; 

import commericialSlice from "./slices/commericialSlice";
import dedicatedSlice from "./slices/dedicatedSlice";
import privatejetSlice from "./slices/career/privatejetSlice";
import paramedicSlice from "./slices/career/paramedicSlice";
import aircraftOperatorSlice from "./slices/career/aircraftoperatorSlice";
import doctorSlice from "./slices/career/doctorSlice";
import hospitalSlice from "./slices/career/hospitalSlice";
import paymentSlice from "./slices/paymentSlice";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["commericial", "dedicated", "payment"], 
};

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

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);
