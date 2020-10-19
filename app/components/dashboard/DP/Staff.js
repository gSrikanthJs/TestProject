import React from "react";
import MetricsCard from "./MetricsCard";
const data = {
  title: "Staff",
  prop1: {
    label: "Teaching",
    value: 80,
  },
  prop2: {
    label: "Others",
    value: 30,
  },
};
const Staff = () => {
  return <MetricsCard data={data} />;
};
export default Staff;
