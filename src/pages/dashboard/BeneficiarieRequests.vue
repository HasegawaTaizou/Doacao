<template>
  <section id="seeds">
    <h1 class="seed__title">Solicitações de Beneficiados</h1>

    <div class="search-field-content">
      <input class="search-field__input" placeholder="Pesquisar" />
      <i class="fa-solid fa-magnifying-glass" id="search-field__icon"></i>
    </div>

    <ul class="seeds-content">
      <li v-for="beneficiary in filteredBeneficiaries" :key="beneficiary.id" @click="handleBeneficiaryClick(beneficiary)">
        <router-link to="/dashboard/beneficiarie-requests/data-beneficiarie-request" class="seed__item">
          <span class="filter_ball status-finished"> {{ beneficiary.id }}</span>
          <span class="seed__name">{{ beneficiary.nome_completo }}</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import fillAllBeneficiaries from '../../assets/js/methods/fill-all-beneficiaries.js'
import handleBeneficiaryClick from '../../assets/js/methods/handle-click/handle-beneficiary-click.js'
import filteredBeneficiaries from '../../assets/js/computed/filtered-beneficiaries.js'

export default {
  name: "BeneficiarieRequests",
  data() {
    return {
      beneficiaries: [],
    };
  },
  mounted() {
    this.fillAllBeneficiaries();
  },
  computed: {
    filteredBeneficiaries
  },
  methods: {
    fillAllBeneficiaries,
    handleBeneficiaryClick,
  },
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/seeds/seedsStyle.css");
</style>