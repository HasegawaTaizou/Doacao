<template>
  <section id="book-schedules-dashboard">
    <div class="book-schedules__header">
      <h1 class="book-schedules__title">RESERVAR AGENDAMENTOS</h1>
      <div class="profile-container">
        <img
          src="../../assets/img/hospital-profile-image.png"
          alt="Profile Image"
          class="profile__image"
        />
        <span class="profile__name">Hospital Notredame Intermédica</span>
      </div>
    </div>
    <div class="book-schedules__content">
      <div class="book-scheduling-container">
        <div class="book-scheduling">
          <div class="scheduling-date">
            <span class="date__title">Escolha a data e hora:</span>
            <input
              type="datetime-local"
              name=""
              id=""
              class="date__datetime-local"
            />
          </div>
          <div class="scheduling-site">
            <span class="site__title">Escolha o local:</span>
            <select name="" id="" class="site__select">
              <option value="1">Descrição Local 1</option>
            </select>
          </div>
        </div>
        <button class="book-scheduling__button">
          <span class="book-scheduling__text">Reservar agendamento</span>
          <img
            src="../../assets/img/plus-icon.png"
            alt="Book Scheduling Icon"
            class="book-scheduling__icon"
          />
        </button>
      </div>
      <div class="schedules-available">
        <span class="schedules-available__title">Agendamentos disponíveis:</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BookSchedules",
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/bookSchedules/bookSchedulesStyle.css");
</style>
