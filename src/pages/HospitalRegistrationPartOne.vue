<template>
  <div class="content">
    <img src="../assets/img/logo.png" alt="Website logo" id="logo" />
    <header>
      <h1 class="hospital-registration-part-one__title">CADASTRO HOSPITAL</h1>
      <router-link class="return__link" to="/">
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
      <form class="hospital-registration-part-one-form">
        <div v-if="!isSelectedImage" class="form__photo-container">
          <input
            type="file"
            class="photo__label"
            id="photo"
            @change="uploadImage"
          />
          <label for="photo">
            <img
              src="../assets/img/photo-icon.png"
              alt="Photo Icon"
              class="photo__icon"
            />
          </label>
        </div>
        <div v-else class="form__photo-selected-container">
          <img :src="downloadURL" alt="Hospital Photo" class="photo__photo" />
        </div>
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
            v-mask="'(##) #####-####'"
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
        <div class="form__password-container">
          <label for="password" class="password__label">Senha:</label>
          <input
            type="text"
            class="password__input"
            v-mask="'(##) #####-####'"
            v-model="inputPassword"
            :class="{ error: v$.inputPassword.$error }"
            ref="inputPassword"
            @blur="v$.inputPassword.$touch()"
          />
          <div v-if="v$.inputPassword.$error">
            <p
              v-if="v$.inputPassword.required && v$.inputPassword.minLength"
              class="error-text"
            >
              Preencha a senha!
            </p>
          </div>
        </div>  
        <div class="form__password-confirmation-container">
          <label for="password-confirmation" class="password-confirmation__label">Confirmar senha:</label>
          <input
            type="text"
            class="password-confirmation__input"
          />
        </div>
        <div class="form__URL-container">
          <label for="URL" class="URL__label">URL do site:</label>
          <input
            type="text"
            class="URL__input"
            v-mask="'(##) #####-####'"
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
    </main>
    <footer>
      <p class="footer__text">
        Copyright © 2023 | Todos os direitos reservados EMPRESA
      </p>
    </footer>
  </div>
</template>

<script>
import submitFormHospitalPartOne from "../assets/js/methods/submit-form-hospital-part-one.js";
import uploadImage from "../assets/js/methods/input/upload-image.js";
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
    uploadImage,
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
