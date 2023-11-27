<template>
  <transition name="fade" appear v-if="showTransition">
    <section id="book-schedules-dashboard">
      <div class="book-schedules__header">
        <h1 class="book-schedules__title">RESERVAR AGENDAMENTOS</h1>
        <div class="profile-container">
          <img
            :src="hospitalPhoto"
            alt="Profile Image"
            class="profile__image"
          />
          <span class="profile__name">{{ hospitalName }}</span>
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
                <select
                  v-model="scheduleSite"
                  name=""
                  id=""
                  class="site__select"
                >
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
              <button @click="addSchedule" class="book-scheduling__button">
                <span class="book-scheduling__text">Reservar agendamento</span>
                <img
                  src="../../assets/img/plus-icon.png"
                  alt="Book Scheduling Icon"
                  class="book-scheduling__icon"
                />
              </button>
            </div>

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
                        @click="
                          openPopUp('reschedule');
                          selectBookSchedule(
                            index,
                            schedule.date,
                            schedule.hour,
                            schedule.hospitalSiteId
                          );
                        "
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
              <button
                @click="openPopUp('cancel')"
                class="action-button__cancel"
              >
                <span class="cancel__text">Cancelar</span>
                <i class="fa-regular fa-circle-xmark"></i>
              </button>
              <button @click="openPopUp('save')" class="action-button__save">
                <span class="save__text">Salvar</span>
                <i class="fa-regular fa-circle-check"></i>
              </button>
            </div>
          </div>
          <img
            src="../../assets/img/book-schedule-image2.png"
            alt="Schedules Avaible Image"
            class="schedules-available__image"
          />
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
                <td class="content__date">
                  {{ schedule.date }}
                </td>
                <td class="content__hour">{{ schedule.hour }}</td>
                <td class="content__site">{{ schedule.site }}</td>
                <td class="content__actions">
                  <img
                    src="../../assets/img/scheduling-cancel-icon.png"
                    alt="Cancel Icon"
                    class="action__icon"
                    @click="
                      selectBookSchedule(
                        schedule.id,
                        schedule.date,
                        schedule.hour,
                        schedule.site_id
                      );
                      openPopUp('cancel-book-schedule');
                      bookScheduleId = schedule.id;
                    "
                  />
                  <img
                    src="../../assets/img/scheduling-reschedule-icon.png"
                    alt="Reschedule Icon"
                    class="action__icon"
                    @click="
                      selectBookSchedule(
                        schedule.id,
                        schedule.date,
                        schedule.hour,
                        schedule.site_id
                      );
                      openPopUp('reschedule-book-schedule');
                      bookScheduleId = schedule.id;
                    "
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <img
            src="../../assets/img/book-schedule-image.png"
            alt="Schedules Avaible Image"
            class="schedules-available__image"
          />
        </div>
      </div>
      <PopUp
        v-if="selectedComponent === 'cancel'"
        :title="'Cancelar?'"
        :message="'Os agendamentos criados serão cancelados.'"
        :acceptFunction="clearSchedules"
        :image="'/src/assets/img/book-schedule-cancel-image.png'"
      ></PopUp>
      <PopUp
        v-if="selectedComponent === 'cancel-book-schedule'"
        :title="'Excluir agendamento?'"
        :message="`O agendamento será excluído.`"
        :acceptFunction="deleteBookSchedule"
        :image="'/src/assets/img/book-schedule-cancel-image.png'"
      ></PopUp>
      <PopUp
        v-if="selectedComponent === 'save'"
        :title="'Salvar?'"
        :message="'Os agendamentos criados serão colocados como agendamentos disponíveis.'"
        :acceptFunction="addSchedules"
        :image="'/src/assets/img/book-schedule-save-image.png'"
      ></PopUp>
      <PopUp
        v-if="selectedComponent === 'reschedule'"
        :title="'Remarcar'"
        :message="'Escolha a data e o horário para remarcar'"
        :acceptFunction="updateSchedule"
        :image="'/src/assets/img/book-schedule-reschedule-image.png'"
      >
        <div class="book-scheduling">
          <div class="scheduling-date">
            <input
              v-model="rescheduleDatetime"
              type="datetime-local"
              name=""
              id=""
              class="date__datetime-local"
            />
          </div>
          <div class="scheduling-site">
            <select v-model="selectedSite" name="" id="" class="site__select">
              <option disabled value="">Escolha o local</option>
              <option
                v-for="site in sites"
                :key="site.idSite"
                :value="site.idSite"
                v
              >
                {{ site.site }}
              </option>
            </select>
          </div>
        </div>
      </PopUp>
      <PopUp
        v-if="selectedComponent === 'reschedule-book-schedule'"
        :title="'Remarcar'"
        :message="'Escolha a data e o horário para remarcar'"
        :acceptFunction="updateBookSchedule"
        :image="'/src/assets/img/book-schedule-reschedule-image.png'"
      >
        <div class="book-scheduling">
          <div class="scheduling-date">
            <input
              v-model="rescheduleDatetime"
              type="datetime-local"
              name=""
              id=""
              class="date__datetime-local"
            />
          </div>
          <div class="scheduling-site">
            <select v-model="selectedSite" name="" id="" class="site__select">
              <option disabled value="">Escolha o local</option>
              <option
                v-for="site in sites"
                :key="site.idSite"
                :value="site.idSite"
                v
              >
                {{ site.site }}
              </option>
            </select>
          </div>
        </div>
      </PopUp>
      <NotificationBar
        v-if="$store.state.showNotification"
        :route="'null'"
        :message="'Ação realizada com sucesso!'"
      ></NotificationBar>
    </section>
  </transition>
