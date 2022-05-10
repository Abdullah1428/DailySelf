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


export function LineChartSentiment({chartData}) {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sentiment Chart',
      },
    },
  };
  
  const labels = chartData.map(ele => {
    return new Date(ele.createdAt.seconds * 1000).toISOString().split('T')[0]
  })
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Sentiment Data',
        data: chartData.map(ele => {
          return ele.data[0].sentiment.score
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
