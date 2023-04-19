import { Card, Col, Typography, Row, Space, Tooltip } from 'antd';
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
  netRevenueTitle,
  netRevenueDaily,
  netRevenueDailyDoD,
  netRevenueDailyYoY,
  netRevenueWeekly,
  netRevenueWeeklyWoW,
  netRevenueWeeklyYoY,
  netRevenueMonthly,
  netRevenueMonthlyMoM,
  netRevenueMonthlyYoY,
  netRevenueQuarterly,
  netRevenueQuarterlyQoQ,
  netRevenueQuarterlyYoY,
  netRevenueYearly,
  netRevenueYearlyYoY,
  netRevenueDailyDoDToolTip,
  netRevenueDailyYoYToolTip,
  netRevenueWeeklyWoWToolTip,
  netRevenueWeeklyYoYToolTip,
  netRevenueMonthlyMoMToolTip,
  netRevenueMonthlyYoYToolTip,
  netRevenueQuarterlyQoQToolTip,
  netRevenueQuarterlyYoYToolTip,
} from '../util/constant';

const { Title } = Typography;

export function Col2(props: ChartPtProps) {
  return (
    <Card
      key="Col2-card"
      title={netRevenueTitle}
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
              {netRevenueDaily}
            </Title>
            <Row>
              <Tooltip title={netRevenueDailyDoDToolTip}>
                <span style={gridStyle2}>{netRevenueDailyDoD}</span>
              </Tooltip>
              <Tooltip title={netRevenueDailyYoYToolTip}>
                <span style={gridStyle3}>{netRevenueDailyYoY}</span>
              </Tooltip>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={weeklyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {netRevenueWeekly}
            </Title>
            <Row>
              <Tooltip title={netRevenueWeeklyWoWToolTip}>
                <span style={gridStyle2}>{netRevenueWeeklyWoW}</span>
              </Tooltip>
              <Tooltip title={netRevenueWeeklyYoYToolTip}>
                <span style={gridStyle3}>{netRevenueWeeklyYoY}</span>
              </Tooltip>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={monthlyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {netRevenueMonthly}
            </Title>
            <Row>
              <Tooltip title={netRevenueMonthlyMoMToolTip}>
                <span style={gridStyle2}>{netRevenueMonthlyMoM}</span>
              </Tooltip>
              <Tooltip title={netRevenueMonthlyYoYToolTip}>
                <span style={gridStyle3}>{netRevenueMonthlyYoY}</span>
              </Tooltip>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={quorterGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {netRevenueQuarterly}
            </Title>
            <Row>
              <Tooltip title={netRevenueQuarterlyQoQToolTip}>
                <span style={gridStyle2}>{netRevenueQuarterlyQoQ}</span>
              </Tooltip>
              <Tooltip title={netRevenueQuarterlyYoYToolTip}>
                <span style={gridStyle3}>{netRevenueQuarterlyYoY}</span>
              </Tooltip>
            </Row>
          </Col>
        </Card.Grid>
        <Card.Grid style={yearlyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              {netRevenueYearly}
            </Title>
            <Row>
              <span style={gridStyle2}>-</span>
              <Tooltip title={netRevenueQuarterlyYoYToolTip}>
                <span style={gridStyle3}>{netRevenueYearlyYoY}</span>
              </Tooltip>
            </Row>
          </Col>
        </Card.Grid>
      </Space>
    </Card>
  );
}
