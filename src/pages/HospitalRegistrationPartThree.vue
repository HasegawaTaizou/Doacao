<template>
  <transition name="normal" appear v-if="showTransition">
  <div class="content">
    <div id="logo-container">
      <img src="../assets/img/logo.png" alt="Website logo" id="logo__logo" />
      <span id="logo__name">Doe Vida</span>
    </div>
    <header>
      <div class="hospital-registration-parts">
        <div class="registration-part">
          <div class="registration-part__radio"></div>
          <span class="registration-part__text">Dados pessoais</span>
        </div>
        <div class="registration-part">
          <div class="registration-part__radio"></div>
          <span class="registration-part__text">Endereço</span>
        </div>
        <div class="registration-part">
          <div class="registration-part__radio radio-active"></div>
          <span class="registration-part__text">Local</span>
        </div>
        <div class="registration-part">
          <div class="registration-part__radio"></div>
          <span class="registration-part__text">Foto e Senha</span>
        </div>
      </div>
    </header>
    <main>
      <img
        src="../assets/img/hospital-registration-part-three-image.png"
        alt="Hospital Registration Image"
        class="hospital-registration__image"
      />
      <form class="hospital-registration-part-three-form">
        <div class="form__donation-local-container">
          <label for="donation-local" class="donation-local__label"
            >Local de doação:</label
          >
          <textarea
            name="donation-local"
            id=""
            cols="30"
            rows="10"
            class="donation-local__textarea"
            v-model="inputDonationLocal"
            :class="{ error: v$.inputDonationLocal.$error }"
            @blur="v$.inputDonationLocal.$touch()"
            ref="inputDonationLocal"
          ></textarea>
          <div v-if="v$.inputDonationLocal.$error">
            <p v-if="v$.inputDonationLocal.required" class="error-text">
              Preencha o local de doação!
            </p>
          </div>
        </div>
        <div class="form__other-donation-local-container">
          <label for="other-donation-local" class="other-donation-local__label"
            >Outro local de doação:</label
          >
          <textarea
            name="other-donation-local"
            id=""
            cols="30"
            rows="10"
            class="other-donation-local__textarea"
            v-model="inputOtherDonationLocal"
          ></textarea>
        </div>
        <div class="hospital-registration__buttons">
          <router-link to="/hospital-registration-part-two">
            <button type="button" class="button__return">Voltar</button>
          </router-link>
          <button
            type="button"
            @click="submitFormHospitalPartThree"
            class="button__continue"
          >
            Continuar
          </button>
        </div>
      </form>
    </main>
    <footer>
      <p class="footer__text">
        Copyright © 2023 | Todos os direitos reservados Doe Vida
      </p>
    </footer>
  </div>
</transition>
</template>

<script>
import submitFormHospitalPartThree from "../assets/js/methods/submit-form-hospital-part-three.js";
import dataFormPartThree from "../assets/js/data/data-form-part-three.js";
import { useVuelidate } from "@vuelidate/core";
import validationsHospitalPartThree from "../assets/js/validations/validations-hospital-part-three.js";

export default {
  name: "HospitalRegistrationPartThree",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    const formData = this.$store.state.formData;
    const data = dataFormPartThree(formData);

    return {
      showTransition: false,
      validDate: true,
      ...data,
    };
  },
  validations() {
    const validations = validationsHospitalPartThree();
    return {
      ...validations,
    };
  },
  methods: {
    submitFormHospitalPartThree,
  },
  mounted() {
    this.showTransition = true;
  },
};
</script>

<style scoped>
@import url("../assets/css/hospitalRegistrationPartThree/generalStyle.css");
@import url("../assets/css/hospitalRegistrationPartThree/limitsSizeStyle.css");
@import url("../assets/css/hospitalRegistrationPartThree/hospitalRegistrationPartThreeStyle.css");
@import url("../assets/css/hospitalRegistrationPartThree/hospitalRegistrationPartThreeResponsiveStyle.css");
@import url("../assets/css/hospitalRegistrationPartThree/copyrightStyle.css");
@import url("../assets/css/hospitalRegistrationPartThree/copyrightResponsiveStyle.css");
@import url("../assets/css/transitionsStyle.css");
</style>
