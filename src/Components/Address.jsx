import { useTranslation } from "react-i18next";
import img from "../assets/5159502.jpg";

const Address = () => {
  const { t } = useTranslation();
  return (
    <div className="md:w-4/12 m-4 flex flex-col ">
      <div className="my-4">
        <p className="text-lg font-bold">{t("shipmentDetails.Address")}</p>
      </div>
      <div className="w-full">
        <div className="border border-[#CFCFCF] bg-[#FBFBFB] rounded-md p-4">
          <p>{t("shipmentDetails.AddressDetails")}</p>
        </div>
      </div>
      <div className="flex mt-8 border border-[#CFCFCF] bg-[#FBFBFB] rounded-md p-4 justify-between items-center">
        <div className="w-1/4">
          <img src={img} alt="question mark" />
        </div>
        <div className="flex flex-col gap-4 ml-4">
          <p>{t("shipmentDetails.problemReport")}</p>
          <button className="bg-red-800 text-white p-2 rounded-md ">
            {t("shipmentDetails.problemReport")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
