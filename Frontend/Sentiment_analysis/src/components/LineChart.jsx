import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "My First dataset",
                fill: true,
                borderColor: 'rgb(230, 159, 255)',
                tension: 0.1,
                data: [0, 10, 5, 2, 20, 30, 45],
            },
            {
                label: 'Dataset 2',
                data: [2, 7, 8, 2, 16, 25, 48],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: { display: false },
            y: { display: false },
        },
        layout: {
            padding: 10,
        }
    };

    return (
        <div className='w-full h-full'>
            <Line data={data} options={options} />
        </div>
    );
}

export default LineChart