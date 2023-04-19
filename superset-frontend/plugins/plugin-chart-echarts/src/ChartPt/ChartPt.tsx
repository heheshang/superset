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
import { Col1 } from './compent/Col1';
import { Col2 } from './compent/Col2';
import { Col3 } from './compent/Col3';
import { Col4 } from './compent/Col4';
import { Col5 } from './compent/Col5';
import { Col6 } from './compent/Col6';
import { DailyChartContent } from './chartCompent/DailyChart';
import { WeeklyChartContent } from './chartCompent/WeeklyChart';
import { MonthlyChartContent } from './chartCompent/MonthlyChart';
import { QuorterChartContent } from './chartCompent/QuorterChart';
import { YearlyChartContent } from './chartCompent/YearlyChart';

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

/**
 * ******************* WHAT YOU CAN BUILD HERE *******************
 *  In essence, a chart is given a few key ingredients to work with:
 *  * Data: provided via `props.data`
 *  * A DOM element
 *  * FormData (your controls!) provided as props by transformProps.ts
 */

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
      {/* <Divider /> */}
      {/* <Col style={{ textAlign: "end" }}> */}
      <Card
        style={{ width, height }}
        // title="Card title"
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
        {/* </Col> */}
        {/* <Divider /> */}
        <Row>
          <Col span={4}>
            <Col1
              height={100}
              width={0}
              headerFontSize="s"
              boldText={false}
              headerText=""
              data={data}
            />
          </Col>
          <Col span={4}>
            <Col2
              height={100}
              width={0}
              headerFontSize="s"
              boldText={false}
              headerText=""
              data={data}
            />
          </Col>
          <Col span={4}>
            <Col3
              height={100}
              width={0}
              headerFontSize="s"
              boldText={false}
              headerText=""
              data={data}
            />
          </Col>
          <Col span={4}>
            <Col4
              height={100}
              width={0}
              headerFontSize="s"
              boldText={false}
              headerText=""
              data={data}
            />
          </Col>
          <Col span={4}>
            <Col5
              height={100}
              width={0}
              headerFontSize="s"
              boldText={false}
              headerText=""
              data={data}
            />
          </Col>
          <Col span={4}>
            <Col6
              height={100}
              width={0}
              headerFontSize="s"
              boldText={false}
              headerText=""
              data={data}
            />
          </Col>
        </Row>
        <Row>
          <Tabs style={{ marginTop: 10 }}>
            <Tabs.TabPane tab="Daily" key="Daily">
              {/* <Row> */}
              <Space direction="horizontal" align="center" wrap={false}>
                {/* <Col> */}
                <div style={{ height: 300, width: 500 }}>
                  <DailyChartContent />
                </div>
                {/* </Col> */}
                {/* <Col> */}
                <div style={{ height: 300, width: 500 }}>
                  <DailyChartContent />
                </div>
                {/* </Col> */}
                {/* <Col> */}
                <div style={{ height: 300, width: 500 }}>
                  <DailyChartContent />
                </div>
                {/* </Col> */}
              </Space>
              {/* </Row> */}
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
