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
        <div class="book-scheduling__schedules">
          <table class="schedules__table">
            <tr class="table__title">
              <th class="title__date">Data</th>
              <th class="title__hour">Horário</th>
              <th class="title__site">Local</th>
              <th class="title__action">Ação</th>
            </tr>
            <tr class="table__content">
              <td class="content__date">29/07/2023</td>
              <td class="content__hour">11:10</td>
              <td class="content__site">Descrição do local 1</td>
              <td class="content__actions">
                <img
                  src="../../assets/img/scheduling-cancel-icon.png"
                  alt="Cancel Icon"
                  class="action__icon"
                />
                <img
                  src="../../assets/img/scheduling-reschedule-icon.png"
                  alt="Reschedule Icon"
                  class="action__icon"
                />
              </td>
            </tr>
            <tr class="table__content">
              <td class="content__date">29/07/2023</td>
              <td class="content__hour">11:10</td>
              <td class="content__site">Descrição do local 2</td>
              <td class="content__actions">
                <img
                  src="../../assets/img/scheduling-cancel-icon.png"
                  alt="Cancel Icon"
                  class="action__icon"
                />
                <img
                  src="../../assets/img/scheduling-reschedule-icon.png"
                  alt="Reschedule Icon"
                  class="action__icon"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="book-scheduling__actions-buttons">
          <button class="action-button__cancel">
            <span class="cancel__text">Cancelar</span>
            <i class="fa-regular fa-circle-xmark"></i>
          </button>
          <button class="action-button__save">
            <span class="save__text">Salvar</span>
            <i class="fa-regular fa-circle-check"></i>
          </button>
        </div>
      </div>
      <div class="schedules-available">
        <span class="schedules-available__title"
          >Agendamentos disponíveis:</span
        >
        <table class="schedules__table">
          <tr class="table__title">
            <th class="title__date">Data</th>
            <th class="title__hour">Horário</th>
            <th class="title__site">Local</th>
            <th class="title__action">Ação</th>
          </tr>
          <tr class="table__content">
            <td class="content__date">29/07/2023</td>
            <td class="content__hour">11:10</td>
            <td class="content__site">Descrição do local 1</td>
            <td class="content__actions">
              <img
                src="../../assets/img/scheduling-cancel-icon.png"
                alt="Cancel Icon"
                class="action__icon"
              />
              <img
                src="../../assets/img/scheduling-reschedule-icon.png"
                alt="Reschedule Icon"
                class="action__icon"
              />
            </td>
          </tr>
          <tr class="table__content">
            <td class="content__date">29/07/2023</td>
            <td class="content__hour">11:10</td>
            <td class="content__site">Descrição do local 2</td>
            <td class="content__actions">
              <img
                src="../../assets/img/scheduling-cancel-icon.png"
                alt="Cancel Icon"
                class="action__icon"
              />
              <img
                src="../../assets/img/scheduling-reschedule-icon.png"
                alt="Reschedule Icon"
                class="action__icon"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </section>
  <PopUp
    :message="'Os dados do beneficiado serão excluídos'"
    :acceptFunction="deleteVolunteer"
  />
</template>

<script>
import PopUp from "../../assets/components/PopUp.vue";

export default {
  name: "BookSchedules",
  components: { PopUp },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/bookSchedules/bookSchedulesStyle.css");
</style>
