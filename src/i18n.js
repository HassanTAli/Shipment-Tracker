import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { DateTime } from "luxon";

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  returnEmptyString: false,
  debug: true,
  fallbackLng: "en",
});

i18n.services.formatter.add("DATE_LONG", (value, lng, _options) => {
  return DateTime.fromJSDate(value)
    .setLocale(lng)
    .toLocaleString(DateTime.DATETIME_HUGE);
});

i18n.services.formatter.add("DATE_SHORT", (value, lng, _options) => {
  return DateTime.fromJSDate(value)
    .setLocale(lng)
    .toLocaleString(DateTime.DATE_MED);
});

i18n.services.formatter.add("DATE_SHORT_TABLE", (value, lng, _options) => {
  return DateTime.fromJSDate(value)
    .setLocale(lng)
    .toLocaleString(DateTime.DATE_FULL);
});

i18n.services.formatter.add("TIME_SHORT_TABLE", (value, lng, _options) => {
  return DateTime.fromJSDate(value)
    .setLocale(lng)
    .toLocaleString(DateTime.TIME_SIMPLE);
});

export default i18n;
