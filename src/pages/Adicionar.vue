<template>
  <div>
    <button @click="adicionarItem">Adicionar Item</button>
    <table class="schedules__table">
      <tbody>
        <tr class="table__content" v-for="(item, index) in tabelaItens" :key="index">
          <td class="content__date">{{ item.contentDate }}</td>
          <td class="content__hour">{{ item.contentHour }}</td>
          <td class="content__site">{{ item.contentSite }}</td>
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
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Adicionar",
  data() {
    return {
      tabelaItens: [],
      contentDate: "29/07/2023",
      contentHour: "11:10",
      contentSite: "Descrição do local 1"
    };
  },
  methods: {
    adicionarItem() {
      this.tabelaItens.push({ 
        contentDate: this.contentDate,
        contentHour: this.contentHour,
        contentSite: this.contentSite
       });
    },
  },
};
</script>
