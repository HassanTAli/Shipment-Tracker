import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center">
      <p>{t("shipmentDetails.Home")}</p>
      <p>{t("shipmentDetails.selectTrack")}</p>
    </div>
  );
};

export default Home;
