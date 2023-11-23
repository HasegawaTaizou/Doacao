<template>
  <transition name="fade">
    <section id="redefine-password-dashboard">
      <div class="redefine-password__header">
        <h1 class="redefine-password__title">NOVA SENHA</h1>
      </div>
      <div class="redefine-password__content">
        <div class="redefine-password-introduction">
          <h2 class="redefine-password__title">Nova senha</h2>
          <img
            src="../assets/img/redefine-password-image.png"
            alt="Redefine Password Image"
            class="redefine-password__image"
          />
          <div class="redefine-password__text-container">
            <p class="redefine-password__text">
              Basta digitá-la duas vezes e tentar não esquecê-la.
            </p>
            <p class="redefine-password__text">
              Para uma senha segura, deve conter pelo menos:
            </p>
          </div>
          <div class="redefine-password-recommendations-container">
            <div class="recomendation-container">
              <span class="recomendation__title">8+</span>
              <span class="recomendation__description">Caracteres</span>
            </div>
            <div class="recomendation-container">
              <span class="recomendation__title">AA</span>
              <span class="recomendation__description">Maiúsculas</span>
            </div>
            <div class="recomendation-container">
              <span class="recomendation__title">aa</span>
              <span class="recomendation__description">Minusculas</span>
            </div>
            <div class="recomendation-container">
              <span class="recomendation__title">123</span>
              <span class="recomendation__description">Números</span>
            </div>
            <div class="recomendation-container">
              <span class="recomendation__title">@#$</span>
              <span class="recomendation__description">Símbolos</span>
            </div>
          </div>
          <div class="redefine-password-action">
            <div class="redefine-password__inputs">
              <div class="form__password-container">
                <label for="password" class="password__label">Senha:</label>
                <input
                  :type="isShowPassword ? 'text' : 'password'"
                  class="password__input"
                  v-model="inputPassword"
                  ref="inputPassword"
                  autocomplete="new-password"
                />
                <i
                  @mousedown="showPassword"
                  @mouseup="showPassword"
                  :class="{
                    'far fa-eye-slash': isShowPassword,
                    'far fa-eye': !isShowPassword,
                  }"
                ></i>
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
                />
                <i
                  @mousedown="showPasswordConfirmation"
                  @mouseup="showPasswordConfirmation"
                  :class="{
                    'far fa-eye-slash': isShowPasswordConfirmation,
                    'far fa-eye': !isShowPasswordConfirmation,
                  }"
                ></i>
                <div v-if="!isPasswordTheSame">
                  <p class="error-text">A senha deve ser a mesma!</p>
                </div>
              </div>
            </div>
            <div class="redefine-password__buttons">
              <router-link :to="'/dashboard/settings/'">
                <button class="button__cancel">Cancelar</button>
              </router-link>
              <button
                @click="openPopUp('change')"
                class="button__redefine-password"
              >
                Redefinir senha
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </transition>
  <PopUp
    v-if="selectedComponent === 'change'"
    :title="'Alterar senha?'"
    :message="'A senha será alterada e não terá como desfazer esta ação.'"
    :acceptFunction="changePassword"
    :image="'/src/assets/img/book-schedule-save-image.png'"
  >
  </PopUp>
</template>

<script>
import showPassword from "../assets/js/methods/input/show-password.js";
import showPasswordConfirmation from "../assets/js/methods/input/show-password-confirmation.js";
import openPopUp from "../assets/js/methods/open-pop-up.js";
import isPasswordSame from "../assets/js/methods/input/is-password-same";

import { BASE_URL } from "../assets/js/config";
import axios from "axios";

export default {
  name: "ForgotPasswordNewPassword",
  data() {
    return {
      //Show Password
      isShowPassword: false,
      isShowPasswordConfirmation: false,

      isPasswordTheSame: true,

      inputPassword: "",
      inputPasswordConfirmation: "",
    };
  },
  methods: {
    showPassword,
    showPasswordConfirmation,
    openPopUp,
    isPasswordSame,
    changePassword() {
      if (
        this.isPasswordSame(this.inputPassword, this.inputPasswordConfirmation)
      ) {
        const updatePasswordData = {
          id: localStorage.getItem("hospitalId"),
          password: this.inputPassword,
        };
        axios.put(`${BASE_URL}/hospital/redefine-password`, updatePasswordData);
      } else {
        this.isPasswordTheSame = false;
      }
    },
  },
  mounted() {
    if (this.$route.params.token.startsWith("h")) {
      console.log(this.$route.params.token);
      console.log("update hospital");
    } else if (this.$route.params.token.startsWith("u")) {
      console.log(this.$route.params.token);
      console.log("update user");
    }
  },
};
</script>

<style scoped>
@import url("../assets/css/dashboard/redefinePassword/redefinePasswordStyle.css");
</style>
