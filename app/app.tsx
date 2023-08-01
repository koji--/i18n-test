"use client";

import * as React from "react";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import en from "./en.json";

const resources = {
  en: {
    translation: en,
  },
};

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: resources,
});

export default function App() {
  const { t } = useTranslation();
  console.log("hoge: ", t("a"));
  console.log("hoge: ", t("d", { val: t("a") }));
  return <div style={{ height: 300, width: "100%" }}></div>;
}
