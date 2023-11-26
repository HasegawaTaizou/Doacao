<template>
  <transition name="fade" appear v-if="showTransition">
    <section id="help-dashboard">
      <div class="help__header">
        <h1 class="help__title">AJUDA</h1>
        <div class="profile-container">
          <img
            :src="hospitalPhoto"
            alt="Profile Image"
            class="profile__image"
          />
          <span class="profile__name">{{ hospitalName }}</span>
        </div>
      </div>
      <div class="help__content">
        <div class="help__introduction">
          <img
            src="../../assets/img/help-image.png"
            alt="Help Image"
            class="help__image"
          />
          <p class="help__text">
            A doação de sangue é um ato de solidariedade e generosidade que pode
            salvar vidas, e estamos aqui para apoiá-lo em todo o processo.
          </p>
        </div>
        <div class="help__contact">
          <h2 class="contact__title">Entre em Contato</h2>
          <p class="contact__text">
            Se você tiver alguma dúvida, preocupação ou precisar de assistência,
            nossa equipe de atendimento ao doador está disponível para ajudá-lo.
          </p>
          <div class="help__contacts">
            <div class="contact">
              <i class="fa-solid fa-phone"></i>
              <span class="contact__text">(11) 92765-2364</span>
            </div>
            <div class="contact">
              <i class="fa-solid fa-envelope"></i>
              <span class="contact__text">doevida@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: "Help",
  data() {
    return {
      //ProfileData
      hospitalName: "",
      hospitalPhoto: "",
      
      showTransition: false,
    };
  },
  mounted() {
    this.showTransition = true;

    this.hospitalName = localStorage.hospitalName;
    this.hospitalPhoto = localStorage.hospitalPhoto;
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/help/helpStyle.css");
@import url("../../assets/css/transitionsStyle.css");
</style>
