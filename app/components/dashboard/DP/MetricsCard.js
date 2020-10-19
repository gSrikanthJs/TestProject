import React from "react";

import LineIndicator from "./LineIndicator";
import Metrics from "../../../components/Metrics";
import { Col, Row, Statistic, Progress, Divider } from "antd";
import { UserOutlined } from '@ant-design/icons';

const MetricsCard = ({data}) => {
	console.log(data);
	const {title, prop1, prop2} = data;
  const total = prop1.value + prop2.value;
  return (
    <Metrics title={title} styleName="extra" extra={total}>
      <Row gutter={16}>
        <Col span="11">
          <Row>
            <Col span="10">
              <Statistic
                title={prop1.label}
                value={prop1.value}
                valueStyle={{ fontSize: "1em" }}
              />
            </Col>
            <Col span="14" style={{ paddingRight: 0, textAlign: "right" }}>
              <UserOutlined style={{ fontSize: "1.5em", float: "right" }} />
              <div>{((prop1.value / total) * 100).toFixed(0) + "%"}</div>
            </Col>
          </Row>
          <Row>
            <Col span="24">
              <Progress
                percent={((prop1.value / total) * 100).toFixed(0)}
                size="small"
                showInfo={false}
              />
            </Col>
          </Row>
        </Col>
        <Col span="2">
          <Divider type="vertical" style={{ height: "100%" }} />
        </Col>
        <Col span="11">
          <Row>
            <Col span="10">
              <Statistic
                title={prop2.label}
								value={prop2.value}
                valueStyle={{ fontSize: "0.9em" }}
              />
            </Col>
            <Col span="14" style={{ paddingRight: 0, textAlign: "right" }}>
              <UserOutlined style={{ fontSize: "1.5em", float: "right" }} />
              <div>{((prop2.value / total) * 100).toFixed(0) + "%"}</div>
            </Col>
          </Row>
          <Row>
            <Col span="24">
              <Progress
                percent={((prop2.value / total) * 100).toFixed(0)}
                size="small"
                showInfo={false}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Metrics>
  );
};
export default MetricsCard;
