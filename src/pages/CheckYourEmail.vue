<template>
  <div class="content">
    <header>
      <h1 class="check-your-email__title">CONFIRA SEU E-MAIL</h1>
      <router-link class="return__link" to="/">
        <img src="../assets/img/return-icon.png" alt="Return Icon" class="return__icon" />
      </router-link>
    </header>
    <main>
      <img
        src="../assets/img/check-your-email-image.png"
        alt="Check Your Email Image"
        class="check-your-email__image"
      />
      <p class="check-your-email__text">
        Se encontrarmos uma conta que corresponda às informações que você
        enviou, enviaremos instruções de redefinição de senha para o endereço de
        e-mail que você acabou de inserir.
      </p>
      <p class="check-your-email__text">
        Se você não receber o e-mail em até 10 minutos, refaça a solicitação.
      </p>
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
  name: "CheckYourEmail",
};
</script>
  
<style scoped>
@import url("../assets/css/checkYourEmail/generalStyle.css");
@import url("../assets/css/checkYourEmail/limitsSizeStyle.css");
@import url("../assets/css/checkYourEmail/checkYourEmailStyle.css");
@import url("../assets/css/checkYourEmail/checkYourEmailResponsiveStyle.css");
@import url("../assets/css/checkYourEmail/copyrightStyle.css");
@import url("../assets/css/checkYourEmail/copyrightResponsiveStyle.css");
</style>
  