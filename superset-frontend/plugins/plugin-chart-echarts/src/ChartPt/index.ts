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
  t,
  ChartMetadata,
  ChartPlugin,
  Behavior,
  AnnotationType,
  isFeatureEnabled,
  FeatureFlag,
} from '@superset-ui/core';
import buildQuery from './buildQuery';
import controlPanel from './controlPanel';
import transformProps from './transformProps';
import chartPt from './images/chartPt.png';

export default class ChartPtPlugin extends ChartPlugin {
  /**
   * The constructor is used to pass relevant metadata and callbacks that get
   * registered in respective registries that are used throughout the library
   * and application. A more thorough description of each property is given in
   * the respective imported file.
   *
   * It is worth noting that `buildQuery` and is optional, and only needed for
   * advanced visualizations that require either post processing operations
   * (pivoting, rolling aggregations, sorting etc) or submitting multiple queries.
   */
  constructor() {
    const metadata = new ChartMetadata({
      behaviors: [Behavior.INTERACTIVE_CHART],
      category: t('Evolution'),
      credits: ['https://echarts.apache.org'],
      description: 'Chart Pt ',
      supportedAnnotationTypes: [
        AnnotationType.Event,
        AnnotationType.Formula,
        AnnotationType.Interval,
        AnnotationType.Timeseries,
      ],
      name: isFeatureEnabled(FeatureFlag.GENERIC_CHART_AXES)
        ? t('Chart pt ')
        : t('Chart pt '),
      tags: [
        t('Advanced-Analytics'),
        t('Aesthetic'),
        t('pt chart'),
        t('Predictive'),
        t('Time'),
        t('Transformable'),
        t('net revenue'),
        t('shopper visit'),
        t('conversion rate'),
      ],
      thumbnail: chartPt,
    });

    super({
      buildQuery,
      controlPanel,
      loadChart: () => import('./ChartPt'),
      metadata,
      transformProps,
    });
  }
}
