import React from "react";
import MetricsCard from "./MetricsCard";
const data = {
  title: "Admissions",
  prop1: {
    label: "School",
    value: 115,
  },
  prop2: {
    label: "Online",
    value: 70,
  },
};
const Admissions = () => {
  return <MetricsCard data={data} />;
};
export default Admissions;
