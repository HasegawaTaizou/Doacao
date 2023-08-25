<template>
  <section id="settings-dashboard">
    <div class="settings__header">
      <h1 class="settings__title">EDITAR PERFIL</h1>
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
          Hospital Notredame Intermédica
        </h2>
        <div class="hospital-general-data__cnpj-container">
          <label for="" class="cnpj__label">CNPJ:</label>
          <input type="text" class="cnpj__input" />
        </div>
      </div>
      <div class="hospital-contact-data">
        <h2 class="hospital-contact-data__title">Contato:</h2>
        <div class="hospital-contact-data__email-container">
          <label for="" class="email__label">E-mail:</label>
          <input type="text" class="email__input" />
        </div>
        <div class="hospital-contact-data__phone-container">
          <label for="" class="phone__label">Telefone:</label>
          <input type="text" class="phone__input" />
        </div>
        <div class="hospital-contact-data__website-container">
          <label for="" class="website__label">Site:</label>
          <input type="text" class="website__input" />
        </div>
      </div>
      <div class="hospital-address-data">
        <h2 class="hospital-address-data__title">Endereço:</h2>
        <div class="hospital-address-data__cep-container">
          <label for="" class="cep__label">CEP:</label>
          <input type="text" class="cep__input" />
        </div>
        <div class="hospital-address-data__state-container">
          <label for="" class="state__label">Estado:</label>
          <input type="text" class="state__input" />
        </div>
        <div class="hospital-address-data__city-container">
          <label for="" class="city__label">Cidade:</label>
          <input type="text" class="city__input" />
        </div>
        <div class="hospital-address-data__neighborhood-container">
          <label for="" class="neighborhood__label">Bairro:</label>
          <input type="text" class="neighborhood__input" />
        </div>
        <div class="hospital-address-data__complement-container">
          <label for="" class="complement__label">Complemento:</label>
          <input type="text" class="complement__input" />
        </div>
        <div class="hospital-address-data__number-container">
          <label for="" class="number__label">Numero:</label>
          <input type="text" class="number__input" />
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
          ></textarea>
        </div>
      </div>
      <div class="hospital-actions">
        <router-link :to="'/dashboard/settings/'">
          <button class="action__cancel">Cancelar</button>
        </router-link>
        <button @click="openPopUp('change')" class="action__change-data">Alterar dados</button>
      </div>
    </div>
  </section>
  <PopUp
    v-if="selectedComponent === 'change'"
    :title="'Alterar dados?'"
    :message="'Os dados serão alterados e não terá como desfazer esta ação.'"
    :acceptFunction="deleteVolunteer"
  >
  </PopUp>
</template>

<script>
import PopUp from "../../assets/components/PopUp.vue";
import openPopUp from "../../assets/js/methods/open-pop-up.js";

export default {
  name: "EditHospital",
  components: { PopUp },
  data() {
    return { selectedComponent: "" };
  },
  methods: {
    openPopUp,
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/editHospital/editHospitalStyle.css");
</style>
