<template>
  <section id="beneficiaries">
    <h1 class="beneficiaries__title">Todos os beneficiados</h1>
    <div class="search-field-content">
      <input class="search-field__input" placeholder="Pesquisar" />
      <i class="fa-solid fa-magnifying-glass" id="search-field__icon"></i>
    </div>
    <ul class="beneficiaries-content">
      <li v-for="beneficiary in filteredBeneficiariesApproved" :key="beneficiary.id" @click="handleBeneficiaryClick(beneficiary)">
        <router-link class="beneficiarie__item" to="/dashboard/all-beneficiaries/beneficiary">
          <img :src="beneficiary.foto" class="beneficiarie__image" />
          <span class="beneficiarie__name">{{ beneficiary.nome_completo }}</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";

import filteredBeneficiariesApproved from "../../assets/js/computed/filtered-beneficiaries-approved.js";

export default {
  name: "AllBeneficiaries",
  data() {
    return {
      beneficiaries: [],
    };
  },
  mounted() {
    this.fillAllBeneficiaries();
  },
  computed: {
    filteredBeneficiariesApproved,
  },
  methods: {
    fillAllBeneficiaries() {
      axios
        .get(`http://127.0.0.1:8080/v6/green-world/get_all_beneficiados`)
        .then((response) => {
          console.log(response.data.data[1]);
          this.beneficiaries = response.data.data[1];
        })
        .catch((error) => {
          console.error(error);
        });
    },
    handleBeneficiaryClick(item) {
      this.$store.commit("updateBeneficiaryId", item.id);
      console.log(item.id);
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