<template>
  <div id="body">
    <ul class="menu_lateral_A">
      <input type="checkbox" id="chec" />
      <label for="chec">
        <img class="menu_lateral1" src="../assets/img/menu_lateal1.png" alt="" />
      </label>
      <nav class="menu_novo">
        <ul class="ul_menu">
          <li class="li_menu">
            <a class="a_menu" href="#historias">
              <i class="fa-solid fa-book-open" style="color: #797979"></i>
              Histórias</a
            >
          </li>
          <li class="li_menu">
            <a class="a_menu" href="#sobre-nos">
              <i class="fa-solid fa-user-group" style="color: #797979"></i>
              Sobre nós</a
            >
          </li>
          <li class="li_menu">
            <a class="a_menu" href="#ajuda">
              <i
                class="fa-solid fa-hand-holding-heart"
                style="color: #797979"
              ></i>
              Ajuda</a
            >
          </li>
        </ul>
      </nav>
    </ul>
    <header>
      <ul class="menu">
        <button class="menu_lateral_B">
          <img src="../assets/img/menu-lateral2.png" alt="" />
        </button>

        <li class="menu_header">
          <a href="#historias">Histórias</a>
        </li>
        <li class="menu_header">
          <a href="#sobre-nos">Sobre nós</a>
        </li>
        <li class="menu_header">
          <a href="#ajuda">Ajuda</a>
        </li>
      </ul>
      <router-link class="button" to="/login">
     Login
      </router-link>
    </header>
    <main>
      <a href="#" class="voltar">
        <i class="fas fa-arrow-circle-up"></i>
      </a>
      <div class="baixar_app">
        <div class="app">
          <div class="text_dowload">
            <div class="texto1">
              <span> TORNE-SE UM </span>
              <h1>DOADOR,</h1>
            </div>

            <div class="texto2">
              <span>BAIXE AGORA O APP </span>
            </div>
          </div>
          <img class="celular_celular" src="../assets/img/celular2.png" alt="" />
          <div class="buttons_download">
            <button class="app_store">
              <img class="icon_button" src="../assets/img/apple.png" alt="" />
              <div class="texto">
                <h3>Dowload on the</h3>
                <h4>App Store</h4>
              </div>
            </button>

            <button class="google_play">
              <img class="icon_button" src="../assets/img/google-play.png" alt="" />
              <div class="texto">
                <h3>GET IT ON</h3>
                <h4>Google Play</h4>
              </div>
            </button>
          </div>
        </div>
        <div class="celular">
          <img src="../assets/img/celular.png" alt="" />
        </div>
        <div class="celular2">
          <img src="../assets/img/celular2.png" alt="" />
        </div>
      </div>
      <div class="text1">
        <h2>
          A doação de sangue é um gesto simples, mas seus impactos são profundos
          e duradouros. Ela une comunidades, salva vidas e contribui para um
          sistema de saúde mais resiliente. Se você está apto a doar sangue,
          considere fazê-lo regularmente e contribuir para o bem-estar de muitas
          pessoas ao redor do mundo.
        </h2>
      </div>
      <section class="historias" id="historias">
        <h4 class="title">HISTÓRIAS</h4>
        <div class="historias-div">
          <div class="card-historias">
            <ul class="card-historias-pessoas">
              <h7
                >Sem aquele gesto de amor daquelas pessoas com certeza, eu não
                estaria compartilhando esse relato com vocês
              </h7>
            </ul>
            <ul class="dados-historia">
              <img class="foto" src="../assets/img/pessoa1.png" alt="" />
              <h8> João Pedro Bueno, 20 ANOS</h8>
            </ul>
          </div>
          <div class="card-historias">
            <ul class="card-historias-pessoas">
              <h7
                >Me senti muito grato e tive uma nova chance de vida. Se não
                fosse o sangue eu não sobreviria. Sou muito grato ao
                atendimento, a todo o apoio que recebi. Foi um momento que
                envolveu uma questão emocional, que não posso nem descrever.</h7
              >
            </ul>
            <ul class="dados-historia">
              <img class="foto" src="../assets/img/pessoa2.png" alt="" />
              <h8> Moreno César, 21 ANOS</h8>
            </ul>
          </div>
        </div>
        <div class="historias-div">
          <div class="card-historias">
            <ul class="card-historias-pessoas">
              <h7
                >Cada gota daquele sangue doado estava se misturando ao meu
                próprio sistema, infundindo-me com uma nova chance, uma nova
                perspectiva.
              </h7>
            </ul>
            <ul class="dados-historia">
              <img class="foto" src="../assets/img/pessoa4.png" alt="" />
              <h8> Ítalo Rosa , 21 ANOS</h8>
            </ul>
          </div>
          <div class="card-historias">
            <ul class="card-historias-pessoas">
              <h7
                >A doação de sangue não era apenas um ato médico, era um ato de
                humanidade. Aquelas pessoas, movidas por empatia e
                solidariedade, haviam me proporcionado uma segunda chance.</h7
              >
            </ul>
            <ul class="dados-historia">
              <img class="foto" src="../assets/img/pessoa3.png" alt="" />
              <h8> Genivania Macedo, 20 ANOS</h8>
            </ul>
          </div>
        </div>
      </section>
      <section class="sobre-nos" id="sobre-nos">
        <div class="nos">
          <h4 class="title">SOBRE NÓS</h4>
          <h2>
            A tecnologia, em constante evolução, tem se mostrado uma força
            poderosa que remodela todos os aspectos da nossa vida. Do cotidiano
            à indústria, da medicina à educação, ela se infiltra em praticamente
            todas as esferas, impulsionando mudanças e criando novas
            oportunidades. Pensando no bem estar de uma sociedade em um todo
            surgiu o Doe Vida, uma aplicação que além de trazer técnologia tem a
            missão de mudar histórias.
          </h2>
        </div>
      </section>
    </main>
    <footer>
      <section class="ajuda" id="ajuda">
        <ul class="card-ajuda">
          <div class="contato">
            <li>
              <div class="contato-item">
                <i class="fas fa-phone contato-item__icon"></i>
                <h6>(11) 4774-4700</h6>
              </div>
            </li>
            <li>
              <div class="contato-item">
                <i class="fas fa-envelope contato-item__icon"></i>
                <h6>suporte_doevida@gmail.com</h6>
              </div>
            </li>
          </div>
          <ul class="copyright">
            Copyright © 2023 | DoeVida
          </ul>
          <ul class="social-container">
            <img class="icon" src="../assets/img/twitter.png" alt="" />
            <img class="icon" src="../assets/img/instagram.png" alt="" />
            <img class="icon" src="../assets/img/facebook.png" alt="" />
          </ul>
        </ul>
      </section>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
@import url('../assets/css/index/reset.css');
@import url('../assets/css/index/style.css');
@import url('../assets/css/index/sobre-nos.css');
@import url('../assets/css/index/baixar_app.css');
@import url('../assets/css/index/historias.css');
@import url('../assets/css/index/menu.css');
@import url('../assets/css/index/responsividade.css');
</style>
