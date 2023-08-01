"use client";

import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
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
  const rows: GridRowsProp = [
    { id: 1, col1: "Hello", col2: i18next.t("a") },
    { id: 2, col1: "DataGridPro", col2: i18next.t("d", { val: 1 }) },
    { id: 3, col1: "MUI", col2: i18next.t("d", { val: i18next.t("text") }) },
    {
      id: 4,
      col1: "HOGE",
      col2: t("e", { val: 3, hoge: t("a") }),
    },
    {
      id: 5,
      col1: "5",
      col2: i18next.t("5", { val: 5, hoge: i18next.t("a") }),
    },
    {
      id: 6,
      col1: "6",
      col2: i18next.t("6", { val: 6, hoge: i18next.t("a") }),
    },
    {
      id: 7,
      col1: "7",
      col2: i18next.t("7", { val: 7, hoge: i18next.t("a") }),
    },
    {
      id: 8,
      col1: "8",
      col2: i18next.t("8", { val: 8, hoge: i18next.t("a") }),
    },
    {
      id: 9,
      col1: "9",
      col2: i18next.t("9", { val: 9, hoge: i18next.t("a") }),
    },
    {
      id: 10,
      col1: "10",
      col2: i18next.t("10", { val: 10, hoge: i18next.t("a") }),
    },
  ];

  const columns: GridColDef[] = [
    { field: "col1", headerName: i18next.t("a") || "col1header", width: 150 },
    { field: "col2", headerName: i18next.t("b") || "col2header", width: 150 },
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
