import { combineReducers } from "@reduxjs/toolkit";

import shipmentSlice from "./features/shipmentSlice";
import { shipmentApi } from "./services/shipment";

export default combineReducers({
  shipment: shipmentSlice,
  [shipmentApi.reducerPath]: shipmentApi.reducer,
});
