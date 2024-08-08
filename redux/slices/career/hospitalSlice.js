import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const hospitalApi = createAsyncThunk(`api/hospital`, async (data) => {
  const response = apiClient.post(Endpoint.HospitalCareer, data);
  return response.data;
});

const hospitalSlice = createSlice({
  name: "hospital",
  initialState: {
    hospitalData: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(hospitalApi.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(hospitalApi.fulfilled, (state, action) => {
        state.status = "succeded";
        state.hospitalData = action.payload;
      })
      .addCase(hospitalApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default hospitalSlice.reducer;
