//commericialAPi integration

import apiClient from '@/api/apiClient';
import Endpoint from '@/api/endpoint';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const CommericialApi = createAsyncThunk(
  '/api/commericial',
  async (data) => {
    console.log('slices data', data);
    const response = await apiClient.post(Endpoint.CommericialSearch, data);
    return response.data;
  }
);

export const CommericialSingleApi = createAsyncThunk(
  `api/commericial/id`,
  async () => {
    const response = await apiClient.get(Endpoint.CommericialAircraftByid);
    return response.data;
  }
);

const commericialSlice = createSlice({
  name: 'commericial',
  initialState: {
    commericialflights: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CommericialApi.pending, (state) => {
        console.log('still loading');
        state.status = 'loading';
      })
      .addCase(CommericialApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(action.payload);
        state.commericialflights = action.payload;
      })
      .addCase(CommericialApi.rejected, (state, action) => {
        state.status = 'failed';
        console.log('error');
        state.error = action.error.message;
      });
  },
});

export default commericialSlice.reducer;
