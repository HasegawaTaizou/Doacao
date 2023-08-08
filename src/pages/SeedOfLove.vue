<template>
  <header>
    <div class="seed-of-love-container">
      <h1 class="seed-of-love__title">SEMENTE DO AMOR</h1>
      <router-link class="return__link" to="/"><img src="../assets/img/return-icon.png" alt="Return Icon"
          class="return__icon" /></router-link>
    </div>
    <!-- <img src="../assets/img/seed-of-love-logo.png" alt="Seed of love logo" class="seed-of-logo__logo" /> -->
  </header>
  <main>
    <div class="project-goal limit">
      <h2 class="project-goal__title">Objetivo do projeto</h2>
      <p class="project-goal__text">
        O projeto de semente do amor é uma iniciativa que visa cultivar alimentos em espaços limitados como os lares nas
        comunidades. É uma maneira sustentável de obter alimentos frescos e saudáveis, promovendo a conexão com a natureza
        e incentivando a autonomia alimentar. A criação de hortas vai além do simples fornecimento de alimentos, por meio
        desse envolvimento, as pessoas desenvolvem habilidades agrícolas, adquirem conhecimento sobre nutrição e aprendem
        sobre a importância da sustentabilidade ambiental.
      </p>
    </div>
    <div class="how-is-possible limit">
      <h2 class="how-is-possible__title">Como é possível?</h2>
      <ul class="how-is-possible__list">
        <li class="how-is-possible__item">
          É levado em consideração as necessidades e características específicas de cada lar.
        </li>
        <li class="how-is-possible__item">
          Identificação e mobilização: O primeiro passo é identificar uma família interessada em iniciar uma horta.
        </li>
        <li class="how-is-possible__item">Planejamento e design da horta: Com base na avaliação do espaço, é elaborado um
          plano e um design para a horta. São considerados aspectos como o tamanho da área, a seleção das plantas a serem
          cultivadas, o sistema de irrigação, a compostagem e a organização dos canteiros. O planejamento também inclui a
          definição de metas, cronograma de atividades e alocação de recursos.</li>
        <li class="how-is-possible__item">
          Engajamento do beneficiado e formação de voluntários: Para garantir o sucesso do projeto, é importante engajar o
          beneficiado e formar voluntários interessados ​​em participar das atividades da horta. Podem ser realizadas
          reuniões, oficinas e treinamentos para compartilhar conhecimentos sobre agricultura sustentável, manejo de
          hortas e cuidados com as plantas.
          Implantação e manutenção da horta: A horta é implantada seguindo o projeto previamente definido. As etapas
          incluem preparar o solo, plantar as mudas ou sementes, instalar o sistema de irrigação, construir os canteiros e
          monitorar o crescimento das plantas. A manutenção regular, como cuidar, adubar, controlar pragas e doenças, é
          fundamental para o bom desenvolvimento da horta.
        </li>
      </ul>
    </div>
    <div class="speeches limit">
      <h2 class="speeches__title">Palestras</h2>
      <p class="speeches__text">
        As palestras sobre agricultura sustentável e hortas são uma excelente maneira de conscientizar e educar as pessoas
        sobre a importância de práticas agrícolas que promovam a sustentabilidade ambiental e a produção de alimentos
        saudáveis. Essas palestras abrangem uma ampla gama de produtos relacionados à agricultura sustentável e ao cultivo
        de hortas.
      </p>
      <img src="../assets/img/speeches-image.png" alt="Speeches Image" class="speeches__image" />
    </div>
    <div class="types-of-planting-container">
      <h2 class="types-of-planting__title">Tipos de plantio</h2>
      <ul class="types-of-planting">
        <li class="type-of-planting pet-bottle">
          <span class="type-of-planting__card">
            <h3 class="type-of-planting__title">SUSPENSA</h3>
          </span>
        </li>
        <li class="type-of-planting floor">
          <span class="type-of-planting__card">
            <h3 class="type-of-planting__title">SOLO</h3>
          </span>
        </li>
        <li class="type-of-planting box">
          <span class="type-of-planting__card">
            <h3 class="type-of-planting__title">CAIXA</h3>
          </span>
        </li>
      </ul>
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
  name: "SeedOfLove",
};
</script>

<style scoped>
@import url("../assets/css/generalStyle.css");
@import url("../assets/css/seedOfLove/limitsSizeStyle.css");
@import url("../assets/css/seedOfLove/seedOfLoveStyle.css");
@import url("../assets/css/seedOfLove/seedOfLoveResponsiveStyle.css");
@import url("../assets/css/footer/footerStyle.css");
@import url("../assets/css/footer/footerResponsiveStyle.css");
</style>
