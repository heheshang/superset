import React, { useEffect, useState } from 'react';
import { EChartsOption, SeriesOption } from 'echarts';
import { CustChartPtLineProps } from '../types';
import Echart from '../../components/Echart';

const WeeklyChartContent: React.FC<CustChartPtLineProps> = props => {
  // let [options, setOptions] = useState<EChartsOption>({});
  // let [options, setOptions] = useState<EChartsOption>({});
  const [options, setOptions] = useState<EChartsOption>({});
  const { title } = props;

  const legend_data = ['This Year', 'Last Year'];
  // const oneWeekMs = 7 * 24 * 60 * 60 * 1000; // 每周的毫秒数
  // const currentDate = new Date(); // 当前日期
  // const weeksAgo18 = new Date(currentDate.getTime() - 18 * oneWeekMs); // 18周前的日期

  // 根据当前日期和18周前的日期，计算每周的起始日期并用"w01"~"w17"表示
  const weekCount = 17;
  const weeks: string[] = [];
  for (let i = 0; i < weekCount; i += 1) {
    // const startDate = new Date(weeksAgo18.getTime() + i * oneWeekMs);
    const weekNum = i + 1;
    weeks.push(`w${weekNum.toString().padStart(2, '0')}`); // 将数字补零并添加前缀"w"
  }

  console.log(weeks); // 输出 ["w01", "w02", ..., "w17"]

  const yAxis_data_this_year = [
    13.8, 17.2, 16.7, 15.7, 15.6, 16.9, 12.5, 13.3, 17.1, 14.0, 13.8, 17.2,
    16.7, 15.7, 15.6, 16.9, 12.5,
  ];
  const yAxis_data_last_year = [
    10.8, 10.3, 14.1, 14.0, 14.0, 14.7, 14.6, 11.9, 11.7, 15.3, 13.8, 17.2,
    16.7, 11.7, 15.3, 13.8, 17.2,
  ];

  const series: SeriesOption[] = [
    {
      name: legend_data[0],
      type: 'line',
      // stack: 'Total',
      showSymbol: true,
      // 单数据line 显示 label数据
      label: {
        show: true,
        position: 'top',
        distance: 10,
        rotate: 30,
        formatter(params: any) {
          return `$${params.value}M`; // 将节点名称和值显示在标签中
        },
      },
      data: yAxis_data_this_year,
      // endLabel: {
      //   show: true,
      //   formatter: legend_data[0],
      // },
    },
    {
      name: legend_data[1],
      type: 'line',
      // stack: 'Total',
      showSymbol: true,
      // 单数据line 显示 label数据
      label: {
        show: false,
        formatter(params: any) {
          return `$${params.value}M`; // 将节点名称和值显示在标签中
        },
      },
      data: yAxis_data_last_year,
      // 结尾显示label
      // endLabel: {
      //   show: true,
      //   formatter: legend_data[1],
      // },
    },
  ];
  useEffect(() => {
    setOptions({
      animationDuration: 10,
      title: {
        text: title,
        left: 'left',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: legend_data,
        type: 'scroll',
        orient: 'horizontal',
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
      // 全局显示label
      // label: {
      //   show: true,
      //   formatter(params: any) {
      //     return `${params.name}: ${params.value}`; // 将节点名称和值显示在标签中
      //   },
      // },

      //   toolbox: {
      //     feature: {
      //       saveAsImage: {},
      //     },
      //   },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: weeks,
        axisLabel: { interval: 0, rotate: 30 },
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series,
    });
  }, []);
  return (
    <Echart echartOptions={options} height={props.height} width={props.width} />
  );
};
export { WeeklyChartContent };
