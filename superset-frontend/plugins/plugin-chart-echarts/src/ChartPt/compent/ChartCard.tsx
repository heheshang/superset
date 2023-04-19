import { Card, Col, Typography, Row, Tooltip } from 'antd';
import React from 'react';
import { ChartCardProps } from '../types';
import { gridStyle2, gridStyle3 } from '../styles/css';

const { Title } = Typography;

const ChartCard = ({
  value,
  tooltip1,
  value1,
  tooltip2,
  value2,
  style,
}: ChartCardProps) => {
  return (
    <Card.Grid style={style}>
      <Col>
        <Title level={5} style={{ textAlign: 'center', marginTop: 'auto' }}>
          {value}
        </Title>
        <Row>
          <Tooltip title={tooltip1}>
            <span style={gridStyle2}>{value1}</span>
          </Tooltip>
          <Tooltip title={tooltip2}>
            <span style={gridStyle3}>{value2}</span>
          </Tooltip>
        </Row>
      </Col>
    </Card.Grid>
  );
};

export default ChartCard;
