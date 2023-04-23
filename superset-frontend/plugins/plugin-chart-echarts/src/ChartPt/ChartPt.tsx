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
import React, { createRef, useEffect } from 'react';
// import { CustomChartContent } from './chartCompent/CustomChartContent';
import { Row, Space, Tabs } from 'antd';

import { ChartPtLineProps, CustomChartProps, chartComponents } from './types';

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
interface RenderTabPaneProps {
  tabKey: string;
  componentProps: CustomChartComponentProps;
}

const renderTabPane: React.FC<RenderTabPaneProps> = props => {
  const { tabKey, componentProps } = props;
  const { data } = componentProps;
  const components = chartComponents
    .filter(({ key }) => key === tabKey)
    .map(({ title, component }) => {
      const Component = component as React.FC<CustomChartProps>;
      return (
        <Component
          key={title}
          height={300}
          width={500}
          echartOptions={{}}
          headerFontSize="s"
          boldText={false}
          headerText=""
          title={title}
          data={data}
        />
      );
    });

  return (
    <Tabs.TabPane tab={tabKey} key={tabKey}>
      <Row>
        <Space direction="horizontal" align="center" wrap={false}>
          {components}
        </Space>
      </Row>
    </Tabs.TabPane>
  );
};

interface CustomChartComponentProps {
  data: any;
}

const CustomChartComponent: React.FC<CustomChartComponentProps> = props => {
  const daily: RenderTabPaneProps = {
    tabKey: 'Daily',
    componentProps: props,
  };
  const WTD: RenderTabPaneProps = {
    tabKey: 'WTD',
    componentProps: props,
  };
  const MTD: RenderTabPaneProps = {
    tabKey: 'MTD',
    componentProps: props,
  };
  const QTD: RenderTabPaneProps = {
    tabKey: 'QTD',
    componentProps: props,
  };
  const YTD: RenderTabPaneProps = {
    tabKey: 'YTD',
    componentProps: props,
  };

  return (
    <Tabs>
      {renderTabPane(daily)}
      {renderTabPane(WTD)}
      {renderTabPane(MTD)}
      {renderTabPane(QTD)}
      {renderTabPane(YTD)}
    </Tabs>
  );
};

export default function ChartPt(props: ChartPtLineProps) {
  // height and width are the height and width of the DOM element as it exists in the dashboard.
  // There is also a `data` prop, which is, of course, your DATA 🎉
  const { data } = props;
  const rootElem = createRef<HTMLDivElement>();
  // Often, you just want to get a hold of the DOM and go nuts.
  // Here, you can do that with createRef, and the useEffect hook.
  useEffect(() => {
    const root = rootElem.current as HTMLElement;
    console.log('Plugin element', root);
  });

  console.log('Plugin props', props);

  return (
    /*  <Row>
      <Tabs style={{ marginTop: 10 }}>
        <Tabs.TabPane tab="Daily" key="Daily">
          <Space direction="horizontal" align="center" wrap={false}>
            <DailyChartContent
              height={300}
              width={500}
              echartOptions={{}}
              headerFontSize="s"
              boldText={false}
              headerText=""
              title="Net Revenue"
              data={data}
            />
            <DailyChartContent
              height={300}
              width={500}
              echartOptions={{}}
              headerFontSize="s"
              boldText={false}
              headerText=""
              title="Shopper visits"
              data={data}
            />
            <DailyChartContent
              height={300}
              width={500}
              echartOptions={{}}
              headerFontSize="s"
              boldText={false}
              headerText=""
              title="Conversion Rate"
              data={data}
            />
          </Space>
        </Tabs.TabPane>

        <Tabs.TabPane tab="WTD" key="WTD">
          <Row>
            <Space direction="horizontal" align="center" wrap={false}>
              <WeeklyChartContent
                height={300}
                width={500}
                echartOptions={{}}
                headerFontSize="s"
                boldText={false}
                headerText=""
                title="Net Revenue"
                data={data}
              />
              <WeeklyChartContent
                height={300}
                width={500}
                echartOptions={{}}
                headerFontSize="s"
                boldText={false}
                headerText=""
                title="Shopper visits"
                data={data}
              />
              <WeeklyChartContent
                height={300}
                width={500}
                echartOptions={{}}
                headerFontSize="s"
                boldText={false}
                headerText=""
                title="Conversion Rate"
                data={data}
              />
            </Space>
          </Row>
        </Tabs.TabPane>

        <Tabs.TabPane tab="MTD" key="MTD">
          <Row>
            <Space direction="horizontal" align="center" wrap={false}>
              <MonthlyChartContent
                height={300}
                width={500}
                echartOptions={{}}
                headerFontSize="s"
                boldText={false}
                headerText=""
                title="Net Revenue"
                data={data}
              />
              <MonthlyChartContent
                height={300}
                width={500}
                echartOptions={{}}
                headerFontSize="s"
                boldText={false}
                headerText=""
                title="Shopper visits"
                data={data}
              />
              <MonthlyChartContent
                height={300}
                width={500}
                echartOptions={{}}
                headerFontSize="s"
                boldText={false}
                headerText=""
                title="Conversion Rate"
                data={data}
              />
            </Space>
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="QTD" key="QTD">
          <Row>
            <Space direction="horizontal" align="center" wrap={false}>
              <QuorterChartContent
                height={300}
                width={500}
                echartOptions={{}}
                headerFontSize="s"
                boldText={false}
                headerText=""
                title="Net Revenue"
                data={data}
              />
              <QuorterChartContent
                height={300}
                width={500}
                echartOptions={{}}
                headerFontSize="s"
                boldText={false}
                headerText=""
                title="Shopper visits"
                data={data}
              />
              <QuorterChartContent
                height={300}
                width={500}
                echartOptions={{}}
                headerFontSize="s"
                boldText={false}
                headerText=""
                title="Conversion Rate"
                data={data}
              />
            </Space>
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="YTD" key="YTD">
          <Row>
            <Space direction="horizontal" align="center" wrap={false}>
              <QuorterChartContent
                height={300}
                width={500}
                echartOptions={{}}
                headerFontSize="s"
                boldText={false}
                headerText=""
                title="Net Revenue"
                data={data}
              />
              <QuorterChartContent
                height={300}
                width={500}
                echartOptions={{}}
                headerFontSize="s"
                boldText={false}
                headerText=""
                title="Shopper visits"
                data={data}
              />
              <QuorterChartContent
                height={300}
                width={500}
                echartOptions={{}}
                headerFontSize="s"
                boldText={false}
                headerText=""
                title="Conversion Rate"
                data={data}
              />
            </Space>
          </Row>
        </Tabs.TabPane>
      </Tabs>
    </Row> */
    <CustomChartComponent data={data} />
  );
}
