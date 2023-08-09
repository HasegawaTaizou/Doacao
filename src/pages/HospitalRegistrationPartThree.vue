<template>
  <div class="content">
    <img src="../assets/img/logo.png" alt="Website logo" id="logo" />
    <header>
      <h1 class="hospital-registration-part-three__title">CADASTRO HOSPITAL</h1>
      <router-link class="return__link" to="/hospital-registration-part-two">
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
        <router-link to="/hospital-registration-part-two">
          <button type="button" class="hospital-registration__button-return">
            Voltar
          </button>
        </router-link>
        <button
          type="button"
          @click="submitFormHospitalPartThree"
          class="hospital-registration__button"
        >
          Continuar
        </button>
      </form>
      <NotificationBar
        v-if="$store.state.showNotification"
        :route="'/'"
        :message="'Cadastro realizado com sucesso! Verifique seu e-mail'"
      />
    </main>
    <footer>
      <p class="footer__text">
        Copyright © 2023 | Todos os direitos reservados EMPRESA
      </p>
    </footer>
  </div>
</template>

<script>
import submitFormHospitalPartThree from "../assets/js/methods/submit-form-hospital-part-three.js";
import dataFormPartThree from "../assets/js/data/data-form-part-three.js";
import NotificationBar from "../assets/components/NotificationBar.vue";
import { useVuelidate } from "@vuelidate/core";
import validationsHospitalPartThree from "../assets/js/validations/validations-hospital-part-three.js";

export default {
  name: "HospitalRegistrationPartThree",
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    NotificationBar,
  },
  data() {
    const formData = this.$store.state.formData;
    const data = dataFormPartThree(formData);

    return {
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
};
</script>

<style scoped>
@import url("../assets/css/hospitalRegistrationPartThree/generalStyle.css");
@import url("../assets/css/hospitalRegistrationPartThree/limitsSizeStyle.css");
@import url("../assets/css/hospitalRegistrationPartThree/hospitalRegistrationPartThreeStyle.css");
@import url("../assets/css/hospitalRegistrationPartThree/hospitalRegistrationPartThreeResponsiveStyle.css");
@import url("../assets/css/hospitalRegistrationPartThree/copyrightStyle.css");
@import url("../assets/css/hospitalRegistrationPartThree/copyrightResponsiveStyle.css");
</style>
