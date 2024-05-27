//dedicated Slice

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.REACT_API_BASE_URL;
export const DedicatedApi = createAsyncThunk(
  'api/deicatedairline',
  async (payload) => {
    const headers = {
      'Content-Type': 'application/json',
    };
    const config = {
      headers,
    };
    const response = await axios.post(
      `http://localhost:8000/customer/dedicatedSearch`,
      payload,
      config
    );
    return response.data;
  }
);

const dedicatedSlice = createSlice({
  name: 'dedicated',
  initialState: {
    dedicatedflights: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(DedicatedApi.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(DedicatedApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dedicatedflights = action.payload;
      })
      .addCase(DedicatedApi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dedicatedSlice.reducer;
