import { Routes, Route } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Home from "./Home";
import TrackingShipments from "./TrackingShipments";
import TrackingShipmentsDetails from "./TrackingShipmentsDetails";

const ShippingTracking = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shipping-tracking" element={<TrackingShipments />} />
        <Route
          path="/shipping-tracking/:id"
          element={<TrackingShipmentsDetails />}
        />
      </Routes>
    </>
  );
};

export default ShippingTracking;
