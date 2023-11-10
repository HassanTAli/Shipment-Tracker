import React, { useEffect } from "react";
import i18n from "../i18n";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const locales = {
  en: { title: "English" },
  ar: { title: "Arabic" },
};

const Sidebar = ({ setActive, active }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n, i18n.language]);
  return (
    <div className="m-4">
      <div
        className="flex justify-end mr-4 text-lg cursor-pointer"
        onClick={() => {
          setActive(!active);
        }}
      >
        <span>X</span>
      </div>
      <p className="text-lg font-bold">Choose Language</p>
      <ul>
        {Object.keys(locales).map((locale) => (
          <li key={locale}>
            <button
              type="submit"
              style={{
                fontWeight:
                  i18n.resolvedLanguage === locale ? "bold" : "normal",
              }}
              onClick={() => {
                i18n.changeLanguage(locale);
                setActive(!active);
              }}
            >
              {locales[locale].title}
            </button>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <div className="flex md:hidden flex-col gap-2 font-bold text-lg">
        <Link to={"/"} onClick={() => setActive(!active)}>
          {t("shipmentDetails.Home")}
        </Link>
        <Link to={"/pricing"} onClick={() => setActive(!active)}>
          {t("shipmentDetails.pricing")}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
