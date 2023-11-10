import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Table = () => {
  const { allData } = useSelector((state) => state.shipment);
  const { t } = useTranslation();

  const { TransitEvents } = allData;

  const translateStatus = (status) => {
    switch (status) {
      case "TICKET_CREATED":
        return t("table.tableStatus.TICKET_CREATED");
      case "PACKAGE_RECEIVED":
        return t("table.tableStatus.PACKAGE_RECEIVED");
      case "IN_TRANSIT":
        return t("table.tableStatus.IN_TRANSIT");
      case "OUT_FOR_DELIVERY":
        return t("table.tableStatus.OUT_FOR_DELIVERY");
      case "WAITING_FOR_CUSTOMER_ACTION":
        return t("table.tableStatus.WAITING_FOR_CUSTOMER_ACTION");
      case "NOT_YET_SHIPPED":
        return t("table.tableStatus.NOT_YET_SHIPPED");
      case "DELIVERED":
        return t("table.tableStatus.DELIVERED");
      case "CANCELLED":
        return t("table.tableStatus.CANCELLED");
      case "DELIVERED_TO_SENDER":
        return t("table.tableStatus.DELIVERED_TO_SENDER");
      default:
        return status;
    }
  };

  const translateReason = (reason) => {
    switch (reason) {
      case "Retry delivery - the customer is not in the address.":
        return t("table.tableReasons.RetryDelivery");
      case "Postponed - the customer requested postponement for another day.":
        return t("table.tableReasons.Postponed");
      case "Customer is not answering.":
        return t("table.tableReasons.CustomerNotAnswering");

      default:
        return reason;
    }
  };

  return (
    <div className="flex m-4 flex-col md:w-8/12 overflow-x-scroll">
      <div className="my-4">
        <p className="text-lg font-bold">
          {t("shipmentDetails.Shipment_Details")}
        </p>
      </div>
      <table className="w-full border rounded-md border-[#CFCFCF]">
        <thead className="bg-[#FAFAFA] border-b border-b-[#CFCFCF] w-full">
          <tr>
            <th className="min-w-[10rem]">{t("table.tableHeader.hub")}</th>
            <th className="min-w-[10rem]">{t("table.tableHeader.date")}</th>
            <th className="min-w-[10rem]">{t("table.tableHeader.time")}</th>
            <th className="min-w-[10rem]">{t("table.tableHeader.details")}</th>
          </tr>
        </thead>
        <tbody className="block h-[34rem] overflow-auto">
          {TransitEvents &&
            TransitEvents.map((event, idx) => {
              const timestamp = new Date(event.timestamp);
              return (
                <tr key={idx}>
                  <td className="text-center">
                    {event.hub
                      ? event.hub === "Cairo Sorting Facility"
                        ? t("table.tableBody.Cairo_Sorting_Facility")
                        : event.hub === "Haram Hub"
                        ? t("table.tableBody.Haram_Hub")
                        : event.hub === "Tanta Hub"
                        ? t("table.tableBody.Tanta_Hub")
                        : t("table.tableBody.FM_Reverse_Hub")
                      : "-"}
                  </td>
                  <td className="text-center">
                    {t("table.tableDetails.DATE", { date: timestamp })}
                  </td>
                  <td className="text-center">
                    {t("table.tableDetails.TIME", { date: timestamp })}
                  </td>
                  <td className="text-center">
                    <div>
                      <p>{translateStatus(event.state)}</p>
                      <p className="text-red-600">
                        {translateReason(event.reason)}
                      </p>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
