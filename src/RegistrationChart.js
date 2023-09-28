import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

const RegistrationChart = ({ data }) => {
  useEffect(() => {
    // Create the Highcharts chart
    Highcharts.chart('chart-container', {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Number of Registrations Over Time',
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: 'Date',
        },
      },
      yAxis: {
        title: {
          text: 'Number of Registrations',
        },
      },
      series: [
        {
          name: 'Registrations',
          data,
        },
      ],
    });
  }, [data]);

  return <div id="chart-container" />;
};

export default RegistrationChart;
