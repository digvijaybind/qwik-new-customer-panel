//commericialAPi integration

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.REACT_API_BASE_URL;
export const CommericialApi = createAsyncThunk(
  'api1/commericialAPi',
  async (payload) => {
    const headers = {
      'Content-Type': 'application/json',
    };
    const config = {
      headers,
    };

    const response = await axios.post(
      `http://localhost:8000/customer/commericialSearch`,
      payload,
      config
    );
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
        state.status = 'loading';
      })
      .addCase(CommericialApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.commericialflights = action.payload;
      })
      .addCase(CommericialApi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default commericialSlice.reducer;
