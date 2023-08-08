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
          <span class="log-out__text">Log out</span>
        </button>
      </a>
    </div>
  </header>
  <main>
    <div class="side-nav" :class="{ grid: this.showSidenav }">
      <a href="#" class="close__button">
        <img
          src="../../assets/img/close_icon.png"
          alt="Close"
          @click="this.showSidenav = false"
        />
      </a>
      <div class="profile-administrator-content">
        <a href="#">
          <img
            class="profile_administrator__image"
            src="../../assets/img/profile_administrator.png"
            alt="admin profile picture"
          />
          <span class="profile_administrator__name">Mabel Santos</span>
        </a>
      </div>
      <nav class="navigation">
        <ul class="navigation-fields-content">
          <template v-for="item in menuItems" :key="item.id">
            <li v-if="!item.subMenu" class="navigation-field">
              <router-link :to="`/dashboard/${item.route}`">
                <img :src="item.image" alt="Item icon" />
                <span class="navigation-field__name">{{ item.title }}</span>
              </router-link>
            </li>
            <li v-else class="navigation-field-list" @click="toggleSubMenu(item)">
              <img :src="item.image" alt="Item icon" />
              <span class="navigation-field__name">{{ item.title }}</span>
              <i
                v-if="item.subMenu"
                :class="{
                  'fa fa-angle-down': !item.showSubMenu,
                  'fa fa-angle-up': item.showSubMenu,
                }"
              ></i>
              <ul class="submenu" v-if="item.showSubMenu">
                <template v-for="subItem in item.subMenu" :key="subItem.id">
                  <li @click="selectMenuItem(subItem)">
                    <router-link :to="`/dashboard/${subItem.route}`">{{
                      subItem.title
                    }}</router-link>
                  </li>
                </template>
              </ul>
            </li>
          </template>
        </ul>
      </nav>
      <div class="log-out-content">
        <a href="#" class="log-out-content">
          <button class="log-out__button">
            <img src="../../assets/img/logout_image.png" alt="Image log out" />
            <span class="log-out__text">Log out</span>
          </button>
        </a>
      </div>
    </div>
    <div id="dashboard" class="dashboard-content">
      <router-view></router-view>
      <!-- <img
        class="welcome__image"
        src="../../assets/img/welcome_image.png"
        alt="Welcome"
      />
      <h1 class="welcome__title">Bem vindo</h1> -->
    </div>
  </main>
</template>

<script>
import homeIcon from "@/assets/img/home_icon.png";
import helpsIcon from "@/assets/img/helps_icon.png";
import volunteerIcon from "@/assets/img/volunteer-beneficiarie_icon.png";
import seedsIcon from "@/assets/img/seeds_icon.png";

export default {
  name: "Dashboard",
  data() {
    return {
      menuItems: [
        { id: 1, title: "Home", image: homeIcon, route: "" },
        {
          id: 2,
          title: "Ajudas",
          image: helpsIcon,
          subMenu: [
            { id: 21, title: "Criar ajuda", route: "create-help" },
            { id: 22, title: "Todas as ajudas", route: "all-help" },
          ],
        },
        {
          id: 3,
          title: "Voluntários",
          image: volunteerIcon,
          subMenu: [
            { id: 31, title: "Solicitação voluntários", route: "volunteer-requests" },
            { id: 32, title: "Todos os voluntários", route: "all-volunteers" },
          ],
        },
        {
          id: 4,
          title: "Beneficiados",
          image: homeIcon,
          subMenu: [
            { id: 41, title: "Para aprovar", route: "beneficiarie-requests" },
            { id: 42, title: "Todos os beneficiados", route: "all-beneficiaries" },
          ],
        },
        { id: 5, title: "Sementes", image: seedsIcon, route: "seeds" },
      ],
      showSidenav: false,
    };
  },
  methods: {
    toggleSubMenu(item) {
      item.showSubMenu = !item.showSubMenu;
    },
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
@import url("../../assets/css/dashboard/home/homeStyle.css");
@import url("../../assets/css/dashboard/sidenav.css");
</style>