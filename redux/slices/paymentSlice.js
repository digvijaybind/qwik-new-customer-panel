//paymentSlice
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const BASE_URL = process.env.REACT_API_BASE_URL;
export const Createorder = createAsyncThunk(
  'api/paymentorder',
  async ({ amount, currecy, receiptId }) => {
    const response = await fetch(`${BASE_URL}/rayzorpay/Order`, {
      method: 'POST',
      body: JSON.stringify({ amount, currency, receiptId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.order.id;
  }
);

export const verifyPayment = createAsyncThunk(
  'api/verifypayment',
  async (payload) => {
    const response = await fetch('', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  }
);

export const PaymentSlice = createSlice({
  name: 'payment',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Createorder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(Createorder.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(Createorder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default PaymentSlice;
