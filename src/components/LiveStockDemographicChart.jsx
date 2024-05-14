import React from 'react';
import { Chart } from 'react-google-charts';

const LivestockDemographicsChart = () => {
  
  const data = [
    ['Year', 'Chicken (Young)', 'Chicken (Adult)', 'Cow (Young)', 'Cow (Adult)', 'Duck (Young)', 'Duck (Adult)', 'Goat (Young)', 'Goat (Adult)'],
    ['2019', 100, 200, 80, 150, 120, 180, 90, 160], 
    ['2020', 120, 220, 90, 160, 130, 190, 100, 180], 
    ['2021', 110, 210, 85, 155, 125, 185, 95, 165], 
   
  ];

  return (
    <Chart
      width={'100%'}
      height={'400px'}
      chartType="Bar"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title: 'Livestock Demographics by Year',
        chartArea: { width: '60%', height: '70%' },
        hAxis: {
          title: 'Year',
        },
        vAxis: {
          title: 'Number of Livestock',
        },
        legend: { position: 'top' },
        isStacked: true,
      }}
    />
  );
};

export default LivestockDemographicsChart;
