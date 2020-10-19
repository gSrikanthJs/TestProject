import React from "react";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend} from "recharts";
import {siteVisit} from "../../../../routes/main/dashboard/CRM/data";
import Metrics from "../../../components/Metrics";
const data = [
  { month: "JAN", income: 500000, expense: 350000 },
  { month: "FEB", income: 400000, expense: 200000 },
  { month: "MAR", income: 700000, expense: 300000 },
  { month: "APR", income: 300000, expense: 50000 },
  { month: "MAY", income: 300000, expense: 50000 },
  { month: "JUN", income: 500000, expense: 150000 },
  { month: "JUL", income: 600000, expense: 350000 },
];
const IncomeExpenseChart = () => (
  <Metrics title="Income & Expenses">
    <ResponsiveContainer width="100%" height={140}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
      >
        <XAxis dataKey="month" />
        <YAxis
          type="number"
          interval="preserveStart"
          tickFormatter={(label) => `${label/1000}k`}
        />
        <Legend
          wrapperStyle={{
            top: -45,
            right: -110,
          }}
        />
        <Tooltip />
        <CartesianGrid horizontal={false} strokeDasharray="1" />
        <Area
          type="monotone"
          dataKey="income"
          fillOpacity={1}
          stroke="#038FDE"
          fill="#038FDE"
        />
        <Area
          type="monotone"
          dataKey="expense"
          fillOpacity={1}
          stroke="#FE9E15"
          fill="#FE9E15"
        />
      </AreaChart>
    </ResponsiveContainer>
  </Metrics>
);

export default IncomeExpenseChart;

