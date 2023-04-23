import { Card, Col, Typography, Row, Space } from 'antd';
import React from 'react';
import { ChartPtProps } from '../types';
import {
  dailyGridStyle,
  weeklyGridStyle,
  monthlyGridStyle,
  quorterGridStyle,
  yearlyGridStyle,
  gridStyle2,
  gridStyle3,
  cardBodyBackGroundColor,
} from '../styles/css';

import {
  cancelAmountTitle,
  cancelAmountDaily,
  cancelAmountDailyDoD,
  cancelAmountDailyYoY,
  cancelAmountWeekly,
  cancelAmountWeeklyWoW,
  cancelAmountWeeklyYoY,
  cancelAmountMonthly,
  cancelAmountMonthlyMoM,
  cancelAmountMonthlyYoY,
  cancelAmountQuarterly,
  cancelAmountQuarterlyQoQ,
  cancelAmountQuarterlyYoY,
  cancelAmountYearly,
  cancelAmountYearlyYoY,
} from '../util/constant';

const { Title } = Typography;

export function Col5(props: ChartPtProps) {
  return (
    <Card
      key="Col5-card"
      title={cancelAmountTitle}
      bordered={false}
      hoverable
      bodyStyle={{ backgroundColor: cardBodyBackGroundColor }}
      headStyle={{ textAlign: 'center' }}
      style={{ width: '100%', textAlign: 'center' }}
    >
      <Space direction="vertical" size="small" style={{ display: 'flex' }}>
        <Card.Grid style={dailyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {cancelAmountDaily}
            </Title>
            <Row>
              <span style={gridStyle2}>{cancelAmountDailyDoD}</span>
              <span style={gridStyle3}>{cancelAmountDailyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={weeklyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {cancelAmountWeekly}
            </Title>
            <Row>
              <span style={gridStyle2}>{cancelAmountWeeklyWoW}</span>
              <span style={gridStyle3}>{cancelAmountWeeklyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={monthlyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {cancelAmountMonthly}
            </Title>
            <Row>
              <span style={gridStyle2}>{cancelAmountMonthlyMoM}</span>
              <span style={gridStyle3}>{cancelAmountMonthlyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={quorterGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {cancelAmountQuarterly}
            </Title>
            <Row>
              <span style={gridStyle2}>{cancelAmountQuarterlyQoQ}</span>
              <span style={gridStyle3}>{cancelAmountQuarterlyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>
        <Card.Grid style={yearlyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {cancelAmountYearly}
            </Title>
            <Row>
              <span style={gridStyle2}>-</span>
              <span style={gridStyle3}>{cancelAmountYearlyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>
      </Space>
    </Card>
  );
}
