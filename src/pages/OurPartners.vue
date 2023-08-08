<template>
  <!-- <div class="content"> -->
  <header>
    <div class="title-page">
      <h1 class="our-partners__title">Nossos Parceiros</h1>
      <router-link class="return__link" to="/">
        <img src="../assets/img/return-icon.png" alt="Return Icon" class="return__icon" />
      </router-link>
    </div>
  </header>
  <main>
    <div class="our-partners-images-container">
      <img class="partner" src="../assets/img/logo-assai.png" alt="" />
      <img class="partner" src="../assets/img/logo-atacadao.png" alt="" />
      <img class="partner" src="../assets/img/logo-pao-de-acucar.png" alt="" />
      <img class="partner" src="../assets/img/logo-sams-club.png" alt="" />
    </div>
    <div class="limit">

      <div class="why-contribute ">
        <h2 class="why-contribute__title">Por que contribuir?</h2>
        <p class="why-contribute__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
          finibus diam. Nulla efficitur neque eget est lacinia, pellentesque
          rhoncus velit porta. Etiam dapibus tempus tellus et volutpat.
          Curabitur commodo enim bibendum, condimentum augue id, elementum
          magna. Etiam in lacus placerat, faucibus felis sed, congue elit. Etiam
          eu lacus sit amet justo sagittis facilisis. Morbi tincidunt et felis
          eget facilisis. In imperdiet est non eros ornare, auctor congue eros
          malesuada. Duis sollicitudin turpis sit amet mi sagittis, eu luctus
          massa posuere. Duis tincidunt dignissim rhoncus.
        </p>
        <img src="../assets/img/why-contribute-image.png" alt="How Contribute Image" class="why-contribute__image" />
      </div>
      <div class="how-contribute">
        <img src="../assets/img/how-contribute-image.png" alt="How Contribute Image" class="how-contribute__image" />
        <h2 class="how-contribute__title">Como contribuir?</h2>
        <p class="how-contribute__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
          finibus diam. Nulla efficitur neque eget est lacinia, pellentesque
          rhoncus velit porta. Etiam dapibus tempus tellus et volutpat.
          Curabitur commodo enim bibendum, condimentum augue id, elementum
          magna. Etiam in lacus placerat, faucibus felis sed, congue elit. Etiam
          eu lacus sit amet justo sagittis facilisis. Morbi tincidunt et felis
          eget facilisis. In imperdiet est non eros ornare, auctor congue eros
          malesuada. Duis sollicitudin turpis sit amet mi sagittis, eu luctus
          massa posuere. Duis tincidunt dignissim rhoncus.
        </p>
        <router-link to="/beneficiary-registration-part-one" class="how-contribute__link">
          <button class="how-contribute__button">Estou interessado</button>
        </router-link>
      </div>
    </div>
  </main>

  <!-- </div> -->
  <footer>
    <div class="meaning-of-agriculture-content">
      <span class="meaning-of-agriculture__title">Agricultura</span>
      <p class="meaning-of-agriculture__text">
        A agricultura é uma prática econômica que consiste no uso dos solos
        para cultivo de vegetais a fim de garantir a subsistência alimentar do
        ser humano.
      </p>
    </div>
    <nav class="social-media-container">
      <ul class="social-media__footer">
        <li>
          <a href="#" class="social__footer"><i class="fab fa-twitter"></i></a>
        </li>
        <li>
          <a href="#" class="social__footer"><i class="fab fa-instagram"></i></a>
        </li>
        <li>
          <a href="#" class="social__footer"><i class="fab fa-facebook-f"></i></a>
        </li>
      </ul>
    </nav>
    <div class="support-content">
      <span class="support__title">Suporte</span>
      <div class="support__links">
        <router-link class="support__link" to="/faq"> FAQ </router-link>
        <router-link class="support__link" to="/privacy-policy">
          Política de privacidade
        </router-link>
      </div>
    </div>
    <div class="contact-content">
      <span class="contact__title">Contate-nos</span>
      <ul class="contacts">
        <li class="contact">greenworld@gmail.com</li>
        <li class="contact">(11) 4774-4700</li>
        <li class="contact">Alagoas</li>
      </ul>
    </div>
    <p class="copyright">
      Copyright © 2023 | Todos os direitos reservados Green World
    </p>
  </footer>
</template>

<script>
export default {
  name: "OurPartners",
};
</script>

<style scoped>
@import url("../assets/css/ourPartners/ourPartnersStyle.css");
@import url("../assets/css/ourPartners/ourPartnersResponsiveStyle.css");
@import url("../assets/css/footer/footerStyle.css");
@import url("../assets/css/footer/footerResponsiveStyle.css");
</style>
