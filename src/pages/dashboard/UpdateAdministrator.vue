<template>
  
  <main>

    <section id="seeds">
      <div class="seed-content">
        <img class="seed-content__image" src="../../assets/img/administrator.png" alt="Passion fruit">

        <div class="seed-content__tag-name">
          <span class="seed-content__tag">Administrador</span>
          <div class="administrator__title-icon">
            <h1 class="seed__title">Mabel Santos</h1>
            <i @click="update('.personal-data__area')" class="administrator__icon far fa-edit"></i>
          </div>


          <ul class="personal-data__list">
            <li class="personal-data">
              <span class="personal-data__type">CPF:</span>
              <input value="549.033.548-33" class="personal-data__area personal-data__data" disabled />
            </li>
            <li class="personal-data">
              <span class="personal-data__type">RG:</span>
              <input value="60.333.220-5" class="personal-data__area personal-data__data" disabled />
            </li>
            <li class="personal-data">
              <span class="personal-data__type">Data de nascimento:</span>
              <input value="24/02/2005" class="personal-data__area personal-data__data" disabled />
            </li>
          </ul>
        </div>

      </div>

      <div class="seed-information">


        <div class="seed-information__content-data">
          <div class="administrator__title-icon">
            <h2 class="seed-information__title">Contato</h2>
            <i @click="update('.contact__area')" class="administrator__icon far fa-edit"></i>
          </div>

          <div class="seed-information__data">
            <span class="seed-information__data_question">Telefone:</span>
            <input value="(11) 95343-8228" class="contact__area seed-information__data_result" disabled />
          </div>
          <div class="seed-information__data">
            <span class="seed-information__data_question">E-mail:</span>
            <input value="mabel.santos@gmail.com" class="contact__area seed-information__data_result" disabled />
          </div>
        </div>

        <div class="content-buttons">
          <router-link class="update-data__link" to="/update-administrator">
            <button class="update-data__button">Atualizar dados</button>
          </router-link>
          <button class="delete__button">Cancelar</button>
        </div>

      </div>
    </section>
  </main>
</template>

<script>
// import removeRegisterDefault from '../assets/js/home.js'

export default {
  name: "UpdateAdministrator",
  mounted() {
  },
  methods: {
    update(element) {
      const campo = document.querySelectorAll(element)
      campo.forEach(element => {
        element.removeAttribute('disabled')
        element.classList.add("input__click")
      })

      return campo
    },
  }
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/administrator/administratorStyle.css");
@import url("../../assets/css/dashboard/administrator/updateAdministratorStyle.css");
</style>