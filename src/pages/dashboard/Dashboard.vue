<template>
  <header :class="{ none: this.showSidenav }">
    <nav>
      <img
        @click="this.showSidenav = true"
        src="../../assets/img/menu_image.png"
        alt="Menu"
      />
    </nav>
    <div class="container-image-log-out">
      <img
        src="../../assets/img/profile_administrator.png"
        alt="Image profile"
      />
      <a href="#" class="log-out-content">
        <button class="log-out__button">
          <img src="../../assets/img/logout_image.png" alt="Image log out" />
          <span class="log-out__text">Sair</span>
        </button>
      </a>
    </div>
  </header>
  <main>
    <div class="side-nav" :class="{ grid: this.showSidenav }">
      <a href="#" class="close__button">
        <img
          src="../../assets/img/close-menu-icon.png"
          alt="Close"
          @click="this.showSidenav = false"
        />
      </a>
      <div class="company">
        <img src="../../assets/img/logo.png" alt="Company Image" class="company__image">
        <span class="company__name">NOME EMPRESA</span>
      </div>
      <nav class="navigation">
        <ul class="navigation-fields-content">
          <template v-for="item in menuItems" :key="item.id">
            <li class="navigation-field">
              <router-link :to="`/dashboard/${item.route}`">
                <img :src="item.image" alt="Item icon" />
                <span class="navigation-field__name">{{ item.title }}</span>
              </router-link>
            </li>
          </template>
        </ul>
      </nav>
        <a href="#" class="log-out-content">
          <button class="log-out__button">
            <img src="../../assets/img/logout-icon.png" alt="Log Out Icon" />
            <span class="log-out__text">Sair</span>
          </button>
        </a>
    </div>
    <div id="dashboard" class="dashboard-content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import schedulingIcon from "@/assets/img/scheduling-icon.png";
import bookSchedulingIcon from "@/assets/img/book-scheduling-icon.png";
import settingsIcon from "@/assets/img/settings-icon.png";
import helpIcon from "@/assets/img/help-icon.png";

export default {
  name: "Dashboard",
  data() {
    return {
      menuItems: [
        { id: 1, title: "Agendamentos", image: schedulingIcon, route: "" },
        {
          id: 2,
          title: "Reservar agendamentos",
          image: bookSchedulingIcon,
          route: "",
        },
        { id: 3, title: "Configurações", image: settingsIcon, route: "" },
        { id: 4, title: "Ajuda", image: helpIcon, route: "" },
      ],
      showSidenav: false,
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