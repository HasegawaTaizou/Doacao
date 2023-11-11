<template>
  <div
    class="popup-container"
    :class="{
      'popup-container': this.$store.state.showPopUp,
      hidden: !this.$store.state.showPopUp,
    }"
  >
    <div class="popup__introduction">
      <h2 class="popup__title">{{ title }}</h2>
      <img
        :src="image"
        alt="PopUp Image"
        class="popup__image"
      />
    </div>
    <div class="popup__actions">
      <p class="popup__text">
        {{ message }}
      </p>
      <slot></slot>
      <div class="popup__buttons">
        <button class="button__deny" @click="closePopup">
          <span class="deny__text">Cancelar</span>
          <i class="fa-regular fa-circle-xmark"></i>
        </button>
        <button class="button__accept" @click="executeAcceptAction">
          <span class="accept__text">Confirmar</span>
          <i class="fa-regular fa-circle-check"></i>
        </button>
      </div>
    </div>
  </div>
  <div
    :class="{
      'popup-background': this.$store.state.showPopUp,
      hidden: !this.$store.state.showPopUp,
    }"
  ></div>
</template>

<script>
export default {
  name: "PopUp",
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: false,
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
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  min-width: 856px;
  max-width: fit-content;
  min-height: 428px;
  height: fit-content;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  border-radius: 5px;
  border: 2px solid #527df9;
  background-color: #fff;
  gap: 32px;
}

.popup__introduction {
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #527df9;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.popup__title {
  font-size: 2.5rem;
  font-family: "Abel";
  font-weight: normal;
  margin-top: 12px;
  color: #fff;
  padding: 0px 8px;
}

.popup__image {
  max-width: 292px;
  width: 100%;
  max-height: 292px;
  height: 100%;
}

.popup__actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 52px;
  padding-right: 24px;
}

.popup__text {
  padding-top: 12px;
  font-size: 2rem;
  max-width: 352px;
  width: 100%;
  color: black;
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
  width: 156px;
  height: 52px;
  background-color: #ee5353;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
}

.button__accept {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 156px;
  height: 52px;
  background-color: #527df9;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
}

.hidden {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}

.popup-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  z-index: 1;
}
</style>

