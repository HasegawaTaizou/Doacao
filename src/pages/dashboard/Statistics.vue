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
      <div class="statistics__reviews">
        <h2 class="reviews__title">AVALIAÇÕES</h2>
        <div class="reviews__graph-review-container">
          <div class="graph-review__summary-container">
            <span class="summary__average">3.8</span>
            <div class="summary__stars-container">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <i class="far fa-star"></i>
            </div>
            <span class="summary__total">12 Avaliações</span>
          </div>
          <div class="graph-review__graph-container">
            <div class="graph__bar-container">
              <div class="bar__line-container">
                <div class="line__progress"></div>
              </div>
              <div class="bar__label-container">
                <span class="label__number">5</span>
                <i class="far fa-star label__star"></i>
              </div>
            </div>
            <div class="graph__bar-container">
              <div class="bar__line-container">
                <div class="line__progress"></div>
              </div>
              <div class="bar__label-container">
                <span class="label__number">4</span>
                <i class="far fa-star label__star"></i>
              </div>
            </div>
            <div class="graph__bar-container">
              <div class="bar__line-container">
                <div class="line__progress"></div>
              </div>
              <div class="bar__label-container">
                <span class="label__number">3</span>
                <i class="far fa-star label__star"></i>
              </div>
            </div>
            <div class="graph__bar-container">
              <div class="bar__line-container">
                <div class="line__progress"></div>
              </div>
              <div class="bar__label-container">
                <span class="label__number">2</span>
                <i class="far fa-star label__star"></i>
              </div>
            </div>
            <div class="graph__bar-container">
              <div class="bar__line-container">
                <div class="line__progress"></div>
              </div>
              <div class="bar__label-container">
                <span class="label__number">1</span>
                <i class="far fa-star label__star"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="reviews__comments-container">
          <div class="comment-container">
            <img
              src="../../assets/img/donator-image.png"
              alt="Comment Image"
              class="comment__image"
            />
            <router-link :to="'/dashboard/donator'" class="comment__donator">
              Camila Alves Pinheiro
            </router-link>
            <div class="comment__stars-container">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <i class="far fa-star"></i>
            </div>
            <span class="comment__date">14/08/2023</span>
            <p class="comment__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tempus a urna a scelerisque. Morbi accumsan odio sit amet nulla
              eleifend molestie. Nullam pretium tortor est.
            </p>
          </div>
          <div class="comment-container">
            <img
              src="../../assets/img/donator-image.png"
              alt="Comment Image"
              class="comment__image"
            />
            <router-link :to="'/dashboard/donator'" class="comment__donator">
              João Pedro Bueno
            </router-link>
            <div class="comment__stars-container">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <i class="far fa-star"></i>
            </div>
            <span class="comment__date">14/08/2023</span>
            <p class="comment__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tempus a urna a scelerisque. Morbi accumsan odio sit amet nulla
              eleifend molestie. Nullam pretium tortor est.
            </p>
          </div>
          <div class="comment-container">
            <img
              src="../../assets/img/donator-image.png"
              alt="Comment Image"
              class="comment__image"
            />
            <router-link :to="'/dashboard/donator'" class="comment__donator">
              Beatriz Fideliz Landi Coelho
            </router-link>
            <div class="comment__stars-container">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <i class="far fa-star"></i>
            </div>
            <span class="comment__date">14/08/2023</span>
            <p class="comment__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tempus a urna a scelerisque. Morbi accumsan odio sit amet nulla
              eleifend molestie. Nullam pretium tortor est.
            </p>
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
