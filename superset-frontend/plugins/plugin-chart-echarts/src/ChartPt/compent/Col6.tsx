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
  returnAmountTitle,
  returnAmountDaily,
  returnAmountDailyDoD,
  returnAmountDailyYoY,
  returnAmountWeekly,
  returnAmountWeeklyWoW,
  returnAmountWeeklyYoY,
  returnAmountMonthly,
  returnAmountMonthlyMoM,
  returnAmountMonthlyYoY,
  returnAmountQuarterly,
  returnAmountQuarterlyQoQ,
  returnAmountQuarterlyYoY,
  returnAmountYearly,
  returnAmountYearlyYoY,
} from '../util/constant';

const { Title } = Typography;

export function Col6(props: ChartPtProps) {
  return (
    <Card
      key="Col6-card"
      title={returnAmountTitle}
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
              {returnAmountDaily}
            </Title>
            <Row>
              <span style={gridStyle2}>{returnAmountDailyDoD}</span>
              <span style={gridStyle3}>{returnAmountDailyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={weeklyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {returnAmountWeekly}
            </Title>
            <Row>
              <span style={gridStyle2}>{returnAmountWeeklyWoW}</span>
              <span style={gridStyle3}>{returnAmountWeeklyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={monthlyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {returnAmountMonthly}
            </Title>
            <Row>
              <span style={gridStyle2}>{returnAmountMonthlyMoM}</span>
              <span style={gridStyle3}>{returnAmountMonthlyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={quorterGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {returnAmountQuarterly}
            </Title>
            <Row>
              <span style={gridStyle2}>{returnAmountQuarterlyQoQ}</span>
              <span style={gridStyle3}>{returnAmountQuarterlyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>
        <Card.Grid style={yearlyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {returnAmountYearly}
            </Title>
            <Row>
              <span style={gridStyle2}>-</span>
              <span style={gridStyle3}>{returnAmountYearlyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>
      </Space>
    </Card>
  );
}
