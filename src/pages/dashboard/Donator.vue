<template>
  <transition name="fade">
    <section id="donator-dashboard">
      <div class="donator__header">
        <h1 class="donator__title">DOADOR</h1>
        <div class="profile-container">
          <img
            src="../../assets/img/hospital-profile-image.png"
            alt="Profile Image"
            class="profile__image"
          />
          <span class="profile__name">Hospital Notredame Intermédica</span>
        </div>
      </div>
      <div class="donator-wrapper">
        <div class="donator__content">
          <div class="donator-container">
            <img :src="photo" alt="Donator Image" class="donator__image" />
            <h2 class="donator__name">{{ name }}</h2>
            <div class="donator__email">
              <span class="email__title">E-mail:</span>
              <span class="email__text">{{ email }}</span>
            </div>
            <div class="donator__phone">
              <span class="phone__title">Telefone:</span>
              <span class="phone__text">{{ phone }}</span>
            </div>
            <div class="donator__blood-type">
              <span class="blood-type__title">Tipo sanguíneo:</span>
              <span class="blood-type__text">{{ bloodType }}</span>
            </div>
            <div class="donator__age">
              <span class="age__title">Idade:</span>
              <span class="age__text">{{ age }} anos</span>
            </div>
            <div class="donator__gender">
              <span class="gender__title">Sexo:</span>
              <span class="gender__text">{{ sex }}</span>
            </div>
            <div class="donator__weight">
              <span class="weight__title">Peso:</span>
              <span class="weight__text">{{ weight }} Kg</span>
            </div>
          </div>
        </div>
        <h2 class="schedules__title">AGENDAMENTOS</h2>
        <div class="schedules">
          <div class="scheduling__schedules">
            <table class="schedules__table">
              <thead>
                <tr class="table__title">
                  <th class="title__id">ID</th>
                  <th class="title__date">Data</th>
                  <th class="title__hour">Horário</th>
                  <th class="title__site">Local</th>
                  <th class="title__status">Status</th>
                  <th class="title__action">Ação</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="schedule in schedules"
                  :key="schedule.id"
                  class="table__content"
                >
                  <td class="content__id">{{ schedule.scheduleId }}</td>
                  <td class="content__date">{{ schedule.date }}</td>
                  <td class="content__hour">{{ schedule.hour }}</td>
                  <td class="content__site">{{ schedule.site }}</td>
                  <td class="content__status">
                    <span
                      class="status__text"
                      :class="schedule.status.toLowerCase()"
                      >{{ getUserSchedule(schedule.status) }}</span
                    >
                  </td>
                  <td
                    v-if="schedule.status != 'CONCLUDED'"
                    class="content__actions"
                  >
                    <img
                      @click="
                        openPopUp('cancel'), (scheduleId = schedule.scheduleId)
                      "
                      src="../../assets/img/scheduling-cancel-icon.png"
                      alt="Cancel Icon"
                      class="action__icon"
                    />
                    <img
                      @click="
                        openPopUp('conclude'),
                          (scheduleId = schedule.scheduleId)
                      "
                      src="../../assets/img/scheduling-conclude-icon.png"
                      alt=" Conclude Icon"
                      class="action__icon"
                    />
                    <img
                      @click="
                        openPopUp('reschedule'),
                          (scheduleId = schedule.scheduleId)
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
      </div>
    </section>
  </transition>
  <PopUp
    v-if="selectedComponent === 'cancel'"
    :title="'Cancelar?'"
    :message="'Digite o motivo do cancelamento (Opcional)'"
    :acceptFunction="updateScheduleToCancel"
  >
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      class="cancel-reason"
      placeholder="Motivo:"
      v-model="observation"
    ></textarea>
  </PopUp>
  <PopUp
    v-if="selectedComponent === 'conclude'"
    :title="'Concluir?'"
    :message="'Os dados serão alterados e não terá como desfazer esta ação.'"
    :acceptFunction="updateScheduleToConclude"
  >
  </PopUp>
  <PopUp
    v-if="selectedComponent === 'reschedule'"
    :title="'Remarcar'"
    :message="'Escolha a data e o horário para remarcar'"
    :acceptFunction="updateScheduleToReschedule"
  >
    <div class="book-scheduling">
      <div class="scheduling-date">
        <input
          type="datetime-local"
          name=""
          id=""
          class="date__datetime-local"
          v-model="scheduleDatetime"
        />
      </div>
      <div class="scheduling-site">
        <select v-model="scheduleSite" name="" id="" class="site__select">
          <option disabled value="">Escolha o local</option>
          <option v-for="site in sites" :key="site.idSite" :value="site.idSite">
            {{ site.site }}
          </option>
        </select>
      </div>
    </div>
  </PopUp>
