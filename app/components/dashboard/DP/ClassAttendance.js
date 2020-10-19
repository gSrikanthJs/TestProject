import React from "react";

import LineIndicator from "./LineIndicator";
import Metrics from "../../../components/Metrics";
import { Table, Progress } from "antd";

const data = [
  {
    class: 1,
    name: "1st Class",
    attendance1: 80,
    attendance2: 80,
    attendance3: 80,
  },
  {
    class: 2,
    name: "2nd Class",
    attendance1: 90,
    attendance2: 70,
    attendance3: 98,
  },
  {
    class: 3,
    name: "3rd Class",
    attendance1: 98,
    attendance2: 80,
    attendance3: 60,
  },
  {
    class: 4,
    name: "4th Class",
    attendance1: 88,
    attendance2: 78,
    attendance3: 80,
  },
  {
    class: 5,
    name: "5th Class",
    attendance1: 80,
    attendance2: 90,
    attendance3: 99,
  },
  {
    class: 6,
    name: "6th Class",
    attendance1: 30,
    attendance2: 50,
    attendance3: 90,
  },
  {
    class: 7,
    name: "7th Class",
    attendance1: 80,
    attendance2: 80,
    attendance3: 80,
  },
  {
    class: 8,
    name: "8th Class",
    attendance1: 100,
    attendance2: 100,
    attendance3: 100,
  },
  {
    class: 9,
    name: "9th Class",
    attendance1: 97,
    attendance2: 90,
    attendance3: 96,
  },
  {
    class: 10,
    name: "10th Class",
    attendance1: 100,
    attendance2: 100,
    attendance3: 94,
  },
];
const renderRow = (text, record) => {
  return {
    children: (
      <Progress percent={text} size="small" showInfo={true} trailColor ='orange'/>
    ),
  };
}
const columns = [
  {
    title: "Class",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "A Section",
    dataIndex: "attendance1",
    key: "attendance1",
    render: renderRow,
  },
  {
    title: "B Section",
    dataIndex: "attendance2",
    key: "attendance2",
    render: renderRow,
  },
  {
    title: "C Section",
    dataIndex: "attendance3",
    key: "attendance3",
    render: renderRow,
  },
];

const ClassAttendance = () => {

  return (
    <Metrics title="Attendance" height={220}>
      <Table dataSource={data} columns={columns} pagination={false} />
    </Metrics>
  );
};
export default ClassAttendance;
