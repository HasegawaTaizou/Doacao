<template>
  <section id="book-schedules-dashboard">
    <div class="book-schedules__header">
      <h1 class="book-schedules__title">RESERVAR AGENDAMENTOS</h1>
      <div class="profile-container">
        <img
          :src="$store.state.hospitalPhoto"
          alt="Profile Image"
          class="profile__image"
        />
        <span class="profile__name">{{ $store.state.hospitalName }}</span>
      </div>
    </div>
    <div class="book-schedules-wrapper">
      <div class="book-schedules__content">
        <div class="book-scheduling-container">
          <div class="book-scheduling">
            <div class="scheduling-date">
              <span class="date__title">Escolha a data e hora:</span>
              <input
                type="datetime-local"
                name=""
                id=""
                class="date__datetime-local"
                v-model="scheduleDatetime"
              />
            </div>
            <div class="scheduling-site">
              <span class="site__title">Escolha o local:</span>
              <select v-model="scheduleSite" name="" id="" class="site__select">
                <option disabled value="">Escolha o local</option>
                <option
                  v-for="site in sites"
                  :key="site.idSite"
                  :value="site.idSite"
                >
                  {{ site.site }}
                </option>
              </select>
            </div>
          </div>
          <button @click="addSchedule" class="book-scheduling__button">
            <span class="book-scheduling__text">Reservar agendamento</span>
            <img
              src="../../assets/img/plus-icon.png"
              alt="Book Scheduling Icon"
              class="book-scheduling__icon"
            />
          </button>
          <div
            v-if="this.tableBookSchedules.length > 0"
            class="book-scheduling__schedules"
          >
            <table class="schedules__table">
              <tbody>
                <tr class="table__title">
                  <th class="title__date">Data</th>
                  <th class="title__hour">Horário</th>
                  <th class="title__site">Local</th>
                  <th class="title__action">Ação</th>
                </tr>
                <tr
                  class="table__content"
                  v-for="(schedule, index) in tableBookSchedules"
                  :key="index"
                >
                  <td class="content__date">{{ schedule.date }}</td>
                  <td class="content__hour">{{ schedule.hour }}</td>
                  <td class="content__site">{{ schedule.contentSite }}</td>
                  <td class="content__actions">
                    <img
                      @click="removeSchedule(index)"
                      src="../../assets/img/scheduling-cancel-icon.png"
                      alt="Cancel Icon"
                      class="action__icon"
                    />
                    <img
                      @click="openPopUp('reschedule')"
                      src="../../assets/img/scheduling-reschedule-icon.png"
                      alt="Reschedule Icon"
                      class="action__icon"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            v-if="this.tableBookSchedules.length > 0"
            class="book-scheduling__actions-buttons"
          >
            <button @click="openPopUp('cancel')" class="action-button__cancel">
              <span class="cancel__text">Cancelar</span>
              <i class="fa-regular fa-circle-xmark"></i>
            </button>
            <button @click="openPopUp('save')" class="action-button__save">
              <span class="save__text">Salvar</span>
              <i class="fa-regular fa-circle-check"></i>
            </button>
          </div>
        </div>
      </div>
      <h2 class="schedules-available__title">Agendamentos disponíveis:</h2>
      <div class="schedules-available">
        <table class="schedules__table">
          <tbody>
            <tr class="table__title">
              <th class="title__date">Data</th>
              <th class="title__hour">Horário</th>
              <th class="title__site">Local</th>
              <th class="title__action">Ação</th>
            </tr>
            <tr
              v-for="schedule in bookSchedules"
              :key="schedule.id"
              class="table__content"
            >
              <td class="content__date">{{ schedule.date }}</td>
              <td class="content__hour">{{ schedule.hour }}</td>
              <td class="content__site">{{ schedule.site }}</td>
              <td class="content__actions">
                <img
                  src="../../assets/img/scheduling-cancel-icon.png"
                  alt="Cancel Icon"
                  class="action__icon"
                  @click="
                    openPopUp('cancel-book-schedule');
                    bookScheduleId = schedule.id;
                  "
                />
                <img
                  src="../../assets/img/scheduling-reschedule-icon.png"
                  alt="Reschedule Icon"
                  class="action__icon"
                  @click="
                    openPopUp('reschedule-book-schedule');
                    bookScheduleId = schedule.id;
                  "
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <!-- <PopUp
    v-if="selectedComponent === 'cancel'"
    :title="'Cancelar?'"
    :message="'Os agendamentos criados serão cancelados.'"
    :acceptFunction="clearSchedules"
  ></PopUp>
  <PopUp
    v-if="selectedComponent === 'cancel-book-schedule'"
    :title="'Excluir agendamento?'"
    :message="`O agendamento será excluído.`"
    :acceptFunction="deleteBookSchedule"
  ></PopUp>
  <PopUp
    v-if="selectedComponent === 'save'"
    :title="'Salvar?'"
    :message="'Os agendamentos criados serão colocados como agendamentos disponíveis.'"
    :acceptFunction="addSchedules"
  ></PopUp>
  <PopUp
    v-if="selectedComponent === 'reschedule'"
    :title="'Remarcar'"
    :message="'Escolha a data e o horário para remarcar'"
    :acceptFunction="updateSchedule"
  >
    <div class="book-scheduling">
      <div class="scheduling-date">
        <input
          v-model="scheduleDatetime"
          type="datetime-local"
          name=""
          id=""
          class="date__datetime-local"
        />
      </div>
      <div class="scheduling-site">
        <select v-model="scheduleSite" name="" id="" class="site__select">
          <option disabled value="">Escolha o local</option>
          <option value="Descrição Local 1">Descrição Local 1</option>
          <option value="Descrição Local 2">Descrição Local 2</option>
        </select>
      </div>
    </div>
  </PopUp>
  <PopUp
    v-if="selectedComponent === 'reschedule-book-schedule'"
    :title="'Remarcar'"
    :message="'Escolha a data e o horário para remarcar'"
    :acceptFunction="updateBookSchedule"
  >
    <div class="book-scheduling">
      <div class="scheduling-date">
        <input
          v-model="bookScheduleDatetime"
          type="datetime-local"
          name=""
          id=""
          class="date__datetime-local"
        />
      </div>
      <div class="scheduling-site">
        <select v-model="bookScheduleSite" name="" id="" class="site__select">
          <option disabled value="">Escolha o local</option>
          <option v-for="site in sites" :key="site.idSite" :value="site.idSite">
            {{ site.site }}
          </option>
        </select>
      </div>
    </div>
  </PopUp> -->
