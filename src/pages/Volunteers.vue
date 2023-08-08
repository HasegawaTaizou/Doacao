<template>
  <header>
    <div class="title-page">
         <h1 class="volunteers__title">Voluntários</h1>
    <router-link class="return__link" to="/"><img src="../assets/img/return-icon.png" alt="Return Icon"
        class="return__icon" /></router-link>
    </div>
 
  </header>
  <main>
    <div class="why-contribute">
      <h2 class="why-contribute__title">Por que contribuir?</h2>
      <p class="why-contribute__text">
        O voluntariado em projetos comunitários promove a coesão social e fortalece os laços entre os membros da
        comunidade. Os voluntários têm a chance de conhecer e trabalhar com pessoas diversas, compartilhando
        experiências e criando vínculos comunitários mais fortes.
        O voluntariado é uma experiência enriquecedora que permite o crescimento pessoal. Os voluntários podem aprender
        mais sobre si mesmos, suas habilidades e interesses, enquanto contribuem para uma causa maior. Essa experiência
        pode proporcionar um senso de propósito e realização.
      </p>
      <img src="../assets/img/why-contribute-image.png" alt="How Contribute Image" class="why-contribute__image" />
    </div>
    <div class="how-contribute">
      <img src="../assets/img/how-contribute-image.png" alt="How Contribute Image" class="how-contribute__image" />
      <h2 class="how-contribute__title">Como contribuir?</h2>
      <p class="how-contribute__text">
        Os voluntários podem participar do plantio das hortas. Eles podem ajudar a preparar o solo e realizar outras
        tarefas relacionadas ao cuidado das plantas.
        Os voluntários podem contribuir para aumentar a conscientização sobre a importância da segurança alimentar, da
        agricultura sustentável e do consumo de alimentos saudáveis.
        Para ser um voluntário basta se inscrever no nosso site.
      </p>
      <router-link class="how-contribute__link" to="/volunteer-registration-part-one">
        <button class="how-contribute__button">Estou interessado</button>
      </router-link>
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
  name: "Volunteers",
};
</script>

<style scoped>
@import url("../assets/css/volunteers/generalStyle.css");
@import url("../assets/css/volunteers/volunteersStyle.css");
@import url("../assets/css/volunteers/volunteersResponsiveStyle.css");
@import url("../assets/css/footer/footerStyle.css");
@import url("../assets/css/footer/footerResponsiveStyle.css");
</style>
