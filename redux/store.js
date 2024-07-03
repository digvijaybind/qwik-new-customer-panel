import { configureStore } from '@reduxjs/toolkit';
import commericialSlice from './slices/commericialSlice';
import dedicatedSlice from './slices/dedicatedSlice';
import privatejetSlice from './slices/career/privatejetSlice';
import ParamedicSlice from './slices/career/paramedicSlice';
import aircraftoperatorSlice from './slices/career/aircraftoperatorSlice';
import DoctorSlice from './slices/career/doctorSlice';
import hospitalSlice from './slices/career/hospitalSlice';
import PaymentSlice from './slices/paymentSlice';

const store = configureStore({
  reducer: {
    commericial: commericialSlice,
    dedicated: dedicatedSlice,
    aircraftoperator: aircraftoperatorSlice,
    doctor: DoctorSlice,
    privatejet: privatejetSlice,
    paramedic: ParamedicSlice,
    hospital: hospitalSlice,
    payment: PaymentSlice,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in development
});

export default store;
