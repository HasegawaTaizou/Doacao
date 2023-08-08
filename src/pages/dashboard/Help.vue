<template>
  <main>
    <section id="help">
      <div class="seed-content">
        <div class="help-content__image">
          <input type="file" class="photo__label" id="photo" />
          <label for="photo">
            <img src="../../assets/img/add_image.png" alt="Photo Icon" class="photo__icon" />
          </label>
        </div>

        <div class="help-content__tag-name">
          <span class="help-content__tag">Ajuda</span>
          <h1 class="help__title">AJUDA 01 - 01/03/2023</h1>

          <div class="personal-data__list">
            <div class="personal-data">
              <span class="personal-data__type">Beneficiado:</span>
              <span class="personal-data__data">Carlos Santana</span>
              <router-link class="help-content__link" to="/beneficiarie">
                <i class="fa-regular fa-clipboard"></i>
              </router-link>
            </div>
            <div class="personal-data">
              <span class="personal-data__type">Envolvidos:</span>
              <ul class="volunteers-lis">
                <li class="volunteer">
                  <span class="personal-data__data">Débora Almeida</span>
                  <router-link class="help-content__link" to="/volunteer">
                    <i class="fa-regular fa-clipboard"></i>
                  </router-link>
                </li>
                <li class="volunteer">
                  <span class="personal-data__data">Débora Almeida</span>
                  <router-link class="help-content__link" to="/volunteer">
                    <i class="fa-regular fa-clipboard"></i>
                  </router-link>
                </li>
                <li class="volunteer">
                  <span class="personal-data__data">Débora Almeida</span>
                  <router-link class="help-content__link" to="/volunteer">
                    <i class="fa-regular fa-clipboard"></i>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="help-status-content">
        <h3 class="status__title">Status</h3>
        <span class="status-pending">Pendente</span>
      </div>

      <div class="help-information">
        <div class="volunteer-content__address">
          <h3 class="address__title">Endereço</h3>
          <div class="volunteer__address">
            <span class="information">CEP:</span>
            <span class="information__value">06660-460</span>
          </div>
          <div class="volunteer__address">
            <span class="information">Logradouro:</span>
            <span class="information__value">Avenida José Marcio</span>
          </div>
          <div class="volunteer__address">
            <span class="information">Bairro:</span>
            <span class="information__value">Jardim Rosa</span>
          </div>
          <div class="volunteer__address">
            <span class="information">Cidade:</span>
            <span class="information__value">Itapevi</span>
          </div>
          <div class="volunteer__address">
            <span class="information">Estado:</span>
            <span class="information__value">São Paulo</span>
          </div>
        </div>
        <div class="help-content__seeds">
          <h3 class="contact__title">Sementes</h3>
          <ul class="seeds-list">
            <li class="seed__item">
              <span>Uva</span>
            </li>
            <li class="seed__item">
              <span>Pera</span>
            </li>
            <li class="seed__item">
              <span>Morango</span>
            </li>
          </ul>
        </div>
        <div class="help-content__seeds">
          <h3 class="contact__title">Tipo de plantio</h3>
          <ul class="seeds-list">
            <li class="seed__item">
              <span>Caixa</span>
            </li>
          </ul>
        </div>
        <div class="help__comments">
            <h3 class="information__title">Observações</h3>
            <p class="information__value">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              dolor
              quisquam rem nostrum alias
              quasi veniam similique inventore ad libero, temporibus laborum blanditiis fuga nesciunt quas
              exercitationem id consequuntur reprehenderit!</p>
          </div>

      </div>

      <div class="content-buttons">
        <router-link class="update-data__link" to="/update-administrator">
          <button class="update-data__button">Atualizar dados</button>
        </router-link>
        <button class="delete__button">Excluir</button>
      </div>

    </section>
  </main>
</template>

<script>
// import removeRegisterDefault from '../assets/js/home.js'

export default {
  name: "Help",
  mounted() { },
  methods: {},
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/help/helpStyle.css");
@import url("../../assets/css/dashboard/help/updateHelpStyle.css");
</style>