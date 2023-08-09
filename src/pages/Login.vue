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
      <form action="" class="login-form">
        <div class="form__email-container">
          <label for="email" class="email__label">E-mail:</label>
          <input type="text" class="email__input" />
        </div>
        <div class="form__password-container">
          <label for="password" class="password__label">Senha:</label>
          <input type="text" class="password__input" />
        </div>
        <button class="login__button">Entrar</button>
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
export default {
  name: "Login",
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
