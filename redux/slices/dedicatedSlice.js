//dedicated Slice

import apiClient from '@/api/apiClient';
import Endpoint from '@/api/endpoint';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const DedicatedApi = createAsyncThunk('/api/dedicated', async (data) => {
  const response = apiClient.post(Endpoint.DedicatedSearch, data);
  return response.data;
});

export const DedicatedSingleApi = createAsyncThunk(
  `/api/dedicated`,
  async () => {
    const response = apiClient.get(Endpoint.DedicatedAircraftByid);
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
