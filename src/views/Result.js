import React from 'react';
import DoughnutChart from '../charts/Doughnut';
import { LineChart } from '../charts/Line';

import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();

  const { data, text, emoji } = location.state ? location.state : '';


  return (
    <div>
    <h3>Self Analysis Results for the Day</h3>
    <div className='d-flex align-items-center justify-content-center'>
      <DoughnutChart
        anger={data[0].emotion.anger}
        disgust={data[0].emotion.disgust}
        fear={data[0].emotion.fear}
        joy={data[0].emotion.joy}
        sadness={data[0].emotion.sadness}
      />
      <LineChart chartData={data} />
    </div>
    <h3>Your Text and Emotion for the Day</h3>
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
      <div style={{width: '400px', border: '5px solid #44a340', padding: '10px'}}>
        <p>{text}</p>
      </div>
      <span style={{width:200, fontSize:100}}>🥴</span>
    </div>
    </div>
  );
};

export default Result;
