<template>
  <main>

    <div class="volunteer-content">
      <img class="volunteer__image" src="../../assets/img/avatar-woman.png" alt="Volunteer image">

      <div class="volunteer__tag-name-data">
        <span class="volunteer__tag">Beneficiado</span>
        <div class="volunteer__title-icon">
          <h1 class="volunteer__name">Carmen Aparecida</h1>
          <i @click="update('.personal-data__area')" class="volunteer__icon far fa-edit"></i>
        </div>
        <ul class="volunteer__personal-data">
          <li class="personal-data">
            <span class="uppercase personal-data__type">cpf:</span>
            <input value="549.033.548-32" class="personal-data__area personal-data__value" disabled>
          </li>
          <li class="personal-data">
            <span class="uppercase personal-data__type">rg:</span>
            <input value="60.222.547-8" class="personal-data__area personal-data__value" disabled>
          </li>
          <li class="personal-data">
            <span class="personal-data__type">Data de nascimento:</span>
            <input value="2001-02-24" type="date" class="personal-data__area personal-data__value" disabled>
          </li>

        </ul>
      </div>
    </div>
    <div class="volunteer-information">
      <div class="volunteer-content__address">
        <div class="content__title-icon">
          <h3 class="address__title">Endereço</h3>
          <i @click="update('.address__area')" class="volunteer__icon far fa-edit"></i>
        </div>

        <div class="volunteer__address">
          <span class="information">CEP:</span>
          <input value="06660-460" class="address__area information__value " disabled>
        </div>
        <div class="volunteer__address">
          <span class="information">Logradouro:</span>
          <input value="Avenida José Marcio" class="address__area information__value" disabled>
        </div>
        <div class="volunteer__address">
          <span class="information">Bairro:</span>
          <input value="Jardim Rosa" class="address__area information__value" disabled>
        </div>
        <div class="volunteer__address">
          <span class="information">Cidade:</span>
          <input value="Itapevi" class="address__area information__value" disabled>
        </div>
        <div class="volunteer__address">
          <span class="information">Estado:</span>
          <input value="São Paulo" class="address__area information__value" disabled>
        </div>
      </div>
      <div class="volunteer-content__contact">
        <div class="content__title-icon">
          <h3 class="contact__title">Contato</h3>
          <i @click="update('.contact__area')" class="volunteer__icon far fa-edit"></i>
        </div>

        <div class="volunteer__contact">
          <span class="contact">Telefone:</span>
          <input value="(11)99999-0000" class="contact__area contact__value" disabled>
        </div>
        <div class="volunteer__contact">
          <span class="contact">E-mail:</span>
          <input value="cansei@gmail.com" class="contact__area contact__value" disabled>
        </div>
      </div>
      <div class="volunteer-content__address">
        <div class="content__title-icon">
          <h3 class="contact__title">Dados pessoais</h3>
          <i @click="update('.personal-area-income__area')" class="volunteer__icon far fa-edit"></i>
        </div>
        <div class="beneficiarie__personal-area-income">
          <span class="information">Renda familiar:</span>
          <input value="1.500,00" class="personal-area-income__area information__value" disabled>
        </div>
        <div class="beneficiarie__personal-area-income">
          <span class="information">Quantidade de moradores:</span>
          <input value="9" class="personal-area-income__area information__value" disabled>
        </div>
        <div id="beneficiarie__type-of-residence" class="beneficiarie__personal-area-income">
          <span class="information">Tipo de residência:</span>
          <span id="field-type-of-residence" class="personal-area-income__area information__value">Casa</span>
        </div>
        <div class="beneficiarie__personal-area-income">
          <span class="information">Metros quadrados da residência:</span>
          <input value="22" class="personal-area-income__area information__value" disabled>
        </div>
      </div>
      <div class="volunteer-content__reason">
        <div class="content__title-icon">
          <h3 class="information__title">Observações:</h3>
          <i @click="update('.comments__area')" class="volunteer__icon far fa-edit"></i>
        </div>

        <input value="não sei" class="comments__area volunteer-reason__text" disabled>

      </div>

      <div class="volunteer-content__helps">
        <h3 class="information__title">Ajudas que recebeu:</h3>
        <ul class="help-list">
          <li class="help">
            <router-link to="">
              <span class="help__name">Ajuda 03</span>
            </router-link>
          </li>
          <li class="help">
            <router-link to="">
              <span class="help__name">Ajuda 03</span>
            </router-link>
          </li>
          <li class="help">
            <router-link to="">
              <span class="help__name">Ajuda 03</span>
            </router-link>
          </li>
        </ul>
      </div>

    </div>


    <div class="content-buttons">
      <router-link class="update-data__link" to="/update-administrator">
        <button class="update-data__button">Atualizar dados</button>
      </router-link>
      <button class="delete__button">Cancelar</button>
    </div>
  </main>
</template>

<script>
// import removeRegisterDefault from '../assets/js/home.js'

export default {
  name: "UpdateBeneficiarie",
  mounted() {
  },
  methods: {
  }
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/beneficiarie/updateBeneficiarieStyle.css");
</style>