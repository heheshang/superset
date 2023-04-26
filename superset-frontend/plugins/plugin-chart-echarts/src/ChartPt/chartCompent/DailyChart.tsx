import React, { useEffect, useState } from 'react';
import { EChartsOption, SeriesOption } from 'echarts';
import Echart from '../../components/Echart';
import { CustChartPtLineProps } from '../types';

const DailyChartContent: React.FC<CustChartPtLineProps> = props => {
  // let [options, setOptions] = useState<EChartsOption>({});
  const [options, setOptions] = useState<EChartsOption>({});
  const { title } = props;

  const legend_data = ['This Year', 'Last Year'];
  // x轴数据 当前日前10天的数据
  // 获取当前日期
  const currentDate: Date = new Date();
  const formattedDates: string[] = [];
  // 循环计算前10天的日期并输出
  for (let i = 1; i <= 10; i += 1) {
    // 计算前i天的日期
    const previousDate: Date = new Date(
      currentDate.getTime() - i * 24 * 60 * 60 * 1000,
    );

    // 格式化日期为 mm/dd 格式
    const month = String(previousDate.getMonth() + 1);
    const day = String(previousDate.getDate());
    const formattedDate = `${month.padStart(2, '0')}/${day.padStart(2, '0')}`;
    formattedDates.push(formattedDate);
    // 输出结果
    // console.log(formattedDate);
  }

  const xAxis_data = formattedDates.reverse();
  const yAxis_data_this_year = [
    13.8, 17.2, 16.7, 15.7, 15.6, 16.9, 12.5, 13.3, 17.1, 14.0,
  ];
  const yAxis_data_last_year = [
    10.8, 10.3, 14.1, 14.0, 14.0, 14.7, 14.6, 11.9, 11.7, 15.3,
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
        boundaryGap: false,
        data: xAxis_data,
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
export { DailyChartContent };
