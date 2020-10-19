import React from "react";
import MetricsCard from "./MetricsCard";
const data = {
  title: "Student",
  prop1: {
    label: "Boys",
    value: 2354,
  },
  prop2: {
    label: "Girls",
    value: 2048,
  },
};
const Students = () => {
  return (
    <MetricsCard data={data} />
  );
};
export default Students;
