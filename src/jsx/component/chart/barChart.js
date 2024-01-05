import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Chart, Line, Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { FaExclamationCircle } from 'react-icons/fa';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const DIBarChart = () => {
    const labels = ['DEC 20', 'JAN 21', 'FEB 21', 'MAR 21', 'APR 21', 'MAY 21'];
    const data = {
        labels,
        datasets: [
            {
                label: '$1.7K Direct',
                data: labels.map(() => Math.floor(Math.random() * 1000)),
                backgroundColor: '#6366F1', 
                borderColor: '#6366F1',
                borderWidth: 1,
            },
            {
                label: '$2.4K Indirect',
                data: labels.map(() => Math.floor(Math.random() * 1000)),
                backgroundColor: '#38BDF8', 
                borderColor: '#38BDF8',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                align: 'start',
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: true,
                },
                ticks: {
                    callback: (value) => `$${value}`,
                },
            },
        },
    };

    return (
        <div className="flex flex-col p-4">
            <span className="pt-1 text-xl font-semibold"> Direct VS Indirect </span>
            <hr className="h-px my-3 bg-gray-200 border-0" />
            <div className='pt-6'>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};


export const StackedBarChart = () => {
    const labels = ['DEC 20', 'JAN 21', 'FEB 21', 'MAR 21', 'APR 21'];
    const data = {
        labels,
        datasets: [
            {
                label: '',
                data: [30, 50, 0, 40, 60],
                backgroundColor: '#6366F1',
                borderColor: '#6366F1',
                borderWidth: 1,
            },
            {
                label: '',
                data: [-40, -20, -30, -10, -15],
                backgroundColor: '#C7D2FE',
                borderColor: '#C7D2FE',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                ticks: {
                    callback: (value) => `$${value}`,
                },
            },
        },
    };

    return (
        <div className="flex flex-col ">
            <div className='flex p-4'><span className="pt-1 text-xl font-semibold"> Sales VS Refunds  </span><span className='pt-1 h-[32px] '><FaExclamationCircle color="#94A3B8" /></span> </div>
            <hr className="h-px bg-gray-200 border-0" />
            <div className=' p-4'>

                <Bar data={data} options={options} />
            </div>
        </div>
    );
};


export const StackedSingleBarChart = () => {

    const options = {
        indexAxis: "y",
        scales: {
            x: {
                stacked: true,
                display: false
            },
            y: {
                stacked: true,
                display: false
            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
          
        },
        maintainAspectRatio: false,
    };

    const labels = [""];

    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: [48.7],
                backgroundColor: "#6366F1"
            },
            {
                label: "Dataset 2",
                data: [24.9],
                backgroundColor: "#3730A3"
            },
            {
                label: "Dataset 2",
                data: [19.3],
                backgroundColor: "#38BDF8"
            }
            ,
            {
                label: "Dataset 2",
                data: [9.6],
                backgroundColor: "#34D399",
            },
            {
                label: "Dataset 2",
                data: [9.3],
                backgroundColor: "#E2E8F0",
            }
        ]
    };

    return <div className="flex flex-col w-full">
        <div className='flex p-4'><span className="pt-1 text-xl font-semibold"> Reason for Refunds </span> </div>
        <hr className="h-px bg-gray-200 border-0" />
        <div className=' p-4 h-[80px] w-full'  style={{ width: '100%' }}>
            <Bar options={options} data={data} />
        </div>
        <div className='flex flex-col px-4 text-sm'>
            <div className='flex justify-between py-2 border-b-2 border-[#F1F5F9]'><span className='flex items-center ' ><span className='h-[12px] w-[12px] bg-[#6366F1] mr-2 rounded'></span> Having difficulties using the product</span><span className='font-medium text-[#6366F1]'>48.7%</span></div>
            <div className='flex justify-between py-2 border-b-2 border-[#F1F5F9]'><span className='flex items-center' ><span className='h-[12px] w-[12px] bg-[#3730A3] mr-2 rounded'></span>Missing features I need</span><span className='font-medium text-[#3730A3]'>24.9%</span></div>
            <div className='flex justify-between py-2 border-b-2 border-[#F1F5F9]'><span className='flex items-center' ><span className='h-[12px] w-[12px] bg-[#38BDF8] mr-2 rounded'></span>Not satisfied about the quality of the product</span><span className='font-medium text-[#38BDF8]'>19.3%</span></div>
            <div className='flex justify-between py-2 border-b-2 border-[#F1F5F9]'><span className='flex items-center' ><span className='h-[12px] w-[12px] bg-[#34D399] mr-2 rounded'></span>The product doesn’t look as advertised</span><span className='font-medium text-[#34D399]'>9.6%</span></div>
            <div className='flex justify-between py-2'><span className='flex items-center' ><span className='h-[12px] w-[12px] bg-[#E2E8F0] mr-2 rounded'></span>Other (please specify below)</span><span className='font-medium text-[#E2E8F0]'>9.3%</span></div>
        </div>
    </div>

}