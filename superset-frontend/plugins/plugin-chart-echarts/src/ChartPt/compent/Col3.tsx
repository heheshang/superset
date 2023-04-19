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
  shopperVisitsTitle,
  shopperVisitsDaily,
  shopperVisitsDailyDoD,
  shopperVisitsDailyYoY,
  shopperVisitsWeekly,
  shopperVisitsWeeklyWoW,
  shopperVisitsWeeklyYoY,
  shopperVisitsMonthly,
  shopperVisitsMonthlyMoM,
  shopperVisitsMonthlyYoY,
  shopperVisitsQuarterly,
  shopperVisitsQuarterlyQoQ,
  shopperVisitsQuarterlyYoY,
  shopperVisitsYearly,
  shopperVisitsYearlyYoY,
} from '../util/constant';

const { Title } = Typography;

export function Col3(props: ChartPtProps) {
  return (
    <Card
      key="Col3-card"
      title={shopperVisitsTitle}
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
              {shopperVisitsDaily}
            </Title>
            <Row>
              <span style={gridStyle2}>{shopperVisitsDailyDoD}</span>
              <span style={gridStyle3}>{shopperVisitsDailyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={weeklyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {shopperVisitsWeekly}
            </Title>
            <Row>
              <span style={gridStyle2}>{shopperVisitsWeeklyWoW}</span>
              <span style={gridStyle3}>{shopperVisitsWeeklyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={monthlyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {shopperVisitsMonthly}
            </Title>
            <Row>
              <span style={gridStyle2}>{shopperVisitsMonthlyMoM}</span>
              <span style={gridStyle3}>{shopperVisitsMonthlyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={quorterGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {shopperVisitsQuarterly}
            </Title>
            <Row>
              <span style={gridStyle2}>{shopperVisitsQuarterlyQoQ}</span>
              <span style={gridStyle3}>{shopperVisitsQuarterlyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>
        <Card.Grid style={yearlyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {shopperVisitsYearly}
            </Title>
            <Row>
              <span style={gridStyle2}>-</span>
              <span style={gridStyle3}>{shopperVisitsYearlyYoY}</span>
            </Row>
          </Col>
        </Card.Grid>
      </Space>
    </Card>
  );
}
