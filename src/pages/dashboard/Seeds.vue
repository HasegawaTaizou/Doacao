<template>
  <section id="seeds">
    <h1 class="seed__title">Sementes</h1>

    <div class="search-field-content">
      <input class="search-field__input" placeholder="Pesquisar" />
      <i class="fa-solid fa-magnifying-glass" id="search-field__icon"></i>
    </div>
    <ul class="seeds-content">
      <li v-for="seed in seeds" :key="seed.id" @click="handleSeedClick(seed)">
        <router-link to="/dashboard/seeds/seed" class="seed__item">
          <span class="filter_ball" :class="`status-finished`">{{ seed.id }}</span>
          <span class="seed__name">{{ seed.nome }}</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Seeds",
  data() {
    return {
      seeds: [],
    };
  },
  mounted() {
    this.findAllSeeds();
  },
  methods: {
    findAllSeeds() {
      axios
        .get("http://127.0.0.1:8080/v4/green-world/pegar_todas_sementes")
        .then((response) => {
          console.log(response.data.data);
          this.seeds = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    handleSeedClick(item) {
      this.$store.commit("updateSeed", item.id);
      console.log(item.id);
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/dashboard/seeds/seedsStyle.css");
</style>