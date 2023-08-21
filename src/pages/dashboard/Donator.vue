<template>
  <section id="donator-dashboard">
    <div class="donator__header">
      <h1 class="donator__title">AGENDAMENTO</h1>
      <div class="profile-container">
        <img
          src="../../assets/img/hospital-profile-image.png"
          alt="Profile Image"
          class="profile__image"
        />
        <span class="profile__name">Hospital Notredame Intermédica</span>
      </div>
    </div>
    <div class="donator__content">
      <div class="donator-container">
        <img
          src="../../assets/img/donator-image.png"
          alt="Donator Image"
          class="donator__image"
        />
        <h2 class="donator__name">João Pedro Bueno</h2>
        <div class="donator__email">
          <span class="email__title">E-mail:</span>
          <span class="email__text">joaopedrobueno@gmail.com</span>
        </div>
        <div class="donator__phone">
          <span class="phone__title">Telefone:</span>
          <span class="phone__text">(11) 32358-9255</span>
        </div>
        <div class="donator__blood-type">
          <span class="blood-type__title">Tipo sanguíneo:</span>
          <span class="blood-type__text">O-</span>
        </div>
        <div class="donator__age">
          <span class="age__title">Idade:</span>
          <span class="age__text">30 anos</span>
        </div>
        <div class="donator__gender">
          <span class="gender__title">Sexo:</span>
          <span class="gender__text">Masculino</span>
        </div>
        <div class="donator__weight">
          <span class="weight__title">Peso:</span>
          <span class="weight__text">80 Kg</span>
        </div>
      </div>
      <div class="schedules">
        <h2 class="schedules__title">Agendamentos</h2>
        <div class="scheduling__schedules">
          <table class="schedules__table">
            <thead>
              <tr class="table__title">
                <th class="title__id">ID</th>
                <th class="title__date">Data</th>
                <th class="title__hour">Horário</th>
                <th class="title__site">Local</th>
                <th class="title__status">Status</th>
                <th class="title__action">Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table__content">
                <td class="content__id">1</td>
                <td class="content__date">29/07/2023</td>
                <td class="content__hour">11:10</td>
                <td class="content__site">Descrição do local 1</td>
                <td class="content__status">
                  <span class="status__text scheduled">Agendado</span>
                </td>
                <td class="content__actions">
                  <img
                    @click="openPopUp('cancel')"
                    src="../../assets/img/scheduling-cancel-icon.png"
                    alt="Cancel Icon"
                    class="action__icon"
                  />
                  <img
                    @click="openPopUp('conclude')"
                    src="../../assets/img/scheduling-conclude-icon.png"
                    alt=" Conclude Icon"
                    class="action__icon"
                  />
                  <img
                    @click="openPopUp('reschedule')"
                    src="../../assets/img/scheduling-reschedule-icon.png"
                    alt="Reschedule Icon"
                    class="action__icon"
                  />
                </td>
              </tr>
              <tr class="table__content">
                <td class="content__id">2</td>
                <td class="content__date">29/07/2023</td>
                <td class="content__hour">11:10</td>
                <td class="content__site">Descrição do local 2</td>
                <td class="content__status">
                  <span class="status__text concluded">Concluído</span>
                </td>
                <td class="content__actions">
                  <span class="action__none">N/A</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  <PopUp
    v-if="selectedComponent === 'cancel'"
    :title="'Cancelar?'"
    :message="'Digite o motivo do cancelamento (Opcional)'"
    :acceptFunction="deleteVolunteer"
  >
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      class="cancel-reason"
      placeholder="Motivo:"
    ></textarea>
  </PopUp>
  <PopUp
    v-if="selectedComponent === 'conclude'"
    :title="'Concluir?'"
    :message="'Os dados serão alterados e não terá como desfazer esta ação.'"
    :acceptFunction="deleteVolunteer"
  >
  </PopUp>
  <PopUp
    v-if="selectedComponent === 'reschedule'"
    :title="'Remarcar'"
    :message="'Escolha a data e o horário para remarcar'"
    :acceptFunction="deleteVolunteer"
  >
    <div class="book-scheduling">
      <div class="scheduling-date">
        <input
          type="datetime-local"
          name=""
          id=""
          class="date__datetime-local"
        />
      </div>
      <div class="scheduling-site">
        <select name="" id="" class="site__select">
          <option value="" disabled>Escolha o local</option>
          <option value="1">Descrição Local 1</option>
        </select>
      </div>
    </div>
  </PopUp>
</template>

<script>
import PopUp from "../../assets/components/PopUp.vue";
import openPopUp from "../../assets/js/methods/open-pop-up.js";

export default {
  name: "Donator",
  components: { PopUp },
  data() {
    return { selectedComponent: "" };
  },
  methods: {
    openPopUp,
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/donator/donatorStyle.css");
@import url("../../assets/css/components/cancelIconStyle.css");
@import url("../../assets/css/components/rescheduleIconStyle.css");
</style>
