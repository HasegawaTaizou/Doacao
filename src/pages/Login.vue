<template>
  <div class="content">
    <img src="../assets/img/logo.png" alt="Website logo" id="logo" />
    <header>
      <h1 class="login__title">LOG IN</h1>
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
        src="../assets/img/hospital-login-image.png"
        alt="Login Image"
        class="login__image"
      />
      <form @submit.prevent="login" method="POST" class="login-form">
        <div class="form__email-container">
          <label for="email" class="email__label">E-mail:</label>
          <input type="text" class="email__input" v-model="email" />
        </div>
        <div class="form__password-container">
          <label for="password" class="password__label">Senha:</label>
          <input
            :type="isShowPassword ? 'text' : 'password'"
            class="password__input"
            autocomplete="new-password"
            v-model="password"
          />
          <i
            @mousedown="showPassword"
            @mouseup="showPassword"
            :class="{
              'far fa-eye-slash': isShowPassword,
              'far fa-eye': !isShowPassword
            }"
          ></i>
        </div>
        <button type="submit" class="login__button">Entrar</button>
        <router-link class="login__forgot-password" to="/redefine-password">
          Esqueceu a senha?
        </router-link>
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
import showPassword from "../assets/js/methods/input/show-password.js";

import axios from 'axios'
import { BASE_URL } from "../assets/js/config";

export default {
  name: "Login",
  data() {
    return {
      //Show Password
      isShowPassword: false,
      password: "",
      email: "",
    };
  },
  methods: {
    showPassword,
    login() {
      const loginData = {
        email: this.email,
        password: this.password
      }
      axios.post(`${BASE_URL}/hospital-login`, loginData).then((response) => {
        const hospitalData = response.data.hospitalData
        console.log(response.data.hospitalData);
        this.$store.commit('SET_HOSPITAL_ID', hospitalData.id)
        this.$store.commit('SET_HOSPITAL_NAME', hospitalData.name)
        this.$store.commit('SET_HOSPITAL_PHOTO', hospitalData.photo)

        localStorage.setItem("token", hospitalData.token)
        this.$router.push('/dashboard')
      })
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/login/generalStyle.css");
@import url("../assets/css/login/limitsSizeStyle.css");
@import url("../assets/css/login/loginStyle.css");
@import url("../assets/css/login/loginResponsiveStyle.css");
@import url("../assets/css/login/copyrightStyle.css");
@import url("../assets/css/login/copyrightResponsiveStyle.css");
</style>
