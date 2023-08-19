<template>
  <section id="statistics-dashboard">
    <div class="statistics__header">
      <h1 class="statistics__title">Estatísticas</h1>
      <div class="profile-container">
        <img
          src="../../assets/img/hospital-profile-image.png"
          alt="Profile Image"
          class="profile__image"
        />
        <span class="profile__name">Hospital Notredame Intermédica</span>
      </div>
    </div>
    <div class="statistics__content">
    </div>
  </section>
</template>

<script>
export default {
  name: "Statistics",
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/statistics/statisticsStyle.css");
</style>
