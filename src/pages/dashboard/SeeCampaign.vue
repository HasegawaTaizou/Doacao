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
          <div
            v-for="(campain, index) in campaigns"
            :key="index"
            class="campaign"
            @click="
              selectCampaign(
                campain.id,
                campain.description,
                campain.date,
                campain.hour,
                campain.image
              )
            "
          >
            <p class="campaign__description">
              {{ campain.description }}
            </p>
            <img :src="campain.image" alt="See Iamge" class="campaign__image" />
            <span class="campaign__date"
              >{{ campain.date }} às {{ campain.hour }}</span
            >
          </div>
        </div>
        <div v-if="!showCampaign" class="campaigns__detail">
          <img
            src="../../assets/img/see-campaign-detail-image.png"
            alt="detail image"
            class="detail__image"
          />
          <p class="detail__text">Selecione a campanha que deseja visualizar</p>
        </div>
        <div v-else class="campaigns__wrapper">
          <div class="campaigns__show">
            <img :src="selectedImage" alt="show image" class="show__image" />
            <div class="show__action-container">
              <span class="action__date"
                >{{ selectedDate }} às {{ selectedHour }}</span
              >
              <div class="actions">
                <i
                  @click="openPopUp('edit')"
                  class="fas fa-edit action__edit"
                ></i>
                <i
                  @click="openPopUp('delete')"
                  class="fas fa-trash-alt action__delete"
                ></i>
              </div>
            </div>
            <div class="show__description">
              {{ selectedDescription }}
            </div>
          </div>
        </div>
        <PopUp
          v-if="selectedComponent === 'delete'"
          :title="'Tem certeza que deseja excluir essa campanha?'"
          :image="'/src/assets/img/campaigns-delete-image.png'"
          :message="'A campanha será cancelada e não terá como desfazer esta ação..'"
          :acceptFunction="deleteCampaign"
          ></PopUp>
        <PopUp
          v-if="selectedComponent === 'edit'"
          :title="'Tem algo de errado? Arrume sua campanha e entregue o melhor para seus doadores.'"
          :image="'/src/assets/img/campaigns-edit-image.png'"
          :acceptFunction="updateCampaign"
          >
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
            <div class="form__photo-selected-container">
              <img
                :src="selectedImage"
                alt="Campaign Photo"
                class="photo__photo"
              />
              <div class="form__photo-container">
                <input
                  type="file"
                  class="photo__label"
                  id="photo"
                  @change="uploadImage"
                />
                <label for="photo">
                  <i class="fa-solid fa-pen-to-square edit-photo"></i>
                </label>
              </div>
            </div>
          </div>
        </PopUp>
      </div>
    </section>
  </transition>
</template>

<script>
import PopUp from "../../assets/components/PopUp.vue";
import openPopUp from "../../assets/js/methods/open-pop-up";

import { BASE_URL } from "../../assets/js/config";
import axios from "axios";
import uploadImage from "../../assets/js/methods/input/upload-image";
import { format } from "date-fns";

export default {
  name: "AddCampaign",
  components: { PopUp },
  data() {
    return {
      showTransition: false,

      selectedComponent: "",

      campaigns: [],

      //detail campaing
      showCampaign: false,
      selectedId: 0,
      selectedDescription: "AAAAAAAAAAA",
      selectedDate: "AAAAAA",
      selectedHour: "AAAAAA",
      selectedImage: "/src/assets/img/see-campaign-image.png",
    };
  },
  methods: {
    openPopUp,
    selectCampaign(id, description, date, hour, image) {
      this.showCampaign = true;
      this.selectedId = id;
      this.selectedDescription = description;
      this.selectedDate = date;
      this.selectedHour = hour;
      this.selectedImage = image;
      console.log(this.selectedId);
    },
    getCampaigns() {
      axios
        .get(`${BASE_URL}/hospital/${this.$store.state.hospitalId}/campaigns`)
        .then((response) => {
          this.campaigns = response.data.campaigns;
        });
    },
    deleteCampaign() {
      console.log(this.selectedId);
      axios
        .delete(`${BASE_URL}/delete-campaign/${this.selectedId}`)
        .then(() => {
          location.reload();
        });
    },
  },
  mounted() {
    this.showTransition = true;
    this.getCampaigns();
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/seeCampaign/seeCampaignStyle.css");
</style>
