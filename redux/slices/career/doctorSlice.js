//doctorslice integration

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.REACT_API_BASE_URL;
export const DoctorApi = createAsyncThunk('api/doctor', async (payload) => {
  const response = await axios.post(
    `${BASE_URL}/formData/register/doctor`,
    payload
  );
  return response.data;
});

const DoctorSlice = createSlice({
  name: 'doctor',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(DoctorApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(DoctorApi.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(DoctorApi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default DoctorSlice;
