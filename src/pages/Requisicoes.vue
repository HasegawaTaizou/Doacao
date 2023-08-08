<template>
  <div>
    <button @click="getData">Fazer Requisição GET</button>
    <div v-if="getResponse">
      <h2>Resposta:</h2>
      <pre>{{ getResponse }}</pre>
    </div>
  </div>
  <div>
    <button @click="postData">Fazer Requisição POST</button>
    <div v-if="postResponse">
      <h2>Resposta:</h2>
      <pre>{{ postResponse }}</pre>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";

export default {
  name: "Requisicoes",
  data() {
    return {
      getResponse: null,
    };
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:3000/enterprise")
        .then((response) => {
          this.getResponse = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    postData() {
      axios
        .post("http://seuservidor.com/endpoint", this.formData)
        .then((response) => {
          // Manipular a resposta do servidor
          console.log(response.data);

          // Limpar dados do formulário ou reiniciar o cadastro
          this.formData.address = "";

          // Redirecionar para a primeira tela do cadastro
          this.$router.push("/");
        })
        .catch((error) => {
          // Tratar erros na requisição
          console.error(error);
        });
    },
  },
};
</script>