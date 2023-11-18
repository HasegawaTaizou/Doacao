<template>
  <transition name="fade">
    <section id="donation-dashboard">
      <div class="donation__header">
        <h1 class="donation__title">Banco de doação</h1>
        <div class="profile-container">
          <img
            :src="hospitalPhoto"
            alt="Profile Image"
            class="profile__image"
          />
          <span class="profile__name">{{ hospitalName }}</span>
        </div>
      </div>
      <div class="donation__content">
        <div class="donation__graphs">
          <div class="bar-graph-container">
            <select name="year" class="bar-year__select">
              <option value="" selected disabled class="bar-year__option">
                Selecione o ano
              </option>
              <option
                class="bar-year__option"
                v-for="(donationYear, index) in this.years"
                :key="index"
                :value="donationYear.year"
              >
                {{ donationYear.year }}
              </option>
            </select>
            <canvas id="bar-graph"></canvas>
          </div>
          <div class="doughnut-graph-container">
            <canvas id="doughnut-graph"></canvas>
            <div class="doughnut__blood-types">
              <select
                name="year"
                class="bar-year__select"
                v-model="selectedYearDoughnut"
                @change="
                  getDonationBanks(
                    undefined,
                    selectedYearDoughnut,
                    undefined,
                    yearDoughnutGraph
                  )
                "
                style="margin-bottom: 38px; transform: translateX(-60px)"
              >
                <option value="" selected disabled class="bar-year__option">
                  Selecione o ano
                </option>
                <option
                  class="bar-year__option"
                  v-for="(donationYear, index) in this.years"
                  :key="index"
                  :value="donationYear.year"
                >
                  {{ donationYear.year }}
                </option>
              </select>
              <div class="doughnut__label-container">
                <span
                  :style="`background-color: rgb(75,192,192)`"
                  class="graph-label__text__before"
                ></span>
                <span class="graph-label__title">O-</span>
              </div>
              <div class="doughnut__label-container">
                <span
                  :style="`background-color: rgb(255,159,64)`"
                  class="graph-label__text__before"
                ></span>
                <span class="graph-label__title">O+</span>
              </div>
              <div class="doughnut__label-container">
                <span
                  :style="`background-color: rgb(54,162,235)`"
                  class="graph-label__text__before"
                ></span>
                <span class="graph-label__title">A-</span>
              </div>
              <div class="doughnut__label-container">
                <span
                  :style="`background-color: rgb(153,102,255)`"
                  class="graph-label__text__before"
                ></span>
                <span class="graph-label__title">A+</span>
              </div>
              <div class="doughnut__label-container">
                <span
                  :style="`background-color: rgb(255,205,86)`"
                  class="graph-label__text__before"
                ></span>
                <span class="graph-label__title">B-</span>
              </div>
              <div class="doughnut__label-container">
                <span
                  :style="`background-color: rgb(201,203,207)`"
                  class="graph-label__text__before"
                ></span>
                <span class="graph-label__title">B+</span>
              </div>
              <div class="doughnut__label-container">
                <span
                  :style="`background-color: rgb(254,17,17)`"
                  class="graph-label__text__before"
                ></span>
                <span class="graph-label__title">AB-</span>
              </div>
              <div class="doughnut__label-container">
                <span
                  :style="`background-color: rgb(225,75,211)`"
                  class="graph-label__text__before"
                ></span>
                <span class="graph-label__title">AB+</span>
              </div>
            </div>
          </div>
          <div class="line-graph-container">
            <select
              name="year"
              class="bar-year__select"
              style="display: flex; align-self: flex-end"
            >
              <option value="" selected disabled class="bar-year__option">
                Selecione o ano
              </option>
              <option
                class="bar-year__option"
                v-for="(donationYear, index) in this.years"
                :key="index"
                :value="donationYear.year"
              >
                {{ donationYear.year }}
              </option>
            </select>
            <canvas id="line-graph"></canvas>
          </div>
        </div>
        <div class="donation__add-container">
          <div class="add__introduction">
            <img
              src="../../assets/img/add-introduction-image.png"
              alt="Add introduction Image"
              class="add-introduction__image"
            />
            <p class="add-introduction__text">
              Teve novas doações? Registre aqui e atualize seu banco de doação.
            </p>
          </div>
          <div class="add-actions">
            <div class="action__year">
              <label for="year" class="year__label">Ano:</label>
              <select name="year" v-model="year" class="year__select">
                <option value="" selected disabled class="year__option">
                  Selecione o ano
                </option>
                <option
                  class="year__option"
                  v-for="(donationYear, index) in this.years"
                  :key="index"
                  :value="donationYear.year"
                >
                  {{ donationYear.year }}
                </option>
              </select>
            </div>
            <div class="action__blood-type">
              <label for="blood-type" class="blood-type__label"
                >Tipo sanguíneo:</label
              >
              <select
                name="blood-type"
                class="blood_type__select"
                v-model="bloodType"
              >
                <option value="" selected disabled class="blood-type__option">
                  Tipo sanguíneo
                </option>
                <option value="O-" class="blood-type__option">O-</option>
                <option value="O+" class="blood-type__option">O+</option>
                <option value="A-" class="blood-type__option">A-</option>
                <option value="A+" class="blood-type__option">A+</option>
                <option value="B-" class="blood-type__option">B-</option>
                <option value="B+" class="blood-type__option">B+</option>
                <option value="AB-" class="blood-type__option">AB-</option>
                <option value="AB+" class="blood-type__option">AB+</option>
              </select>
            </div>
            <div class="action__quantity">
              <label for="quantity" class="quantity__label"
                >Quantidade (ML):</label
              >
              <input v-model="quantity" type="number" class="quantity__input" />
            </div>

            <button @click="updateDonationBank" class="action__button">
              Salvar
            </button>
          </div>
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
    const initializeGraphData = () => ({
      "O-": 0,
      "O+": 0,
      "A-": 0,
      "A+": 0,
      "B-": 0,
      "B+": 0,
      "AB-": 0,
      "AB+": 0,
    });

    return {
      //Charts
      doughnutChart: null,

      //ProfileData
      hospitalName: "",
      hospitalPhoto: "",

      showTransition: false,

      donationBanks: [],
      donationBanksYears: {},

      selectedFirstYear: 2022,
      selectedSecondYear: 2023,
      donationBankGraphFirstYearData: initializeGraphData(),
      donationBankGraphSecondYearData: initializeGraphData(),

      selectedFirstYearBar: 0,
      selectedSecondYearBar: 0,
      firstYearBarGraphData: initializeGraphData(),
      secondYearBarGraphData: initializeGraphData(),

      selectedYearDoughnut: "0",
      yearDoughnutGraph: initializeGraphData(),

      selectedFirstYearLine: 0,
      selectedSecondYearLine: 0,
      firstYearLineGraph: initializeGraphData(),
      secondYearLineGraph: initializeGraphData(),

      years: [],

      //Update Donation Bank Data
      bloodType: "",
      quantity: 0,
      year: "",
    };
  },
  methods: {
    updateDonationBank() {
      const data = {
        year: this.year,
        bloodMl: this.quantity,
        bloodType: this.bloodType,
        hospitalId: Number(localStorage.getItem("hospitalId")),
      };

      axios
        .put(`${BASE_URL}/update-donation-bank`, data)
        .then(location.reload());
    },
    createBarChart() {
      const labels = Object.keys(this.donationBankGraphFirstYearData);

      const ctx = document.getElementById("bar-graph");

      const data = {
        labels: labels,
        datasets: [
          {
            label: this.selectedFirstYear,
            data: Object.values(this.donationBankGraphFirstYearData),
            backgroundColor: "rgb(255,205,86)",
          },
          {
            label: this.selectedSecondYear,
            data: Object.values(this.donationBankGraphSecondYearData),
            backgroundColor: "rgb(255,99,132)",
          },
        ],
      };

      Chart.defaults.font.size = 24;
      Chart.defaults.font.family = "Abel";
      Chart.defaults.color = `black`;

      const legendMargin = {
        id: "legendMargin",
        beforeInit(chart, legend, options) {
          const fitValue = chart.legend.fit;

          chart.legend.fit = function fit() {
            fitValue.call(chart.legend);
            return (this.height += 30);
          };
        },
      };

      const config = {
        type: "bar",
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
              labels: {
                padding: 30,
              },
            },
          },
        },
        plugins: [legendMargin],
      };

     const a = new Chart(ctx, config);
    },
    createDoughnutChart(year, donationBankData) {
      console.log(year);
      console.log(donationBankData);

      const ctx = document.getElementById("doughnut-graph");

      const labels = Object.keys(donationBankData);

      const data = {
        labels: labels,
        datasets: [
          {
            label: year,
            data: Object.values(donationBankData),
            backgroundColor: [
              "rgb(75,192,192)",
              "rgb(255,159,64)",
              "rgb(54,162,235)",
              "rgb(153,102,255)",
              "rgb(255,205,86)",
              "rgb(201,203,207)",
              "rgb(254,17,17)",
              "rgb(225,75,211)",
            ],
            hoverOffset: 4,
          },
        ],
      };

      const config = {
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
      };

      this.doughnutChart = new Chart(ctx, config);
    },
    updateDoughnutChart() {
      this.createDoughnutChart(this.selectedYearDoughnut, this.yearDoughnutGraph)
      this.doughnutChart.data.datasets[0].data = this.yearDoughnutGraph;
      console.log(this.doughnutChart.data.datasets[0].data);
      // this.doughnutChart.update();
    },
    createLineChart() {
      const labels = Object.keys(this.donationBankGraphFirstYearData);

      const ctx = document.getElementById("line-graph");

      const data = {
        labels: labels,
        datasets: [
          {
            label: this.selectedFirstYear,
            data: Object.values(this.donationBankGraphFirstYearData),
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            pointRadius: 8,
            pointHoverRadius: 10,
            borderWidth: 2,
          },
          {
            label: this.selectedSecondYear,
            data: Object.values(this.donationBankGraphSecondYearData),
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

      const legendMargin = {
        id: "legendMargin",
        beforeInit(chart, legend, options) {
          const fitValue = chart.legend.fit;

          chart.legend.fit = function fit() {
            fitValue.call(chart.legend);
            return (this.height += 30);
          };
        },
      };

      const config = {
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
              labels: {
                padding: 30,
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
        plugins: [legendMargin],
      };

      new Chart(ctx, config);
    },
    getDonationBanks(
      firstYear,
      secondYear,
      firstYearGraphData,
      secondYearGraphData
    ) {
      axios
        .get(
          `${BASE_URL}/hospital/${localStorage.getItem(
            "hospitalId"
          )}/donation-banks`
        )
        .then((response) => {
          this.donationBanks = response.data.donationBanks;
          this.donationBanks.forEach((donationBank) => {
            if (this.donationBanksYears[donationBank.year]) {
              this.donationBanksYears[donationBank.year].push(donationBank);
            } else {
              this.donationBanksYears[donationBank.year] = [donationBank];
            }
          });

          if (this.donationBanksYears[firstYear] != undefined) {
            this.donationBanksYears[firstYear].forEach((bloodsTypes) => {
              if (firstYearGraphData.hasOwnProperty(bloodsTypes.type)) {
                firstYearGraphData[bloodsTypes.type] += parseInt(
                  bloodsTypes.blood_ml
                );
              }
            });
          }

          this.donationBanksYears[secondYear].forEach((bloodsTypes) => {
            if (secondYearGraphData.hasOwnProperty(bloodsTypes.type)) {
              secondYearGraphData[bloodsTypes.type] += parseInt(
                bloodsTypes.blood_ml
              );
            }
          });
        })
        .then(() => {
          this.createBarChart();
          // this.updateDoughnutChart()
          this.createDoughnutChart(secondYear, secondYearGraphData);
          this.createLineChart();
        });
    },
    getYearsDonationBank() {
      axios
        .get(
          `${BASE_URL}/hospital/${localStorage.getItem(
            "hospitalId"
          )}/donation-banks-years`
        )
        .then((response) => {
          this.years = response.data.years;
        });
    },
  },
  mounted() {
    this.getDonationBanks(
      this.selectedFirstYear,
      this.selectedSecondYear,
      this.donationBankGraphFirstYearData,
      this.donationBankGraphSecondYearData
    );
    this.getYearsDonationBank();
    this.showTransition = true;

    this.hospitalName = localStorage.hospitalName;
    this.hospitalPhoto = localStorage.hospitalPhoto;
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/donation/donationStyle.css");
</style>
