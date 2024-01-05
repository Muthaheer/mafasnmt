import { FaEllipsisH } from "react-icons/fa";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Chart, Line, Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);




export const LineBox = ({ name, icon, value, percChange }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },


        },
        scales: {
            x: {
                border: {
                    display: false
                },
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                border: {
                    display: false
                },
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }

        }

    };

    const labels = ['', '', '', '', '', '', '', '', '', ''];
    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: '',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                fill: true,
                label: '',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (<div>
        <div className="flex flex-col p-4 shadow bg-white">
            <div className="flex justify-between">
                <img src={icon} className="h-[24px] w-[24px]" /><FaEllipsisH color="#708090" />
            </div>
            <span className="pt-1 text-xl font-semibold"> {name} </span>
            <span className="text-[#94A3B8] text-xs">SALES</span>
            <span className="text-3xl font-bold">{value} <sup><span className={`text-sm font-semibold p-1 px-2 rounded-full text-white ${percChange < 0 ? 'bg-[#F59E0B]' : 'bg-[#10B981]'}`}>{percChange}%</span></sup></span>
            <div className="bg-[#F8FAFC] my-2 ">
                <Line options={options} data={data} />
            </div>
        </div>
    </div>)
}

export const LineBoxWithLegend = ({name, value, percChange}) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                // display: false,
                position: 'top',
                align: 'end',

            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                border: {
                    display: false
                },
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                border: {
                    display: true
                },
                grid: {
                    display: true
                },
                ticks: {
                    display: true,
                    callback: function (value, index, values) {
                        return '$' + value; 
                    },
                }
            }

        }

    };

    const labels = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Current',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 75 })),
                borderColor: '#6366F1',
                backgroundColor: '#3B82F614',
                pointRadius: 0,
            },
            {
                fill: true,
                label: 'Previous',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 75 })),
                borderColor: '#CBD5E1',
                backgroundColor: '#E2E8F0',
                pointRadius: 0,
            },
        ],
        //pointStyle: 'circle',
    };
    return (<div className="flex flex-col  bg-white">
        <span className="pt-1 p-4 text-xl font-semibold"> {name} </span>
        <hr className="h-px my-3 bg-gray-200 border-0" />
        <span className="text-3xl px-4 font-bold">{value}<sup className={`text-sm font-semibold p-1 px-2 rounded-full text-white ${percChange < 0 ? 'bg-[#F59E0B]' : 'bg-[#10B981]'} sups`}>{percChange}%</sup></span>
        <div className='p-4 w-full flex justify-center '>
            <Line options={options} data={data} />
        </div>
    </div>)
}
