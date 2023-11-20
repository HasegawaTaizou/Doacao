<template>
  <section id="scheduling-dashboard">
    <div class="scheduling__header">
      <h1 class="scheduling__title">AGENDAMENTOS</h1>
      <div class="profile-container">
        <img :src="hospitalPhoto" alt="Profile Image" class="profile__image" />
        <span class="profile__name">{{ hospitalName }}</span>
      </div>
    </div>
    <div class="scheduling__content">
      <div class="scheduling__actions">
        <div class="action-introduction">
          <img
            src="../../assets/img/scheduling-dashboard-icon.png"
            alt="Scheduling Icon"
            class="action-introduction__image"
          />
          <span class="action-introduction__title">Agendamentos</span>
        </div>
        <div class="scheduling__inputs">
          <div class="input__search-container">
            <input
              type="text"
              class="input__search"
              placeholder="Pesquise o usuário"
              v-model="userFilter"
              @input="filterNameSchedules"
            />
            <i class="fa-solid fa-magnifying-glass input__search-icon"></i>
          </div>
          <select
            v-model="statusFilter"
            name="status"
            class="select__status"
            @change="filterStatusSchedules"
          >
            <option class="status__option" selected value="">
              Todos status
            </option>
            <option class="status__option" value="SCHEDULED">Agendado</option>
            <option class="status__option" value="CONCLUDED">Concluído</option>
            <option class="status__option" value="PENDING">Pendente</option>
            <option class="status__option" value="RESCHEDULED">
              Remarcado
            </option>
          </select>
        </div>
      </div>
      <div class="scheduling__schedules">
        <table class="schedules__table">
          <thead>
            <tr class="table__title">
              <th class="title__id">ID</th>
              <th class="title__donator">Nome do doador</th>
              <th class="title__date">Data</th>
              <th class="title__hour">Horário</th>
              <th class="title__site">Local</th>
              <th class="title__status">Status</th>
              <th class="title__action">Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="table__content"
              v-for="(schedule, index) in this.schedules"
              :key="index"
            >
              <td class="content__id">
                {{ schedules[index].schedule.scheduleId }}
              </td>
              <td class="content__donator">
                <router-link
                  @click="setUserId(schedules[index].user.userId)"
                  :to="'/dashboard/donator'"
                  class="donator__link"
                >
                  <img
                    :src="schedules[index].user.photo"
                    alt="Donator Image"
                    class="donator__image"
                  />
                  <span class="donator__name">{{
                    schedules[index].user.name
                  }}</span>
                </router-link>
              </td>
              <td class="content__date">
                {{ schedules[index].schedule.date }}
              </td>
              <td class="content__hour">
                {{ schedules[index].schedule.hour }}
              </td>
              <td class="content__site">
                {{ schedules[index].schedule.site }}
              </td>
              <td
                class="content__status"
                :class="schedules[index].schedule.status.toLowerCase()"
                :title="
                  schedules[index].schedule.status === 'PENDING'
                    ? schedules[index].schedule.observation
                    : ''
                "
              >
                {{ getUserSchedule(schedules[index].schedule.status) }}
              </td>
              <td
                v-if="schedules[index].schedule.status != 'CONCLUDED'"
                class="content__actions"
              >
                <img
                  @click="
                    openPopUp('cancel'),
                      (scheduleId = schedules[index].schedule.scheduleId)
                  "
                  src="../../assets/img/scheduling-cancel-icon.png"
                  alt="Cancel Icon"
                  class="action__icon"
                />
                <img
                  @click="
                    openPopUp('conclude'),
                      (scheduleId = schedules[index].schedule.scheduleId)
                  "
                  src="../../assets/img/scheduling-conclude-icon.png"
                  alt=" Conclude Icon"
                  class="action__icon"
                />
                <img
                  @click="
                    selectSchedule(
                      schedules[index].schedule.scheduleId,
                      schedules[index].schedule.date,
                      schedules[index].schedule.hour,
                      schedules[index].schedule.siteId
                    );
                    openPopUp('reschedule'),
                      (scheduleId = schedules[index].schedule.scheduleId);
                  "
                  src="../../assets/img/scheduling-reschedule-icon.png"
                  alt="Reschedule Icon"
                  class="action__icon"
                />
              </td>
              <td v-else class="content__actions">
                <span class="action__none">N/A</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <PopUp
      v-if="selectedComponent === 'cancel'"
      :title="'Cancelar?'"
      :message="'Digite o motivo do cancelamento (Opcional)'"
      :acceptFunction="cancelSchedule"
      :image="'/src/assets/img/book-schedule-cancel-image.png'"
    >
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="cancel-reason"
        placeholder="Motivo:"
        v-model="reason"
      ></textarea>
    </PopUp>
    <PopUp
      v-if="selectedComponent === 'conclude'"
      :title="'Concluir?'"
      :message="'Os dados serão alterados e não terá como desfazer esta ação.'"
      :acceptFunction="concludeSchedule"
      :image="'/src/assets/img/book-schedule-save-image.png'"
    >
    </PopUp>
    <PopUp
      v-if="selectedComponent === 'reschedule'"
      :title="'Remarcar'"
      :message="'Escolha a data e o horário para remarcar'"
      :acceptFunction="rescheduleSchedule"
      :image="'/src/assets/img/book-schedule-reschedule-image.png'"
    >
      <div class="book-scheduling">
        <div class="scheduling-date">
          <input
            type="datetime-local"
            name=""
            id=""
            class="date__datetime-local"
            v-model="this.rescheduleDatetime"
          />
        </div>
        <div class="scheduling-site">
          <select v-model="selectedSite" name="" id="" class="site__select">
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
    </PopUp>
  </section>
