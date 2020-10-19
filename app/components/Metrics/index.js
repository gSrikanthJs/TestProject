import React from "react";
import {Card} from "antd";
import PropTypes from "prop-types";


const Metrics = ({title, extra, styleName, children, height}) => {
  return (
    <Card title={title} extra={extra} className={`gx-card-metrics ${styleName}`} style={{height, 'overflow-y':'auto', 'overflow-x': 'hidden'}}>
      {children}
    </Card>
  )
};

export default Metrics;
Metrics.defaultProps = {
  styleName: ""
};

Metrics.propTypes = {
  title: PropTypes.string.isRequired,
  styleName: PropTypes.string,
  children: PropTypes.node.isRequired
};
