import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Text
} from "recharts";
import {Col, Row} from "antd";

import Metrics from "../../../components/Metrics";
import {connect} from "react-redux";

const data = [
  { duration: "APR-JUN", expected: 500000, received: 350000, due: 150000 },
  { duration: "JUL-SEP", expected: 400000, received: 350000, due: 50000 },
  { duration: "OCT-DEC", expected: 300000, received: 150000, due: 150000 },
  { duration: "JAN-MAR", expected: 600000, received: 350000, due: 250000 },
];
const FeeGraph = ({width}) => {
  return (
    <Metrics title="Fee Summary">
      <ResponsiveContainer width="100%" height={145}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="2" vertical={false} />

          <XAxis dataKey="duration" />
          <YAxis
            type="number"
            interval="preserveStart"
            tickFormatter={(label) => `${label / 1000}k`}
          />
          <Legend
            wrapperStyle={{
              top: -45,
              right: -110,
            }}
          />
          <Tooltip />
          <Bar
            dataKey="expected"
            fill="#038FDE"
            barSize={width <= 575 ? 4 : 8}
          />
          <Bar
            dataKey="received"
            fill="#FE9E15"
            barSize={width <= 575 ? 4 : 8}
          />
          <Bar dataKey="due" fill="#aa1122" barSize={width <= 575 ? 4 : 8} />
        </BarChart>
      </ResponsiveContainer>
    </Metrics>
  );
};


const mapStateToProps = ({settings}) => {
  const {width} = settings;
  return {width}
};
export default connect(mapStateToProps)(FeeGraph);