</template>

<script>
import PopUp from "../../assets/components/PopUp.vue";
import openPopUp from "../../assets/js/methods/open-pop-up.js";
import { format } from "date-fns";

import { BASE_URL } from "../../assets/js/config";
import axios from "axios";

export default {
  name: "BookSchedules",
  components: { PopUp },
  data() {
    return {
      //Transition
      showTransition: false,

      //Sites data
      sites: [],

      //Book Schedule site and datetime
      scheduleDatetime: "",
      scheduleDatetimeFormatted: "",
      scheduleSite: "",

      //Book Schedules Content
      tableBookSchedules: [],

      //Book Schedules Data
      bookSchedules: [],
      bookScheduleId: 0,
      bookScheduleDatetimeFormatted: "",
      bookScheduleDatetime: "",
      bookScheduleDate: "",
      bookScheduleTime: "",
      bookScheduleSite: "",

      //Component
      selectedComponent: "",
    };
  },
  methods: {
    getHospitalSites() {
      axios.get(`${BASE_URL}/hospital/${this.$store.state.hospitalId}/sites`).then((response) => {
        this.sites = response.data.sites;
      });
    },
    addSchedule() {
      if (this.scheduleDatetime != "" && this.scheduleSite != "") {
        this.formatDateTime();

        this.tableBookSchedules.push({
          date: this.scheduleDatetimeFormatted.split(" ")[0],
          hour: this.scheduleDatetimeFormatted.split(" ")[1],
          hospitalSiteId: this.scheduleSite,
          contentSite: this.scheduleSite,
        });
      }
    },
    addSchedules() {
      axios
        .post(`${BASE_URL}/book-schedules`, this.tableBookSchedules)
        .then(() => {
          this.clearSchedules();
        });
    },
    removeSchedule(index) {
      this.tableBookSchedules.splice(index, 1);
    },
    clearSchedules() {
      this.tableBookSchedules = [];
    },
    formatDateTime() {
      this.scheduleDatetimeFormatted = format(
        new Date(this.scheduleDatetime),
        "dd/MM/yyyy HH:mm"
      );
    },
    formatDateTimeBookSchedule() {
      this.bookScheduleDatetimeFormatted = format(
        new Date(this.bookScheduleDatetime),
        "dd/MM/yyyy HH:mm"
      );
    },
    updateSchedule() {
      this.formatDateTime();
      const dateParts = this.scheduleDatetimeFormatted.split(" ");
      const updatedDate = dateParts[0];
      const updatedTime = dateParts[1];

      this.tableBookSchedules[this.currentIndex].contentDate = updatedDate;
      this.tableBookSchedules[this.currentIndex].contentHour = updatedTime;
      this.tableBookSchedules[this.currentIndex].contentSite =
        this.scheduleSite;
    },
    updateBookSchedule() {
      this.formatDateTimeBookSchedule();
      const dateParts = this.bookScheduleDatetimeFormatted.split(" ");
      this.bookScheduleDate = dateParts[0];
      this.bookScheduleTime = dateParts[1];

      const updateBookScheduleData = {
        id: this.bookScheduleId,
        date: this.bookScheduleDate,
        hour: this.bookScheduleTime,
        siteId: this.bookScheduleSite,
      };

      axios.put(`${BASE_URL}/schedule-reschedule`, updateBookScheduleData);
    },
    getBookSchedules() {
      axios.get(`${BASE_URL}/hospital/${this.$store.state.hospitalId}/book-schedules`).then((response) => {
        this.bookSchedules = response.data.bookSchedules;
      });
    },
    deleteBookSchedule() {
      axios.delete(`${BASE_URL}/delete-book-schedule/${this.bookScheduleId}`);
    },
    openPopUp,
  },
  mounted() {
    this.showTransition = true;
    this.getHospitalSites();
    this.getBookSchedules();
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/bookSchedules/bookSchedulesStyle.css");
@import url("../../assets/css/components/rescheduleIconStyle.css");
</style>
