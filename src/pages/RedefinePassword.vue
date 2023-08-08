<template>
  <div class="content">
    <header>
      <h1 class="redefine-password__title">REDEFINIR SENHA</h1>
      <router-link class="return__link" to="/login">
        <img
          src="../assets/img/return-icon.png"
          alt="Return Icon"
          class="return__icon"
        />
      </router-link>
    </header>
    <main>
      <img
        src="../assets/img/redefine-password-image.png"
        alt="Redefine password image"
        class="redefine-password__image"
      />
      <span class="redefine-password__text"
        >Por favor, digite o endereço de e-mail utilizado no cadastro.</span
      >
      <form action="" class="redefine-password__form">
        <div class="form__email-container">
          <label for="email" class="email__label">Email:</label>
          <input type="email" class="email__input" />
        </div>
        <button class="redefine-password__enter-button">Enviar</button>
        <router-link to="/login">
          <button class="redefine-password__return-button">Voltar</button>
        </router-link>
        <router-link class="redefine-password__forgot-password" to="/login">
          Já é cadastrado?
        </router-link>
      </form>
    </main>
    <footer>
      <p class="footer__text">
        Copyright © 2023 | Todos os direitos reservados Green World
      </p>
    </footer>
  </div>
</template>
    
  <script>
export default {
  name: "RedefinePassword",
};
</script>
    
  <style scoped>
@import url("../assets/css/redefinePassword/generalStyle.css");
@import url("../assets/css/redefinePassword/limitsSizeStyle.css");
@import url("../assets/css/redefinePassword/redefinePasswordStyle.css");
@import url("../assets/css/redefinePassword/redefinePasswordResponsiveStyle.css");
@import url("../assets/css/redefinePassword/copyrightStyle.css");
@import url("../assets/css/redefinePassword/copyrightResponsiveStyle.css");
</style>
    