import React from "react";

import LineIndicator from "./LineIndicator";
import Metrics from "../../../components/Metrics";
import {
  Bar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Text,
  RadialBar,
} from "recharts";

const data = [
  { name: "playgroup", count: 200, fill: "#038FDE", tooltip:'play' },
  { name: "primary", count: 100, fill: "#FE9E15" },
  { name: "secondary", count: 190, fill: "#aa1122" },
  { name: "higher", count: 250, fill: "#aa11dd" },
];
const style = {
  top: 0,
  left: 350,
  lineHeight: "24px",
};

const ClassSummary = () => {

  return (
    <Metrics title="Class Summary">
      <ResponsiveContainer width="100%" height={130}>
        <RadialBarChart
          cx={90}
          cy={55}
          innerRadius={15}
          outerRadius={60}
          barSize={10}
          data={data}
          clockWise={false}
        >
          <RadialBar
            label={{ fill: "#fff", position: "insideStart" }}
            background
            dataKey="count"
          />
          <Legend
            iconType="circle"
            wrapperStyle={{
              bottom: -20,
              left: 20,
            }}
            layout="horizontal"
            align="left"
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
            ren
          />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    </Metrics>
  );
};
export default ClassSummary;
