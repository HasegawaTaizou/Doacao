<template>
  <section id="scheduling-dashboard">
    <div class="scheduling__header">
      <h1 class="scheduling__title">AGENDAMENTOS</h1>
      <div class="profile-container">
        <img
          :src="$store.state.hospitalPhoto"
          alt="Profile Image"
          class="profile__image"
        />
        <span class="profile__name">{{ $store.state.hospitalName }}</span>
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
        <div>
          <input type="text" />
          <input type="text" />
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
              v-for="(schedule, index) in schedules"
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
              <!-- <td class="content__status">
                <span
                  class="status__text"
                  :class="schedules[index].schedule.status.toLowerCase()"
                  >{{ getUserSchedule(schedules[index].schedule.status) }}</span
                >
              </td> -->
              <td
                class="content__status"
                :class="schedules[index].schedule.status.toLowerCase()"
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
                    openPopUp('reschedule'),
                      (scheduleId = schedules[index].schedule.scheduleId)
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
      :image="'/src/assets/img/book-schedule-conclude-image.png'"
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
            v-model="scheduleDateTime"
          />
        </div>
        <div class="scheduling-site">
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
    </PopUp>
  </section>
</template>

<script>
import PopUp from "../../assets/components/PopUp.vue";
import openPopUp from "../../assets/js/methods/open-pop-up.js";

import axios from "axios";
import { BASE_URL } from "../../assets/js/config";

import { format } from "date-fns";

export default {
  name: "Schedules",
  components: { PopUp },
  data() {
    return {
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
    };
  },
  methods: {
    openPopUp,
    setUserId(userId) {
      this.$store.commit("SET_USER_ID", userId);
    },
    getSchedules() {
      axios
        .get(`${BASE_URL}/hospital/${this.$store.state.hospitalId}/schedules`)
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

      axios.put(`${BASE_URL}/schedule-cancel`, scheduleData).then(() => {
        location.reload();
      });
    },
    formatDateTime() {
      console.log(this.scheduleDateTime);
      this.scheduleDatetimeFormatted = format(
        new Date(this.scheduleDateTime),
        "dd/MM/yyyy HH:mm"
      );
    },
    rescheduleSchedule() {
      this.formatDateTime();
      const dateParts = this.scheduleDatetimeFormatted.split(" ");
      this.scheduleDate = dateParts[0];
      this.scheduleTime = dateParts[1];

      const scheduleData = {
        id: this.scheduleId,
        date: this.scheduleDate,
        hour: this.scheduleTime,
        siteId: this.scheduleSite,
      };

      console.log(scheduleData);

      axios.put(`${BASE_URL}/schedule-reschedule`, scheduleData).then(() => {
        location.reload();
      });
    },
    concludeSchedule() {
      const scheduleData = {
        id: this.scheduleId,
      };

      axios.put(`${BASE_URL}/schedule-conclude`, scheduleData);
    },
    getHospitalSites() {
      axios
        .get(`${BASE_URL}/hospital/${this.$store.state.hospitalId}/sites`)
        .then((response) => {
          this.sites = response.data.sites;
        });
    },
  },
  mounted() {
    this.showTransition = true;
    this.getSchedules();
    this.getHospitalSites();
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/schedules/schedulesStyle.css");
@import url("../../assets/css/components/cancelIconStyle.css");
@import url("../../assets/css/components/rescheduleIconStyle.css");
</style>
