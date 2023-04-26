import React, { useEffect, useState } from 'react';
import { EChartsOption } from 'echarts';
import { CustChartPtLineProps } from '../types';
import Echart from '../../components/Echart';

function sumArrays(arr1: number[], arr2: number[]): number[] {
  const resultArray: number[] = [];

  for (let i = 0; i < arr1.length || i < arr2.length; i += 1) {
    const sum = (arr1[i] || 0) + (arr2[i] || 0);
    resultArray.push(sum);
  }

  return resultArray;
}

const QuorterChartContent: React.FC<CustChartPtLineProps> = props => {
  // let [options, setOptions] = useState<EChartsOption>({});
  const [options, setOptions] = useState<EChartsOption>({});
  const legend_data = ['This Year', 'Last Year', 'Total'];
  const { title } = props;
  // 获取当前日期
  const currentDate = new Date();
  const currentQuarter = Math.floor(currentDate.getMonth() / 3) + 1;
  const quarters: string[] = [];
  const xAxis_data_this_year = [320, 332, 301, 334, 390, 330, 320];
  const xAxis_data_last_year = [220, 182, 191, 234, 290, 330, 310];
  const sum_data = sumArrays(xAxis_data_this_year, xAxis_data_last_year);
  for (let i = 0; i < 7; i += 1) {
    let quarterNumber = currentQuarter - i;
    let year = currentDate.getFullYear();
    if (quarterNumber <= 0) {
      quarterNumber += 4;
      year -= 1;
      console.log(year, quarterNumber);
      if (quarterNumber <= 0) {
        quarterNumber += 4;
        year -= 1;
        console.log(year, quarterNumber);
      }
    }
    const v = `${year.toString().slice(2)}.${quarterNumber}Q`;
    console.log(v);
    quarters.push(v);
  }
  // console.log(quarters); // ['21Q4', '21Q3', '21Q2', '21Q1', '20Q4', '20Q3', '20Q2']

  useEffect(() => {
    setOptions({
      title: {
        text: title,
        left: 'left',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        type: 'scroll',
        orient: 'horizontal',
        right: 0,
        top: 0,
        bottom: 0,
        data: legend_data,
      },
      grid: {
        left: '8%',
        right: '15%',
        bottom: '10%',
        containLabel: false,
      },
      xAxis: [
        {
          type: 'category',
          data: quarters.reverse(),
          axisLabel: { interval: 0, rotate: 30 },
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],

      series: [
        {
          name: legend_data[0],
          type: 'bar',
          stack: 'stack',
          emphasis: {
            focus: 'series',
          },
          data: xAxis_data_this_year,
          label: {
            show: true,
            formatter(params: any) {
              return `${params.value}`; // 将节点名称和值显示在标签中
            },
          },
        },

        {
          name: legend_data[1],
          type: 'bar',
          stack: 'stack',
          emphasis: {
            focus: 'series',
          },
          data: xAxis_data_last_year,
          label: {
            show: true,
            formatter(params: any) {
              return `${params.value}`; // 将节点名称和值显示在标签中
            },
          },
        },
        {
          name: 'Total',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            position: 'outside',
            formatter(params: any) {
              return `${params.value}`; // 显示总和值
            },
          },
          emphasis: {
            focus: 'series',
          },
          data: sum_data,
        },
      ],
    });
  }, []);
  return (
    <Echart echartOptions={options} height={props.height} width={props.width} />
  );
};
export { QuorterChartContent };
