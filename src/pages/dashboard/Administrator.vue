<template>
  <header>
    <nav>
      <img
        onclick="openNavFull"
        src="../../assets/img/menu_image.png"
        alt="Menu"
      />
    </nav>

    <div class="container-image-log-out">
      <img
        src="../../assets/img/profile_administrator.png"
        alt="Image profile"
      />
      <a href="#" class="log-out-content">
        <button class="log-out__button">
          <img src="../../assets/img/logout_image.png" alt="Image log out" />
          <span class="log-out__text">Log out</span>
        </button>
      </a>
    </div>
  </header>
  <main>
    <section id="seeds">
      <div class="seed-content">
        <img
          class="seed-content__image"
          src="../../assets/img/administrator.png"
          alt="Passion fruit"
        />

        <div class="seed-content__tag-name">
          <span class="seed-content__tag">Administrador</span>
          <h1 class="seed__title">Mabel Santos</h1>

          <ul class="personal-data__list">
            <li class="personal-data">
              <span class="personal-data__type">CPF:</span>
              <span class="personal-data__data">549.033.548-33</span>
            </li>
            <li class="personal-data">
              <span class="personal-data__type">RG:</span>
              <span class="personal-data__data">60.333.220-5</span>
            </li>
            <li class="personal-data">
              <span class="personal-data__type">Data de nascimento:</span>
              <span class="personal-data__data">24/02/2005</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="seed-information">
        <div class="seed-information__content-data">
          <h2 class="seed-information__title">Contato</h2>
          <div class="seed-information__data">
            <span class="seed-information__data_question">Telefone:</span>
            <span class="seed-information__data_result">(11) 95343-8228</span>
          </div>
          <div class="seed-information__data">
            <span class="seed-information__data_question">E-mail:</span>
            <span class="seed-information__data_result"
              >mabel.santos@gmail.com</span
            >
          </div>
        </div>

        <div class="content-buttons">
          <router-link class="update-data__link" to="/update-administrator">
            <button class="update-data__button">Atualizar dados</button>
          </router-link>
          <button class="delete__button">Excluir</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// import removeRegisterDefault from '../assets/js/home.js'

export default {
  name: "Administrator",
  mounted() {},
  methods: {},
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/administrator/administratorStyle.css");
</style>