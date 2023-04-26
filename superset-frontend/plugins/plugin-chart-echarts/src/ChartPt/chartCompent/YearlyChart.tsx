import { EChartsOption } from 'echarts';
import React, { useEffect, useState } from 'react';
import Echart from '../../components/Echart';
import { CustChartPtLineProps } from '../types';

const YearlyChartContent: React.FC<CustChartPtLineProps> = props => {
  // let [options, setOptions] = useState<EChartsOption>({});
  const [options, setOptions] = useState<EChartsOption>({});
  const legend_data = ['This Year', 'Last Year'];
  const { title } = props;
  // 获取当前日期
  const currentDate = new Date();
  const currentQuarter = Math.floor(currentDate.getMonth() / 3) + 1;
  const quarters: string[] = [];

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
          stack: 'Ad',
          emphasis: {
            focus: 'series',
          },
          data: [320, 332, 301, 334, 390, 330, 320],
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
          stack: 'Ad',
          emphasis: {
            focus: 'series',
          },
          data: [220, 182, 191, 234, 290, 330, 310],
          label: {
            show: true,
            formatter(params: any) {
              return `${params.value}`; // 将节点名称和值显示在标签中
            },
          },
        },
      ],
    });
  }, []);
  return (
    <Echart echartOptions={options} height={props.height} width={props.width} />
  );
};
export { YearlyChartContent };
