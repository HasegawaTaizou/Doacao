<template>
  <section id="help-dashboard">
    <div class="help__header">
      <h1 class="help__title">AJUDA</h1>
      <div class="profile-container">
        <img
          src="../../assets/img/hospital-profile-image.png"
          alt="Profile Image"
          class="profile__image"
        />
        <span class="profile__name">Hospital Notredame Intermédica</span>
      </div>
    </div>
    <div class="help__content">
      <img
        src="../../assets/img/help-image.png"
        alt="Help Image"
        class="help__image"
      />
      <ul class="help__questions-container">
        <li
          v-for="(question, index) in questions"
          :key="index"
          class="question-container"
        >
          <h2 class="question__title">{{ question.title }}</h2>
          <i
            class="fas"
            :class="question.open ? 'fa-minus' : 'fa-plus'"
            @click="toggleQuestion(index)"
          ></i>
          <div v-if="question.open" class="question__text-container">
            <p class="text">{{ question.text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Help",
  data() {
    return {
      questions: [
        {
          title: "Lorem ipsum dolor sit amet, consec?",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              odio tellus, pharetra at enim in, pretium hendrerit nisl. Morbi
              sit amet ultrices risus`,
        },
        {
          title: "Lorem ipsum dolor sit amet, consec?",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              odio tellus, pharetra at enim in, pretium hendrerit nisl. Morbi
              sit amet ultrices risus`,
        },
      ],
    };
  },
  methods: {
    toggleQuestion(index) {
      this.questions[index].open = !this.questions[index].open;
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/help/helpStyle.css");
</style>
