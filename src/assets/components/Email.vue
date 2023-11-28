<template>
  <transition name="fade" appear>
    <div class="email-container" v-if="this.$store.state.showEmail">
      <h2 class="email__title">CONFIRA SEU E-MAIL</h2>
      <img
        src="../img/email-image.png"
        alt="E-mail image"
        class="email__image"
      />
      <div class="email__texts">
        <p class="text">
          Se encontrarmos uma conta que corresponda às informações que você
          enviou, enviaremos instruções de redefinição de senha para o endereço
          de e-mail que você acabou de inserir.
        </p>
        <p class="text">
          Se você não receber o e-mail em até 10 minutos, refaça a solicitação.
        </p>
      </div>
      <router-link class="email__button" to="/login">Entendi</router-link>
    </div>
  </transition>
  <transition name="fade" appear>
    <div
      v-if="this.$store.state.showEmail"
      @click="this.$store.commit('SET_SHOW_EMAIL', false)"
      class="popup-background"
    ></div>
  </transition>
</template>

<script>
export default {
  name: "NotificationBar",
};
</script>

<style scoped>
.email-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
  position: absolute;
  align-items: center;
  z-index: 999;
  width: 578px;
  padding: 32px;
}

.email__title {
  font-size: 3rem;
  color: #000;
}

.email__texts {
  display: grid;
  gap: 12px;
}

.text {
  color: #000;
  font-size: 1.5rem;
}

.email__button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 362px;
  height: 58px;
  background: #4e7bf2;
  border-radius: 5px;
  color: #fff;
  font-family: "Abel";
  font-size: 1.5rem;
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
