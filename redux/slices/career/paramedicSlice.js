//paramedics form
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.REACT_API_BASE_URL;

export const ParamedicsApi = createAsyncThunk(
  'api/paramedics',
  async (payload) => {
    const response = await axios.post(
      `${BASE_URL}/formData/register/paramedics`,
      payload
    );
    return response.data;
  }
);

const ParamedicSlice = createSlice({
  name: 'paramedic',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ParamedicsApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(ParamedicsApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(ParamedicsApi.rejected,(state,action)=>{
        state.status='failed';
        state.error=action.error.message;
      })
  },
});
export default ParamedicSlice; 
