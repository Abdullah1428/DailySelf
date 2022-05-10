import React from 'react'
import DoughnutChart from '../charts/Doughnut'
import { LineChart } from '../charts/Line'

const Result = () => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <DoughnutChart />
      <LineChart />
    </div>
  )
}

export default Result