</template>

<script>
import PopUp from "../../assets/components/PopUp.vue";
import openPopUp from "../../assets/js/methods/open-pop-up.js";

import { format } from "date-fns";
import axios from "axios";
import { BASE_URL } from "../../assets/js/config";

export default {
  name: "Donator",
  components: { PopUp },
  data() {
    return {
      //Transition
      showTransition: false,

      selectedComponent: "",
      id: 0,
      name: "",
      photo: "",
      email: "",
      phone: "",
      weight: 0.0,
      age: 0,
      bloodType: "",
      sex: "",

      //Schedule
      schedules: [],
      scheduleId: 0,
      observation: "",
      scheduleDatetime: "",
      scheduleDatetimeFormatted: "",
      scheduleSite: "",
      scheduleDate: "",
      scheduleTime: "",

      //Sites data
      sites: [],
    };
  },
  methods: {
    openPopUp,
    getUserData() {
      axios
        .get(`${BASE_URL}/users/1`)
        .then((response) => {
          const userData = response.data.user;

          this.id = userData.id;
          this.sex = userData.sex;
          this.name = userData.name;
          this.photo = userData.photo;
          this.email = userData.email;
          this.phone = userData.phone;
          this.weight = userData.weight;
          this.age = userData.age;
          this.bloodType = userData.bloodType;
          this.sex = userData.sex;
        })
        .then(() => {
          this.getUserSex();
          this.getUserSchedules();
        });
    },
    getUserSex() {
      const mappedSexs = [{ MASCULINE: "Masculino" }, { FEMININE: "Feminino" }];

      mappedSexs.forEach((sex) => {
        if (Object.keys(sex) == this.sex) {
          this.sex = Object.values(sex)[0];
        }
      });
    },
    getHospitalSites() {
      axios.get(`${BASE_URL}/hospital/${this.$store.state.hospitalId}/sites`).then((response) => {
        this.sites = response.data.sites;
      });
    },
    getUserSchedules() {
      axios.get(`${BASE_URL}/users/${this.id}/schedules`).then((response) => {
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
    updateScheduleToCancel() {
      const updateScheduleData = {
        id: this.scheduleId,
        observation: this.observation,
      };
      axios.put(`${BASE_URL}/schedule-cancel`, updateScheduleData);
    },
    updateScheduleToConclude() {
      const updateScheduleData = {
        id: this.scheduleId,
      };
      axios.put(`${BASE_URL}/schedule-conclude`, updateScheduleData);
    },
    updateScheduleToReschedule() {
      this.updateScheduleDateTime();
      const updateScheduleData = {
        id: this.scheduleId,
        date: this.scheduleDate,
        hour: this.scheduleTime,
        siteId: this.scheduleSite,
      };
      axios.put(`${BASE_URL}/schedule-reschedule`, updateScheduleData);
    },
    formatDateTime() {
      this.scheduleDatetimeFormatted = format(
        new Date(this.scheduleDatetime),
        "dd/MM/yyyy HH:mm"
      );
    },
    updateScheduleDateTime() {
      this.formatDateTime();
      const dateParts = this.scheduleDatetimeFormatted.split(" ");
      this.scheduleDate = dateParts[0];
      this.scheduleTime = dateParts[1];
    },
  },
  mounted() {
    this.showTransition = true;
    this.getUserData();
    this.getHospitalSites();
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/donator/donatorStyle.css");
@import url("../../assets/css/components/cancelIconStyle.css");
@import url("../../assets/css/components/rescheduleIconStyle.css");
</style>
