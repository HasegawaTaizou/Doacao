<template>
  <transition name="fade" appear v-if="showTransition">
    <div class="content">
      <div class="title">TESTESSSSSSSSSSSSSS</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modals",
  data() {
    return {
      showTransition: false,
    };
  },
  mounted() {
    this.showTransition = true
  }
};
</script>

<style scoped>

.content {
  width: 100%;
}

.title {
  font-size: 5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s, transform .8s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  /* transform: translateY(-50%) translateX(100vw); */
  transform: translateX(-100%);
}
</style>
