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
          <tr class="table__title">
            <th class="title__id">ID</th>
            <th class="title__donator">Nome do doador</th>
            <th class="title__date">Data</th>
            <th class="title__hour">Horário</th>
            <th class="title__site">Local</th>
            <th class="title__status">Status</th>
            <th class="title__action">Ação</th>
          </tr>
          <tr class="table__content">
            <td class="content__id">1</td>
            <td class="content__donator">
              <img
                src="../../assets/img/donator-image.png"
                alt="Donator Image"
                class="donator__image"
              />
              <span class="donator__name">João Pedro Bueno</span>
            </td>
            <td class="content__date">29/07/2023</td>
            <td class="content__hour">11:10</td>
            <td class="content__site">Descrição do local 1</td>
            <td class="content__status scheduled">Agendado</td>
            <td class="content__actions">
              <img
                src="../../assets/img/scheduling-cancel-icon.png"
                alt="Cancel Icon"
                class="action__icon"
              />
              <img
                src="../../assets/img/scheduling-conclude-icon.png"
                alt=" Conclude Icon"
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
            <td class="content__id">2</td>
            <td class="content__donator">
              <img
                src="../../assets/img/donator-image.png"
                alt="Donator Image"
                class="donator__image"
              />
              <span class="donator__name">Beatriz Fideliz Landi Coelho</span>
            </td>
            <td class="content__date">29/07/2023</td>
            <td class="content__hour">11:10</td>
            <td class="content__site">Descrição do local 2</td>
            <td class="content__status concluded">Concluído</td>
            <td class="content__actions">
              <span class="action__none">NÃO DISPONÍVEL</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Schedules",
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/schedules/schedulesStyle.css");
</style>
