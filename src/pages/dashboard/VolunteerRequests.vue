<template>
  <section id="seeds">
    <h1 class="seed__title">Solicitações de Voluntários</h1>

    <div class="search-field-content">
      <input class="search-field__input" placeholder="Pesquisar" />
      <i class="fa-solid fa-magnifying-glass" id="search-field__icon"></i>
    </div>

    <ul class="seeds-content">
      <li v-for="volunteer in filteredVolunteers" :key="volunteer.id" @click="handleVolunteerClick(volunteer)">
        <router-link to="/dashboard/volunteer-requests/volunteer-request" class="seed__item">
          <span class="filter_ball status-finished"> {{ volunteer.id }}</span>
          <span class="seed__name">{{ volunteer.nome_completo }}</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import fillAllVolunteers from '../../assets/js/methods/fill-all-volunteers.js'
import handleVolunteerClick from '../../assets/js/methods/handle-click/handle-volunteer-click.js'
import filteredVolunteers from '../../assets/js/computed/filtered-volunteers.js'

export default {
  name: "VolunteerRequests",
  data() {
    return {
      volunteers: [],
    };
  },
  mounted() {
    this.fillAllVolunteers();
  },
  computed: {
    filteredVolunteers
  },
  methods: {
    fillAllVolunteers,
    handleVolunteerClick,
  },
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/seeds/seedsStyle.css");
</style>