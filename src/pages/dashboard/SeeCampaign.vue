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
        <div class="campaigns__campaigns-container">
          <div class="campaign">
            <p class="campaign__description">
              Contrary to popular belief, Lorem Ipsum is not simply random
              text....
            </p>
            <img
              src="../../assets/img/see-campaign-image.png"
              alt="See Iamge"
              class="campaign__image"
            />
            <span class="campaign__date">20/10/2023 às 16:40</span>
          </div>
          <div class="campaign">
            <p class="campaign__description">
              Contrary to popular belief, Lorem Ipsum is not simply random
              text....
            </p>
            <img
              src="../../assets/img/see-campaign-image.png"
              alt="See Iamge"
              class="campaign__image"
            />
            <span class="campaign__date">20/10/2023 às 16:40</span>
          </div>
        </div>
        <div class="campaigns__detail">
          <img
            src="../../assets/img/see-campaign-detail-image.png"
            alt="detail image"
            class="detail__image"
          />
          <p class="detail__text">
            Selecione a campanha que deseja visualizar.
          </p>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: "AddCampaign",
  data() {
    return {
      showTransition: false,

      campaignDatetime: "",
    };
  },
  mounted() {
    this.showTransition = true;
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/seeCampaign/seeCampaignStyle.css");
</style>
