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
            <select
              name="year"
              class="bar-year__select"
              v-model="selectedYearsBar"
              @change="updateBarChart"
            >
              <option value="" selected disabled class="bar-year__option">
                Selecione o ano
              </option>
              <option
                class="bar-year__option"
                v-for="(donationYears, index) in this.mappedYears"
                :key="index"
                :value="donationYears"
              >
                {{ donationYears }}
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
                @change="updateDoughnutChart"
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
              v-model="selectedYearsLine"
              @change="updateLineChart"
              style="display: flex; align-self: flex-end"
            >
              <option value="" selected disabled class="bar-year__option">
                Selecione o ano
              </option>
              <option
                class="bar-year__option"
                v-for="(donationYears, index) in this.mappedYears"
                :key="index"
                :value="donationYears"
              >
                {{ donationYears }}
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
      barChart: null,
      lineChart: null,

      //ProfileData
      hospitalName: "",
      hospitalPhoto: "",

      showTransition: false,

      donationBanks: [],
      donationBanksYears: {},

      selectedYearsBar: "2022 - 2023",
      firstYearBarGraphData: initializeGraphData(),
      secondYearBarGraphData: initializeGraphData(),

      selectedYearDoughnut: 2023,
      yearDoughnutGraphData: initializeGraphData(),

      selectedYearsLine: "2022 - 2023",
      firstYearLineGraphData: initializeGraphData(),
      secondYearLineGraphData: initializeGraphData(),

      years: [],
      mappedYears: [],

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
    async createBarChart(
      firstYear,
      secondYear,
      firstYearGraphData,
      secondYearGraphData
    ) {
      const ctx = document.getElementById("bar-graph");

      const donationBanks = await this.getDonationBanksData();

      const donationBanksYears = {};

      donationBanks.forEach((donationBank) => {
        if (donationBanksYears[donationBank.year]) {
          donationBanksYears[donationBank.year].push(donationBank);
        } else {
          donationBanksYears[donationBank.year] = [donationBank];
        }
      });

      if (donationBanksYears[firstYear] != undefined) {
        donationBanksYears[firstYear].forEach((bloodsTypes) => {
          if (firstYearGraphData.hasOwnProperty(bloodsTypes.type)) {
            firstYearGraphData[bloodsTypes.type] += parseInt(
              bloodsTypes.blood_ml
            );
          }
        });
      }

      donationBanksYears[secondYear].forEach((bloodsTypes) => {
        if (secondYearGraphData.hasOwnProperty(bloodsTypes.type)) {
          secondYearGraphData[bloodsTypes.type] += parseInt(
            bloodsTypes.blood_ml
          );
        }
      });

      const labels = Object.keys(firstYearGraphData);

      const data = {
        labels: labels,
        datasets: [
          {
            label: firstYear,
            data: Object.values(firstYearGraphData),
            backgroundColor: "rgb(255,205,86)",
          },
          {
            label: secondYear,
            data: Object.values(secondYearGraphData),
            backgroundColor: "rgb(255,99,132)",
          },
        ],
      };

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

      Chart.defaults.font.size = 24;
      Chart.defaults.font.family = "Abel";
      Chart.defaults.color = `black`;

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

      this.barChart = new Chart(ctx, config);
    },
    updateBarChart() {
      this.barChart.destroy();

      const firstYear = this.selectedYearsBar.split("-")[0].trim();
      const secondYear = this.selectedYearsBar.split("-")[1].trim();

      this.createBarChart(
        firstYear,
        secondYear,
        this.firstYearBarGraphData,
        this.secondYearBarGraphData
      );

      this.firstYearBarGraphData = {
        "O-": 0,
        "O+": 0,
        "A-": 0,
        "A+": 0,
        "B-": 0,
        "B+": 0,
        "AB-": 0,
        "AB+": 0,
      };

      this.secondYearBarGraphData = {
        "O-": 0,
        "O+": 0,
        "A-": 0,
        "A+": 0,
        "B-": 0,
        "B+": 0,
        "AB-": 0,
        "AB+": 0,
      };
    },
    updateDoughnutChart() {
      this.doughnutChart.destroy();

      this.createDoughnutChart(
        this.selectedYearDoughnut,
        this.yearDoughnutGraphData
      );

      this.yearDoughnutGraphData = {
        "O-": 0,
        "O+": 0,
        "A-": 0,
        "A+": 0,
        "B-": 0,
        "B+": 0,
        "AB-": 0,
        "AB+": 0,
      };
    },
    updateLineChart() {
      this.lineChart.destroy();

      const firstYear = this.selectedYearsLine.split("-")[0].trim();
      const secondYear = this.selectedYearsLine.split("-")[1].trim();

      this.createLineChart(
        firstYear,
        secondYear,
        this.firstYearLineGraphData,
        this.secondYearLineGraphData
      );

      this.firstYearLineGraphData = {
        "O-": 0,
        "O+": 0,
        "A-": 0,
        "A+": 0,
        "B-": 0,
        "B+": 0,
        "AB-": 0,
        "AB+": 0,
      };

      this.secondYearLineGraphData = {
        "O-": 0,
        "O+": 0,
        "A-": 0,
        "A+": 0,
        "B-": 0,
        "B+": 0,
        "AB-": 0,
        "AB+": 0,
      };
    },

    //Doughnut
    async createDoughnutChart(year, donationBankData) {
      const donationBanks = await this.getDonationBanksData();

      const donationBanksYears = {};

      donationBanks.forEach((donationBank) => {
        if (donationBanksYears[donationBank.year]) {
          donationBanksYears[donationBank.year].push(donationBank);
        } else {
          donationBanksYears[donationBank.year] = [donationBank];
        }
      });

      donationBanksYears[year].forEach((bloodsTypes) => {
        if (donationBankData.hasOwnProperty(bloodsTypes.type)) {
          donationBankData[bloodsTypes.type] += parseInt(bloodsTypes.blood_ml);
        }
      });

      const ctx = document.getElementById("doughnut-graph");

      const data = {
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

      Chart.defaults.font.size = 24;
      Chart.defaults.font.family = "Abel";
      Chart.defaults.color = `black`;

      this.doughnutChart = new Chart(ctx, config);
    },
    async createLineChart(
      firstYear,
      secondYear,
      firstYearGraphData,
      secondYearGraphData
    ) {
      const ctx = document.getElementById("line-graph");

      const donationBanks = await this.getDonationBanksData();

      const donationBanksYears = {};

      donationBanks.forEach((donationBank) => {
        if (donationBanksYears[donationBank.year]) {
          donationBanksYears[donationBank.year].push(donationBank);
        } else {
          donationBanksYears[donationBank.year] = [donationBank];
        }
      });

      if (donationBanksYears[firstYear] != undefined) {
        donationBanksYears[firstYear].forEach((bloodsTypes) => {
          if (firstYearGraphData.hasOwnProperty(bloodsTypes.type)) {
            firstYearGraphData[bloodsTypes.type] += parseInt(
              bloodsTypes.blood_ml
            );
          }
        });
      }

      donationBanksYears[secondYear].forEach((bloodsTypes) => {
        if (secondYearGraphData.hasOwnProperty(bloodsTypes.type)) {
          secondYearGraphData[bloodsTypes.type] += parseInt(
            bloodsTypes.blood_ml
          );
        }
      });

      const labels = Object.keys(firstYearGraphData);

      const data = {
        labels: labels,
        datasets: [
          {
            label: firstYear,
            data: Object.values(firstYearGraphData),
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            pointRadius: 8,
            pointHoverRadius: 10,
            borderWidth: 2,
          },
          {
            label: secondYear,
            data: Object.values(secondYearGraphData),
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

      this.lineChart = new Chart(ctx, config);
    },
    async getDonationBanksData() {
      try {
        const response = await axios.get(
          `${BASE_URL}/hospital/${localStorage.getItem(
            "hospitalId"
          )}/donation-banks`
        );
        return response.data.donationBanks;
      } catch (error) {
        console.error("Error fetching donation banks:", error);
        return [];
      }
    },
    async getYearsDonationBank() {
      axios
        .get(
          `${BASE_URL}/hospital/${localStorage.getItem(
            "hospitalId"
          )}/donation-banks-years`
        )
        .then((response) => {
          this.years = response.data.years;

          const multipleYears = [];

          for (let i = 0; i < this.years.length; i += 2) {
            const chunk = this.years.slice(i, i + 2).slice();

            const years = chunk.map((obj) => obj.year);

            const yearString = years.join(" - ");

            multipleYears.push(yearString);
          }

          if (this.years.length % 2 !== 0) {
            const lastYearIndex = this.years.length - 1;
            const lastYear = this.years[lastYearIndex].year;
            const previousYear = this.years[lastYearIndex - 1].year;

            const combinedString = previousYear + " - " + lastYear;

            multipleYears.push(combinedString);
          }

          this.mappedYears = multipleYears.filter((multipleYear) => {
            return multipleYear.includes("-");
          });
        });
    },
  },
  async mounted() {
    this.showTransition = true;

    this.hospitalName = localStorage.hospitalName;
    this.hospitalPhoto = localStorage.hospitalPhoto;

    await this.getYearsDonationBank();

    this.createBarChart(
      this.selectedYearsBar.split("-")[0].trim(),
      this.selectedYearsBar.split("-")[1].trim(),
      this.firstYearBarGraphData,
      this.secondYearBarGraphData
    );

    this.createDoughnutChart(
      this.selectedYearDoughnut,
      this.yearDoughnutGraphData
    );

    this.createLineChart(
      this.selectedYearsLine.split("-")[0].trim(),
      this.selectedYearsLine.split("-")[1].trim(),
      this.firstYearLineGraphData,
      this.secondYearLineGraphData
    );
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/donation/donationStyle.css");
</style>
