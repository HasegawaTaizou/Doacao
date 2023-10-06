<template>
  <div class="content">
    <div id="logo-container">
      <img src="../assets/img/logo.png" alt="Website logo" id="logo__logo" />
      <span id="logo__name">Doe Vida</span>
    </div>
    <header>
      <div class="hospital-registration-parts">
        <div class="registration-part">
          <div class="registration-part__radio radio-active"></div>
          <span class="registration-part__text">Dados pessoais</span>
        </div>
        <div class="registration-part">
          <div class="registration-part__radio"></div>
          <span class="registration-part__text">Endereço</span>
        </div>
        <div class="registration-part">
          <div class="registration-part__radio"></div>
          <span class="registration-part__text">Local</span>
        </div>
        <div class="registration-part">
          <div class="registration-part__radio"></div>
          <span class="registration-part__text">Foto e Senha</span>
        </div>
      </div>
    </header>
    <main>
      <form class="hospital-registration-part-one-form">
        <div class="form__name-container">
          <label for="name" class="name__label">Nome:</label>
          <input
            type="text"
            class="name__input"
            id="name"
            maxlength="150"
            v-model="v$.inputName.$model"
            :class="{ error: v$.inputName.$error }"
            ref="inputName"
            @input="this.inputName = onlyLetters(this.inputName)"
          />
          <div v-if="v$.inputName.$error">
            <p v-if="v$.inputName.required" class="error-text">
              Preencha o nome!
            </p>
          </div>
        </div>
        <div class="form__email-container">
          <label for="email" class="email__label">E-mail:</label>
          <input
            type="email"
            class="email__input"
            maxlength="256"
            v-model.trim="v$.inputEmail.$model"
            :class="{ error: v$.inputEmail.$error }"
            @blur="v$.inputEmail.$touch()"
            ref="inputEmail"
          />
          <div v-if="v$.inputEmail.$error">
            <p
              v-if="v$.inputEmail.required && v$.inputEmail.email"
              class="error-text"
            >
              Preencha o e-mail!
            </p>
          </div>
        </div>
        <div class="form__phone-container">
          <label for="phone" class="phone__label">Telefone:</label>
          <input
            type="text"
            class="phone__input"
            v-mask="'(##) #####-####'"
            v-model="inputPhone"
            :class="{ error: v$.inputPhone.$error }"
            ref="inputPhone"
            @blur="v$.inputPhone.$touch()"
          />
          <div v-if="v$.inputPhone.$error">
            <p
              v-if="v$.inputPhone.required && v$.inputPhone.minLength"
              class="error-text"
            >
              Preencha o telefone!
            </p>
          </div>
        </div>
        <div class="form__CNPJ-container">
          <label for="CNPJ" class="CNPJ__label">CPNJ:</label>
          <input
            type="text"
            class="CNPJ__input"
            v-mask="'##.###.###/000#-##'"
            v-model="inputCNPJ"
            :class="{ error: v$.inputCNPJ.$error }"
            ref="inputCNPJ"
            @blur="v$.inputCNPJ.$touch()"
          />
          <div v-if="v$.inputCNPJ.$error">
            <p
              v-if="v$.inputCNPJ.required && v$.inputCNPJ.minLength"
              class="error-text"
            >
              Preencha o CNPJ!
            </p>
          </div>
        </div>
        <div class="form__URL-container">
          <label for="URL" class="URL__label">URL do site:</label>
          <input
            type="text"
            class="URL__input"
            v-model="inputURL"
            :class="{ error: v$.inputURL.$error }"
            ref="inputURL"
            @blur="v$.inputURL.$touch()"
          />
          <div v-if="v$.inputURL.$error">
            <p
              v-if="v$.inputURL.required && v$.inputURL.minLength"
              class="error-text"
            >
              Preencha a URL do site!
            </p>
          </div>
        </div>
        <button
          type="button"
          @click="submitFormHospitalPartOne()"
          class="hospital-registration__button"
        >
          Continuar
        </button>
      </form>
      <img
        src="../assets/img/hospital-registration-part-one-image.png"
        alt="Hospital Registration Image"
        class="hospital-registration__image"
      />
    </main>
    <footer>
      <p class="footer__text">
        Copyright © 2023 | Todos os direitos reservados Doe Vida
      </p>
    </footer>
  </div>
</template>

<script>
import submitFormHospitalPartOne from "../assets/js/methods/submit-form-hospital-part-one.js";
import onlyLetters from "../assets/js/methods/input/only-letters.js";
import dataPartOne from "../assets/js/data/data-form-part-one.js";
import validationsHospitalPartOne from "../assets/js/validations/validations-hospital-part-one.js";
import { useVuelidate } from "@vuelidate/core";
import { mapMutations } from "vuex";

export default {
  name: "HospitalRegistrationPartOne",

  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    const formData = this.$store.state.formData;
    const data = dataPartOne(formData);

    return {
      validDate: true,
      ...data,
    };
  },
  validations() {
    const validations = validationsHospitalPartOne();
    return {
      ...validations,
    };
  },
  methods: {
    ...mapMutations(["updateNotificationStatus"]),
    submitFormHospitalPartOne,
    onlyLetters,
  },
};
</script>

<style scoped>
@import url("../assets/css/hospitalRegistrationPartOne/generalStyle.css");
@import url("../assets/css/hospitalRegistrationPartOne/limitsSizeStyle.css");
@import url("../assets/css/hospitalRegistrationPartOne/hospitalRegistrationPartOneStyle.css");
@import url("../assets/css/hospitalRegistrationPartOne/hospitalRegistrationPartOneResponsiveStyle.css");
@import url("../assets/css/hospitalRegistrationPartOne/copyrightStyle.css");
@import url("../assets/css/hospitalRegistrationPartOne/copyrightResponsiveStyle.css");
</style>
