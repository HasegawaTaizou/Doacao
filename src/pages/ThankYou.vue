<template>
  <div class="content">
    <div class="thank-you__texts">
      <p class="thank-you__text">
        Sua conta foi encerrada com sucesso. Gostaríamos de agradecer por ter
        sido parte da nossa comunidade e esperamos que tenha tido uma
        experiência positiva durante o tempo que passou conosco.
      </p>
      <p class="thank-you__text">
        Se você tiver algum feedback sobre sua experiência ou precisar de
        assistência adicional, não hesite em nos contatar. Estamos aqui para
        ajudar.
      </p>
      <p class="thank-you__text">
        Desejamos a você o melhor em suas futuras jornadas. Atenciosamente,
        equipe do Doe Vida.
      </p>
    </div>
    <router-link to="/" class="thank-you__button">
      <p class="button__text">Entendido</p>
      <i class="fa-regular fa-circle-check button__icon"></i>
    </router-link>
    <img
      src="../assets/img/thank-you-ornament1.png"
      alt="thank you ornament1"
      class="ornament1"
    />
    <img
      src="../assets/img/thank-you-ornament2.png"
      alt="thank you ornament2"
      class="ornament2"
    />
    <img
      src="../assets/img/thank-you-ornament3.png"
      alt="thank you ornament3"
      class="ornament3"
    />
    <img
      src="../assets/img/thank-you-ornament4.png"
      alt="thank you ornament4"
      class="ornament4"
    />
    <img
      src="../assets/img/thank-you-ornament5.png"
      alt="thank you ornament5"
      class="ornament5"
    />
  </div>
</template>

<script>
export default {
  name: "ThankYou",
};
</script>

<style scoped>
@import url("../assets/css/thankYou/thankYou.css");
</style>
