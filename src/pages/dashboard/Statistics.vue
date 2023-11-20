<template>
  <transition name="fade">
    <section id="statistics-dashboard">
      <div class="statistics__header">
        <h1 class="statistics__title">Estatísticas</h1>
        <div class="profile-container">
          <img
            :src="hospitalPhoto"
            alt="Profile Image"
            class="profile__image"
          />
          <span class="profile__name">{{ hospitalName }}</span>
        </div>
      </div>
      <div class="statistics-wrapper">
        <div class="statistics__schedules">
          <h2 class="schedules-introduction__title">AGENDAMENTOS</h2>
          <img
            src="../../assets/img/statistics-schedules-image.png"
            alt="Schedules Image"
            class="schedules-introduction__image"
          />
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
        <div class="statistics__reviews">
          <h2 class="reviews__title">AVALIAÇÕES</h2>
          <div class="reviews__graph-review-container">
            <div class="graph-review__summary-container">
              <span class="summary__average">{{ averageReview }}</span>
              <div class="summary__stars-container">
                <i
                  v-for="(star, index) in Math.floor(averageReview)"
                  class="fas fa-star"
                  :key="index"
                ></i>
                <i
                  class="fas fa-star-half-alt"
                  v-if="averageReview % 1 !== 0"
                ></i>
                <i
                  v-for="(star, index) in 5 - Math.ceil(averageReview)"
                  class="far fa-star"
                  :key="index"
                ></i>
              </div>
              <span class="summary__total">{{ totalReviews }} Avaliações</span>
            </div>
            <div class="graph-review__graph-container">
              <div class="graph__bar-container">
                <div class="bar__line-container">
                  <div
                    class="line__progress"
                    :style="`width: ${fiveStarPercentage}%`"
                  ></div>
                </div>
                <div class="bar__label-container">
                  <span class="label__number">5</span>
                  <i class="far fa-star label__star"></i>
                </div>
              </div>
              <div class="graph__bar-container">
                <div class="bar__line-container">
                  <div
                    class="line__progress"
                    :style="`width: ${fourStarPercentage}%`"
                  ></div>
                </div>
                <div class="bar__label-container">
                  <span class="label__number">4</span>
                  <i class="far fa-star label__star"></i>
                </div>
              </div>
              <div class="graph__bar-container">
                <div class="bar__line-container">
                  <div
                    class="line__progress"
                    :style="`width: ${threeStarPercentage}%`"
                  ></div>
                </div>
                <div class="bar__label-container">
                  <span class="label__number">3</span>
                  <i class="far fa-star label__star"></i>
                </div>
              </div>
              <div class="graph__bar-container">
                <div class="bar__line-container">
                  <div
                    class="line__progress"
                    :style="`width: ${twoStarPercentage}%`"
                  ></div>
                </div>
                <div class="bar__label-container">
                  <span class="label__number">2</span>
                  <i class="far fa-star label__star"></i>
                </div>
              </div>
              <div class="graph__bar-container">
                <div class="bar__line-container">
                  <div
                    class="line__progress"
                    :style="`width: ${oneStarPercentage}%`"
                  ></div>
                </div>
                <div class="bar__label-container">
                  <span class="label__number">1</span>
                  <i class="far fa-star label__star"></i>
                </div>
              </div>
            </div>
            <div
              id="tooltip"
              style="
                display: none;
                position: absolute;
                background-color: #f9f9f9;
                padding: 5px;
                border: 1px solid #ccc;
              "
            ></div>
          </div>
          <div class="reviews__comments-container">
            <div
              v-for="(review, index) in hospitalReviews"
              :key="index"
              class="comment-container"
            >
              <img
                :src="review.photo"
                alt="Comment Image"
                class="comment__image"
              />

              <router-link :to="'/dashboard/donator'" class="comment__donator">
                {{ review.name }}
              </router-link>
              <div class="comment__stars-container">
                <i
                  class="fas fa-star"
                  v-for="(star, index) in review.starRating"
                  :key="index"
                ></i>
                <i
                  v-for="(star, index) in 5 - review.starRating"
                  class="far fa-star"
                  :key="index"
                ></i>
              </div>
              <span class="comment__date">{{ review.date }}</span>
              <p class="comment__text">
                {{ review.opinion }}
              </p>
            </div>
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

import {
  connectWebsocket,
  setupWebsocketEventListener,
} from "../../assets/js/websocket/websocket";

import { updateDataFromWebsocket } from "../../assets/js/websocket/update-data-from-websocket";

import websocketConnectionData from "../../assets/js/data/websocket-connection";

