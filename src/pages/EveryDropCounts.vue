<template>
  <header>
    <div class="food_basket_distribution_project-container">
      <h1 class="food-basket-distribution-project__title">
        CADA GOTA CONTA
      </h1>
      <router-link class="return__link" to="/"><img src="../assets/img/return-icon.png" alt="Return Icon"
          class="return__icon" /></router-link>
    </div>
  </header>
  <main>
    <div class="project-goal limit">
      <h2 class="project-goal__title">Objetivo do projeto</h2>
      <p class="project-goal__text">
        Uma agricultura sustentável envolve a adoção de práticas agrícolas que visam minimizar os efeitos negativos no
        meio ambiente, preservando os recursos naturais e promovendo a conservação da biodiversidade. A irrigação
        desempenha um papel fundamental nesse contexto, pois a água é um recurso valioso e seu uso eficiente é essencial
        para a sustentabilidade agrícola.
      </p>
    
    </div>
    <div class="how-is-possible limit">
      <h2 class="how-is-possible__title">Como é possível?</h2>
      <p class="how-is-possible__text">
        O sistema de irrigação por gotejamento é uma técnica que permite a aplicação precisa e controlada da água diretamente na zona radicular das plantas, em pequenas quantidades e de forma regular. Esse método reduz significativamente o desperdício de água, uma vez que ela é entregue diretamente às plantas, evitando perdas por evaporação e lixiviação.
      </p>
    </div>
    <div class="project-images-container">
      <div class="project-images">
        <img src="../assets/img/drip-irrigation1.png" alt="Project Image" class="project-image" />
        <img src="../assets/img/drip-irrigation2.png" alt="Project Image" class="project-image" />
        <img src="../assets/img/drip-irrigation3.png" alt="Project Image" class="project-image" />
      </div>
    </div>
  </main>
  <footer>
    <div class="meaning-of-agriculture-content">
      <span class="meaning-of-agriculture__title">Agricultura</span>
      <p class="meaning-of-agriculture__text">
        A agricultura é uma prática econômica que consiste no uso dos solos para
        cultivo de vegetais a fim de garantir a subsistência alimentar do ser
        humano.
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
  name: "EveryDropCounts",
};
</script>

<style scoped>
@import url("../assets/css/generalStyle.css");
@import url("../assets/css/everyDropCounts/limitsSizeStyle.css");
@import url("../assets/css/everyDropCounts/everyDropCountsStyle.css");
@import url("../assets/css/everyDropCounts/everyDropCountsResponsiveStyle.css");
@import url("../assets/css/footer/footerStyle.css");
@import url("../assets/css/footer/footerResponsiveStyle.css");
</style>