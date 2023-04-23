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
  conversionTitle,
  conversionDaily,
  conversionDailyDoD,
  conversionDailyYoY,
  conversionWeekly,
  conversionWeeklyWoW,
  conversionWeeklyYoY,
  conversionMonthly,
  conversionMonthlyMoM,
  conversionMonthlyYoY,
  conversionQuarterly,
  conversionQuarterlyQoQ,
  conversionQuarterlyYoY,
  conversionYearly,
  conversionYearlyYoY,
} from '../util/constant';

const { Title } = Typography;

export function Col4(props: ChartPtProps) {
  return (
    <Card
      key="Col4-card"
      title={conversionTitle}
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
              {conversionDaily}
            </Title>
            <Row>
              <span style={gridStyle2}>{conversionDailyDoD}</span>
              <span style={gridStyle3}>{conversionDailyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={weeklyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {conversionWeekly}
            </Title>
            <Row>
              <span style={gridStyle2}>{conversionWeeklyWoW}</span>
              <span style={gridStyle3}>{conversionWeeklyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={monthlyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {conversionMonthly}
            </Title>
            <Row>
              <span style={gridStyle2}>{conversionMonthlyMoM}</span>
              <span style={gridStyle3}>{conversionMonthlyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={quorterGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {conversionQuarterly}
            </Title>
            <Row>
              <span style={gridStyle2}>{conversionQuarterlyQoQ}</span>
              <span style={gridStyle3}>{conversionQuarterlyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>
        <Card.Grid style={yearlyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {conversionYearly}
            </Title>
            <Row>
              <span style={gridStyle2}>-</span>
              <span style={gridStyle3}>{conversionYearlyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>
      </Space>
    </Card>
  );
}
