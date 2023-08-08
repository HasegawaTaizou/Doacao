<template>
  <div
    class="popup-container"
    :class="{
      'popup-container': this.$store.state.showPopUp,
      hidden: !this.$store.state.showPopUp,
    }"
  >
    <h2 class="popup__title">Tem certeza?</h2>
    <p class="popup__text">
      {{ message }}
    </p>
    <div class="popup__buttons">
      <button class="button__deny" @click="closePopup">
        <span class="deny__text">Não</span>
        <i class="fa-regular fa-circle-xmark"></i>
      </button>
      <button class="button__accept" @click="executeAcceptAction">
        <span class="accept__text">Sim</span>
        <i class="fa-regular fa-circle-check"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  props: {
    message: {
      type: String,
      required: true,
    },
    acceptFunction: {
      type: Function,
      required: true,
    },
  },
  // data() {
  //   return {
  //     popUpStatus: this.$store.state.showPopUp,
  //   };
  // },
  methods: {
    closePopup() {
      this.$store.state.showPopUp = false;

      this.$store.commit("setShowPopUp", false);
    },
    executeAcceptAction() {
      console.log("Ação executada");
      this.acceptFunction(); // Chama a função especificada
      this.closePopup(); // Fecha o popup após um pequeno atraso
    },
  },
};
</script>
  
  <style>
.popup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #408d7b;
  min-width: 416px;
  max-width: 416px;
  width: 100%;
  position: fixed;
  top: 30%;
  left: 45%;
  text-align: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 212px;
  background-color: #e4e4e4;
}

.popup__title {
  font-size: 2rem;
  font-family: "Abel";
  font-weight: normal;
  margin-top: 12px;
}

.popup__text {
  font-size: 1rem;
  max-width: 226px;
  widows: 100%;
  margin-top: 12px;
  margin-bottom: 36px;
  color: black;
}

.popup__buttons {
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;
}

.button__deny {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 104px;
  height: 42px;
  background-color: #ee5353;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.button__accept {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 104px;
  height: 42px;
  background-color: rgba(131, 222, 76, 0.8);
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.hidden {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}
</style>
  