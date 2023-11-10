import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();
  return <div>{t("shipmentDetails.pricing")}</div>;
};

export default Pricing;
