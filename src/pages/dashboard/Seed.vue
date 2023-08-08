<template>
  <section id="seeds">
    <div class="seed-content">
      <img class="seed-content__image" :src="seed.foto" alt="Seed Image" />

      <div class="seed-content__tag-name">
        <span class="seed-content__tag">Semente</span>
        <h1 class="seed__title">{{ seed.nome }}</h1>
      </div>
    </div>

    <div class="seed-information">
      <div class="seed-information__content-data">
        <h2 class="seed-information__title">Informações</h2>
        <div class="seed-information__data">
          <span class="seed-information__data_question">Tempo de cultivo:</span>
          <span class="seed-information__data_result"
            >{{ seed.tempo_cultivo }} dias</span
          >
        </div>
        <div class="seed-information__data">
          <span class="seed-information__data_question"
            >Quantidade de regadas por semana:</span
          >
          <span class="seed-information__data_result"
            >{{ seed.regadas_por_semana }} vezes por semana.</span
          >
        </div>
        <div class="seed-information__data">
          <span class="seed-information__data_question"
            >Quantidade de água por regada:</span
          >
          <span class="seed-information__data_result">{{
            seed.quantidade_agua_por_regada
          }}</span>
        </div>
      </div>
      <div class="seed-information__recommendations">
        <h2 class="seed-information__title">Recomendações</h2>
        <p class="seed-information__text">
          {{ seed.recomendacoes }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Seed",
  mounted() {
    this.fillSeed();
  },
  data() {
    return {
      seed: {},
    };
  },
  watch: {
    "$store.state.id_semente": {
      immediate: true,
      handler(newIdSemente) {
        console.log("Novo ID da semente:", newIdSemente);
        if (newIdSemente) {
          this.fillSeed(newIdSemente); 
        }
      },
    },
  },
  methods: {
    fillSeed(idSemente) { 
      const seedId = {
        id: idSemente, 
      };
      console.log('id quando chama o fill: ', seedId);

      axios
        .post("http://127.0.0.1:8080/v4/green-world/pegar_semente", seedId)
        .then((response) => {
          console.log(response);
          
          this.seed = response.data.data;
        })
        .catch((error) => {
          // Tratar erros na requisição
          console.error(error);
        });
    },
  },
};
</script>


<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/seeds/seedStyle.css");
</style>