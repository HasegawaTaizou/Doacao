<!-- <template>
  <canvas id="myChart"></canvas>
</template> -->

<template>
  <div id="teste" style="width: 25  0px; height: 250px">
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "Pizza",
  mounted() {
    const ctx = document.getElementById("myChart");

    const data = {
      labels: ["Red", "Blue", "Yellow", "Green"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100, 70],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(87, 153, 53)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
        },
      },
    });
  },
};
</script>
