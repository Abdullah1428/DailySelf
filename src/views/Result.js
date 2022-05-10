import React from 'react'
import DoughnutChart from '../charts/Doughnut'
import { LineChart } from '../charts/Line'

const Result = () => {
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <DoughnutChart />
      <LineChart />
    </div>
  )
}

export default Result