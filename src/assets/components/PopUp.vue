<template>
  <div
    class="popup-container"
    :class="{
      'popup-container': this.$store.state.showPopUp,
      hidden: !this.$store.state.showPopUp,
    }"
  >
    <h2 class="popup__title">{{ title }}</h2>
    <p class="popup__text">
      {{ message }}
    </p>
    <slot></slot>
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
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    acceptFunction: {
      type: Function,
      required: true,
    },
  },
  methods: {
    closePopup() {
      this.$store.state.showPopUp = false;
      this.$store.commit("setShowPopUp", false);
    },
    executeAcceptAction() {
      console.log("Ação executada");
      this.acceptFunction();
      this.closePopup();
    },
  },
};
</script>

<style>
.popup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  min-width: 416px;
  max-width: fit-content;
  width: 100%;
  position: fixed;
  top: 30%;
  left: 45%;
  text-align: center;
  border-radius: 5px;
  min-height: 212px;
  height: fit-content;
  background-color: #fff;
  gap: 32px;
  padding: 24px;
}

.popup__title {
  font-size: 2rem;
  font-family: "Abel";
  font-weight: normal;
  margin-top: 12px;
  color: #000;
}

.popup__text {
  font-size: 1rem;
  max-width: 252px;
  width: 100%;
  color: #6d6868;
}

.popup__buttons {
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
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
