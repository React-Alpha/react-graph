import { useEffect } from "react";
import ApexCharts from "apexcharts";

const StockPriceChart = ({ dates, dates2 }) => {
  useEffect(() => {
    var options = {
      series: [
        {
          name: "XYZ MOTORS",
          data: dates,
        },
        {
          name: "ABC MOTORS",
          data: dates2,
        },
      ],
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "Stock Price Movement",
        align: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val.toFixed(2); // Format values to 2 decimal places
          },
          style: {
            colors: ["#333"],
            fontSize: "12px",
          },
        },
        title: {
          text: "Price",
          style: {
            color: "#333",
            fontSize: "14px",
          },
        },
        min: 1.0, // Set minimum value for Y-axis
        max: 5.1, // Set maximum value for Y-axis
        tickAmount: 10, // Set the number of ticks (divisions) on the Y-axis
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val.toFixed(2); // Format tooltip values to 2 decimal places
          },
        },
      },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Cleanup function to destroy chart on component unmount
    return () => {
      chart.destroy();
    };
  }, [dates]);

  return <div id="chart"></div>;
};

export default StockPriceChart;
