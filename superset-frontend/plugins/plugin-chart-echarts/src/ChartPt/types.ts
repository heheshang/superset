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
import {
  QueryFormData,
  supersetTheme,
  TimeseriesDataRecord,
} from '@superset-ui/core';
import { EchartsProps } from '../types';
import { DailyChartContent } from './chartCompent/DailyChart';
import { MonthlyChartContent } from './chartCompent/MonthlyChart';
import { QuorterChartContent } from './chartCompent/QuorterChart';
import { WeeklyChartContent } from './chartCompent/WeeklyChart';
import { YearlyChartContent } from './chartCompent/YearlyChart';

export interface ChartPtStylesProps {
  height: number;
  width: number;
  headerFontSize: keyof typeof supersetTheme.typography.sizes;
  boldText: boolean;
}

interface ChartPtCustomizeProps {
  headerText: string;
  title: string;
}

export type ChartPtQueryFormData = QueryFormData &
  ChartPtStylesProps &
  ChartPtCustomizeProps;

export type ChartPtLineProps = ChartPtStylesProps &
  ChartPtCustomizeProps & {
    data: TimeseriesDataRecord[];
    // add typing here for the props you pass in from transformProps.ts!
  };
export type CustChartPtLineProps = ChartPtLineProps & EchartsProps;

export interface CustomChartProps {
  height: number;
  width: number;
  echartOptions: any;
  headerFontSize: 's' | 'm' | 'l';
  boldText: boolean;
  headerText: string;
  title: string;
  data: any;
}
enum ChartTitle {
  DailyNetRevenue = 'Net Revenue',
  DailyShopperVisits = 'Shopper Visits',
  DailyConversionRate = 'Conversion Rate',

  WeeklyNetRevenue = 'Net Revenue',
  WeeklyShopperVisits = 'Shopper Visits',
  WeeklyConversionRate = 'Conversion Rate',

  MonthlyNetRevenue = 'Net Revenue',
  MonthlyShopperVisits = 'Shopper Visits',
  MonthlyConversionRate = 'Conversion Rate',

  QuorterNetRevenue = 'Net Revenue',
  QuorterShopperVisits = 'Shopper Visits',
  QuorterConversionRate = 'Conversion Rate',

  YearlyNetRevenue = 'Net Revenue',
  YearlyShopperVisits = 'Shopper Visits',
  YearlyConversionRate = 'Conversion Rate',
}
const chartComponents = [
  {
    key: 'Daily',
    title: ChartTitle.DailyNetRevenue,
    component: DailyChartContent,
  },
  {
    key: 'Daily',
    title: ChartTitle.DailyShopperVisits,
    component: DailyChartContent,
  },
  {
    key: 'Daily',
    title: ChartTitle.DailyConversionRate,
    component: DailyChartContent,
  },

  {
    key: 'WTD',
    title: ChartTitle.WeeklyNetRevenue,
    component: WeeklyChartContent,
  },
  {
    key: 'WTD',
    title: ChartTitle.WeeklyShopperVisits,
    component: WeeklyChartContent,
  },
  {
    key: 'WTD',
    title: ChartTitle.WeeklyConversionRate,
    component: WeeklyChartContent,
  },

  {
    key: 'MTD',
    title: ChartTitle.MonthlyNetRevenue,
    component: MonthlyChartContent,
  },
  {
    key: 'MTD',
    title: ChartTitle.MonthlyShopperVisits,
    component: MonthlyChartContent,
  },
  {
    key: 'MTD',
    title: ChartTitle.MonthlyConversionRate,
    component: MonthlyChartContent,
  },

  {
    key: 'QTD',
    title: ChartTitle.QuorterNetRevenue,
    component: QuorterChartContent,
  },
  {
    key: 'QTD',
    title: ChartTitle.QuorterShopperVisits,
    component: QuorterChartContent,
  },
  {
    key: 'QTD',
    title: ChartTitle.QuorterConversionRate,
    component: QuorterChartContent,
  },

  {
    key: 'YTD',
    title: ChartTitle.YearlyNetRevenue,
    component: YearlyChartContent,
  },
  {
    key: 'YTD',
    title: ChartTitle.YearlyShopperVisits,
    component: YearlyChartContent,
  },
  {
    key: 'YTD',
    title: ChartTitle.YearlyConversionRate,
    component: YearlyChartContent,
  },
];
export { ChartTitle, chartComponents };
