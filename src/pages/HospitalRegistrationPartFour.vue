<template>
  <div class="content">
    <img src="../assets/img/logo.png" alt="Website logo" id="logo" />
    <header>
      <h1 class="hospital-registration-part-four__title">CADASTRO HOSPITAL</h1>
      <router-link class="return__link" to="/hospital-registration-part-three">
        <img
          src="../assets/img/return-icon.png"
          alt="Return Icon"
          class="return__icon"
        />
      </router-link>
    </header>
    <main>
      <form class="hospital-registration-part-four-form">
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
        <div class="form__password-container">
          <label for="password" class="password__label">Senha:</label>
          <input
            :type="isShowPassword ? 'text' : 'password'"
            class="password__input"
            v-model="inputPassword"
            :class="{ error: v$.inputPassword.$error }"
            ref="inputPassword"
            @blur="v$.inputPassword.$touch()"
            autocomplete="new-password"
          />
          <i
            @mousedown="showPassword"
            @mouseup="showPassword"
            :class="{
              'far fa-eye-slash': isShowPassword,
              'far fa-eye': !isShowPassword,
              'error-icon': v$.inputPassword.$error,
            }"
          ></i>
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
          <label
            for="password-confirmation"
            class="password-confirmation__label"
            >Confirmar senha:</label
          >
          <input
            :type="isShowPasswordConfirmation ? 'text' : 'password'"
            class="password-confirmation__input"
            autocomplete="new-password"
            v-model="inputPasswordConfirmation"
            :class="{ error: v$.inputPasswordConfirmation.$error }"
            ref="inputPasswordConfirmation"
            @blur="v$.inputPasswordConfirmation.$touch()"
          />
          <i
            @mousedown="showPasswordConfirmation"
            @mouseup="showPasswordConfirmation"
            :class="{
              'far fa-eye-slash': isShowPasswordConfirmation,
              'far fa-eye': !isShowPasswordConfirmation,
              'error-icon': v$.inputPasswordConfirmation.$error,
            }"
          ></i>
          <div v-if="v$.inputPasswordConfirmation.$error">
            <p
              v-if="
                v$.inputPasswordConfirmation.required &&
                v$.inputPasswordConfirmation.minLength
              "
              class="error-text"
            >
              Preencha a senha!
            </p>
          </div>
          <div v-else-if="!this.$store.state.formData.isPasswordSame">
            <p class="error-text">A senha deve ser a mesma!</p>
          </div>
        </div>
        <div class="hospital-registration__buttons">
          <router-link to="/hospital-registration-part-three">
            <button type="button" class="button__return">Voltar</button>
          </router-link>
          <button
            type="button"
            @click="submitFormHospitalPartFour"
            class="button__send"
          >
            Enviar
          </button>
        </div>
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
import submitFormHospitalPartFour from "../assets/js/methods/submit-form-hospital-part-four.js";
import dataFormPartFour from "../assets/js/data/data-form-part-four.js";
import NotificationBar from "../assets/components/NotificationBar.vue";
import { useVuelidate } from "@vuelidate/core";
import validationsHospitalPartFour from "../assets/js/validations/validations-hospital-part-four.js";
import uploadImage from "../assets/js/methods/input/upload-image.js";
import showPassword from "../assets/js/methods/input/show-password.js";
import showPasswordConfirmation from "../assets/js/methods/input/show-password-confirmation.js";
import isPasswordSame from "../assets/js/methods/input/is-password-same.js";

export default {
  name: "HospitalRegistrationPartFour",
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    NotificationBar,
  },
  data() {
    const formData = this.$store.state.formData;
    const data = dataFormPartFour(formData);

    return {
      validDate: true,
      ...data,
    };
  },
  validations() {
    const validations = validationsHospitalPartFour();
    return {
      ...validations,
    };
  },
  methods: {
    submitFormHospitalPartFour,
    uploadImage,
    showPassword,
    showPasswordConfirmation,
    isPasswordSame,
  },
};
</script>

<style scoped>
@import url("../assets/css/hospitalRegistrationPartFour/generalStyle.css");
@import url("../assets/css/hospitalRegistrationPartFour/limitsSizeStyle.css");
@import url("../assets/css/hospitalRegistrationPartFour/hospitalRegistrationPartFourStyle.css");
@import url("../assets/css/hospitalRegistrationPartFour/hospitalRegistrationPartFourResponsiveStyle.css");
@import url("../assets/css/hospitalRegistrationPartFour/copyrightStyle.css");
@import url("../assets/css/hospitalRegistrationPartFour/copyrightResponsiveStyle.css");
</style>
