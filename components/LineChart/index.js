import { useState, useEffect } from "react";
import styles from './LineChart.module.css'

import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default function LineChart(){

    const [chartData, setChartData] = useState({
        datasets:[]
    })

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["2017", "2018", "2019", "2020", "2021"],
            datasets: [
                {
                    label: 'Operating revenue ( x 1,000,000)',
                    data: [10579.7, 12201.1, 13779.2, 15225.4 , 18897.2],
                    borderColor: 'rgb(47, 47, 47)',
                    backgroundColor: 'rgba(47, 47, 47, 0.4)'
                },
                {
                    label: 'Operating expenses ( x 1,000,000)',
                    data: [9992.6, 11622.6, 12520.6, 15633.6, 18173.1],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(53,162,235,0.4)'
                },
                {
                    label: 'Salaries, wages, commissions and benefits ( x 1,000,000)',
                    data: [4709.8, 5424.9, 4984.6, 5913.2, 6362.4],
                    borderColor: 'rgb(119, 38, 190)',
                    backgroundColor: 'rgba(119, 38, 190,0.4)'
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
                    text: "Software development and computer services statistics"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })

    }, [])

    return(
        <>
            <div className={styles.container}> 
                <Line data={chartData} options={chartOptions} />
            </div>
        </>
    )
}