import React from "react";
import MetricsCard from "./MetricsCard";
const data = {
  title: "Fee summary",
  prop1: {
    label: "Outstanding",
    value: 1150000,
  },
  prop2: {
    label: "Received",
    value: 2000000,
  },
};
const FeeSummary = () => {
  return <MetricsCard data={data} />;
};
export default FeeSummary;
