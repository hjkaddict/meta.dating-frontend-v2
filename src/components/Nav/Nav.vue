<template>
  <section>
    <nav
      class="navbar is-fixed-top level is-mobile p-5 has-text-white"
      :class="{ 'has-background-black': isDashboard }"
    >
      <!-- Left side: Back Button (not appears on Home/Dashboard view)-->
      <div class="level-left">
        <div class="level-item" v-if="backButtonIsDisplayed">
          <div :style="{ color: 'white' }">
            <font-awesome-icon
              class="is-clickable"
              icon="arrow-left"
              :size="sizeChange"
              @click="$router.go(-1)"
              @mouseover="isBackBtnHover = true"
              @mouseleave="isBackBtnHover = false"
              :class="{ 'has-text-link': isBackBtnHover }"
            ></font-awesome-icon>
          </div>
        </div>
        <div class="level-item" v-if="isDashboard && !isClicked">
          <p class="is-size-5">Bots</p>
        </div>
      </div>

      <!-- Right side: Burger Menu always appears on every view-->
      <div class="level-right">
        <div
          @click="openNavList()"
          :style="{ color: 'white' }"
          v-if="!isClicked"
        >
          <font-awesome-icon
            class="is-clickable"
            icon="bars"
            :size="sizeChange"
            @mouseover="isHover = true"
            @mouseleave="isHover = false"
            :class="{ 'has-text-link': isHover }"
          ></font-awesome-icon>
        </div>

        <div
          @click="openNavList()"
          :style="{ color: 'white' }"
          v-if="isClicked"
        >
          <font-awesome-icon
            class="is-clickable"
            icon="times"
            :size="sizeChange"
            @mouseover="isHover = true"
            @mouseleave="isHover = false"
            :class="{ 'has-text-link': isHover }"
          ></font-awesome-icon>
        </div>
      </div>
    </nav>

    <div
      class="nav-list has-background-dark hero is-fullheight"
      v-if="isClicked"
    >
      <div class="hero-body">
        <div class="container has-text-centered has-text-white">
          <ol class="is-family-primary is-size-2 p-3 ">
            <router-link to="/project" tag="li" active-class="active"
              >Project</router-link
            >
            <router-link to="/team" tag="li" active-class="active"
              >Team</router-link
            >
            <router-link to="/imprint" tag="li" active-class="active"
              >Imprint</router-link
            >
            <!-- this menu is only displayed when user logged in  -->
            <router-link
              to="/dashboard"
              v-if="isLoggedIn"
              tag="li"
              active-class="active"
            >
              Dashboard</router-link
            >

            <router-link
              to="/login"
              v-if="!isLoggedIn"
              tag="li"
              active-class="active"
              >Login</router-link
            >
            <!-- this menu is only displayed when user logged in  -->
            <router-link
              to="/logout"
              v-if="isLoggedIn"
              tag="li"
              active-class="active"
              >Logout</router-link
            >
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import BackButton from "@/components/Nav/BackButton";
export default {
  components: {
    // BackButton,
  },
  computed: {
    sizeChange() {
      if (this.isMobile()) return "2x";
      else return "3x";
    },
    backButtonIsDisplayed() {
      if (
        this.$router.history.current.path === "/project" ||
        this.isDashboard
      ) {
        return false;
      } else {
        return true;
      }
    },
    isDashboard() {
      if (this.$route.path.includes("/dashboard/")) return true;
      else return false;
    },
    isLoggedIn() {
      if (localStorage.getItem("accessToken")) return true;
      else return false;
    },
  },
  data() {
    return {
      isClicked: false,
      isHover: false,
      isBackBtnHover: false
    };
  },
  methods: {
    openNavList() {
      this.isClicked = !this.isClicked;
    },
  },
};
</script>

<style scoped>
.navbar {
  height: 90px;
}

.nav-list {
  position: fixed;
  width: 100vw;
  z-index: 1;
}

li {
  margin: 1.5rem 0;
  cursor: pointer;
}

li:hover {
  color: #f64c72;
}

.active {
  color: #f64c72;
}
</style>
