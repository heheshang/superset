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

const { Title } = Typography;

export function Col1(props: ChartPtProps) {
  return (
    <Card
      key="Col1-card"
      title={'\u00A0'}
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
              2023/04/08
            </Title>
            <Row>
              <span style={gridStyle2}>DoD</span>
              <span style={gridStyle3}>YoY</span>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={weeklyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              2023/04/08
            </Title>
            <Row>
              <span style={gridStyle2}>DoD</span>
              <span style={gridStyle3}>YoY</span>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={monthlyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              2023/04/08
            </Title>
            <Row>
              <span style={gridStyle2}>DoD</span>
              <span style={gridStyle3}>YoY</span>
            </Row>
          </Col>
        </Card.Grid>

        <Card.Grid style={quorterGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              2023/04/08
            </Title>
            <Row>
              <span style={gridStyle2}>DoD</span>
              <span style={gridStyle3}>YoY</span>
            </Row>
          </Col>
        </Card.Grid>
        <Card.Grid style={yearlyGridStyle}>
          <Col>
            <Title level={4} style={{ textAlign: 'center', marginTop: 'auto' }}>
              2023/04/08
            </Title>
            <Row>
              <span style={gridStyle2}>DoD</span>
              <span style={gridStyle3}>YoY</span>
            </Row>
          </Col>
        </Card.Grid>
      </Space>
    </Card>
  );
}
