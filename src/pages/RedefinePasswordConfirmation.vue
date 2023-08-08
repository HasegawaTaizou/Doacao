<template>
  <div class="content">
    <header>
      <h1 class="redefine-password__title">REDEFINIR SENHA</h1>
      <router-link class="return__link" to="/">
        <img
          src="../assets/img/return-icon.png"
          alt="Return Icon"
          class="return__icon"
        />
      </router-link>
    </header>
    <main>
      <div class="redefine-password-container">
        <div class="redefine-password__email-container">
          <span class="email__title">E-mail</span>
          <span class="email__email">seuEmail@gmail.com</span>
        </div>
        <span class="redefine-password__text"
          >Por favor, insira uma senha válida. Ela deve conter 8 caracteres e
          uma letra.</span
        >
      </div>
      <form action="" class="redefine-password__form">
        <div class="form__new-password-container">
          <label for="new-password" class="new-password__label"
            >Nova senha:</label
          >
          <input type="password" class="new-password__input" />
        </div>
        <div class="form__confirm-password-container">
          <label for="confirm-password" class="confirm-password__label"
            >Confirmar nova senha:</label
          >
          <input type="password" class="confirm-password__input" />
        </div>
        <button class="redefine-password__enter-button">Entrar</button>
        <button class="redefine-password__cancel-button">Cancelar</button>
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
  name: "RedefinePasswordConfirmation",
};
</script>
    
  <style scoped>
@import url("../assets/css/redefinePasswordConfirmation/generalStyle.css");
@import url("../assets/css/redefinePasswordConfirmation/limitsSizeStyle.css");
@import url("../assets/css/redefinePasswordConfirmation/redefinePasswordConfirmationStyle.css");
@import url("../assets/css/redefinePasswordConfirmation/redefinePasswordConfirmationResponsiveStyle.css");
@import url("../assets/css/redefinePasswordConfirmation/copyrightStyle.css");
@import url("../assets/css/redefinePasswordConfirmation/copyrightResponsiveStyle.css");
</style>
    