</template>

<script>
import PopUp from "../../assets/components/PopUp.vue";
import openPopUp from "../../assets/js/methods/open-pop-up.js";

import axios from "axios";
import { BASE_URL } from "../../assets/js/config";

import { format } from "date-fns";

//Websocket
import {
  connectWebsocket,
  setupWebsocketEventListener,
} from "../../assets/js/websocket/websocket";

import { updateDataFromWebsocket } from "../../assets/js/websocket/update-data-from-websocket";

import websocketConnectionData from "../../assets/js/data/websocket-connection";

export default {
  name: "Schedules",
  components: { PopUp },
  data() {
    return {
      //Websocket
      ...websocketConnectionData,

      //ProfileData
      hospitalName: "",
      hospitalPhoto: "",

      //Transition
      showTransition: false,
      selectedComponent: "",

      //Schedules
      schedules: [],
      scheduleId: 0,

      //User ID
      userId: 0,

      //Schedule
      reason: "",
      sites: [],
      scheduleSite: "",
      scheduleDateTime: "",
      scheduleDatetimeFormatted: "",
      scheduleDate: "",
      scheduleTime: "",

      selectedId: "",
      selectedDate: "",
      selectedHour: "",
      selectedSite: "",
      rescheduleDatetime: "",

      //Filter Select
      filtteredSchedules: [],
      statusFilter: "",
      userFilter: "",
      debounceTimeout: null,
    };
  },
  methods: {
    openPopUp,
    updateSchedulesData() {
      updateDataFromWebsocket(this.schedules, "schedules", "replace");
    },
    filterStatusSchedules() {
      if (this.statusFilter !== "") {
        axios
          .get(
            `${BASE_URL}/hospital/${localStorage.getItem(
              "hospitalId"
            )}/schedules-status/${this.statusFilter}`
          )
          .then((response) => {
            this.schedules = response.data.schedules;
          });
      } else {
        this.getSchedules();
      }
    },
    filterNameSchedules() {
      // Limpar o timeout existente
      clearTimeout(this.debounceTimeout);

      this.debounceTimeout = setTimeout(() => {
        if (this.userFilter !== "") {
          axios
            .get(
              `${BASE_URL}/hospital/${localStorage.getItem(
                "hospitalId"
              )}/schedules/${this.userFilter}`
            )
            .then((response) => {
              this.schedules = response.data.schedules;
            })
            .catch((err) => {
              this.schedules = [];
            });
        } else {
          this.getSchedules();
        }
      }, 500);
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
    selectSchedule(id, date, hour, siteId) {
      this.selectedId = id;
      this.selectedDate = date;
      this.selectedHour = hour;
      this.selectedSite = siteId;

      this.formattedDateTime();
    },
    setUserId(userId) {
      localStorage.setItem("userId", userId);
    },
    getSchedules() {
      axios
        .get(
          `${BASE_URL}/hospital/${localStorage.getItem("hospitalId")}/schedules`
        )
        .then((response) => {
          this.schedules = response.data.schedules;
        });
    },
    getUserSchedule(status) {
      const mappedSchedules = [
        { SCHEDULED: "Agendado" },
        { RESCHEDULED: "Remarcado" },
        { PENDING: "Pendente" },
        { CONCLUDED: "Concluído" },
      ];

      mappedSchedules.forEach((schedule) => {
        if (status == Object.keys(schedule)) {
          status = Object.values(schedule)[0];
        }
      });

      return status;
    },
    cancelSchedule() {
      const scheduleData = {
        id: this.scheduleId,
        observation: this.reason,
      };

      axios.put(`${BASE_URL}/schedule-cancel`, scheduleData);
    },
    formatDateTime() {
      this.scheduleDatetimeFormatted = format(
        new Date(this.rescheduleDatetime),
        "dd/MM/yyyy HH:mm"
      );
    },
    rescheduleSchedule() {
      this.formatDateTime();
      const dateParts = this.scheduleDatetimeFormatted.split(" ");
      this.scheduleDate = dateParts[0];
      this.scheduleTime = dateParts[1];

      const scheduleData = {
        id: this.selectedId,
        date: this.scheduleDate,
        hour: this.scheduleTime,
        siteId: this.selectedSite,
      };

      axios.put(`${BASE_URL}/schedule-reschedule`, scheduleData);
    },
    concludeSchedule() {
      const scheduleData = {
        id: this.scheduleId,
      };

      axios.put(`${BASE_URL}/schedule-conclude`, scheduleData);
    },
    getHospitalSites() {
      axios
        .get(`${BASE_URL}/hospital/${localStorage.getItem("hospitalId")}/sites`)
        .then((response) => {
          this.sites = response.data.sites;
        });
    },
  },
  mounted() {
    this.showTransition = true;
    this.getSchedules();
    this.getHospitalSites();

    this.hospitalName = localStorage.hospitalName;
    this.hospitalPhoto = localStorage.hospitalPhoto;
  },
  created() {
    this.connection = connectWebsocket();
    setupWebsocketEventListener(this.updateSchedulesData);
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/schedules/schedulesStyle.css");
@import url("../../assets/css/components/cancelIconStyle.css");
@import url("../../assets/css/components/rescheduleIconStyle.css");
</style>
