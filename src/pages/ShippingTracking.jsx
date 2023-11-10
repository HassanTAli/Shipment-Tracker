import { Routes, Route } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Home from "./Home";
import TrackingShipments from "./TrackingShipments";
import TrackingShipmentsDetails from "./TrackingShipmentsDetails";
import Pricing from "../Components/Pricing";

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
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
};

export default ShippingTracking;
