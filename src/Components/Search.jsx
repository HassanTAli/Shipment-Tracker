import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { setShipmentNumber } from "../redux/features/shipmentSlice";
import { useTranslation } from "react-i18next";

const Search = () => {
  const [trackingNo, setTrackingNo] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shipmentNumber } = useSelector((state) => state.shipment);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(setShipmentNumber(trackingNo));
  }, [dispatch, trackingNo]);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-3xl leading-9 font-medium mt-4">
          {t("Search.TrackYourShipment")}
        </h4>
        <div className="mt-4 border-2 border-[#e4e7ec] bg-[#e30613] rounded-lg w-11/12 flex items-center">
          <input
            type="text"
            name="track-number"
            id="track-number"
            placeholder={t("shipmentDetails.ShipmentNo")}
            className="rounded-s-md p-4 w-4/5 focus:outline-none"
            value={trackingNo}
            onChange={(e) => setTrackingNo(e.target.value)}
          />
          <div
            className="flex items-center justify-center w-1/5 cursor-pointer"
            onClick={() => {
              if (shipmentNumber !== "") {
                navigate(`/shipping-tracking/${shipmentNumber}`);
                setError("");
              } else {
                setError("Please Enter Your Tracking Number");
              }
            }}
          >
            <FiSearch size={24} color="white" />
          </div>
        </div>
        <div>
          {error !== "" && <p className="text-red-600 mt-4">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Search;
