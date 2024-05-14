import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
  ["Month", "Healthcare", "Utilities", "Food"],
  ["Jan", 1000, 800, 1200], 
  ["Feb", 1100, 850, 1300], 
  ["Mar", 1050, 820, 1250],
  ["Apr", 1150, 830, 1350], 
  ["May", 1200, 840, 1400], 
  ["Jun", 1250, 860, 1450], 
  ["Jul", 1300, 880, 1500], 
  ["Aug", 1350, 900, 1550], 
  ["Sep", 1400, 920, 1600], 
  ["Oct", 1450, 940, 1650], 
  ["Nov", 1500, 960, 1700], 
  ["Dec", 1550, 980, 1750], 
];

export const options = {
  title: "Expense Analysis by Month",
  chartArea: { width: "80%" },
  hAxis: {
    title: "Month",
  },
  vAxis: {
    title: "Expense Amount ($)",
    minValue: 0,
  },
};

export default function ExpenseAnalysisChart() {
  return (
    <Chart
      chartType="ColumnChart" // Changed to ColumnChart for bar chart
      width="100%"
      height="250px"
      data={data}
      options={options}
    />
  );
}

