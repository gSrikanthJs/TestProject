import React from "react";
import { Col, Row, PageHeader} from "antd";

import Students from "../../../../app/components/dashboard/DP/Students";
import Admissions from "../../../../app/components/dashboard/DP/Admissions";
import Staff from "../../../../app/components/dashboard/DP/Staff";
import FeeSummary from "../../../../app/components/dashboard/DP/FeeSummary";
import FeeGraph from "../../../../app/components/dashboard/DP/FeeGraph";
import IncomeExpenseChart from "../../../../app/components/dashboard/DP/IncomeExpenseChart";
import ClassAttendance from "../../../../app/components/dashboard/DP/ClassAttendance";
import ClassSumary from "../../../../app/components/dashboard/DP/ClassSummary";

import SchoolEvents from "../../../../app/components/dashboard/DP/SchoolEvents";
import FeeDefaulters from "../../../../app/components/dashboard/DP/FeeDefaulters";
import TeachersAttendance from "../../../../app/components/dashboard/DP/TeachersAttendance";
import {recentActivity, taskList, trafficData} from "./data";

const CRM = () => {
  return (
    <React.Fragment>
      <PageHeader
        className="site-page-header"
        title="Dashboard"
      />
      <Row>
        <Col span={24}>
          <Row>
            <Col xl={6} lg={12} md={12} sm={12} xs={24}>
              <Students/>
            </Col>
            <Col xl={6} lg={12} md={12} sm={12} xs={24} >
              <Admissions/>
            </Col>
            <Col xl={6} lg={12} md={12} sm={12} xs={24}>
              <Staff/>
            </Col>
            <Col xl={6} lg={12} md={12} sm={12} xs={24}>
              <FeeSummary />
            </Col>
          </Row>
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <FeeGraph/>
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <IncomeExpenseChart/>
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <ClassAttendance />
        </Col>
        <Col xl={7} lg={7} md={7} sm={24} xs={24}>
          <ClassSumary />
        </Col>
        <Col xl={5} lg={5} md={5} sm={24} xs={24}>
          <SchoolEvents />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <FeeDefaulters />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <TeachersAttendance />
        </Col>

      </Row>
    </React.Fragment>
  );
};

export default CRM;
