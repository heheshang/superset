// import { Card, Space, Typography } from 'antd';
import { Card, Space } from 'antd';
import React from 'react';
import ChartCard from './ChartCard'; // 提取为单独组件
import {
  cardBodyBackGroundColor,
  dailyGridStyle,
  monthlyGridStyle,
  quorterGridStyle,
  weeklyGridStyle,
  yearlyGridStyle,
} from '../styles/css';
import { CustomColProps } from '../types';

// const { Title } = Typography;

const CustomCol = (props: CustomColProps) => (
  <Card
    key={props.Title}
    // title={<Title level={4}> {props.Title}</Title>}
    title={props.Title}
    bordered={false}
    hoverable
    bodyStyle={{ backgroundColor: cardBodyBackGroundColor }}
    headStyle={{ textAlign: 'center' }}
    style={{ width: '100%', textAlign: 'center' }}
  >
    <Space direction="vertical" size="small" style={{ display: 'flex' }}>
      <ChartCard
        title="Daily Net Revenue"
        value={props.Daily}
        tooltip1={props.DailyDoDToolTip}
        value1={props.DailyDoD}
        tooltip2={props.DailyYoYToolTip}
        value2={props.DailyYoY}
        style={dailyGridStyle}
      />
      <ChartCard
        title="Weekly Net Revenue"
        value={props.Weekly}
        tooltip1={props.WeeklyWoWToolTip}
        value1={props.WeeklyWoW}
        tooltip2={props.WeeklyYoYToolTip}
        value2={props.WeeklyYoY}
        style={weeklyGridStyle}
      />
      <ChartCard
        title="Monthly Net Revenue"
        value={props.Monthly}
        tooltip1={props.MonthlyMoMToolTip}
        value1={props.MonthlyMoM}
        tooltip2={props.MonthlyYoYToolTip}
        value2={props.MonthlyYoY}
        style={monthlyGridStyle}
      />
      <ChartCard
        title="Quarterly Net Revenue"
        value={props.Quarterly}
        tooltip1={props.QuarterlyQoQToolTip}
        value1={props.QuarterlyQoQ}
        tooltip2={props.QuarterlyYoYToolTip}
        value2={props.QuarterlyYoY}
        style={quorterGridStyle}
      />
      <ChartCard
        title="Yearly Net Revenue"
        value={props.Yearly}
        tooltip2={props.YearlyYoYToolTip}
        value2={props.YearlyYoY}
        tooltip1=""
        value1=""
        style={yearlyGridStyle}
      />
    </Space>
  </Card>
);

export default CustomCol;
