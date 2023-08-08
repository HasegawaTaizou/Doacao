<template>
  
  <main>
    <section id="create-help">
      <h1 class="create-help__title">Criar uma ajuda</h1>

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
                  <span class="volunteer__name">Gabriel</span>
                  <span class="volunteer__city">Osasco</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">Letícia</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">André</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">André</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">André</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">André</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">André</span>
                  <span class="volunteer__city">Cotia</span>
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
          <div class="beneficiarie-content__information">
            <h3 class="information__title">Informações</h3>
            <div class="beneficiarie__information">
              <span class="information">Renda familiar:</span>
              <span class="information__value">R$: 1.500,00</span>
            </div>
            <div class="beneficiarie__information">
              <span class="information">Quantidade de moradores:</span>
              <span class="information__value">9</span>
            </div>
            <div class="beneficiarie__information">
              <span class="information">Tipo de residência:</span>
              <span class="information__value">Casa</span>
            </div>
            <div class="beneficiarie__information">
              <span class="information">Metros quadrados:</span>
              <span class="information__value">22</span>
            </div>

          </div>
          <div class="beneficiarie-content__address">
            <h3 class="information__title">Endereço</h3>
            <div class="beneficiarie__address">
              <span class="information">CEP:</span>
              <span class="information__value">06660-460</span>
            </div>
            <div class="beneficiarie__address">
              <span class="information">Logradouro:</span>
              <span class="information__value">Avenida José Marcio</span>
            </div>
            <div class="beneficiarie__address">
              <span class="information">Bairro:</span>
              <span class="information__value">Jardim Rosa</span>
            </div>
            <div class="beneficiarie__address">
              <span class="information">Cidade:</span>
              <span class="information__value">Itapevi</span>
            </div>
            <div class="beneficiarie__address">
              <span class="information">Estado:</span>
              <span class="information__value">São Paulo</span>
            </div>
          </div>
          <div class="beneficiarie__comments">
            <h3 class="information__title">Observações</h3>
            <p class="information__value">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              dolor
              quisquam rem nostrum alias
              quasi veniam similique inventore ad libero, temporibus laborum blanditiis fuga nesciunt quas
              exercitationem id consequuntur reprehenderit!</p>
          </div>

        </div>
        <div class="help-information">
          <div class="type-of-planting">
            <h3 class="information__title">Tipo de plantio</h3>
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
            <h3 class="information__title">Data da ajuda</h3>
            <input class="date__input" type="date">
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
                  <!-- <img src="./img/seed.png" alt="Seed"> -->
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
                  <!-- <img src="./img/seed.png" alt="Seed"> -->
                </li>
                <li class="seed__name-img">
                  <span class="seed__name">Melancia</span>
                  <!-- <img src="./img/seed.png" alt="Seed"> -->
                </li>
                <li class="seed__name-img">
                  <span class="seed__name">Melancia</span>
                  <!-- <img src="./img/seed.png" alt="Seed"> -->
                </li>
                <li class="seed__name-img">
                  <span class="seed__name">Melancia</span>
                  <!-- <img src="./img/seed.png" alt="Seed"> -->
                </li>
                <li class="seed__name-img">
                  <span class="seed__name">Melancia</span>
                  <!-- <img src="./img/seed.png" alt="Seed"> -->
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
                  <span class="volunteer__name">Gabriel</span>
                  <span class="volunteer__city">Osasco</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">Letícia</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">André</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">Ryan</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">Mateus</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">Mateus</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">Mateus</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">Mateus</span>
                  <span class="volunteer__city">Cotia</span>
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
                  <span class="volunteer__name">Letícia</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">André</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">Ryan</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">Mateus</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">Mateus</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">Mateus</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">Mateus</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">Mateus</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
                <li class="volunteer__name-city">
                  <span class="volunteer__name">Mateus</span>
                  <span class="volunteer__city">Cotia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <div class="buttons-content__create-and-clean">
        <button class="create__button">
          Criar
        </button>
        <button class="clean__button">
          Limpar
        </button>
      </div>


    </section>
  </main>
</template>

<script>
export default {
  name: "CreateHelp",
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
@import url("../../assets/css/dashboard/help/createHelpStyle.css");
</style>