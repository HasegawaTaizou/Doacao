<template>
  <section id="statistics-dashboard">
    <div class="statistics__header">
      <h1 class="statistics__title">Estatísticas</h1>
      <div class="profile-container">
        <img
          src="../../assets/img/hospital-profile-image.png"
          alt="Profile Image"
          class="profile__image"
        />
        <span class="profile__name">Hospital Notredame Intermédica</span>
      </div>
    </div>
    <div class="statistics__content">
      <div class="statistics__schedules">
        <div class="schedules__schedules-introduction">
          <h2 class="schedules-introduction__title">AGENDAMENTOS</h2>
          <img
            src="../../assets/img/statistics-schedules-image.png"
            alt="Schedules Image"
            class="schedules-introduction__image"
          />
        </div>
        <div class="schedules__schedules-graph">
          <div class="schedules-graph__graph">
            <div class="graph__total-container">
              <span class="total__text">Total</span>
              <span class="total__number">{{ this.scheduledTotal }}</span>
            </div>
            <canvas id="doughnut-graph"></canvas>
          </div>
          <div class="schedules-graph__labels">
            <div class="graph-label-container">
              <span class="graph-label__title">Agendado</span>
              <span
                :style="`background-color: ${this.scheduledColor}`"
                class="graph-label__text__before"
              ></span>

              <span class="graph-label__text">{{ this.scheduled }}</span>
            </div>
            <div class="graph-label-container">
              <span class="graph-label__title">Concluído</span>
              <span
                :style="`background-color: ${this.concludedColor}`"
                class="graph-label__text__before"
              ></span>

              <span class="graph-label__text">{{ this.concluded }}</span>
            </div>
            <div class="graph-label-container">
              <span class="graph-label__title">Remarcado</span>
              <span
                :style="`background-color: ${this.rescheduledColor}`"
                class="graph-label__text__before"
              ></span>

              <span class="graph-label__text">{{ this.rescheduled }}</span>
            </div>
            <div class="graph-label-container">
              <span class="graph-label__title">Pendente</span>
              <span
                :style="`background-color: ${this.pendingColor}`"
                class="graph-label__text__before"
              ></span>
              <span class="graph-label__text">{{ this.pending }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "Statistics",
  mounted() {
    const ctx = document.getElementById("doughnut-graph");

    const data = {
      labels: ["Agendado", "Concluído", "Remarcado", "Pendente"],
      datasets: [
        {
          label: "Quantidade",
          data: [
            this.scheduled,
            this.concluded,
            this.rescheduled,
            this.pending,
          ],
          backgroundColor: [
            this.scheduledColor,
            this.concludedColor,
            this.rescheduledColor,
            this.pendingColor,
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
      //Label Data
      scheduled: 3,
      concluded: 5,
      rescheduled: 8,
      pending: 2,
      scheduledTotal: 18,

      //BackgroundColor data
      scheduledColor: "rgb(44, 98, 241)",
      concludedColor: "rgb(106, 179, 157)",
      rescheduledColor: "rgb(229, 192, 94)",
      pendingColor: "rgb(244, 52, 52)",
    };
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/statistics/statisticsStyle.css");
</style>
