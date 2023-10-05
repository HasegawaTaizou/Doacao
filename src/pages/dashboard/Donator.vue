<template>
  <section id="donator-dashboard">
    <div class="donator__header">
      <h1 class="donator__title">AGENDAMENTO</h1>
      <div class="profile-container">
        <img
          src="../../assets/img/hospital-profile-image.png"
          alt="Profile Image"
          class="profile__image"
        />
        <span class="profile__name">Hospital Notredame Intermédica</span>
      </div>
    </div>
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
      <div class="schedules">
        <h2 class="schedules__title">Agendamentos</h2>
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
              <tr v-for="schedule in schedules" :key="schedule.id" class="table__content">
                <td class="content__id">{{ schedule.scheduleId }}</td>
                <td class="content__date">{{ schedule.date }}</td>
                <td class="content__hour">{{ schedule.hour }}</td>
                <td class="content__site">{{ schedule.site }}</td>
                <td class="content__status">
                  <span class="status__text" :class="schedule.status.toLowerCase()">{{ getUserSchedule(schedule.status) }}</span>
                </td>
                <td v-if="schedule.status != 'CONCLUDED'" class="content__actions">
                  <img
                    @click="openPopUp('cancel')"
                    src="../../assets/img/scheduling-cancel-icon.png"
                    alt="Cancel Icon"
                    class="action__icon"
                  />
                  <img
                    @click="openPopUp('conclude')"
                    src="../../assets/img/scheduling-conclude-icon.png"
                    alt=" Conclude Icon"
                    class="action__icon"
                  />
                  <img
                    @click="openPopUp('reschedule')"
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
  <PopUp
    v-if="selectedComponent === 'cancel'"
    :title="'Cancelar?'"
    :message="'Digite o motivo do cancelamento (Opcional)'"
    :acceptFunction="deleteVolunteer"
  >
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      class="cancel-reason"
      placeholder="Motivo:"
    ></textarea>
  </PopUp>
  <PopUp
    v-if="selectedComponent === 'conclude'"
    :title="'Concluir?'"
    :message="'Os dados serão alterados e não terá como desfazer esta ação.'"
    :acceptFunction="deleteVolunteer"
  >
  </PopUp>
  <PopUp
    v-if="selectedComponent === 'reschedule'"
    :title="'Remarcar'"
    :message="'Escolha a data e o horário para remarcar'"
    :acceptFunction="deleteVolunteer"
  >
    <div class="book-scheduling">
      <div class="scheduling-date">
        <input
          type="datetime-local"
          name=""
          id=""
          class="date__datetime-local"
        />
      </div>
      <div class="scheduling-site">
        <select name="" id="" class="site__select">
          <option value="" disabled>Escolha o local</option>
          <option value="1">Descrição Local 1</option>
        </select>
      </div>
    </div>
  </PopUp>
</template>

<script>
import PopUp from "../../assets/components/PopUp.vue";
import openPopUp from "../../assets/js/methods/open-pop-up.js";

import axios from "axios";
import { BASE_URL } from "../../assets/js/config";

export default {
  name: "Donator",
  components: { PopUp },
  data() {
    return {
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
      schedules: [],
    };
  },
  methods: {
    openPopUp,
    getUserData() {
      axios
        .get(`${BASE_URL}/users/1`)
        .then((response) => {
          console.log(response.data.user);
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
    getUserSchedules() {
      axios.get(`${BASE_URL}/users/${this.id}/schedules`).then((response) => {
        this.schedules = response.data.schedules;
        console.log(this.schedules);
      });
    },
    getUserSchedule(status) {
      const mappedSchedules = [
        { SCHEDULED: "Agendado" },
        { RESCHEDULED: "Remarcado" },
        { PENDING: "Pendente" },
        { CONCLUDED: "Concluído" },
      ];

      mappedSchedules.forEach(schedule => {
        if(status == Object.keys(schedule)) {
          status = Object.values(schedule)[0]
        }
      })

      return status
    },
  },
  mounted() {
    this.getUserData();
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/donator/donatorStyle.css");
@import url("../../assets/css/components/cancelIconStyle.css");
@import url("../../assets/css/components/rescheduleIconStyle.css");
</style>
