<template>
  <div id="body">
    <header>
      <nav class="navigation-container">
        <!-- <img class="menu" onclick="openNavHalf()" id="icon-half-menu" aria-hidden="true" src="../assets/img/menu.png "
          alt="" /> -->
        <div class="mobile-menu">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <ul class="navigations">
          <li class="navigation">
            <a href="#who-we-are">Quem somos?</a>
          </li>
          <li class="navigation">
            <a href="#our-cause">Nossa causa</a>
          </li>
          <li class="navigation">
            <a href="#projects">Projetos</a>
          </li>
          <li class="navigation">
            <a href="#family">Famílias</a>
          </li>
          <li class="navigation">
            <a href="#our-partners">Parcerias</a>
          </li>
          <li class="navigation">
            <a href="#founders">Fundadores</a>
          </li>
        </ul>
      </nav>
      <div class="content-buttons">
        <!-- <select name="cadastro" id="">
          <option value="">Cadastre-se</option>
          <option value="">Voluntário</option>
          <option value="">Beneficiado</option>
        </select> -->
        <!-- <router-link class="sign-up__link" to="/volunteer-registration-part-one">
          <button class="sign-up__button">Cadastre-se</button>
        </router-link> -->
        <div class="register-content">
          <span @click="showOptions()" class="register-text">Cadastre-se</span>
          <router-link
            class="volunteer-button"
            to="/hospital-registration-part-one"
          >
            <button class="register__button">Hospital</button>
          </router-link>
          <router-link
            class="beneficiarie-button"
            to="/hospital-registration-part-one"
          >
            <button class="register__button">AAAA</button>
          </router-link>
        </div>
      </div>
    </header>
    <main></main>
  </div>
</template>

<script>
import showSlides from "../assets/js/slider.js";
import MobileNavBar from "../assets/js/menu.js";

export default {
  name: "Home",
  mounted() {
    this.runShowSlides();
    document.addEventListener("DOMContentLoaded", () => {
      const mobileNavBar = new MobileNavBar(
        ".mobile-menu",
        ".navigations",
        ".navigation"
      );
      console.log(mobileNavBar);
      mobileNavBar.init();
    });
  },
  methods: {
    runShowSlides() {
      showSlides();
    },
    showOptions() {
      const buttonVolunteer = document.querySelector(".volunteer-button");
      const buttonBeneficiarie = document.querySelector(".beneficiarie-button");
      const container = document.querySelector(".register-content");
      buttonBeneficiarie.style.display = "block";
      buttonVolunteer.style.display = "block";
      container.classList.add("margin-top");
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/index/fadeStyle.css");
@import url("../assets/css/index/indexStyle.css");
@import url("../assets/css/index/homeStyle.css");
@import url("../assets/css/index/companyManagementStyle.css");
@import url("../assets/css/index/whoWheAreStyle.css");
@import url("../assets/css/index/ourCauseStyle.css");
@import url("../assets/css/index/familyStyle.css");
@import url("../assets/css/index/projectStyle.css");
@import url("../assets/css/index/partnersStyle.css");
@import url("../assets/css/index/foundersStyle.css");
@import url("../assets/css/index/footerStyle.css");
@import url("../assets/css/index/whoWeAreResponsiveStyle.css");
@import url("../assets/css/index/projectsResponsiveStyle.css");
@import url("../assets/css/index/partnersResponsiveStyle.css");
@import url("../assets/css/index/ourCauseResponsiveStyle.css");
@import url("../assets/css/index/homeResponsiveStyle.css");
@import url("../assets/css/index/footerResponsiveStyle.css");
@import url("../assets/css/index/companyManagementResponsiveStyle.css");
</style>