export default {
  name: "Statistics",
  data() {
    return {
      //Websocket
      ...websocketConnectionData,

      //ProfileData
      hospitalName: "",
      hospitalPhoto: "",

      //Transition
      showTransition: false,

      //Ratings Data
      hospitalRatingsData: [],

      //Label Data
      scheduled: 0,
      concluded: 0,
      rescheduled: 0,
      pending: 0,
      scheduledTotal: 0,

      //Stars Review Data
      totalReviews: 0,
      fiveStarsReview: 0,
      fourStarsReview: 0,
      threeStarsReview: 0,
      twoStarsReview: 0,
      oneStarsReview: 0,
      averageReview: 0,

      //Hospital Reviews
      hospitalReviews: {},

      //BackgroundColor data
      scheduledColor: "rgb(44, 98, 241)",
      concludedColor: "rgb(106, 179, 157)",
      rescheduledColor: "rgb(229, 192, 94)",
      pendingColor: "rgb(244, 52, 52)",
    };
  },
  computed: {
    //Percentage Line Data
    fiveStarPercentage() {
      return (this.fiveStarsReview / this.totalReviews) * 100;
    },
    fourStarPercentage() {
      return (this.fourStarsReview / this.totalReviews) * 100;
    },
    threeStarPercentage() {
      return (this.threeStarsReview / this.totalReviews) * 100;
    },
    twoStarPercentage() {
      return (this.twoStarsReview / this.totalReviews) * 100;
    },
    oneStarPercentage() {
      return (this.oneStarsReview / this.totalReviews) * 100;
    },
  },
  methods: {
    updateReviewData() {
      updateDataFromWebsocket(this.hospitalReviews, "review", "concat");
    },
    updateRatingsData() {
      updateDataFromWebsocket(this.hospitalRatingsData, "ratings", "replace");
      this.oneStarsReview = this.hospitalRatingsData.oneStarsRating;
      this.twoStarsReview = this.hospitalRatingsData.twoStarsRating;
      this.threeStarsReview = this.hospitalRatingsData.threeStarsRating;
      this.fourStarsReview = this.hospitalRatingsData.fourStarsRating;
      this.fiveStarsReview = this.hospitalRatingsData.fiveStarsRating;
      this.averageReview = this.hospitalRatingsData.average;
      this.totalReviews = this.hospitalRatingsData.totalReviews;
    },
    getSchedulesStatistics() {
      axios
        .get(
          `${BASE_URL}/hospital/${localStorage.getItem(
            "hospitalId"
          )}/statistics/schedules`
        )
        .then((response) => {
          const schedulesStatisticsData = response.data.schedulesStatistics;

          this.scheduled = schedulesStatisticsData.scheduledAmount;
          this.concluded = schedulesStatisticsData.concludedAmount;
          this.rescheduled = schedulesStatisticsData.rescheduledAmount;
          this.pending = schedulesStatisticsData.pendingAmount;
          this.scheduledTotal = schedulesStatisticsData.totalSchedules;

          this.createChart();
        });
    },
    getRatingsStatistics() {
      axios
        .get(
          `${BASE_URL}/hospital/${localStorage.getItem(
            "hospitalId"
          )}/statistics/ratings`
        )
        .then((response) => {
          this.hospitalRatingsData = response.data.ratingsStatistics;

          this.oneStarsReview = this.hospitalRatingsData.oneStarsRating;
          this.twoStarsReview = this.hospitalRatingsData.twoStarsRating;
          this.threeStarsReview = this.hospitalRatingsData.threeStarsRating;
          this.fourStarsReview = this.hospitalRatingsData.fourStarsRating;
          this.fiveStarsReview = this.hospitalRatingsData.fiveStarsRating;
          this.averageReview = this.hospitalRatingsData.average;
          this.totalReviews = this.hospitalRatingsData.totalReviews;
        });
    },
    getReviews() {
      axios
        .get(
          `${BASE_URL}/hospital/${localStorage.getItem(
            "hospitalId"
          )}/statistics/reviews`
        )
        .then((response) => {
          this.hospitalReviews = response.data.reviewsStatistics;
        });
    },
    createChart() {
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
  },
  mounted() {
    this.getSchedulesStatistics();
    this.getRatingsStatistics();
    this.getReviews();

    this.showTransition = true;

    this.hospitalName = localStorage.hospitalName;
    this.hospitalPhoto = localStorage.hospitalPhoto;
  },
  created() {
    this.connection = connectWebsocket();
    setupWebsocketEventListener(this.updateReviewData);
    setupWebsocketEventListener(this.updateRatingsData);
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/statistics/statisticsStyle.css");
</style>
