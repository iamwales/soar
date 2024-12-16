"use client";
import React from "react";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement);

const labels = ["Entertainment", "Bill Expense", "Investment", "Others"];

const ExpensesStatistics = () => {
  const data = {
    labels,
    datasets: [
      {
        data: [30, 15, 20, 35],
        backgroundColor: [
          "rgba(52, 60, 106, 1)",
          "rgba(252, 121, 0, 1)",
          "rgba(57, 106, 255, 1)",
          "rgba(35, 35, 35, 1)",
        ],
        borderJoinStyle: "bevel" as const,
        borderWidth: 8,
        borderColor: "#fff",
        hoverBorderColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      datalabels: {
        formatter: (value: string, context: { dataIndex: number }) => {
          return [`${value}% ${labels[context.dataIndex]}`];
        },
        color: "#fff",
        font: {
          size: 14,
        },
      },
    },
    grid: {
      display: false,
    },
  };

  return (
    <div>
      <p className={"text-2xl text-primary font-semibold"}>
        Expense Statistics
      </p>

      <div className='bg-white rounded-2xl p-8 mt-4'>
        <Pie data={data} options={options} plugins={[ChartDataLabels]} />
      </div>
    </div>
  );
};

export default ExpensesStatistics;
