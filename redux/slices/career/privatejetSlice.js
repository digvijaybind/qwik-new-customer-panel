//private jet form api integration in front end

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.REACT_API_BASE_URL;
export const PrivatejetApi = createAsyncThunk(
  'api/privatejet',
  async (payload) => {
    const response = await axios.post(
      `${BASE_URL}/formData/register/private-Jet`,
      payload
    );
    return response.data;
  }
);

const PrivatejetSlice = createSlice({
  name: 'privatejet',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PrivatejetApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(PrivatejetApi.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(PrivatejetApi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export default PrivatejetSlice.reducer;
