import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Chicken", "Cow", "Duck", "Goat"],
  ["Jan", 10, 15, 12, 20], 
  ["Feb", 12, 18, 14, 22], 
  ["Mar", 15, 20, 16, 25], 
  ["Apr", 18, 22, 18, 28],
  ["May", 20, 25, 20, 30],
  ["Jun", 22, 28, 22, 32],
  ["Jul", 25, 30, 25, 35],
  ["Aug", 28, 32, 28, 38],
  ["Sep", 30, 35, 30, 40],
  ["Oct", 32, 38, 32, 42],
  ["Nov", 35, 40, 35, 45],
  ["Dec", 38, 42, 38, 48],
];

export const options = {
  title: "Average Growth by Month",
  chartArea: { width: "80%" },
  hAxis: {
    title: "Month",
  },
  vAxis: {
    title: "Average Growth",
    minValue: 0,
  },
};

export default function AverageGrowthChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}
