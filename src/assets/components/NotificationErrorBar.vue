<template>
  <transition name="fade" appear @before-enter="beforeEnter" @enter="enter">
    <div class="notification-error" v-if="$store.state.showNotification">
      <div class="notification-error-informations">
        <i class="fa-solid fa-circle-exclamation"></i>
        <p class="notification-error__text">{{ message }}</p>
      </div>
      <div class="progress-bar-container">
        <div
          class="progress-error-bar"
          :style="{ width: progressWidth, transition: progressTransition }"
        ></div>
      </div>
    </div>
  </transition>
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
    const topPosition = ref(-100); // Initial position above the viewport

    const redirectToRoute = () => {
      if (props.route && props.route !== "null") {
        router.push(props.route);
      }
    };

    const beforeEnter = (el) => {
      el.style.top = `${topPosition.value}px`;
    };

    const enter = (el, done) => {
      // Use Vue transition hooks for progressive transition
      topPosition.value = 60; // Final position at 60px from the top
      el.offsetHeight; // Trigger reflow
      el.style.transition = "top 0.3s ease-in-out";
      el.style.top = `${topPosition.value}px`;
      done();
    };

    onMounted(() => {
      store.commit("SET_SHOW_NOTIFICATION", true);
      setTimeout(() => {
        progressTransition.value = "width 3s linear";
        progressWidth.value = "0%";
        setTimeout(() => {
          store.commit("SET_SHOW_NOTIFICATION", false);
          redirectToRoute();
        }, 3000);
      }, 100);
    });

    return {
      notificationStatus,
      progressWidth,
      progressTransition,
      topPosition,
      beforeEnter,
      enter,
    };
  },
};
</script>

<style scoped>
.notification-error {
  background-color: #fff;
  border-left: 5px solid #ed4e3b;
  border-radius: 4px;
  min-width: 356px;
  max-width: 356px;
  min-height: 64px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  top: 60px;
  gap: 12px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.25);
}

.notification-error-informations {
  display: flex;
  width: 100%;
  padding-left: 12px;
  margin-top: 16px !important;
  align-items: center;
}

.fa-circle-exclamation {
  color: #ed4e3b !important;
  padding-right: 12px;
  font-size: 1.5rem;
}

.notification-error__text {
  font-size: 1.5rem !important;
  padding-right: 12px;
  color: black;
}

.progress-bar-container {
  width: 100%;
  overflow: hidden;
}

.progress-error-bar {
  height: 5px;
  background-color: #ed4e3b !important;
  width: 100%;
  transform-origin: right;
  transition: width 3s linear;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s, top 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(80%);
  top: 60px; /* Set the final position when leaving */
}
</style>
