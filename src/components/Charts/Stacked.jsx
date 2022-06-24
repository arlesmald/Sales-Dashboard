import React from 'react';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { stackedChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  plugins: {
    title: {
      display: false,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Expenses',
      data: stackedChartData[0].map((n) => n.y),
      backgroundColor: 'gray',
    },
    {
      label: 'Budget',
      data: stackedChartData[1].map((n) => n.y),
      backgroundColor: '#80e49c',
    },
  ],
};

const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();

  return (
    <Bar options={options} data={data} style={{ width: '100%', height: '100%' }} />
  );
};

export default Stacked;
