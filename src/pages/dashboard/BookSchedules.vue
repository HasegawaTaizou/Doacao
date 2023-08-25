<template>
  <section id="book-schedules-dashboard">
    <div class="book-schedules__header">
      <h1 class="book-schedules__title">RESERVAR AGENDAMENTOS</h1>
      <div class="profile-container">
        <img
          src="../../assets/img/hospital-profile-image.png"
          alt="Profile Image"
          class="profile__image"
        />
        <span class="profile__name">Hospital Notredame Intermédica</span>
      </div>
    </div>
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
              <option value="Descrição Local 1">Descrição Local 1</option>
              <option value="Descrição Local 2">Descrição Local 2</option>
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
                v-for="(item, index) in tableBookSchedules"
                :key="index"
              >
                <td class="content__date">{{ item.contentDate }}</td>
                <td class="content__hour">{{ item.contentHour }}</td>
                <td class="content__site">{{ item.contentSite }}</td>
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
      <div class="schedules-available">
        <span class="schedules-available__title"
          >Agendamentos disponíveis:</span
        >
        <table class="schedules__table">
          <tr class="table__title">
            <th class="title__date">Data</th>
            <th class="title__hour">Horário</th>
            <th class="title__site">Local</th>
            <th class="title__action">Ação</th>
          </tr>
          <tr class="table__content">
            <td class="content__date">29/07/2023</td>
            <td class="content__hour">11:10</td>
            <td class="content__site">Descrição do local 1</td>
            <td class="content__actions">
              <img
                src="../../assets/img/scheduling-cancel-icon.png"
                alt="Cancel Icon"
                class="action__icon"
              />
              <img
                src="../../assets/img/scheduling-reschedule-icon.png"
                alt="Reschedule Icon"
                class="action__icon"
              />
            </td>
          </tr>
          <tr class="table__content">
            <td class="content__date">29/07/2023</td>
            <td class="content__hour">11:10</td>
            <td class="content__site">Descrição do local 2</td>
            <td class="content__actions">
              <img
                src="../../assets/img/scheduling-cancel-icon.png"
                alt="Cancel Icon"
                class="action__icon"
              />
              <img
                src="../../assets/img/scheduling-reschedule-icon.png"
                alt="Reschedule Icon"
                class="action__icon"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </section>
  <PopUp
    v-if="selectedComponent === 'cancel'"
    :title="'Cancelar?'"
    :message="'Os agendamentos criados serão cancelados.'"
    :acceptFunction="clearSchedules"
  ></PopUp>
  <PopUp
    v-if="selectedComponent === 'save'"
    :title="'Salvar?'"
    :message="'Os agendamentos criados serão colocados como agendamentos disponíveis.'"
    :acceptFunction="deleteVolunteer"
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
</template>

<script>
import PopUp from "../../assets/components/PopUp.vue";
import openPopUp from "../../assets/js/methods/open-pop-up.js";
import { format } from "date-fns";

export default {
  name: "BookSchedules",
  components: { PopUp },
  data() {
    return {
      //Book Schedule site and datetime
      scheduleDatetime: "",
      scheduleDatetimeFormatted: "",
      scheduleSite: "",

      //Book Schedules Content
      tableBookSchedules: [],

      //Component
      selectedComponent: "",
    };
  },
  methods: {
    addSchedule() {
      if (this.scheduleDatetime != "" && this.scheduleSite != "") {
        console.log(this.scheduleDatetime);
        this.formatDateTime();
        this.tableBookSchedules.push({
          contentDate: this.scheduleDatetimeFormatted.split(" ")[0],
          contentHour: this.scheduleDatetimeFormatted.split(" ")[1],
          contentSite: this.scheduleSite,
        });
      }
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
    openPopUp,
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/bookSchedules/bookSchedulesStyle.css");
@import url("../../assets/css/components/rescheduleIconStyle.css");
</style>
