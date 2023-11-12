<template>
  <Swiper
    class="swiper"
    :modules="modules"
    :space-between="30"
    :slides-per-view="3"
    :pagination="{ clickable: true }"
  >
    <SwiperSlide class="slide">Slide 1</SwiperSlide>
    <SwiperSlide class="slide">Slide 2</SwiperSlide>
    <SwiperSlide class="slide">Slide 3</SwiperSlide>
    <SwiperSlide class="slide">Slide 4</SwiperSlide>
    <SwiperSlide class="slide">Slide 5</SwiperSlide>
    <SwiperSlide class="slide">Slide 6</SwiperSlide>
    <SwiperSlide class="slide">Slide 7</SwiperSlide>
    <SwiperSlide class="slide">Slide 8</SwiperSlide>
  </Swiper>
</template>

<script>
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";

// Import the Pagination module styles
import "swiper/css/pagination";

// Install Swiper modules
SwiperCore.use([Pagination]);

export default defineComponent({
  name: "swiper-example-multiple-slides-per-view",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
});
</script>


<style scoped>
.swiper {
  cursor: grab;
}
</style>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";
@import "@/styles/style.scss";

.swiper {
  @include swiper-wrapper();
}

.slide {
  @include swiper-slide();
}
</style>