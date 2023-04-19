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
    data: TimeseriesDataRecord[];
    // add typing here for the props you pass in from transformProps.ts!
  };

interface ChartCardData {
  title: String;
  value: String;
  tooltip1: String;
  value1: String;
  tooltip2: String;
  value2: String;
  style: CSSProperties;
}

export type ChartCardProps = ChartCardData;

export interface ICustomColdata {
  Title: string;
  Daily: string;
  DailyDoD: string;
  DailyYoY: string;
  Weekly: string;
  WeeklyWoW: string;
  WeeklyYoY: string;
  Monthly: string;
  MonthlyMoM: string;
  MonthlyYoY: string;
  Quarterly: string;
  QuarterlyQoQ: string;
  QuarterlyYoY: string;
  Yearly: string;
  YearlyYoY: string;
  DailyDoDToolTip: string;
  DailyYoYToolTip: string;
  WeeklyWoWToolTip: string;
  WeeklyYoYToolTip: string;
  MonthlyMoMToolTip: string;
  MonthlyYoYToolTip: string;
  QuarterlyQoQToolTip: string;
  QuarterlyYoYToolTip: string;
  YearlyYoYToolTip: string;
}
export type CustomColProps = ICustomColdata & ChartPtProps;
