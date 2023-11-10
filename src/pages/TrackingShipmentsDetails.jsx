import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useGetShipmentDetailsQuery } from "../redux/services/shipment";
import ShipmentDetails from "../Components/ShipmentDetails";
import Timeline from "../Components/Timeline";
import { setAllData } from "../redux/features/shipmentSlice";
import Table from "../Components/Table";
import Address from "../Components/Address";
import Spinner from "../Components/Spinner";

const TrackingShipmentsDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetShipmentDetailsQuery(id);

  useEffect(() => {
    if (data) {
      dispatch(setAllData(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <Spinner />;

  if (error) return <p>{error.data.error}</p>;

  if (data)
    return (
      <div>
        <div className="border border-[#CFCFCF] m-4 flex flex-col rounded-md">
          <ShipmentDetails data={data} />
          <Timeline />
        </div>
        <div className="w-full">
          <Table />
          <Address />
        </div>
      </div>
    );
};

export default TrackingShipmentsDetails;
