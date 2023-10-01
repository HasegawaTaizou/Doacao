<template>
  <section id="redefine-password-dashboard">
    <div class="redefine-password__header">
      <h1 class="redefine-password__title">REDEFINIR SENHA</h1>
      <div class="profile-container">
        <img
          src="../../assets/img/hospital-profile-image.png"
          alt="Profile Image"
          class="profile__image"
        />
        <span class="profile__name">Hospital Notredame Intermédica</span>
      </div>
    </div>
    <div class="redefine-password__content">
      <div class="redefine-password-introduction">
        <img
          src="../../assets/img/redefine-password-image.png"
          alt="Redefine Password Image"
          class="redefine-password__image"
        />
        <h2 class="redefine-password__title">Redefinir a senha</h2>
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
  </section>
  <PopUp
    v-if="selectedComponent === 'change'"
    :title="'Alterar senha?'"
    :message="'A senha será alterada e não terá como desfazer esta ação.'"
    :acceptFunction="changePassword"
  >
  </PopUp>
</template>

<script>
import showPassword from "../../assets/js/methods/input/show-password.js";
import showPasswordConfirmation from "../../assets/js/methods/input/show-password-confirmation.js";
import PopUp from "../../assets/components/PopUp.vue";
import openPopUp from "../../assets/js/methods/open-pop-up.js";
import isPasswordSame from "../../assets/js/methods/input/is-password-same";

import { BASE_URL } from "../../assets/js/config";
import axios from "axios";

export default {
  name: "RedefinePassword",
  components: { PopUp },
  data() {
    return {
      selectedComponent: "",
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
          password: this.inputPassword,
        };
        axios.put(
          `${BASE_URL}/hospital/redefine-password/1`,
          updatePasswordData
        );
      } else {
        this.isPasswordTheSame = false;
      }
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/redefinePassword/redefinePasswordStyle.css");
</style>
