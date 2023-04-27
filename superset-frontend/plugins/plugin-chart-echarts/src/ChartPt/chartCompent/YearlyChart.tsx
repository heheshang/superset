import { EChartsOption } from 'echarts';
import React, { useEffect, useState } from 'react';
import Echart from '../../components/Echart';
import { CustChartPtLineProps } from '../types';

const YearlyChartContent: React.FC<CustChartPtLineProps> = props => {
  // let [options, setOptions] = useState<EChartsOption>({});
  const [options, setOptions] = useState<EChartsOption>({});
  const { title } = props;
  // 获取当前日期
  const currentDate = new Date();
  let year = currentDate.getFullYear();
  const years: string[] = [];

  for (let i = 0; i < 3; i += 1) {
    const v = `${year.toString()}年`;
    years.push(v);
    year -= 1;
  }
  const years_data = years.reverse();
  // console.log(quarters); // ['21Q4', '21Q3', '21Q2', '21Q1', '20Q4', '20Q3', '20Q2']

  useEffect(() => {
    setOptions({
      title: {
        text: title,
        left: 'left',
      },

      tooltip: {
        trigger: 'axis',
        formatter(params) {
          let res = '<div>';
          res += `Year Of Event Date: ${params[0].name}<br/>`;
          res += `Currency_Symbol: ${params[0].name}<br/>`;
          res += `${title}: ${params[0].value}<br/>`;
          res += `${title} TREND YTD -last two years STR:${params[0].value}M<br/>`;
          res += `${title} TREND YTD STR:${params[1].value}M<br/>`;
          res += '</div>';
          return res;
        },
        confine: true,
        // position: ['50%', '50%'],
        // position: [10, 10],
        position(pos, params, dom, rect, size) {
          // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
          const obj = { top: 60 };
          obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
          return obj;
        },

        textStyle: {
          fontSize: 10,
        },
      },

      legend: {
        type: 'scroll',
        orient: 'horizontal',
        right: 0,
        top: 0,
        bottom: 0,
        data: years_data,
        tooltip: {
          show: true,
        },
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
          data: years_data,
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
          name: '1111',
          type: 'bar',
          stack: '总量',
          emphasis: {
            focus: 'series',
          },
          data: ['1819.3', '2135.0', '2396.6'],
          label: {
            show: true,
            formatter(params: any) {
              return `$${params.value}M`; // 将节点名称和值显示在标签中
            },
          },
        },
        {
          name: '22222',
          type: 'bar',
          stack: '总量',
          emphasis: {
            focus: 'series',
          },
          data: ['5553.7', '6374.5', ''],
          label: {
            show: true,
            formatter(params: any) {
              return `$${params.value}M`; // 将节点名称和值显示在标签中
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
