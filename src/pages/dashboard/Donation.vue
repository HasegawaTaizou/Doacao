<template>
  <transition name="fade">
    <section id="donation-dashboard">
      <div class="donation__header">
        <h1 class="donation__title">Banco de doação</h1>
        <div class="profile-container">
          <img
            :src="$store.state.hospitalPhoto"
            alt="Profile Image"
            class="profile__image"
          />
          <span class="profile__name">{{ $store.state.hospitalName }}</span>
        </div>
      </div>
      <div class="donation__content">
        <div class="donation__introduction">
          <p class="introduction__text">
            No Brasil, os grupos sanguíneos mais comuns são o O e o A. Juntos
            eles abrangem 87% de nossa população.
          </p>
          <img
            src="../../assets/img/donation-image.png"
            alt="Introduction Image"
            class="introduction__image"
          />
        </div>
        <div class="donation__graph">
          <canvas id="line-graph"></canvas>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import Chart from "chart.js/auto";

import { BASE_URL } from "../../assets/js/config";
import axios from "axios";

export default {
  name: "Donation",
  data() {
    return {
      showTransition: false,
    };
  },
  methods: {
    createChart() {
      const labels = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];

      const ctx = document.getElementById("line-graph");

      const data = {
        labels: labels,
        datasets: [
          {
            label: "2022",
            data: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 20000],
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            pointRadius: 8,
            pointHoverRadius: 10,
            borderWidth: 2,
          },
          {
            label: "2023",
            data: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000],
            borderColor: "blue",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
            pointRadius: 8,
            pointHoverRadius: 10,
            borderWidth: 2,
          },
        ],
      };

      Chart.defaults.font.size = 24;
      Chart.defaults.font.family = "Abel";
      Chart.defaults.color = `black`;

      new Chart(ctx, {
        type: "line",
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              onHover: (event, chartElement) => {
                event.native.target.style.cursor = "pointer";
              },
              onLeave: (event, chartElement) => {
                event.native.target.style.cursor = "default";
              },
            },
            tooltip: {
              titleFont: {
                size: 18,
              },
              bodyFont: {
                size: 18,
              },
            },
          },
        },
      });
    },
  },
  mounted() {
    this.createChart();
    this.showTransition = true;
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/donation/donationStyle.css");
</style>
