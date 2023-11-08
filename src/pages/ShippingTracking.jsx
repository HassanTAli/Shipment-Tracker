import { Routes, Route } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Home from "./Home";
import TrackingShipments from "./TrackingShipments";

const ShippingTracking = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shipping-tracking" element={<TrackingShipments />} />
      </Routes>
    </>
  );
};

export default ShippingTracking;
