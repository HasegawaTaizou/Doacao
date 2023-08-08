<template>
  <main>
    <section id="seeds">
      <h1 class="seed__title">Todas as ajudas</h1>
      <div class="filters-search-content">
        <div class="filters-content">
          <div class="filter">
            <div class="filter_ball status-finished"></div>
            <span class="filter__status-name">Finalizado</span>
          </div>
          <div class="filter">
            <div class="filter_ball status-pending"></div>
            <span class="filter__status-name">Pendente</span>
          </div>
        </div>
        <div class="search-field-content">
          <input class="search-field__input" placeholder="Pesquisar" />
          <i class="fa-solid fa-magnifying-glass" id="search-field__icon"></i>
        </div>
      </div>

      <ul class="seeds-content">
        <li>
          <router-link to="/dashboard/help" class="seed__item">
            <span class="filter_ball status-pending">1</span>
            <span class="seed__name">Ajuda 01 - 01/03/2023 </span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/help" class="seed__item">
            <span class="filter_ball status-finished">1</span>
            <span class="seed__name">Ajuda 02 - 01/03/2023 </span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/help" class="seed__item">
            <span class="filter_ball status-pending">1</span>
            <span class="seed__name">Ajuda 01 - 01/03/2023 </span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/help" class="seed__item">
            <span class="filter_ball status-finished">1</span>
            <span class="seed__name">Ajuda 02 - 01/03/2023 </span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/help" class="seed__item">
            <span class="filter_ball status-pending">1</span>
            <span class="seed__name">Ajuda 01 - 01/03/2023 </span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/help" class="seed__item">
            <span class="filter_ball status-finished">1</span>
            <span class="seed__name">Ajuda 02 - 01/03/2023 </span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/help" class="seed__item">
            <span class="filter_ball status-pending">1</span>
            <span class="seed__name">Ajuda 01 - 01/03/2023 </span>
          </router-link>
        </li>
        <li>
          <router-link to="/help" class="seed__item">
            <span class="filter_ball status-finished">1</span>
            <span class="seed__name">Ajuda 02 - 01/03/2023 </span>
          </router-link>
        </li>
        <li>
          <router-link to="/help" class="seed__item">
            <span class="filter_ball status-pending">1</span>
            <span class="seed__name">Ajuda 01 - 01/03/2023 </span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/help" class="seed__item">
            <span class="filter_ball status-finished">1</span>
            <span class="seed__name">Ajuda 02 - 01/03/2023 </span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/help" class="seed__item">
            <span class="filter_ball status-pending">1</span>
            <span class="seed__name">Ajuda 01 - 01/03/2023 </span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/help" class="seed__item">
            <span class="filter_ball status-finished">1</span>
            <span class="seed__name">Ajuda 02 - 01/03/2023 </span>
          </router-link>
        </li>
        <li>
          <router-link to="/help" class="seed__item">
            <span class="filter_ball status-pending">1</span>
            <span class="seed__name">Ajuda 01 - 01/03/2023 </span>
          </router-link>
        </li>
        <li>
          <router-link to="/help" class="seed__item">
            <span class="filter_ball status-finished">1</span>
            <span class="seed__name">Ajuda 02 - 01/03/2023 </span>
          </router-link>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: "AllHelp",
  mounted() {},
  methods: {},
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/help/allHelpStyle.css");
</style>