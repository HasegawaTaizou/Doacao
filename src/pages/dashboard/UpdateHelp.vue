<template>
  <main>
    <section id="create-help">
      <div class="help__image-name">
        <div class="help-content__image">
          <input type="file" class="photo__label" id="photo" />
          <label for="photo">
            <img src="../../assets/img/add_image.png" alt="Photo Icon" class="photo__icon" />
          </label>
        </div>

        <div class="help-content__tag-name">
          <span class="help-content__tag">Ajuda</span>
          <h1 class="help__title">AJUDA 01 - 01/03/2023</h1>
        </div>
      </div>

      <div class="status-content">
        <h2 class="status-content__title">Status</h2>
        <select name="status" id="help-status">
          <option value="pendente">Pendente</option>
          <option value="finalizado">Finalizado</option>
        </select>
      </div>


      <div class="beneficiarie-content">
        <h2 class="beneficiarie-content__title">Beneficiado</h2>
        <div class="beneficiarie__list-selected">
          <div class="volunteer-content__all">

            <h3 class="title__list">Beneficiados</h3>
            <div class="volunteer-content__list">
              <div class="search-field-content">
                <input class="search-field__input" placeholder="Pesquisar" />
                <i class="fa-solid fa-magnifying-glass" id="search-field__icon"></i>
              </div>
              <ul class="volunteer__list">
                <li class="volunteer__name-city">
                  <span class="volunteer__name-list">Gabriel</span>
                  <span class="volunteer__city">Osasco</span>
                </li>

                <li class="volunteer__name-city">
                  <span class="volunteer__name-list">Gabriel</span>
                  <span class="volunteer__city">Osasco</span>
                </li>

                <li class="volunteer__name-city">
                  <span class="volunteer__name-list">Gabriel</span>
                  <span class="volunteer__city">Osasco</span>
                </li>

                <li class="volunteer__name-city">
                  <span class="volunteer__name-list">Gabriel</span>
                  <span class="volunteer__city">Osasco</span>
                </li>

                <li class="volunteer__name-city">
                  <span class="volunteer__name-list">Gabriel</span>
                  <span class="volunteer__city">Osasco</span>
                </li>

              </ul>
            </div>
          </div>
          <div class="beneficiarie-content__selected">
            <h3 class="beneficiarie-selected__title">Beneficiado selecionado</h3>
            <input class="beneficiarie-selected__input" />
          </div>
        </div>

        <div class="beneficiarie-information">
          <div class="volunteer-content__address">
            <div class="content__title-icon">
              <h3 class="contact__title">Dados pessoais</h3>
              <i onclick="update('.personal-area-income__area')" class="volunteer__icon far fa-edit"></i>
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
          <div class="volunteer-content__address">
            <div class="content__title-icon">
              <h3 class="address__title">Endereço</h3>
              <i onclick="update('.address__area')" class="volunteer__icon far fa-edit"></i>
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
          <div class="volunteer-content__reason">
            <div class="content__title-icon">
              <h3 class="information__title">Observações:</h3>
              <i onclick="update('.comments__area')" class="volunteer__icon far fa-edit"></i>
            </div>

            <input value="não sei" class="comments__area volunteer-reason__text" disabled>

          </div>

        </div>
        <div class="help-information">
          <div class="type-of-planting">
            <div class="content__title-icon">
              <h3 class="information__title">Tipo de plantio</h3>
              <i onclick="update()" class="volunteer__icon far fa-edit"></i>
            </div>
            <div class="type-of-planting__options">
              <input type="radio" name="nome_do_grupo" value="valor" />
              <label class="information">Caixa</label>
            </div>
            <div class="type-of-planting__options">
              <input type="radio" name="nome_do_grupo" value="valor" />
              <label class="information">Garrafa pet</label>
            </div>
            <div class="type-of-planting__options">
              <input type="radio" name="nome_do_grupo" value="valor" />
              <label class="information">Chão</label>
            </div>
          </div>
          <div class="date-of-help">
            <div class="content__title-icon">
              <h3 class="information__title">Data da ajuda</h3>
              <i onclick="update('.date__area')" class="volunteer__icon far fa-edit"></i>
            </div>
            <input value="2001-02-24" type="date" class="date__area date__input" disabled>
          </div>
        </div>
      </div>

      <div class="seed-content">
        <h2 class="seed-content__title">Sementes</h2>
        <div class="seeds-lists">
          <div class="seed-content__all">
            <h3 class="title__list">Sementes</h3>
            <div class="seed-content__list">
              <div class="search-field-content">
                <input class="search-field__input" placeholder="Pesquisar" />
                <i class="fa-solid fa-magnifying-glass" id="search-field__icon"></i>
              </div>
              <ul class="seed__list">

                <li class="seed__name-img">
                  <span class="seed__name">Melancia</span>
                  <img src="../../assets/img/passion_fruit_image.webp" alt="Seed">
                </li>
              </ul>
            </div>
          </div>
          <div class="buttons-content">
            <button class="include__button">
              <i class="add button__icon fas fa-chevron-left"></i>
            </button>
            <button class="remove__button">
              <i class="button__icon fas fa-chevron-left"></i>
            </button>
          </div>
          <div class="seed-content__selected">
            <h3 class="title__list">Sementes escolhidas</h3>
            <div class="seed-content__list">
              <div class="search-field-content">
                <input class="search-field__input" placeholder="Pesquisar" />
                <i class="fa-solid fa-magnifying-glass" id="search-field__icon"></i>
              </div>
              <ul class="seed__list">
                <li class="seed__name-img">
                  <span class="seed__name">Melancia</span>
                  <img src="../../assets/img/passion_fruit_image.webp" alt="Seed">
                </li>
                <li class="seed__name-img">
                  <span class="seed__name">Melancia</span>
                  <img src="../../assets/img/passion_fruit_image.webp" alt="Seed">
                </li>
                <li class="seed__name-img">
                  <span class="seed__name">Melancia</span>
                  <img src="../../assets/img/passion_fruit_image.webp" alt="Seed">
                </li>
                <li class="seed__name-img">
                  <span class="seed__name">Melancia</span>
                  <img src="../../assets/img/passion_fruit_image.webp" alt="Seed">
                </li>
               

              </ul>
            </div>
          </div>
        </div>

      </div>
      <div class="volunteer-content">
        <h2 class="volunteer-content__title">Voluntários</h2>
        <div class="volunteers-lists">

          <div class="volunteer-content__all">
            <h3 class="title__list">Voluntários</h3>
            <div class="volunteer-content__list">
              <div class="search-field-content">
                <input class="search-field__input" placeholder="Pesquisar" />
                <i class="fa-solid fa-magnifying-glass" id="search-field__icon"></i>
              </div>
              <ul class="volunteer__list">
                <li class="volunteer__name-city">
                  <span class="volunteer__name-list">Gabriel</span>
                  <span class="volunteer__city">Osasco</span>
                </li>

              </ul>
            </div>
          </div>
          <div class="buttons-content">
            <button class="include__button">
              <i class="add button__icon fas fa-chevron-left"></i>
            </button>
            <button class="remove__button">
              <i class="button__icon fas fa-chevron-left"></i>
            </button>
          </div>
          <div class="volunteer-content__selected">
            <h3 class="title__list">Voluntários escolhidos</h3>
            <div class="volunteer-content__list">
              <div class="search-field-content">
                <input class="search-field__input" placeholder="Pesquisar" />
                <i class="fa-solid fa-magnifying-glass" id="search-field__icon"></i>
              </div>
              <ul class="volunteer__list">
                <li class="volunteer__name-city">
                  <span class="volunteer__name-list">Letícia</span>
                  <span class="volunteer__city">Cotia</span>
                </li>


              </ul>
            </div>
          </div>
        </div>

      </div>
      <div class="content-buttons">
        <router-link class="update-data__link" to="/update-administrator">
          <button class="update-data__button">Atualizar dados</button>
        </router-link>
        <button class="delete__button">Cancelar</button>
      </div>


    </section>
  </main>
</template>

<script>
// import removeRegisterDefault from '../assets/js/home.js'

export default {
  name: "UpdateHelp",
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
@import url("../../assets/css/dashboard/help/updateHelpStyle.css");
@import url("../../assets/css/dashboard/help/createHelpStyle.css");
</style>