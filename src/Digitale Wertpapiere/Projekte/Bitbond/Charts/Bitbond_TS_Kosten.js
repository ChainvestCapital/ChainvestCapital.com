import React from "react";
import { Pie, defaults } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      <Pie
        data={{
          labels: [
            "Max. Tippgeberprovision",
            "Wirtschaftsprüfung u. Abschluss",
            "Marketing u. Vertrieb",
            "Rechtsberatung",
            "Softwareentwicklung",
            "Zinsaufwand für die Vorfinanzierung",
          ],
          datasets: [
            {
              data: [5000, 1.785, 400, 120, 80, 8],
              backgroundColor: [
                "rgba(205, 240, 234, 1)",
                "rgba(34, 236, 201, 1)",
                "rgba(255, 176, 0, 1)",
                "rgba(15, 99, 84, 1)",
                "rgba(75, 2, 192, 0.2)",

                "rgba(93, 241, 213, 1)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 0,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        options={{
          layout: {
            padding: 0,
          },
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                color: "rgb(0, 178, 132)",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
