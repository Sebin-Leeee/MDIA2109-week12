import { useState, useEffect } from "react";
import styles from './BarChart.module.css'

import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarChart(){

    const [chartData, setChartData] = useState({
        datasets:[]
    })

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["2013", "2015", "2017", "2019", "2021"],
            datasets: [
                {
                    label: 'Revenue ($)',
                    data: [5217, 6738.1, 8047, 9374.9 , 11268.8],
                    borderColor: 'rgb(65, 118, 175)',
                    backgroundColor: 'rgba(65, 118, 175, 0.4)'
                },
                {
                    label: 'Expenses ($)',
                    data: [4905.2, 6163.9, 7772.9, 9065.0, 10790.4],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(53,162,235,0.4)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Motion picture and video production in Canada"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })

    }, [])

    return(
        <>
            <div className={styles.container}> 
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}