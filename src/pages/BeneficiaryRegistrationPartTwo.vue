<template>
  <div class="content">
    <header>
      <h1 class="beneficiary-registration-part-two__title">
        CADASTRO BENEFICIADO
      </h1>
      <router-link class="return__link" to="/beneficiary-registration-part-one">
        <img
          src="../assets/img/return-icon.png"
          alt="Return Icon"
          class="return__icon"
        />
      </router-link>
    </header>
    <main>
      <img
        src="../assets/img/beneficiary-registration-image.png"
        alt="beneficiary Registration Image"
        class="beneficiary-registration__image"
      />
      <form class="beneficiary-registration-part-two-form">
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
            v-model="formData.logradouro"
          />
        </div>
        <div class="form__neighborhood-container">
          <label for="neighborhood" class="neighborhood__label">Bairro:</label>
          <input
            type="text"
            class="neighborhood__input"
            disabled
            v-model="formData.bairro"
          />
        </div>
        <div class="form__complement-container">
          <label for="complement" class="complement__label">Complemento:</label>
          <input
            type="text"
            class="complement__input"
            disabled
            v-model="formData.complemento"
          />
        </div>
        <div class="form__state-container">
          <label for="state" class="state__label">Estado:</label>
          <input
            type="text"
            class="state__input"
            disabled
            v-model="formData.estado"
          />
        </div>
        <div class="form__city-container">
          <label for="city" class="city__label">Cidade:</label>
          <input
            type="text"
            class="city__input"
            disabled
            v-model="formData.cidade"
          />
        </div>
        <router-link to="/beneficiary-registration-part-one">
          <button type="button" class="beneficiary-registration__button-return">
            Voltar
          </button>
        </router-link>
        <button
          type="button"
          @click="submitFormBeneficiaryPartTwo"
          class="beneficiary-registration__button"
        >
          Continuar
        </button>
      </form>
    </main>
    <footer>
      <p class="footer__text">
        Copyright © 2023 | Todos os direitos reservados Green World
      </p>
    </footer>
  </div>
</template>

<script>
import fillAdrress from "../assets/js/methods/input/fill-address.js";
import submitFormBeneficiaryPartTwo from "../assets/js/methods/submit-form-beneficiary-part-two.js";
import dataFormPartTwo from "../assets/js/data/data-form-part-two.js";
import { useVuelidate } from "@vuelidate/core";
import validationsBeneficiaryPartTwo from "../assets/js/validations/validations-beneficiary-part-two.js";

export default {
  name: "BeneficiaryRegistrationPartTwo",
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
    const validations = validationsBeneficiaryPartTwo();
    return {
      ...validations,
    };
  },
  methods: {
    fillAdrress,
    submitFormBeneficiaryPartTwo,
  },
};
</script>

<style scoped>
@import url("../assets/css/beneficiaryRegistrationPartTwo/generalStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartTwo/limitsSizeStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartTwo/beneficiaryRegistrationPartTwoStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartTwo/beneficiaryRegistrationPartTwoResponsiveStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartTwo/copyrightStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartTwo/copyrightResponsiveStyle.css");
</style>
