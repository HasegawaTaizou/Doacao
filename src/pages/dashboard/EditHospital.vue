<template>
  <transition name="fade">
    <section id="settings-dashboard">
      <div class="settings__header">
        <h1 class="settings__title">EDITAR PERFIL</h1>
        <div class="profile-container">
          <img
            :src="hospitalPhoto"
            alt="Profile Image"
            class="profile__image"
          />

          <span class="profile__name">{{ hospitalName }}</span>
        </div>
      </div>
      <div class="settings__content">
        <div class="hospital-general-data">
          <div class="hospital-general-data__image-container">
            <div class="form__photo-selected-container">
              <img
                v-if="isSelectedImage"
                :src="downloadURL"
                alt="Hospital Photo"
                class="photo__photo"
              />
              <div v-else class="loading-spinner"></div>
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
          <div class="hospital-general-data__title-container">
            <label for="" class="title__label">Nome:</label>
            <input
              type="text"
              class="hospital-general-data__title"
              v-model="hospitalData.name"
            />
          </div>

          <div class="hospital-general-data__cnpj-container">
            <label for="" class="cnpj__label">CNPJ:</label>
            <input
              type="text"
              class="cnpj__input"
              v-model="hospitalData.cnpj"
              v-mask="'##.###.###/000#-##'"
            />
          </div>
        </div>
        <div class="hospital-contact-data">
          <h2 class="hospital-contact-data__title">Contato:</h2>
          <div class="hospital-contact-data-container">
            <div class="hospital-contact-data__email-container">
              <label for="" class="email__label">E-mail:</label>
              <input
                type="text"
                class="email__input"
                v-model="hospitalData.email"
              />
            </div>
            <div class="hospital-contact-data__phone-container">
              <label for="" class="phone__label">Telefone:</label>
              <input
                type="text"
                class="phone__input"
                v-model="hospitalData.phone"
                v-mask="'(##) #####-####'"
              />
            </div>
            <div class="hospital-contact-data__website-container">
              <label for="" class="website__label">Site:</label>
              <input
                type="text"
                class="website__input"
                v-model="hospitalData.website"
              />
            </div>
          </div>
        </div>
        <div class="hospital-address-data">
          <h2 class="hospital-address-data__title">Endereço:</h2>
          <div class="hospital-address-data-container">
            <div class="hospital-address-data__cep-container">
              <label for="" class="cep__label">CEP:</label>
              <input
                type="text"
                class="cep__input"
                v-model="addressData.cep"
                v-mask="'#####-###'"
                @blur="
                  () => {
                    fillAdrress();
                  }
                "
              />
            </div>
            <div class="hospital-address-data__state-container">
              <label for="" class="state__label">Estado:</label>
              <input
                type="text"
                class="state__input"
                v-model="addressData.uf"
                disabled
              />
            </div>
            <div class="hospital-address-data__city-container">
              <label for="" class="city__label">Cidade:</label>
              <input
                type="text"
                class="city__input"
                v-model="addressData.city"
                disabled
              />
            </div>
            <div class="hospital-address-data__neighborhood-container">
              <label for="" class="neighborhood__label">Bairro:</label>
              <input
                type="text"
                class="neighborhood__input"
                v-model="addressData.neighborhood"
                disabled
              />
            </div>
            <div class="hospital-address-data__complement-container">
              <label for="" class="complement__label">Complemento:</label>
              <input
                type="text"
                class="complement__input"
                v-model="addressData.complement"
                disabled
              />
            </div>
            <div class="hospital-address-data__number-container">
              <label for="" class="number__label">Numero:</label>
              <input
                type="text"
                class="number__input"
                v-model="addressData.number"
                v-mask="'###'"
              />
            </div>
          </div>
        </div>
        <div class="hospital-donation-site-data">
          <h2 class="hospital-donation-site-data__title">Local de doação:</h2>
          <div class="hospital-donation-site-data__site-container">
            <label for="" class="site__label">Local 1:</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="site__textarea"
              v-model="hospitalData.donationSite"
            ></textarea>
          </div>
          <div class="hospital-donation-site-data__other-site-container">
            <label for="" class="other-site__label">Local 2:</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="other-site__textarea"
              v-model="hospitalData.otherDonationSite"
            ></textarea>
          </div>
        </div>
        <div class="hospital-actions">
          <router-link :to="'/dashboard/settings/'">
            <button class="action__cancel">Cancelar</button>
          </router-link>
          <button @click="openPopUp('change')" class="action__change-data">
            Alterar dados
          </button>
        </div>
      </div>
    </section>
  </transition>
  <PopUp
    v-if="selectedComponent === 'change'"
    :title="'Alterar dados?'"
    :message="'Os dados serão alterados e não terá como desfazer esta ação.'"
    :acceptFunction="editHospital"
    :image="'/src/assets/img/edit-profile-image.png'"
  >
  </PopUp>
