<template>
  <div class="content">
    <img src="../assets/img/logo.png" alt="Website logo" id="logo" />
    <header>
      <h1 class="hospital-registration-part-two__title">
        CADASTRO HOSPITAL
      </h1>
      <router-link class="return__link" to="/hospital-registration-part-one">
        <img
          src="../assets/img/return-icon.png"
          alt="Return Icon"
          class="return__icon"
        />
      </router-link>
    </header>
    <main>
      <img
        src="../assets/img/hospital-registration-image.png"
        alt="Hospital Registration Image"
        class="hospital-registration__image"
      />
      <form class="hospital-registration-part-two-form">
        <div class="form__cep-container">
          <label for="cep" class="cep__label">CEP:</label>
          <input
            type="text"
            class="cep__input"
            id="cep"
            v-mask="'#####-###'"
            v-model="formData.cep"
            @blur="() => { fillAdrress(); v$.inputCep.$touch(); }"
            @keydown.enter="fillAdrress"
            v-model.trim="inputCep"
            :class="{ error: v$.inputCep.$error }"
            ref="inputCep"
          />
          <div v-if="v$.inputCep.$error">
            <p
              v-if="v$.inputCep.required && v$.inputCep.minLength"
              class="error-text"
            >
              Preencha o CEP!
            </p>
          </div>
        </div>
        <div class="form__road-container">
          <label for="road" class="road__label">Rua:</label>
          <input
            type="text"
            class="road__input"
            disabled
            v-model="formData.road"
          />
        </div>
        <div class="form__neighborhood-container">
          <label for="neighborhood" class="neighborhood__label">Bairro:</label>
          <input
            type="text"
            class="neighborhood__input"
            disabled
            v-model="formData.neighborhood"
          />
        </div>
        <div class="form__complement-container">
          <label for="complement" class="complement__label">Complemento:</label>
          <input
            type="text"
            class="complement__input"
            disabled
            v-model="formData.complement"
          />
        </div>
        <div class="form__uf-container">
          <label for="uf" class="uf__label">UF:</label>
          <input
            type="text"
            class="uf__input"
            disabled
            v-model="formData.uf"
          />
        </div>
        <div class="form__city-container">
          <label for="city" class="city__label">Cidade:</label>
          <input
            type="text"
            class="city__input"
            disabled
            v-model="formData.city"
          />
        </div>
        <div class="hospital-registration__buttons">
          <router-link to="/hospital-registration-part-one">
            <button type="button" class="button__return">Voltar</button>
          </router-link>
          <button
            type="button"
            @click="submitFormHospitalPartTwo"
            class="button__continue"
          >
            Continuar
          </button>
        </div>
      </form>
    </main>
    <footer>
      <p class="footer__text">
        Copyright © 2023 | Todos os direitos reservados EMPRESA
      </p>
    </footer>
  </div>
</template>

<script>
import fillAdrress from "../assets/js/methods/input/fill-address.js";
import submitFormHospitalPartTwo from "../assets/js/methods/submit-form-hospital-part-two.js";
import dataFormPartTwo from "../assets/js/data/data-form-part-two.js";
import { useVuelidate } from "@vuelidate/core";
import validationsHospitalPartTwo from "../assets/js/validations/validations-hospital-part-two.js";

export default {
  name: "HospitalRegistrationPartTwo",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    const formData = this.$store.state.formData;
    const data = dataFormPartTwo(formData);
    return {
      ...data,
    };
  },
  validations() {
    const validations = validationsHospitalPartTwo();
    return {
      ...validations,
    };
  },
  methods: {
    fillAdrress,
    submitFormHospitalPartTwo,
  },
};
</script>

<style scoped>
@import url("../assets/css/hospitalRegistrationPartTwo/generalStyle.css");
@import url("../assets/css/hospitalRegistrationPartTwo/limitsSizeStyle.css");
@import url("../assets/css/hospitalRegistrationPartTwo/hospitalRegistrationPartTwoStyle.css");
@import url("../assets/css/hospitalRegistrationPartTwo/hospitalRegistrationPartTwoResponsiveStyle.css");
@import url("../assets/css/hospitalRegistrationPartTwo/copyrightStyle.css");
@import url("../assets/css/hospitalRegistrationPartTwo/copyrightResponsiveStyle.css");
</style>
