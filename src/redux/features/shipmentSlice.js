import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shipmentNumber: null,
};

const shipmentSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {
    setShipmentNumber: (state, { payload }) => {
      state.shipmentNumber = payload;
    },
  },
});

export const { setShipmentNumber } = shipmentSlice.actions;
export default shipmentSlice.reducer;
