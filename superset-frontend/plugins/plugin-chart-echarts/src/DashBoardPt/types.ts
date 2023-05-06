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
import { DataRecord, QueryFormData, supersetTheme } from '@superset-ui/core';
import { CSSProperties } from 'react';

export interface ChartPtStylesProps {
  height: number;
  width: number;
  headerFontSize: keyof typeof supersetTheme.typography.sizes;
  boldText: boolean;
}

interface ChartPtCustomizeProps {
  headerText: string;
}

export type ChartPtQueryFormData = QueryFormData &
  ChartPtStylesProps &
  ChartPtCustomizeProps;

export type ChartPtProps = ChartPtStylesProps &
  ChartPtCustomizeProps & {
    data: ICustomizeProps[];
    // add typing here for the props you pass in from transformProps.ts!
  };
export interface ICustomizeProps extends DataRecord {
  event_date_local: number | string | null;
  net_revenue: number | string | null;
  shopper_visits: number | string | null;
  cancel_amount: number | string | null;
  return_amount: number | string | null;
  conersion: number | string | null;
  conersion_w: number | string | null;
  conersion_m: number | string | null;
  conersion_q: number | string | null;
  conersion_y: number | string | null;
  net_revenue_w: number | string | null;
  shopper_visits_w: number | string | null;
  cancel_amount_w: number | string | null;
  return_amount_w: number | string | null;
  net_revenue_m: number | string | null;
  shopper_visits_m: number | string | null;
  cancel_amount_m: number | string | null;
  return_amount_m: number | string | null;
  net_revenue_q: number | string | null;
  shopper_visits_q: number | string | null;
  cancel_amount_q: number | string | null;
  return_amount_q: number | string | null;
  net_revenue_y: number | string | null;
  shopper_visits_y: number | string | null;
  cancel_amount_y: number | string | null;
  return_amount_y: number | string | null;
  adobe_refresh_ts: number | string | null;
  hybris_refresh_ts: number | string | null;
  gpv2_refresh_ts: number | string | null;
}

interface ChartCardData {
  title: number | string | Date | null;
  value: number | string | Date | null;
  tooltip1: number | string | Date | null;
  value1: number | string | Date | null;
  tooltip2: number | string | Date | null;
  value2: number | string | Date | null;
  style: CSSProperties;
}

export type ChartCardProps = ChartCardData;

export interface ICustomColdata {
  Title: number | string;
  Daily: number | string | Date | null;
  DailyDoD: number | string | Date | null;
  DailyYoY: number | string | Date | null;
  Weekly: number | string | Date | null;
  WeeklyWoW: number | string | Date | null;
  WeeklyYoY: number | string | Date | null;
  Monthly: number | string | Date | null;
  MonthlyMoM: number | string | Date | null;
  MonthlyYoY: number | string | Date | null;
  Quarterly: number | string | Date | null;
  QuarterlyQoQ: number | string | Date | null;
  QuarterlyYoY: number | string | Date | null;
  Yearly: number | string | Date | null;
  YearlyYoY: number | string | Date | null;
  DailyDoDToolTip: number | string | Date | null;
  DailyYoYToolTip: number | string | Date | null;
  WeeklyWoWToolTip: number | string | Date | null;
  WeeklyYoYToolTip: number | string | Date | null;
  MonthlyMoMToolTip: number | string | Date | null;
  MonthlyYoYToolTip: number | string | Date | null;
  QuarterlyQoQToolTip: number | string | Date | null;
  QuarterlyYoYToolTip: number | string | Date | null;
  YearlyYoYToolTip: number | string | Date | null;
}
export type CustomColProps = ICustomColdata & ChartPtProps;
