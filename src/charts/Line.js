import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Sentiment Analysis Score',
    },
  },
};


export function LineChart({chartData}) {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Keyword Relevance Chart',
      },
    },
  };
  
  const labels = chartData.map(ele => {
    return ele.text
  })
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Relevance Data',
        data: chartData.map(ele => {
          return ele.relevance
        }),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };


  return (
    <div style={{width:'400px'}}>
      <Line options={options} data={data} />
    </div>
  )
}
