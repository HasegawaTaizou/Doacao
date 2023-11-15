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
            <canvas id="bar-graph"></canvas>
          </div>
          <div class="doughnut-graph-container">
            <canvas id="doughnut-graph"></canvas>
            <div class="doughnut__blood-types">
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
                  Selecione o tipo sanguíneo
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
              <label for="quantity" class="quantity__label">Quantidade:</label>
              <input v-model="quantity" type="number" class="quantity__input" />
            </div>
            <div class="action__year">
              <label for="year" class="year__label">Ano:</label>
              <select name="year" v-model="year" class="year__select">
                <option value="" selected disabled class="year__option">
                  Selecione o ano
                </option>
                <option
                  v-for="(year, index) in this.years"
                  :key="index"
                  :value="year.year"
                >
                  {{ year.year }}
                </option>
              </select>
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
    return {
      //ProfileData
      hospitalName: "",
      hospitalPhoto: "",

      showTransition: false,

      donationBanks: [],
      donationBanksYears: {},

      selectedFirstYear: 2022,
      selectedSecondYear: 2023,

      donationBankGraphFirstYearData: {
        "O-": 0,
        "O+": 0,
        "A-": 0,
        "A+": 0,
        "B-": 0,
        "B+": 0,
        "AB-": 0,
        "AB+": 0,
      },

      donationBankGraphSecondYearData: {
        "O-": 0,
        "O+": 0,
        "A-": 0,
        "A+": 0,
        "B-": 0,
        "B+": 0,
        "AB-": 0,
        "AB+": 0,
      },

      years: [],

      //Update Donation Bank Data
      bloodType: "",
      quantity: 0,
      year: 0,
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

      console.log(data);
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
            },
          },
        },
      };

      new Chart(ctx, config);
    },
    createDoughnutChart() {
      const ctx = document.getElementById("doughnut-graph");

      const labels = Object.keys(this.donationBankGraphFirstYearData);

      const data = {
        labels: labels,
        datasets: [
          {
            label: this.selectedSecondYear,
            data: Object.values(this.donationBankGraphSecondYearData),
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

      new Chart(ctx, config);
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
          layout: {
            padding: {
              bottom: 0,
            },
          },
          scales: {
            x: {
              barThickness: 4, // Ajuste o valor conforme necessário
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      };

      new Chart(ctx, config);
    },
    getDonationBanks() {
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

          if (this.donationBanksYears[this.selectedFirstYear] != undefined) {
            this.donationBanksYears[this.selectedFirstYear].forEach(
              (bloodsTypes) => {
                if (
                  this.donationBankGraphFirstYearData.hasOwnProperty(
                    bloodsTypes.type
                  )
                ) {
                  this.donationBankGraphFirstYearData[bloodsTypes.type] +=
                    parseInt(bloodsTypes.blood_ml);
                }
              }
            );
          }

          this.donationBanksYears[this.selectedSecondYear].forEach(
            (bloodsTypes) => {
              if (
                this.donationBankGraphSecondYearData.hasOwnProperty(
                  bloodsTypes.type
                )
              ) {
                this.donationBankGraphSecondYearData[bloodsTypes.type] +=
                  parseInt(bloodsTypes.blood_ml);
              }
            }
          );
        })
        .then(() => {
          this.createBarChart();
          this.createDoughnutChart();
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
    this.getDonationBanks();
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
