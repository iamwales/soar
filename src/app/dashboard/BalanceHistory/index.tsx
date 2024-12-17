"use client";
import React from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const BalanceHistory = () => {
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", ""],
    datasets: [
      {
        label: "Balance",
        data: [200, 500, 300, 700, 400, 650, 600, 520],
        borderColor: "rgba(24, 20, 243, 1)",
        backgroundColor: (context: {
          chart: {
            ctx: CanvasRenderingContext2D;
            chartArea: { top: number; bottom: number };
          };
        }) => {
          if (!context.chart.chartArea) {
            return;
          }

          const {
            ctx,
            // data,
            chartArea: { top, bottom },
          } = context.chart;

          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
          gradientBg.addColorStop(0, "rgba(45, 96, 255, 0.25)");
          //   gradientBg.addColorStop(0.5, "rgba(45, 96, 255, 0.25)");
          gradientBg.addColorStop(1, "rgba(255, 255, 255, 0)");

          return gradientBg;
        },
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {},
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          borderDash: [5, 5],
          drawTicks: true,
        },
      },
    },
    x: {
      grid: {
        display: true,
        borderDash: [5, 5],
      },
    },
  };

  return (
    <div>
      <p className={"text-2xl text-primary font-semibold"}>Balance History</p>

      <div className='bg-white rounded-2xl p-8 mt-4'>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BalanceHistory;
