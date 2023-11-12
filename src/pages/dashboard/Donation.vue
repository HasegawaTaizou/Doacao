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
              <select name="blood-type" class="blood_type__select">
                <option value="" selected disabled class="blood-type__option">
                  Selecione o tipo sanguíneo
                </option>
                <option value="O+" class="blood-type__option">
                  O+
                </option>
              </select>
            </div>
            <div class="action__quantity">
              <label for="quantity" class="quantity__label">Quantidade:</label>
              <input type="number" class="quantity__input" />
            </div>
            <div class="action__year">
              <label for="year" class="year__label">Ano:</label>
              <select name="year" class="year__select">
                <option value="" selected disabled class="year__option">
                  Selecione o ano
                </option>
              </select>
            </div>
            <button class="action__button">Salvar</button>
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
    };
  },
  methods: {
    createChart() {
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
          this.createChart();
        });
    },
  },
  mounted() {
    this.getDonationBanks();
    this.showTransition = true;

    this.hospitalName = localStorage.hospitalName;
    this.hospitalPhoto = localStorage.hospitalPhoto;
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/donation/donationStyle.css");
</style>
