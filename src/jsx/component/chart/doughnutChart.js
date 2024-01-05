import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const TopCountries = () => {
    const data = {
        labels: ['United States', 'Italy', 'Others'],
        datasets: [
            {
                data: [4, 2, 4],
                backgroundColor: [
                    '#6366F1',
                    '#38BDF8',
                    '#3730A3'
                ],
                borderColor: [
                    '#6366F1',
                    '#38BDF8',
                    '#3730A3',
                ],
                borderWidth: 1
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                // display: false,
                position: 'bottom',
                //align: 'end',

            },
            title: {
                display: false,
            }
        },
        cutout: '80%',
        height: '200px'
    }
    return (<div className='flex flex-col'>
        <span className=" p-4 text-xl font-semibold">Top Countries </span>
        <hr className="h-px my-2 bg-gray-200 border-0"/>
        <div className='p-4 w-full flex justify-center h-[300px]' >
            <Doughnut data={data} options={options} />
        </div>
    </div>)
}
