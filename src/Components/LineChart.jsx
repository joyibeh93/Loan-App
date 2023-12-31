import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


const LineChart = ({lineData}) => {
  return (
    <div>
        <Line data={lineData} />;
    </div>
  )
}

export default LineChart