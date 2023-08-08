<template>
  <div :class="{ 'notification': notificationStatus, 'hidden': !notificationStatus }">
    <div class="notification-informations">
      <i class="fa-solid fa-circle-exclamation"></i>
      <p class="notification__text">{{ message }}</p>
    </div>
    <div class="progress-bar-container">
      <div class="progress-bar" :style="{ width: progressWidth, transition: progressTransition }"></div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "NotificationBar",
  props: {
    message: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const notificationStatus = computed(() => store.state.showNotification);

    const progressWidth = ref("100%");
    const progressTransition = ref("");

    const redirectToRoute = () => {
      if (props.route) {
        router.push(props.route);
      }
    };

    onMounted(() => {
      store.commit("setShowNotification", true);
      setTimeout(() => {
        progressTransition.value = "width 3s linear";
        progressWidth.value = "0%";
        setTimeout(() => {
          store.commit("setShowNotification", false);
          redirectToRoute();
        }, 3000);
      }, 100);
    });

    return {
      notificationStatus,
      progressWidth,
      progressTransition,
    };
  },
};
</script>

<style>
.notification {
  background-color: #e7e7e7;
  border-left: 5px solid #408d7b;
  border-radius: 4px;
  min-width: 356px;
  max-width: 356px;
  min-height: 64px;
  text-align: center;
  position: fixed !important;
  right: auto;
  left: auto;
  display: flex;
  flex-direction: column;
  top: 60px;
  gap: 12px;
  transition: opacity 0.5s ease-out;
}

.hidden {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}

.notification-informations {
  display: flex;
  width: 100%;
  padding-left: 12px;
  margin-top: 16px !important;
  align-items: center;
}

.fa-circle-exclamation {
  color: #408d7b;
  padding-right: 12px;
  font-size: 1.5rem;
}

.notification__text {
  font-size: 1.5rem !important;
  padding-right: 12px;
}

.progress-bar-container {
  width: 100%;
  overflow: hidden;
}

.progress-bar {
  height: 4px;
  background-color: #6ccdb6;
  width: 100%;
  transform-origin: right;
  transition: width 3s linear;
}
</style>
