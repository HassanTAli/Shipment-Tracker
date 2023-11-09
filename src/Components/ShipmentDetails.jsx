import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const ShipmentDetails = ({ data }) => {
  const { t } = useTranslation();

  const date = new Date(data?.CurrentStatus?.timestamp);
  const deliveryDate = new Date(data?.PromisedDate);

  const statusSwitch = (status) => {
    if (status === "DELIVERED") {
      return t("shipmentDetails.DELIVERED");
    } else if (status === "CANCELLED") {
      return t("shipmentDetails.CANCELLED");
    } else if (status === "DELIVERED_TO_SENDER") {
      return t("shipmentDetails.NOT_Delivered");
    }
  };

  return (
    <Suspense fallback="loading...">
      <div className="flex flex-col border-b border-b-[#CFCFCF] p-4 md:flex-row md:items-center md:justify-around">
        <div className="my-4">
          <p className="text-[#B2B1B2] text-sm font-medium">
            {t("shipmentDetails.ShipmentNo")} {data?.TrackingNumber}
          </p>
          <p
            className={`${
              data?.CurrentStatus?.state === "DELIVERED"
                ? "text-[#35B600]"
                : data?.CurrentStatus?.state === "DELIVERED_TO_SENDER"
                ? "text-[#F9BA02]"
                : "text-[#F4050D]"
            } text-lg font-semibold`}
          >
            {statusSwitch(data?.CurrentStatus?.state)}
          </p>
        </div>
        <div className="my-4">
          <p className="text-[#B2B1B2] text-sm font-medium">
            {t("shipmentDetails.LastUpdated")}
          </p>
          <p className="text-[#242D47] text-lg font-semibold">
            {t("shipmentDetails.STATUS_DATE", { date: date })}
          </p>
        </div>
        <div className="my-4">
          <p className="text-[#B2B1B2] text-sm font-medium">
            {t("shipmentDetails.MerchantName")}
          </p>
          <p className="text-[#242D47] text-lg font-semibold">
            {data?.provider}
          </p>
        </div>
        <div className="my-4">
          <p className="text-[#B2B1B2] text-sm font-medium">
            {t("shipmentDetails.DeliveryTime")}
          </p>
          <p className="text-[#242D47] text-lg font-semibold">
            {data?.PromisedDate
              ? t("shipmentDetails.DELIVERY_TIME", { date: deliveryDate })
              : t("shipmentDetails.NOT_Delivered_YET")}
          </p>
        </div>
      </div>
    </Suspense>
  );
};

export default ShipmentDetails;
