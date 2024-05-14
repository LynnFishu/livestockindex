import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Chicken", "Cow", "Duck", "Goat"],
  ["2019", 10, 5, 8, 3], 
  ["2020", 8, 6, 7, 4], 
  ["2021", 12, 4, 9, 2], 
];

export const options = {
  title: "Mortality Rate by Year",
  chartArea: { width: "60%" },
  hAxis: {
    title: "Mortality Rate (%)",
    minValue: 0,
  },
  vAxis: {
    title: "Year",
  },
};

export default function MortalityRateChart() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
