import React from 'react'

import CalendarHeatmap from 'react-calendar-heatmap';

import 'react-calendar-heatmap/dist/styles.css';
import DoughnutChart from '../charts/Doughnut';
import { LineChart } from '../charts/Line';

const today = new Date();

const Home = () => {

  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }
  
  function getRange(count) {
    return Array.from({ length: count }, (_, i) => i);
  }
  
  const randomValues = getRange(200).map(index => {
    return {
      date: shiftDate(today, -index),
      count: 1,
    };
  });

  return (
    <div>
      <div className='d-flex align-items-center justify-content-center'>
      <div style={{width: '800px', marginTop: 40}}>
      <CalendarHeatmap
        startDate={'Dec 31 2021'}
        endDate={'Dec 31 2022'}
        showOutOfRangeDays={true}
        values={randomValues}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }
          return `color-github-${3}`;
        }}
        onClick={value => alert(`Clicked on value with count: ${value.count}`)}
      />
      </div>
      </div>
      <div style={{marginTop:60}} className='d-flex align-items-center justify-content-center'>
        <DoughnutChart />
        <LineChart />
      </div>
    </div>
  )
}

export default Home