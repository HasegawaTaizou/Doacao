<template>
  <div>
    <button @click="addSchedule">Adicionar Item</button>
    <table class="schedules__table">
      <tbody>
        <tr class="table__content" v-for="(item, index) in tableBookSchedules" :key="index">
          <td class="content__date">{{ item.contentDate }}</td>
          <td class="content__hour">{{ item.contentHour }}</td>
          <td class="content__site">{{ item.contentSite }}</td>
          <td class="content__actions">
            <img
            @click="removeSchedule(index)"
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
      tableBookSchedules: [],
      contentDate: "29/07/2023",
      contentHour: "11:10",
      contentSite: "Descrição do local 1"
    };
  },
  methods: {
    addSchedule() {
      this.tableBookSchedules.push({
        contentDate: this.contentDate,
        contentHour: this.contentHour,
        contentSite: this.contentSite
       });
    },
    removeSchedule(index) {
      this.tableBookSchedules.splice(index, 1); 
    }
  },
};
</script>
