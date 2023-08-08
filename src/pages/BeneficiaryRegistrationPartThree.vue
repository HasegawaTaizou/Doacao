<template>
  <div class="content">
    <header>
      <h1 class="beneficiary-registration-part-three__title">CADASTRO BENEFICIADO</h1>
      <router-link class="return__link" to="/beneficiary-registration-part-two">
        <img src="../assets/img/return-icon.png" alt="Return Icon" class="return__icon" />
      </router-link>
    </header>
    <main>
      <img
        src="../assets/img/beneficiary-registration-image.png"
        alt="Volunteer Registration Image"
        class="volunteer-registration__image"
      />
      <form class="beneficiary-registration-part-three-form">
        <div class="form__amount-residents-container">
          <label for="amount-residents" class="amount-residents__label">Quantidade de moradores:</label>
          <!-- <input
            type="text"
            class="amount-residents__input"
            v-mask="'###'"
            v-model="inputAmountResidents"
          /> -->
          <input
            type="text"
            class="amount-residents__input"
            v-mask="'###'"
            v-model="inputAmountResidents"
            ref="inputAmountResidents"
            :class="{ error: v$.inputAmountResidents.$error }"
            @blur="v$.inputAmountResidents.$touch()"
          />
          <div v-if="v$.inputAmountResidents.$error">
            <p
              v-if="v$.inputAmountResidents.required"
              class="error-text"
            >Preencha a quantidade de moradores!</p>
          </div>
        </div>
        <div class="form__per-capita-income-container">
          <label for="per-capita-income" class="per-capita-income__label">Renda familiar:</label>
          <input
            type="text"
            class="per-capita-income__input"
            v-model="inputFamilyIncome"
            :class="{ error: v$.inputFamilyIncome.$error }"
            ref="inputFamilyIncome"
            @blur="v$.inputFamilyIncome.$touch()"
          />
          <div v-if="v$.inputFamilyIncome.$error">
            <p v-if="v$.inputFamilyIncome.required" class="error-text">Preencha a renda!</p>
          </div>
        </div>
        <div class="form__type-residence-container">
          <label for="type-residence" class="type-residence__label">Tipo de residência:</label>
          <select class="type-residence__select" v-model="selectTypeResidence">
            <option class="type-residence__default" value>Selecione o tipo de residência</option>
            <option class="type-residence__option" value="Casa">Casa</option>
            <option class="type-residence__option" value="Fazenda">Fazenda</option>
          </select>
          <!-- <select
            class="type-residence__select"
            v-model="selectTypeResidence"
            :class="{ error: v$.selectTypeResidence.$error }"
            ref="selectTypeResidence"
            @blur="v$.selectTypeResidence.$touch()"
          >
            <option class="type-residence__default" value>
              Selecione o tipo de residência
            </option>
            <option class="type-residence__option" value="Casa">Casa</option>
            <option class="type-residence__option" value="Fazenda">
              Fazenda
            </option>
          </select>-->
          <!-- <div v-if="v$.selectTypeResidence.$error">
            <p v-if="v$.selectTypeResidence.required" class="error-text">
              Selecione um tipo de residência
            </p>
          </div>-->
        </div>
        <div class="form__square-meters-residence-container">
          <label
            for="square-meters-residence"
            class="square-meters-residence__label"
          >Metros quadrados da residência:</label>
          <input
            type="text"
            class="square-meters-residence__input"
            v-model="inputSquareMetersResidence"
            :class="{ error: v$.inputSquareMetersResidence.$error }"
            ref="inputSquareMetersResidence"
            @blur="v$.inputSquareMetersResidence.$touch()"
          />
          <div v-if="v$.inputSquareMetersResidence.$error">
            <p
              v-if="v$.inputSquareMetersResidence.required"
              class="error-text"
            >Preencha os metros quadrados!</p>
          </div>
        </div>
        <div class="form__comments-container">
          <label for="comments" class="comments__label">Observações:</label>
          <textarea
            name="comments"
            id
            cols="30"
            rows="10"
            class="comments__textarea"
            v-model="textareaComments"
            ref="textareaComments"
          ></textarea>
        </div>
        <router-link to="/beneficiary-registration-part-two">
          <button type="button" class="beneficiary-registration__button-return">Voltar</button>
        </router-link>
        <button
          type="button"
          @click="submitFormBeneficiaryPartThree()"
          class="beneficiary-registration__button"
        >Continuar</button>
      </form>
      <NotificationBar
        v-if="$store.state.showNotification"
        :route="'/'"
        :message="'Cadastro realizado com sucesso! Verifique seu e-mail'"
      />
    </main>
    <footer>
      <p class="footer__text">Copyright © 2023 | Todos os direitos reservados Green World</p>
    </footer>
  </div>
</template>

<script>
import submitFormBeneficiaryPartThree from "../assets/js/methods/submit-form-beneficiary-part-three.js";
import uploadImage from "../assets/js/methods/input/upload-image.js";
import onlyLetters from "../assets/js/methods/input/only-letters.js";
import dataPartThree from "../assets/js/data/data-form-beneficiary-part-three.js";
import validationsBeneficiaryPartThree from "../assets/js/validations/validations-beneficiary-part-three.js";
import { useVuelidate } from "@vuelidate/core";
import { mapMutations } from "vuex";
import NotificationBar from "../assets/components/NotificationBar.vue";

export default {
  name: "BeneficiaryRegistrationPartThree",

  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    NotificationBar
  },
  data() {
    const formData = this.$store.state.formData;
    const data = dataPartThree(formData);

    return {
      validDate: true,
      ...data
    };
  },
  validations() {
    const validations = validationsBeneficiaryPartThree();
    return {
      ...validations
    };
  },
  methods: {
    ...mapMutations(["updateNotificationStatus"]),
    uploadImage,
    submitFormBeneficiaryPartThree,
    onlyLetters
  }
};
</script>

<style scoped>
@import url("../assets/css/beneficiaryRegistrationPartThree/generalStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartThree/limitsSizeStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartThree/beneficiaryRegistrationPartThreeStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartThree/beneficiaryRegistrationPartThreeResponsiveStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartThree/copyrightStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartThree/copyrightResponsiveStyle.css");
</style>
