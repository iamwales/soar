"use client";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const WeeklyActivity = () => {
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Deposit",
        data: [400, 300, 350, 450, 200, 300, 400],
        backgroundColor: "rgba(35, 35, 35, 1)",
        borderRadius: 20,
        borderSkipped: false,
        barPercentage: 0.4,
      },
      {
        label: "Withdraw",
        data: [200, 100, 300, 150, 100, 250, 350],
        backgroundColor: "rgba(57, 106, 255, 1)",
        borderRadius: 20,
        borderSkipped: false,
        barPercentage: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {},
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <p className={"text-2xl text-primary font-semibold"}>Weekly Activity</p>

      <div className={"bg-white rounded-2xl p-6 mt-4"}>
        <div className='flex justify-end gap-8'>
          <div className='flex items-center gap-2'>
            <div className='p-2 items-center rounded-3xl h-4 bg-[#396AFF]'></div>
            <p className={"text-base text-[#718EBF]"}>Deposit</p>
          </div>
          <div className='flex items-center gap-2'>
            <div className='p-2 rounded-3xl h-4 bg-secondary'></div>
            <p className={"text-base text-secondary"}>Withdraw</p>
          </div>
        </div>

        <div className='mt-6'>
          <Bar data={data} options={options} width={700} height={300} />
        </div>
      </div>
    </div>
  );
};

export default WeeklyActivity;
