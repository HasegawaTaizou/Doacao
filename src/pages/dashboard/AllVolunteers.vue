<template>
  <section id="beneficiaries">
    <h1 class="beneficiaries__title">Todos os voluntários</h1>
    <div class="search-field-content">
      <input class="search-field__input" placeholder="Pesquisar" />
      <i class="fa-solid fa-magnifying-glass" id="search-field__icon"></i>
    </div>
    <ul class="beneficiaries-content">
      <li
        v-for="volunteer in filteredVolunteersApproved"
        :key="volunteer.id"
        @click="handleVolunteerClick(volunteer)"
      >
        <router-link
          class="beneficiarie__item"
          to="/dashboard/all-volunteers/volunteer"
        >
          <img
            class="beneficiarie__image"
            v-if="volunteer.foto"
            :src="volunteer.foto"
            alt="Volunteer image"
          />
          <img
            class="beneficiarie__image"
            v-else
            src="../../assets/img/user-default-image.svg"
            alt="Volunteer image"
          />
          <span class="beneficiarie__name">{{ volunteer.nome_completo }}</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";

import filteredVolunteersApproved from "../../assets/js/computed/filtered-volunteers-approved.js";

export default {
  name: "AllVolunteer",
  data() {
    return {
      volunteers: [],
    };
  },
  mounted() {
    this.fillAllVolunteers();
  },
  computed: {
    filteredVolunteersApproved,
  },
  methods: {
    fillAllVolunteers() {
      axios
        .get(`http://127.0.0.1:8080/v6/green-world/todos_voluntarios`)
        .then((response) => {
          this.volunteers = response.data.status;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    handleVolunteerClick(item) {
      this.$store.commit("updateVolunteerCpf", item.cpf);
      console.log(item.cpf);
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/beneficiaries/allBeneficiariesStyle.css");
</style>