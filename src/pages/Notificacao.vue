<template>
  <!-- TESTE -->
  <div>
    <button @click="$store.state.showNotification = true">
      Mostrar Notificação
    </button>
  </div>
  <notification-bar
    v-if="$store.state.showNotification"
    :route="'null'"
    :message="'Cadastro realizado com sucesso!'"
  ></notification-bar>
</template>

<script>
import NotificationBar from "../assets/components/NotificationBar.vue";

export default {
  components: { NotificationBar },
};
</script>

<style></style>
