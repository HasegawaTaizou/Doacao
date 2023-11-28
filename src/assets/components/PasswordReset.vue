<template>
  <transition name="fade" appear>
    <div class="password-container" v-if="this.$store.state.showPasswordReset">
      <div class="password__texts">
        <p class="text">Sua senha foi alterada com sucesso!</p>
        <p class="text">Agora você pode acessar seu perfil.</p>
      </div>
      <img
        src="../img/password-reset-image.png"
        alt="E-mail image"
        class="password__image"
      />
      <router-link class="password__button" to="/login">Concluir</router-link>
    </div>
  </transition>
  <transition name="fade" appear>
    <div
      v-if="this.$store.state.showPasswordReset"
      @click="this.$store.commit('SET_SHOW_PASSWORD_RESET', false)"
      class="popup-background"
    ></div>
  </transition>
</template>

<script>
export default {
  name: "PasswordReset",
};
</script>

<style scoped>
.password-container {
  border-radius: 10px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  z-index: 999;
  width: 578px;
  display: grid;
  grid-template-areas:
    "texts image"
    "texts button";
  grid-auto-rows: 1fr auto;
  grid-template-columns: auto auto;
}

.password__texts {
  grid-area: texts;
  height: 100%;
  background-color: #0057FF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.text {
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  padding: 0px 4px;
}

.password__image {
  grid-area: image;
  display: flex;
  justify-self: center;
}


.password__button {
  grid-area: button;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  width: 232px;
  height: 52px;
  background: #0057FF;
  border-radius: 5px;
  color: #fff;
  font-family: "Abel";
  font-size: 1.5rem;
  margin-bottom: 18px;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
