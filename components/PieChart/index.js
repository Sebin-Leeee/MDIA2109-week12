import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { styles } from './PieChart.module.css'
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Sales to businesses', 'Sales to individuals and households', 'Sales to governments, not-for-profit organizations and public institutions', 'Sales outside Canada (exports)'],
  datasets: [
    {
      label: 'Type of client (%)',
      data: [24.7, 2.5, 3.2, 69.5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ], 
};

export const chartOptions = {
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: "Sales of Software and computer services by type of client (2021)"
        }
    },
    maintainAspectRatio: false,
    responsive: true
}

export function PieChart() {
  return <div className={styles}><Pie data={data} options={chartOptions} /></div>;
}