</template>

<script>
import PopUp from "../../assets/components/PopUp.vue";
import openPopUp from "../../assets/js/methods/open-pop-up.js";

import { BASE_URL } from "../../assets/js/config";
import axios from "axios";

import uploadImage from "../../assets/js/methods/input/upload-image";

export default {
  name: "EditHospital",
  components: { PopUp },
  data() {
    return {
      //ProfileData
      hospitalName: "",
      hospitalPhoto: "",

      //Transition
      showTransition: false,

      selectedComponent: "",
      hospitalData: [],
      addressData: [],

      //photo
      downloadURL: "",
      isSelectedImage: true,
      loading: false, // Add loading state
    };
  },
  methods: {
    openPopUp,
    uploadImage,
    fillAdrress() {
      this.addressData.cep = this.addressData.cep.replace("-", "");

      axios
        .get(`https://viacep.com.br/ws/${this.addressData.cep}/json/`)
        .then((response) => {
          this.addressData.road = response.data.logradouro;
          this.addressData.neighborhood = response.data.bairro;
          this.addressData.complement = response.data.complemento;
          this.addressData.uf = response.data.uf;
          this.addressData.city = response.data.localidade;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getHospitalData() {
      axios
        .get(`${BASE_URL}/hospital-data/${localStorage.getItem("hospitalId")}`)
        .then((response) => {
          console.log(response.data.hospital);
          this.hospitalData = response.data.hospital;
          this.addressData = response.data.address;

          this.downloadURL = response.data.hospital.photo;
        });
    },
    editHospital() {
      const updateHospitalData = {
        id: Number(localStorage.getItem("hospitalId")),
        hospital: {
          name: this.hospitalData.name,
          cnpj: this.hospitalData.cnpj,
          email: this.hospitalData.email,
          phone: this.hospitalData.phone,
          website: this.hospitalData.website,
          donationSite: this.hospitalData.donationSite,
          otherDonationSite: this.hospitalData.otherDonationSite,
          photo: this.downloadURL,
        },
        address: {
          cep: this.addressData.cep,
          uf: this.addressData.uf,
          city: this.addressData.city,
          neighborhood: this.addressData.neighborhood,
          street: this.addressData.street,
          number: this.addressData.number,
          complement: this.addressData.complement,
        },
      };
      axios.put(`${BASE_URL}/hospital-update`, updateHospitalData).then(() => {
        localStorage.setItem("hospitalPhoto", this.downloadURL);
        localStorage.setItem("hospitalName", this.hospitalData.name);
        location.reload();
      });
    },
  },
  mounted() {
    this.showTransition = true;
    this.getHospitalData();

    this.hospitalName = localStorage.hospitalName;
    this.hospitalPhoto = localStorage.hospitalPhoto;
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/editHospital/editHospitalStyle.css");
@import url("../../assets/css/spinner/spinnerStyle.css");
</style>
