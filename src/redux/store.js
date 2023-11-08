import { configureStore } from "@reduxjs/toolkit";

import { shipmentApi } from "./services/shipment";
import reducer from "./reducer";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shipmentApi.middleware),
});

export default store;
