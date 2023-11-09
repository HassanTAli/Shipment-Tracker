import React, { useEffect } from "react";
import i18n from "../i18n";

const locales = {
  en: { title: "English" },
  ar: { title: "Arabic" },
};

const Sidebar = ({ setActive, active }) => {
  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n, i18n.language]);
  return (
    <div className="m-4">
      <div
        className="flex justify-end mr-4 text-lg"
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
    </div>
  );
};

export default Sidebar;
