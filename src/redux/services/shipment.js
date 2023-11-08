import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shipmentApi = createApi({
  reducerPath: "shipmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tracking.bosta.co",
  }),
  endpoints: (builder) => ({
    getShipmentDetails: builder.query({
      query: (id) => ({
        url: `/shipments/track/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetShipmentDetailsQuery } = shipmentApi;
