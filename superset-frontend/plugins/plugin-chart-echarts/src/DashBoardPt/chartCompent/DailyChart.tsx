import React, { useEffect, useState } from 'react';
import { EChartsOption } from 'echarts';
import Echart from '../../components/Echart';
import { EchartsProps } from '../../types';

const DailyChartContent: React.FC<EchartsProps> = props => {
  // let [options, setOptions] = useState<EChartsOption>({});
  const [options, setOptions] = useState<EChartsOption>({});
  useEffect(() => {
    setOptions({
      animationDuration: 100,
      title: {
        text: 'Stacked Line',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
        type: 'scroll',
        orient: 'vertical',
        // left: 100,
        right: 0,
        top: 0,
        bottom: 0,
      },
      grid: {
        left: '8%',
        right: '15%',
        bottom: '10%',
        containLabel: false,
      },
      //   toolbox: {
      //     feature: {
      //       saveAsImage: {},
      //     },
      //   },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          showSymbol: false,
          data: [120, 132, 101, 134, 90, 230, 210],
          endLabel: {
            show: true,
            formatter: 'Tota',
          },
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    });
  }, []);
  return (
    <Echart echartOptions={options} height={props.height} width={props.width} />
  );
};
export { DailyChartContent };
