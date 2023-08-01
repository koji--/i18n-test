"use client";

import * as React from "react";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
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
  console.log("hoge: ", i18next.t("a"));
  console.log("hoge: ", i18next.t("d", { val: i18next.t("a") }));
  return <div style={{ height: 300, width: "100%" }}></div>;
}
