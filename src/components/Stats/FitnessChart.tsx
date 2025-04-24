import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { FitnessContext } from '../../contexts/FitnessContext';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FitnessChart: React.FC = () => {
  const { data } = React.useContext(FitnessContext);

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Steps',
        data: [data.steps, 6000, 4500, 7000, 8000, 9000, 10000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Water (ml)',
        data: [data.water, 1500, 2000, 1800, 2200, 2500, 3000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Sleep (hours)',
        data: [data.sleep, 7, 6.5, 8, 7.5, 9, 8],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Weekly Fitness Data',
      },
    },
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle style={{ padding: '10px' }}>
          Weekly Fitness Overview
        </IonCardTitle>
      </IonCardHeader>
      <div style={{ padding: '20px' }}>
        <Bar data={chartData} options={options} />
      </div>
    </IonCard>
  );
};

export default FitnessChart;