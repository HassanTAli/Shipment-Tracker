import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shipmentNumber: null,
  allData: {},
};

const shipmentSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {
    setShipmentNumber: (state, { payload }) => {
      state.shipmentNumber = payload;
    },
    setAllData: (state, { payload }) => {
      state.allData = payload;
    },
  },
});

export const { setShipmentNumber, setAllData } = shipmentSlice.actions;
export default shipmentSlice.reducer;
