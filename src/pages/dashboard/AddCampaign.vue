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
        <div class="campaign__introduction">
          <h2 class="campaign__title">Publique aqui suas campanhas</h2>
          <img
            src="../../assets/img/add-campaign-image.png"
            alt="Campaign Image"
            class="campaign__image"
          />
        </div>
        <div class="campaign__add">
          <div class="add__date-container">
            <label for="datetime-local" class="date__label"
              >Data da campanha:</label
            >
            <input
              type="datetime-local"
              name=""
              id=""
              class="date__datetime-local"
              v-model="campaignDatetime"
            />
          </div>
          <div class="add__description-container">
            <label for="description" class="description__label"
              >Descrição:</label
            >
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              class="description__textarea"
              v-model="inputDescription"
            ></textarea>
          </div>
          <div v-if="!isSelectedImage" class="form__photo-container">
            <input
              type="file"
              class="photo__label"
              id="photo"
              @change="uploadImage"
            />
            <label for="photo">
              <img
                src="../../assets/img/photo-icon.png"
                alt="Photo Icon"
                class="photo__icon"
              />
            </label>
          </div>
          <div v-else class="form__photo-selected-container">
            <img :src="downloadURL" alt="Hospital Photo" class="photo__photo" />
          </div>
          <button class="add__button">Publicar</button>
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
@import url("../../assets/css/dashboard/addCampaign/addCampaignStyle.css");
</style>
