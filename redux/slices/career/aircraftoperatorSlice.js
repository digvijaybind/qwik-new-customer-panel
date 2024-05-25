//aircraftoperator form integration
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.REACT_API_BASE_URL;
export const Aircraftoperator = createAsyncThunk(
  'api/aircraftform',
  async (payload) => {
    const response = await axios.post(
      `${BASE_URL}/formData/register/aircraft-Operator`,
      payload
    );
    return response.data;
  }
);

const aircraftoperatorSlice= createSlice({
  name: 'aircraftoperator',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Aircraftoperator.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(Aircraftoperator.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(Aircraftoperator.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default aircraftoperatorSlice;