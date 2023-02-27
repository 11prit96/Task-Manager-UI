import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

// window.onscroll = function () {
//   scrollRotate();
// };

// function scrollRotate() {
//   let chart = document.getElementById("doughnut_container");
//   chart.style.background = "red";
//   console.log("gjdjbvvbdb");
// }

const ChartData = [
  { name: "Cartoon Illustration", progress: 65, label: "Modern Storytelling" },
  { name: "Abstract Pattern", progress: 35, label: "Geometric Shapes" },
];

export default function DoughnutPieChart() {
  const [userData, setUserData] = useState({
    labels: ChartData.map((data) => data.name),
    datasets: [
      {
        label: "Progress",
        data: ChartData.map((data) => data.progress),
        backgroundColor: ["#22062e", "#db482e"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     let chart = document.getElementById("doughnut_container");
  //     chart.style.transform = "rotate(20deg)"
  //   });
  // }, []);

  return (
    <div id="doughnut_container">
      <Doughnut
        data={userData}
        options={{
          animation: {
            animateScale: "true",
          },
          maintainAspectRatio: false,
          rotation: Math.PI * -60,
          plugins: {
            legend: {
              position: "right",
            },
            // subtitle: {
            //   display: true,
            //   text: "Custom Chart Subtitle",
            // },
            // cutout: 60,
          },
        }}
      />
    </div>
  );
}
