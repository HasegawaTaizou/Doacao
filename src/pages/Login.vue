<template>
  <transition name="normal" appear v-if="showTransition">
    <div id="login">
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
          <h1 class="login-introduction__text">Olá! Bem-vindo ao Doe Vida</h1>
        </div>
        <div class="login-form">
          <div class="form__introduction">
            <img
              class="introduction__image"
              src="../assets/img/login-image.png"
              alt=""
            />
            <h2 class="introduction__title">LOGIN</h2>
          </div>
          <form @submit.prevent="login" method="POST" class="form__form">
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
            <div class="form__password-container">
              <label for="password" class="password__label">Senha:</label>
              <input
                placeholder="Digite a Senha"
                :type="isShowPassword ? 'text' : 'password'"
                class="password__input"
                autocomplete="new-password"
                v-model="password"
              />
              <i
                @mousedown="showPassword"
                @mouseup="showPassword"
                class="password-eye__icon"
                :class="{
                  'far fa-eye-slash': isShowPassword,
                  'far fa-eye': !isShowPassword,
                }"
              ></i>
              <i class="fas fa-lock password-padlock__icon"></i>
            </div>
            <button type="submit" class="login__button">Entrar</button>
            <div class="other-links">
              <router-link
                class="login__create-account"
                to="/hospital-registration-part-one"
              >
                Não possui cadastro?
              </router-link>
              <router-link
                class="login__forgot-password"
                to="/forgot-password-email"
              >
                Esqueceu a senha?
              </router-link>
            </div>
          </form>
        </div>
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
      <NotificationLogin
        v-if="$store.state.showLoginIncorrect"
        :route="'null'"
        :message="'Usuário ou senha incorreto(s)!'"
      ></NotificationLogin>
    </div>
  </transition>
</template>

<script>
import showPassword from "../assets/js/methods/input/show-password.js";

import axios from "axios";
import { BASE_URL } from "../assets/js/config";

import NotificationLogin from "../assets/components/NotificationLogin.vue";

export default {
  name: "Login",
  data() {
    return {
      //Show Password
      isShowPassword: false,
      password: "",
      email: "",

      showTransition: false,
    };
  },
  components: { NotificationLogin },
  methods: {
    showPassword,
    login() {
      const loginData = {
        email: this.email,
        password: this.password,
      };
      axios
        .post(`${BASE_URL}/hospital-login`, loginData)
        .then((response) => {
          const hospitalData = response.data.hospitalData;
          this.$store.commit("SET_HOSPITAL_ID", hospitalData.id);
          this.$store.commit("SET_HOSPITAL_NAME", hospitalData.name);
          this.$store.commit("SET_HOSPITAL_PHOTO", hospitalData.photo);

          localStorage.setItem("hospitalId", hospitalData.id);
          localStorage.setItem("hospitalName", hospitalData.name);
          localStorage.setItem("hospitalPhoto", hospitalData.photo);
          localStorage.setItem("token", hospitalData.token);
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          if (
            error.response.data.status == 404 ||
            error.response.data.status == 400
          ) {
            this.$store.commit("SET_SHOW_LOGIN_INCORRECT", true);
          }
        });
    },
  },
  mounted() {
    this.showTransition = true;
  },
};
</script>

<style scoped>
@import url("../assets/css/login/generalStyle.css");
@import url("../assets/css/login/loginStyle.css");
@import url("../assets/css/transitionsStyle.css");
</style>
