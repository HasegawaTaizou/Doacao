<template>
  <section id="settings-dashboard">
    <div class="settings__header">
      <h1 class="settings__title">CONFIGURAÇÕES</h1>
      <div class="profile-container">
        <img
          src="../../assets/img/hospital-profile-image.png"
          alt="Profile Image"
          class="profile__image"
        />
        <span class="profile__name">Hospital Notredame Intermédica</span>
      </div>
    </div>
    <div class="settings__content">
      <div class="hospital-general-data">
        <img
          src="../../assets/img/hospital-profile-image.png"
          alt="Hospital Image"
          class="hospital-general-data__image"
        />
        <h2 class="hospital-general-data__title">
          {{ hospitalData.name }}
        </h2>
        <div class="hospital-general-data__cnpj-container">
          <label for="" class="cnpj__label">CNPJ:</label>
          <input type="text" class="cnpj__input" :value="hospitalData.cnpj" disabled />
        </div>
      </div>
      <div class="hospital-contact-data">
        <h2 class="hospital-contact-data__title">Contato:</h2>
        <div class="hospital-contact-data__email-container">
          <label for="" class="email__label">E-mail:</label>
          <input type="text" class="email__input" :value="hospitalData.email" disabled />
        </div>
        <div class="hospital-contact-data__phone-container">
          <label for="" class="phone__label">Telefone:</label>
          <input type="text" class="phone__input" :value="hospitalData.phone" disabled />
        </div>
        <div class="hospital-contact-data__website-container">
          <label for="" class="website__label">Site:</label>
          <input type="text" class="website__input" :value="hospitalData.website" disabled />
        </div>
      </div>
      <div class="hospital-address-data">
        <h2 class="hospital-address-data__title">Endereço:</h2>
        <div class="hospital-address-data__cep-container">
          <label for="" class="cep__label">CEP:</label>
          <input type="text" class="cep__input" :value="addressData.cep" disabled />
        </div>
        <div class="hospital-address-data__state-container">
          <label for="" class="state__label">Estado:</label>
          <input type="text" class="state__input" :value="addressData.uf" disabled />
        </div>
        <div class="hospital-address-data__city-container">
          <label for="" class="city__label">Cidade:</label>
          <input type="text" class="city__input" :value="addressData.city" disabled />
        </div>
        <div class="hospital-address-data__neighborhood-container">
          <label for="" class="neighborhood__label">Bairro:</label>
          <input type="text" class="neighborhood__input" :value="addressData.neighborhood" disabled />
        </div>
        <div class="hospital-address-data__complement-container">
          <label for="" class="complement__label">Complemento:</label>
          <input type="text" class="complement__input" :value="addressData.complement" disabled />
        </div>  
        <div class="hospital-address-data__number-container">
          <label for="" class="number__label">Numero:</label>
          <input type="text" class="number__input" :value="addressData.number" disabled />
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
            :value="hospitalData.donationSite"
            disabled
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
            :value="hospitalData.otherDonationSite"
            disabled
          ></textarea>
        </div>
      </div>
      <div class="hospital-actions">
        <router-link
          :to="'/dashboard/settings/redefine-password'"
          class="action__redefine-password-container"
        >
          <span class="redefine-password__text">Redefinir senha</span>
          <img
            src="../../assets/img/redefine-password-icon.png"
            alt="Redefine Password Icon"
            class="redefine-password__icon"
          />
        </router-link>
        <router-link
          :to="'/dashboard/settings/edit-hospital'"
          class="edit-profile-container"
        >
          <span class="edit-profile__text">Editar perfil</span>
          <img
            src="../../assets/img/edit-profile-icon.png"
            alt="Edit Profile Icon"
            class="edit-profile__icon"
          />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { BASE_URL } from '../../assets/js/config';
import axios from 'axios'

export default {
  name: "Settings",
  data() {
    return {
      hospitalData: [],
      addressData: []
    }
  },
  methods: {
    getHospitalData() {
      axios.get(`${BASE_URL}/hospital-data/1`).then(response => {
        this.hospitalData = response.data.hospital
        this.addressData = response.data.address
        console.log(this.addressData);
      })
    }
  },
  mounted() {
    this.getHospitalData()
  }
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/settings/settingsStyle.css");
</style>
