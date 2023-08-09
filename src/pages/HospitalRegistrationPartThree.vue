<template>
  <div class="content">
    <header>
      <h1 class="hospital-registration-part-three__title">
        CADASTRO HOSPITAL
      </h1>
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
        <div class="form__reason-container">
          <label for="reason" class="reason__label">Motivo:</label>
          <textarea
            name="reason"
            id=""
            cols="30"
            rows="10"
            class="reason__textarea"
            v-model="inputReason"
            :class="{ error: v$.inputReason.$error }"
            @blur="v$.inputReason.$touch();"
            ref="inputReason"
          ></textarea>
          <div v-if="v$.inputReason.$error">
            <p v-if="v$.inputReason.required" class="error-text">
              Preencha o motivo!
            </p>
          </div>
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
        Copyright © 2023 | Todos os direitos reservados Green World
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
