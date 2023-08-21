<template>
  <section id="scheduling-dashboard">
    <div class="scheduling__header">
      <h1 class="scheduling__title">AGENDAMENTOS</h1>
      <div class="profile-container">
        <img
          src="../../assets/img/hospital-profile-image.png"
          alt="Profile Image"
          class="profile__image"
        />
        <span class="profile__name">Hospital Notredame Intermédica</span>
      </div>
    </div>
    <div class="scheduling__content">
      <div class="scheduling__actions">
        <div class="action-introduction">
          <img
            src="../../assets/img/scheduling-dashboard-icon.png"
            alt="Scheduling Icon"
            class="action-introduction__image"
          />
          <span class="action-introduction__title">Agendamentos</span>
        </div>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
      </div>
      <div class="scheduling__schedules">
        <table class="schedules__table">
          <thead>
            <tr class="table__title">
              <th class="title__id">ID</th>
              <th class="title__donator">Nome do doador</th>
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
              <td class="content__donator">
                <router-link
                  :to="'/dashboard/donator'"
                  class="donator__link"
                >
                  <img
                    src="../../assets/img/donator-image.png"
                    alt="Donator Image"
                    class="donator__image"
                  />
                  <span class="donator__name">João Pedro Bueno</span>
                </router-link>
              </td>
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
              <td class="content__donator">
                <router-link
                  :to="'/dashboard/donator'"
                  class="donator__link"
                >
                  <img
                    src="../../assets/img/donator-image.png"
                    alt="Donator Image"
                    class="donator__image"
                  />
                  <span class="donator__name"
                    >Beatriz Fideliz Landi Coelho</span
                  >
                </router-link>
              </td>
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

export default {
  name: "Schedules",
  components: { PopUp },
  data() {
    return { selectedComponent: "" };
  },
  methods: {
    openPopUp(componentName) {
      this.selectedComponent = componentName;
      
      this.$store.state.showPopUp = true;
      this.$store.commit("setShowPopUp", true);
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/schedules/schedulesStyle.css");
@import url("../../assets/css/components/cancelIconStyle.css");
@import url("../../assets/css/components/rescheduleIconStyle.css");
</style>
