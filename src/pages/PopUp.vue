<template>
  <div>
    <button @click="teste">Abrir Popup</button>
    <div>
    <PopUp :message="popupMessage" :acceptFunction="customFunction" />
  </div>
  </div>
</template>
  
  <script>
import PopUp from '../assets/components/PopUp.vue'

export default {
  name: "PopUpTeste",
  components: {
    PopUp,
  },
  data() {
    return {
      popupMessage: "Deseja executar a ação?",
    };
  },
  methods: {
    teste() {
      this.$store.commit('setShowPopUp', true)
      console.log(this.$store.state.showPopUp);
    },
    customFunction() {
      console.log("Função personalizada chamada!");
    },
  },
};
</script>
  
<style>
</style>
  