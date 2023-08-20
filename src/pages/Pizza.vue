<!-- <template>
  <canvas id="myChart"></canvas>
</template> -->

<template>
  <div id="teste" style="width: 25 0px; height: 250px">
    <canvas id="myChart"></canvas>
    <div>
      <p>{{ this.$data }}</p>
    </div>
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
          data: [
            (this.scheduled = 300),
            (this.concluded = 50),
            (this.rescheduled = 100),
            (this.pending = 70),
          ],
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
            display: false,
          },
        },
      },
    });
  },
  data() {
    return {
      scheduled: 0,
      concluded: 0,
      rescheduled: 0,
      pending: 0,
    };
  },
};
</script>
