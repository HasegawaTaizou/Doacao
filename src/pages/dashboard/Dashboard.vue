<template>
  <main>
    <div class="side-nav" :class="{ grid: this.showSidenav }">
      <div class="company">
        <img
          src="../../assets/img/logo.png"
          alt="Company Image"
          class="company__image"
        />
        <span class="company__name">Doe Vida</span>
      </div>
      <nav class="navigation">
        <ul class="navigation-fields-content">
          <template v-for="item in menuItems" :key="item.id">
            <li class="navigation-field">
              <router-link :to="`/dashboard/${item.route}`">
                <i :class="item.image" alt="Item icon"></i>
                <span class="navigation-field__name">{{ item.title }}</span>
              </router-link>
            </li>
          </template>
        </ul>
      </nav>
      <div
        @click="this.$store.commit('SET_SHOW_LOGOUT', true)"
        class="log-out-content"
      >
        <i class="fa-solid fa-right-from-bracket"></i>
        <span class="log-out__text">Sair</span>
      </div>
    </div>
    <div id="dashboard" class="dashboard-content">
      <router-view></router-view>
    </div>
    <LogOut></LogOut>
  </main>
</template>

<script>
import LogOut from "../../assets/components/LogOut.vue";

export default {
  name: "Dashboard",
  components: { LogOut },
  data() {
    return {
      showLogout: true,
      menuItems: [
        {
          id: 1,
          title: "Agendamentos",
          image: "far fa-calendar-alt",
          route: "schedules",
        },
        {
          id: 2,
          title: "Reservar agendamentos",
          image: "fas fa-calendar-day",
          route: "book-schedules",
        },
        {
          id: 3,
          title: "Configurações",
          image: "fas fa-cog",
          route: "settings",
        },
        {
          id: 4,
          title: "Estatísticas",
          image: "fa-solid fa-star",
          route: "statistics",
        },
        {
          id: 5,
          title: "Campanhas",
          image: "fas fa-bullhorn",
          route: "campaign",
        },
        {
          id: 6,
          title: "Doação",
          image: "fas fa-tint",
          route: "donation",
        },
        {
          id: 7,
          title: "Ajuda",
          image: "fas fa-question-circle",
          route: "help",
        },
      ],
      showSidenav: true,
    };
  },
  methods: {
    selectMenuItem(item) {
      this.$router.push(item.route);
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/dashboardStyle.css");
@import url("../../assets/css/dashboard/sidenav.css");
</style>
