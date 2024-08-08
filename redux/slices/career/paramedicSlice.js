import apiClient from "@/api/apiClient";
import Endpoint from "@/api/endpoint";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ParamedicsApi = createAsyncThunk(`api/paramdeics`, (data) => {
  const response = apiClient.post(Endpoint.ParamedicCareer, data);
  return response.data;
});

const ParamedicSlice = createSlice({
  name: "paramedic",
  initialState: {
    Paramedicdata: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ParamedicsApi.pending, (state) => {
      state.status = "pending";
      state.error = null;
    });
  },
});
export default ParamedicSlice.reducer;
