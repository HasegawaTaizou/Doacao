<template>
  <transition name="fade" appear>
    <div v-if="showTranstion" id="forgot-password">
      <img
        src="../assets/img/login-ornament-6.png"
        alt="Login Ornament Image 6"
        class="login-ornament-image-6"
      />
      <img
        src="../assets/img/login-ornament-7.png"
        alt="Login Ornament Image 7"
        class="login-ornament-image-7"
      />
      <main>
        <div class="login-introduction">
          <img
            src="../assets/img/forgot-password-image.png"
            alt="Login Image"
            class="login__imagee"
          />
          <h1 class="login-introduction__text">
            Se você esqueceu sua senha, não se preocupe! Estamos aqui para
            ajudar a recuperar o acesso à sua conta.
          </h1>
        </div>
        <form @submit.prevent="forgotPassword" method="POST" class="form__form">
          <div class="form__email-container">
            <label for="email" class="email__label">E-mail:</label>
            <input
              type="text"
              class="email__input"
              v-model="email"
              placeholder="Digite o E-mail"
            />
            <i class="fa-solid fa-envelope email__icon"></i>
          </div>
          <button type="submit" class="login__button">Enviar</button>
        </form>
        <img
          src="../assets/img/login-ornament-1.png"
          alt="Login Ornament Image 1"
          class="login-ornament-image-1"
        />
        <img
          src="../assets/img/login-ornament-2.png"
          alt="Login Ornament Image 2"
          class="login-ornament-image-2"
        />
        <img
          src="../assets/img/login-ornament-3.png"
          alt="Login Ornament Image 3"
          class="login-ornament-image-3"
        />
        <img
          src="../assets/img/login-ornament-4.png"
          alt="Login Ornament Image 4"
          class="login-ornament-image-4"
        />
        <img
          src="../assets/img/login-ornament-5.png"
          alt="Login Ornament Image 5"
          class="login-ornament-image-5"
        />
      </main>
      <Email v-if="showNotificationEmail"></Email>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "../assets/js/config";

import Email from "../assets/components/Email.vue";

export default {
  name: "ForgotPasswordEmail",
  components: {
    Email,
  },
  data() {
    return {
      email: "",
      showNotificationEmail: false,

      showTranstion: false,
    };
  },
  methods: {
    forgotPassword() {
      const data = {
        type: "hospital",
        email: this.email,
      };
      axios.post(`${BASE_URL}/api/v1/forgot-password`, data).then(() => {
        //show popup email
        this.showNotificationEmail = true;
      });
    },
  },
  mounted() {
    this.showTranstion = true;
  },
};
</script>

<style scoped>
@import url("../assets/css/forgotPasswordEmail/forgotPasswordEmailStyle.css");
</style>
