<template>
  <section id="scheduling-dashboard">
    <div class="scheduling__header">
      <h1 class="scheduling__title">AGENDAMENTO</h1>
      <div class="profile-container">
        <img
          src="../../assets/img/hospital-profile-image.png"
          alt="Profile Image"
          class="profile__image"
        />
        <span class="profile__name">Hospital Notredame Intermédica</span>
      </div>
    </div>
    <div class="scheduling__content">
      <div class="donator-container">
        <img
          src="../../assets/img/donator-image.png"
          alt="Donator Image"
          class="donator__image"
        />
        <h2 class="donator__name">João Pedro Bueno</h2>
        <div class="donator__email">
          <span class="email__title">E-mail:</span>
          <span class="email__text">joaopedrobueno@gmail.com</span>
        </div>
        <div class="donator__phone">
          <span class="phone__title">Telefone:</span>
          <span class="phone__text">(11) 32358-9255</span>
        </div>
        <div class="donator__blood-type">
          <span class="blood-type__title">Tipo sanguíneo:</span>
          <span class="blood-type__text">O-</span>
        </div>
        <div class="donator__age">
          <span class="age__title">Idade:</span>
          <span class="age__text">30 anos</span>
        </div>
        <div class="donator__gender">
          <span class="gender__title">Sexo:</span>
          <span class="gender__text">Masculino</span>
        </div>
        <div class="donator__weight">
          <span class="weight__title">Peso:</span>
          <span class="weight__text">80 Kg</span>
        </div>
      </div>
      <div class="schedules">
        <h2 class="schedules__title">Agendamentos</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Scheduling",
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/scheduling/schedulingStyle.css");
</style>
