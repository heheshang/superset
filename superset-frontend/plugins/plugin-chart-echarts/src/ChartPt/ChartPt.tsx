/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { useEffect, createRef } from 'react';
import { Card, Row, Col, Tabs, Space, Typography } from 'antd';
import { ChartPtProps } from './types';
import { DailyChartContent } from './chartCompent/DailyChart';
import { WeeklyChartContent } from './chartCompent/WeeklyChart';
import { MonthlyChartContent } from './chartCompent/MonthlyChart';
import { QuorterChartContent } from './chartCompent/QuorterChart';
import { YearlyChartContent } from './chartCompent/YearlyChart';
import CustomCol from './compent/CustomCol';
import customColList from './util/constant';

const { Text } = Typography;
// The following Styles component is a <div> element, which has been styled using Emotion
// For docs, visit https://emotion.sh/docs/styled

// Theming variables are provided for your use via a ThemeProvider
// imported from @superset-ui/core. For variables available, please visit
// https://github.com/apache-superset/superset-ui/blob/master/packages/superset-ui-core/src/style/index.ts

// const Styles = styled.div<ChartPtStylesProps>`
//   background-color: ${({ theme }) => theme.colors.secondary.light2};
//   padding: ${({ theme }) => theme.gridUnit * 4}px;
//   border-radius: ${({ theme }) => theme.gridUnit * 2}px;
//   height: ${({ height }) => height}px;
//   width: ${({ width }) => width}px;

//   h3 {
//     /* You can use your props to control CSS! */
//     margin-top: 0;
//     margin-bottom: ${({ theme }) => theme.gridUnit * 3}px;
//     font-size: ${({ theme, headerFontSize }) =>
//       theme.typography.sizes[headerFontSize]}px;
//     font-weight: ${({ theme, boldText }) =>
//       theme.typography.weights[boldText ? 'bold' : 'normal']};
//   }

//   pre {
//     height: ${({ theme, headerFontSize, height }) =>
//       height - theme.gridUnit * 12 - theme.typography.sizes[headerFontSize]}px;
//   }
// `;

export default function ChartPt(props: ChartPtProps) {
  // height and width are the height and width of the DOM element as it exists in the dashboard.
  // There is also a `data` prop, which is, of course, your DATA 🎉
  const { data, height, width } = props;

  const rootElem = createRef<HTMLDivElement>();
  
  // Often, you just want to get a hold of the DOM and go nuts.
  // Here, you can do that with createRef, and the useEffect hook.
  useEffect(() => {
    const root = rootElem.current as HTMLElement;
    console.log('Plugin element', root);
  });

  console.log('Plugin props', props);

  return (
    <div>
      <Card
        style={{ width, height }}
        title={'\u00A0'}
        extra={
          <div>
            <Row justify="end" align="middle">
              <Text style={{ fontSize: 1 }}>11111</Text>
            </Row>
            <Row justify="end" align="middle">
              <Text style={{ fontSize: 1 }}>11111</Text>
            </Row>
            <Row justify="end" align="middle">
              <Text style={{ fontSize: 1 }}>11111</Text>
            </Row>
            <Row justify="end" align="middle">
              <Text style={{ fontSize: 1 }}>11111</Text>
            </Row>
          </div>
        }
      >
        <Row>
          {customColList.map(config => (
            <Col span={4}>
              <CustomCol
                Title={config.Title}
                Daily={config.Daily}
                DailyDoD={config.DailyDoD}
                DailyYoY={config.DailyYoY}
                Weekly={config.Weekly}
                WeeklyWoW={config.WeeklyWoW}
                WeeklyYoY={config.WeeklyYoY}
                Monthly={config.Monthly}
                MonthlyMoM={config.MonthlyMoM}
                MonthlyYoY={config.MonthlyYoY}
                Quarterly={config.Quarterly}
                QuarterlyQoQ={config.QuarterlyQoQ}
                QuarterlyYoY={config.QuarterlyYoY}
                Yearly={config.Yearly}
                YearlyYoY={config.YearlyYoY}
                DailyDoDToolTip={config.DailyDoDToolTip}
                DailyYoYToolTip={config.DailyYoYToolTip}
                WeeklyWoWToolTip={config.WeeklyWoWToolTip}
                WeeklyYoYToolTip={config.WeeklyYoYToolTip}
                MonthlyMoMToolTip={config.MonthlyMoMToolTip}
                MonthlyYoYToolTip={config.MonthlyYoYToolTip}
                QuarterlyQoQToolTip={config.QuarterlyQoQToolTip}
                QuarterlyYoYToolTip={config.QuarterlyYoYToolTip}
                YearlyYoYToolTip={config.YearlyYoYToolTip}
                height={100}
                width={0}
                headerFontSize="s"
                boldText={false}
                headerText=""
                data={data}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Tabs style={{ marginTop: 10 }}>
            <Tabs.TabPane tab="Daily" key="Daily">
              <Space direction="horizontal" align="center" wrap={false}>
                {/* <div style={{ height: 300, width: 500 }}> */}
                <DailyChartContent
                  height={300}
                  width={500}
                  echartOptions={{}}
                />
                {/* </div> */}
                {/* <div style={{ height: 300, width: 500 }}> */}
                <DailyChartContent
                  height={300}
                  width={500}
                  echartOptions={{}}
                />
                {/* </div> */}
                {/* <div style={{ height: 300, width: 500 }}> */}
                <DailyChartContent
                  height={300}
                  width={500}
                  echartOptions={{}}
                />
                {/* </div> */}
              </Space>
            </Tabs.TabPane>

            <Tabs.TabPane tab="WTD" key="WTD">
              <Row>
                <Space direction="horizontal" align="center" wrap={false}>
                  <div style={{ height: 300, width: 500 }}>
                    <WeeklyChartContent />
                  </div>
                  <div style={{ height: 300, width: 500 }}>
                    <WeeklyChartContent />
                  </div>
                  <div style={{ height: 300, width: 500 }}>
                    <WeeklyChartContent />
                  </div>
                </Space>
              </Row>
            </Tabs.TabPane>

            <Tabs.TabPane tab="MTD" key="MTD">
              <Row>
                <Space direction="horizontal" align="center" wrap={false}>
                  <div style={{ height: 300, width: 500 }}>
                    <MonthlyChartContent />
                  </div>
                  <div style={{ height: 300, width: 500 }}>
                    <MonthlyChartContent />
                  </div>
                  <div style={{ height: 300, width: 500 }}>
                    <MonthlyChartContent />
                  </div>
                </Space>
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane tab="QTD" key="QTD">
              <Row>
                <Space direction="horizontal" align="center" wrap={false}>
                  <div style={{ height: 300, width: 500 }}>
                    <QuorterChartContent />
                  </div>
                  <div style={{ height: 300, width: 500 }}>
                    <QuorterChartContent />
                  </div>
                  <div style={{ height: 300, width: 500 }}>
                    <QuorterChartContent />
                  </div>
                </Space>
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane tab="YTD" key="YTD">
              <Row>
                <Space direction="horizontal" align="center" wrap={false}>
                  <div style={{ height: 300, width: 500 }}>
                    <YearlyChartContent />
                  </div>
                  <div style={{ height: 300, width: 500 }}>
                    <YearlyChartContent />
                  </div>
                  <div style={{ height: 300, width: 500 }}>
                    <YearlyChartContent />
                  </div>
                </Space>
              </Row>
            </Tabs.TabPane>
          </Tabs>
        </Row>
      </Card>
    </div>
  );
}
