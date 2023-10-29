<template>
  <transition name="fade">
    <section id="campaigns-dashboard">
      <div class="campaigns__header">
        <h1 class="campaigns__title">Campanhas</h1>
        <div class="profile-container">
          <img
            :src="$store.state.hospitalPhoto"
            alt="Profile Image"
            class="profile__image"
          />
          <span class="profile__name">{{ $store.state.hospitalName }}</span>
        </div>
      </div>
      <div class="campaigns__content">
        <img
          src="../../assets/img/campaigns-image.png"
          alt="Campaigns Image"
          class="campaigns__image"
        />
        <div class="campaigns__description">
          <div class="description__texts">
            <p class="description__text">Incentive pessoas a doar sangue.</p>
            <p class="description__text">Divulgue aqui as suas campanhas!</p>
          </div>
          <div class="actions">
            <router-link to="add-campaign" class="action__add">Adicionar Campanhas</router-link>
            <router-link to="see-campaign" class="action__see">Ver Campanhas</router-link>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: "Campaigns",
  data() {
    return {
      showTransition: false,
    };
  },
  mounted() {
    this.showTransition = true;
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/campaigns/campaignsStyle.css");
</style>
