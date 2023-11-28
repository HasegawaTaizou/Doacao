<template>
  <transition name="fade">
    <section id="redefine-password-dashboard">
      <div class="redefine-password__content">
        <div class="redefine-password-introduction">
          <h2 class="redefine-password__title">Nova senha</h2>
          <img
            src="../assets/img/new-password-image.png"
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
              <button @click="changePassword" class="button__redefine-password">
                Redefinir senha
              </button>
            </div>
          </div>
        </div>
      </div>
      <PasswordReset v-if="this.$store.state.showPasswordReset"></PasswordReset>
    </section>
  </transition>
</template>

<script>
import showPassword from "../assets/js/methods/input/show-password.js";
import showPasswordConfirmation from "../assets/js/methods/input/show-password-confirmation.js";
import isPasswordSame from "../assets/js/methods/input/is-password-same";

import { BASE_URL } from "../assets/js/config";
import axios from "axios";

import PasswordReset from "../assets/components/PasswordReset.vue";

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

      showPopUp: false,
    };
  },
  components: {
    PasswordReset,
  },
  methods: {
    showPassword,
    showPasswordConfirmation,
    isPasswordSame,
    changePassword() {
      if (
        this.isPasswordSame(this.inputPassword, this.inputPasswordConfirmation)
      ) {
        let type = "";

        if (this.$route.params.token.startsWith("h")) {
          type = "hospital";
        } else if (this.$route.params.token.startsWith("u")) {
          type = "user";
        }

        const modifiedToken = this.$route.params.token.substring(1);

        const updatePasswordData = {
          type: type,
          password: this.inputPassword,
          token: modifiedToken,
        };

        console.log(updatePasswordData);
        axios
          .post(`${BASE_URL}/reset-password`, updatePasswordData)
          .then(() => {
            this.$store.commit("SET_SHOW_PASSWORD_RESET", true);
          });
      } else {
        this.isPasswordTheSame = false;
      }
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/dashboard/redefinePasswordOut/redefinePasswordOutStyle.css");
</style>