</template>

<script>
import NotificationBar from "../../assets/components/NotificationBar.vue";
import PopUp from "../../assets/components/PopUp.vue";
import openPopUp from "../../assets/js/methods/open-pop-up.js";
import { format } from "date-fns";

import { BASE_URL } from "../../assets/js/config";
import axios from "axios";

//WebSocket
import {
  connectWebsocket,
  setupWebsocketEventListener,
} from "../../assets/js/websocket/websocket";

import { updateDataFromWebsocket } from "../../assets/js/websocket/update-data-from-websocket";

import websocketConnectionData from "../../assets/js/data/websocket-connection";

export default {
  name: "BookSchedules",
  components: { PopUp, NotificationBar },
  data() {
    return {
      //Websocket
      ...websocketConnectionData,

      //ProfileData
      hospitalName: "",
      hospitalPhoto: "",

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
      bookScheduleTextSite: "",
      //Component
      selectedComponent: "",

      //Book Schedule Selected
      selectedId: 0,
      selectedDate: "",
      selectedHour: "",
      selectedSite: "",
      rescheduleDatetime: "",
    };
  },
  methods: {
    updateBookSchedulesData() {
      updateDataFromWebsocket(this.bookSchedules, "bookSchedules", "replace");
    },
    getHospitalSites() {
      axios
        .get(`${BASE_URL}/hospital/${localStorage.getItem("hospitalId")}/sites`)
        .then((response) => {
          this.sites = response.data.sites;
        });
    },
    addSchedule() {
      if (this.scheduleDatetime != "" && this.scheduleSite != "") {
        this.formatDateTime();

        const selectedSite = this.sites.find(
          (site) => site.idSite === this.scheduleSite
        );
        const textSite = selectedSite ? selectedSite.site : "";

        this.tableBookSchedules.push({
          date: this.scheduleDatetimeFormatted.split(" ")[0],
          hour: this.scheduleDatetimeFormatted.split(" ")[1],
          hospitalSiteId: this.scheduleSite,
          contentSite: textSite,
        });
      }
    },
    addSchedules() {
      axios
        .post(`${BASE_URL}/book-schedules`, this.tableBookSchedules)
        .then(() => {
          this.clearSchedules();
          this.$store.commit("SET_SHOW_NOTIFICATION", true);
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
        new Date(this.rescheduleDatetime),
        "dd/MM/yyyy HH:mm"
      );
    },
    formattedDateTime() {
      const date = this.selectedDate.split("/");

      const year = date[2];
      const month = date[1];
      const day = date[0];

      const time = this.selectedHour.split(":");
      const hours = time[0];
      const minutes = time[1];

      //RescheduleDateTime
      this.rescheduleDatetime = `${year}-${month}-${day}T${hours}:${minutes}`;
    },
    selectBookSchedule(id, date, hour, siteId) {
      this.selectedId = id;
      this.selectedDate = date;
      this.selectedHour = hour;
      this.selectedSite = siteId;

      console.log("id no selectBookSchedule: ", this.selectedId);

      this.formattedDateTime();
    },
    updateSchedule() {
      this.formatDateTimeBookSchedule();
      const dateParts = this.bookScheduleDatetimeFormatted.split(" ");
      this.bookScheduleDate = dateParts[0];
      this.bookScheduleTime = dateParts[1];

      const selectedSiteId = this.sites.find(
        (site) => site.idSite === this.selectedSite
      );

      const textSite = selectedSiteId ? selectedSiteId.site : "";

      this.tableBookSchedules[this.selectedId].date = this.bookScheduleDate;
      this.tableBookSchedules[this.selectedId].hour = this.bookScheduleTime;
      this.tableBookSchedules[this.selectedId].hospitalSiteId =
        this.selectedSite;
      this.tableBookSchedules[this.selectedId].contentSite = textSite;
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
        siteId: this.selectedSite,
      };

      axios
        .put(`${BASE_URL}/update-book-schedule`, updateBookScheduleData)
        .then(() => {
          this.$store.commit("SET_SHOW_NOTIFICATION", true);
        });
    },
    getBookSchedules() {
      axios
        .get(
          `${BASE_URL}/hospital/${localStorage.getItem(
            "hospitalId"
          )}/book-schedules`
        )
        .then((response) => {
          this.bookSchedules = response.data.bookSchedules;
        });
    },
    deleteBookSchedule() {
      axios
        .delete(`${BASE_URL}/delete-book-schedule/${this.selectedId}`)
        .then(() => {
          this.$store.commit("SET_SHOW_NOTIFICATION", true);
        });
    },
    openPopUp,
  },
  mounted() {
    this.showTransition = true;

    this.getHospitalSites();
    this.getBookSchedules();

    this.hospitalName = localStorage.hospitalName;
    this.hospitalPhoto = localStorage.hospitalPhoto;
  },
  created() {
    this.connection = connectWebsocket();
    setupWebsocketEventListener(this.updateBookSchedulesData);
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/bookSchedules/bookSchedulesStyle.css");
@import url("../../assets/css/components/rescheduleIconStyle.css");
@import url("../../assets/css/transitionsStyle.css");
</style>
