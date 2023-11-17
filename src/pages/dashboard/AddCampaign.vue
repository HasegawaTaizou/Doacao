<template>
  <transition name="fade">
    <section id="campaigns-dashboard">
      <div class="campaigns__header">
        <h1 class="campaigns__title">Campanhas</h1>
        <div class="profile-container">
          <img
            :src="hospitalPhoto"
            alt="Profile Image"
            class="profile__image"
          />
          <span class="profile__name">{{ hospitalName }}</span>
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
          <img
            src="../../assets/img/see-campaign-ornament1.png"
            alt="Ornament 1"
            class="ornament1"
          />
          <img
            src="../../assets/img/see-campaign-ornament2.png"
            alt="Ornament 2"
            class="ornament2"
          />
          <img
            src="../../assets/img/see-campaign-ornament3.png"
            alt="Ornament 3"
            class="ornament3"
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
          <div v-if="loading == false && isSelectedImage == false" class="form__photo-container">
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
          <div v-else-if="loading == false && isSelectedImage == true" class="form__photo-selected-container">
            <img :src="downloadURL" alt="Hospital Photo" class="photo__photo" />
            <div class="form__photo-edit-container">
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
          <div v-else-if="loading == true && isSelectedImage == false" class="loading-spinner"></div>
          <button @click="insertCampaign" class="add__button">Publicar</button>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import { BASE_URL } from "../../assets/js/config";
import axios from "axios";
import uploadImage from "../../assets/js/methods/input/upload-image";
import { format } from "date-fns";

export default {
  name: "AddCampaign",
  data() {
    return {
      //ProfileData
      hospitalName: "",
      hospitalPhoto: "",

      showTransition: false,

      //Image
      isSelectedImage: false,
      downloadURL: "",
      loading: false, // Add loading state
      
      campaignDatetime: "",
      campaignDatetimeFormatted: "",
      inputDescription: "",

    };
  },
  methods: {
    uploadImage,
    insertCampaign() {
      this.formatDateTime();

      const dateParts = this.campaignDatetimeFormatted.split(" ");
      const date = dateParts[0];
      const time = dateParts[1];

      console.log();
      const campaignData = {
        date: date,
        hour: time,
        description: this.inputDescription,
        image: this.downloadURL,
        hospitalId: localStorage.getItem("hospitalId"),
      };
      console.log(campaignData);

      axios.post(`${BASE_URL}/campaign`, campaignData).then(() => {
        this.$router.push("/dashboard/see-campaign");
      });
    },
    formatDateTime() {
      this.campaignDatetimeFormatted = format(
        new Date(this.campaignDatetime),
        "dd/MM/yyyy HH:mm"
      );
    },
  },
  mounted() {
    this.showTransition = true;

    this.hospitalName = localStorage.hospitalName;
    this.hospitalPhoto = localStorage.hospitalPhoto;
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/addCampaign/addCampaignStyle.css");
@import url("../../assets/css/spinner/spinnerStyle.css");
</style>
