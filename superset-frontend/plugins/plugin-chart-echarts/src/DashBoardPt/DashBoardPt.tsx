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
import { Card, Row, Col, Typography } from 'antd';
import { ChartPtProps } from './types';
import CustomCol from './compent/CustomCol';
import customColList, {
  cancelAmountTitle,
  conversionTitle,
  netRevenueTitle,
  returnAmountTitle,
  shopperVisitsTitle,
} from './util/constant';

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

const formatter_data_precent = (data: string | number | null): string => {
  if (typeof data === 'number') {
    return `${data.toFixed(2)}%`;
  }
  if (typeof data === 'string') {
    return `${parseFloat(data).toFixed(2)}%`;
  }
  return '0.00%';
};
const formatter_data_net_revenue = (data: string | number | null): string => {
  if (typeof data === 'number') {
    return `$${(data / 1000000).toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })}M`;
  }
  if (typeof data === 'string') {
    return `$${(Number(data) / 1000000).toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })}M`;
  }
  return '$0.00M';
};
const formatter_data_shopper_visits = (
  data: string | number | null,
): string => {
  if (typeof data === 'number') {
    return `${(data / 1000000).toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })}M`;
  }
  if (typeof data === 'string') {
    return `${(Number(data) / 1000000).toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })}M`;
  }
  return '0.00M';
};

export default function DashBoardPt(props: ChartPtProps) {
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
  console.log('Plugin data', data);

  const { adobe_refresh_ts, gpv2_refresh_ts, hybris_refresh_ts } = data[0];
  customColList.forEach(config => {
    if (config.Title === '\u00A0') {
      if (data[0].event_date_local === null) {
        const datetime = `${new Date().getFullYear()}-${
          new Date().getUTCMonth() + 1
        }-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;

        config.Daily = datetime;
      } else {
        const dateString = `${data[0].event_date_local}`;
        const year = dateString.substring(0, 4);
        const month = dateString.substring(4, 6);
        const day = dateString.substring(6, 8);
        const formattedDate = `${year}/${month}/${day}`;
        // console.log(formattedDate); // 输出 "2021/01/01"
        config.Daily = formattedDate;
      }
    }
    if (config.Title == netRevenueTitle) {
      config.Daily = formatter_data_net_revenue(data[0].net_revenue);
      config.Weekly = formatter_data_net_revenue(data[0].net_revenue_w);
      config.Monthly = formatter_data_net_revenue(data[0].net_revenue_m);
      config.Yearly = formatter_data_net_revenue(data[0].net_revenue_y);
      config.Quarterly = formatter_data_net_revenue(data[0].net_revenue_q);
    }
    if (config.Title == shopperVisitsTitle) {
      config.Daily = formatter_data_shopper_visits(data[0].shopper_visits);
      config.Weekly = formatter_data_shopper_visits(data[0].shopper_visits_w);
      config.Monthly = formatter_data_shopper_visits(data[0].shopper_visits_m);
      config.Yearly = formatter_data_shopper_visits(data[0].shopper_visits_y);
      config.Quarterly = formatter_data_shopper_visits(
        data[0].shopper_visits_q,
      );
    }
    if (config.Title == conversionTitle) {
      config.Daily = formatter_data_precent(data[0].conersion);
      config.Weekly = formatter_data_precent(data[0].conersion_w);
      config.Monthly = formatter_data_precent(data[0].conersion_m);
      config.Yearly = formatter_data_precent(data[0].conersion_y);
      config.Quarterly = formatter_data_precent(data[0].conersion_q);
    }
    if (config.Title == cancelAmountTitle) {
      config.Daily = formatter_data_precent(data[0].cancel_amount);
      config.Weekly = formatter_data_precent(data[0].cancel_amount_w);
      config.Monthly = formatter_data_precent(data[0].cancel_amount_m);
      config.Yearly = formatter_data_precent(data[0].cancel_amount_y);
      config.Quarterly = formatter_data_precent(data[0].cancel_amount_q);
    }
    if (config.Title == returnAmountTitle) {
      config.Daily = formatter_data_precent(data[0].cancel_amount);
      config.Weekly = formatter_data_precent(data[0].cancel_amount_w);
      config.Monthly = formatter_data_precent(data[0].cancel_amount_m);
      config.Yearly = formatter_data_precent(data[0].cancel_amount_y);
      config.Quarterly = formatter_data_precent(data[0].cancel_amount_q);
    }
  });
  return (
    <div>
      <Card
        key={1}
        style={{ width, height }}
        title={'\u00A0'}
        extra={
          <div>
            <Row key="row1" justify="end" align="middle">
              <Text style={{ fontSize: 1 }}>Last refresh time (GMT)</Text>
            </Row>
            <Row key="row2" justify="end" align="middle">
              <Text style={{ fontSize: 1 }}>Adobe: {adobe_refresh_ts}</Text>
            </Row>
            <Row key="row3" justify="end" align="middle">
              <Text style={{ fontSize: 1 }}>Hybris: {hybris_refresh_ts}</Text>
            </Row>
            <Row key="row4" justify="end" align="middle">
              <Text style={{ fontSize: 1 }}>GPV2: {gpv2_refresh_ts}</Text>
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
      </Card>
    </div>
  );
}
