<template>
  <div class="content">
    <header>
      <h1 class="beneficiary-registration-part-one__title">
        CADASTRO BENEFICIADO
      </h1>
      <router-link class="return__link" to="/">
        <img
          src="../assets/img/return-icon.png"
          alt="Return Icon"
          class="return__icon"
        />
      </router-link>
    </header>
    <main>
      <img
        src="../assets/img/beneficiary-registration-image.png"
        alt="beneficiary Registration Image"
        class="beneficiary-registration__image"
      />
      <form class="beneficiary-registration-part-one-form">
        <div v-if="!isSelectedImage" class="form__photo-container">
          <input
            type="file"
            class="photo__label"
            id="photo"
            @change="uploadImage"
          />
          <label for="photo">
            <img
              src="../assets/img/photo-icon.png"
              alt="Photo Icon"
              class="photo__icon"
            />
          </label>
        </div>
        <div v-else class="form__photo-selected-container">
          <img :src="downloadURL" alt="User Photo" class="photo__photo" />
        </div>
        <div class="form__full-name-container">
          <label for="full-name" class="full-name__label">Nome completo:</label>
          <input
            type="text"
            class="full-name__input"
            id="fullName"
            maxlength="150"
            v-model="v$.inputFullName.$model"
            :class="{ error: v$.inputFullName.$error }"
            ref="inputFullName"
            @input="this.inputFullName = onlyLetters(this.inputFullName)"
          />
          <div v-if="v$.inputFullName.$error">
            <p v-if="v$.inputFullName.required" class="error-text">
              Preencha o nome completo!
            </p>
          </div>
        </div>
        <div class="form__date-birth-container">
          <label for="date-birth" class="date-birth__label"
            >Data de nascimento:</label
          >
          <input
            type="text"
            class="date-birth__input"
            v-mask="'##/##/####'"
            v-model="inputDateBirth"
            :class="{ error: v$.inputDateBirth.$error }"
            ref="inputDateBirth"
            @blur="v$.inputDateBirth.$touch()"
          />
          <div v-if="v$.inputDateBirth.$error">
            <p
              v-if="
                v$.inputDateBirth.required &&
                v$.inputDateBirth.minLength &&
                v$.inputDateBirth.validDate
              "
              class="error-text"
            >
              Preencha uma data de nascimento válida!
            </p>
          </div>
        </div>
        <div class="form__rg-container">
          <label for="rg" class="rg__label">RG:</label>
          <input
            type="text"
            class="rg__input"
            id="rg"
            v-mask="'##.###.###-#'"
            v-model="inputRg"
            :class="{ error: v$.inputRg.$error }"
            ref="inputRg"
            @blur="v$.inputRg.$touch()"
          />
          <div v-if="v$.inputRg.$error">
            <p
              v-if="v$.inputRg.required && v$.inputRg.minLength"
              class="error-text"
            >
              Preencha o RG!
            </p>
          </div>
        </div>
        <div class="form__cpf-container">
          <label for="cpf" class="cpf__label">CPF:</label>
          <input
            type="text"
            class="cpf__input"
            v-mask="'###.###.###-##'"
            v-model="inputCpf"
            :class="{ error: v$.inputCpf.$error }"
            ref="inputCpf"
            @blur="v$.inputCpf.$touch()"
          />
          <div v-if="v$.inputCpf.$error">
            <p
              v-if="v$.inputCpf.required && v$.inputCpf.minLength"
              class="error-text"
            >
              Preencha o CPF!
            </p>
          </div>
        </div>
        <div class="form__phone-container">
          <label for="phone" class="phone__label">Telefone:</label>
          <input
            type="text"
            class="phone__input"
            v-mask="'(##) #####-####'"
            v-model="inputPhone"
            :class="{ error: v$.inputPhone.$error }"
            ref="inputPhone"
            @blur="v$.inputPhone.$touch()"
          />
          <div v-if="v$.inputPhone.$error">
            <p
              v-if="v$.inputPhone.required && v$.inputPhone.minLength"
              class="error-text"
            >
              Preencha o telefone!
            </p>
          </div>
        </div>

        <div class="form__email-container">
          <label for="email" class="email__label">E-mail:</label>
          <input
            type="email"
            class="email__input"
            maxlength="256"
            v-model.trim="v$.inputEmail.$model"
            :class="{ error: v$.inputEmail.$error }"
            @blur="v$.inputEmail.$touch()"
            ref="inputEmail"
          />
          <div v-if="v$.inputEmail.$error">
            <p
              v-if="v$.inputEmail.required && v$.inputEmail.email"
              class="error-text"
            >
              Preencha o e-mail!
            </p>
          </div>
        </div>
        <button
          type="button"
          @click="submitFormBeneficiaryPartOne()"
          class="beneficiary-registration__button"
        >
          Continuar
        </button>
      </form>
    </main>
    <footer>
      <p class="footer__text">
        Copyright © 2023 | Todos os direitos reservados Green World
      </p>
    </footer>
  </div>
</template>

<script>
import submitFormBeneficiaryPartOne from "../assets/js/methods/submit-form-beneficiary-part-one.js";
import uploadImage from "../assets/js/methods/input/upload-image.js";
import onlyLetters from "../assets/js/methods/input/only-letters.js";
import dataPartOne from "../assets/js/data/data-form-part-one.js";
import validationsBeneficiaryPartOne from "../assets/js/validations/validations-beneficiary-part-one.js";
import { useVuelidate } from "@vuelidate/core";
import { mapMutations } from "vuex";

export default {
  name: "BeneficiaryRegistrationPartOne",

  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    const formData = this.$store.state.formData;
    const data = dataPartOne(formData);

    return {
      validDate: true,
      ...data,
    };
  },
  validations() {
    const validations = validationsBeneficiaryPartOne();
    return {
      ...validations,
    };
  },
  methods: {
    ...mapMutations(["updateNotificationStatus"]),
    uploadImage,
    submitFormBeneficiaryPartOne,
    onlyLetters,
  },
};
</script>

<style scoped>
@import url("../assets/css/beneficiaryRegistrationPartOne/generalStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartOne/limitsSizeStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartOne/beneficiaryRegistrationPartOneStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartOne/beneficiaryRegistrationPartOneResponsiveStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartOne/copyrightStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartOne/copyrightResponsiveStyle.css");
</style>