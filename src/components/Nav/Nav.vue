<template>
  <section>
    <nav
      class="navbar is-fixed-top level is-mobile p-5 has-text-white"
      :class="{ 'has-background-black': isDashboard }"
    >
      <!-- Left side: Back Button (not appears on Home/Dashboard view)-->
      <div class="level-left">
        <div class="level-item" v-if="backButtonIsDisplayed">
          <BackButton />
        </div>
        <div class="level-item" v-if="isDashboard">
          <p class="is-size-5">Bots</p>
        </div>
      </div>

      <!-- Right side: Burger Menu always appears on every view-->
      <div class="level-right">
        <div @click="openNavList()">
          <div
            id="nav-icon"
            :class="{ open: isClicked }"
            @mouseover="isHover = true"
            @mouseleave="isHover = false"
          >
            <span
              :class="{ 'has-background-link': isClicked || isHover }"
              v-for="a in 4"
              :key="a.id"
            ></span>
          </div>
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
            <router-link to="/" tag="li" active-class="active" exact
              >Projekt</router-link
            >
            <router-link to="/team" tag="li" active-class="active"
              >Team</router-link
            >
            <router-link to="/imprint" tag="li" active-class="active"
              >Imprint</router-link
            >
            <!-- this menu is only displayed when user logged in  -->
            <router-link to="/dashboard" tag="li" active-class="active">
              Dashboard</router-link
            >
            <router-link to="/login" tag="li" active-class="active"
              >Login</router-link
            >
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BackButton from "@/components/Nav/BackButton";
export default {
  components: {
    BackButton,
  },
  computed: {
    backButtonIsDisplayed() {
      if (
        this.$router.history.current.path === "/" ||
        this.$router.history.current.path === "/dashboard" ||
        this.$router.history.current.path === "/addbot"
      ) {
        return false;
      } else {
        return true;
      }
    },
    isDashboard() {
      if (
        this.$router.history.current.path === "/dashboard" ||
        this.$router.history.current.path === "/addbot"
      )
        return true;
      else return false;
    },
  },
  data() {
    return {
      isClicked: false,
      isHover: false,
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

/* burgerMenu animation below */
#nav-icon {
  width: 40px;
  height: 45px;
  position: relative;
  margin: auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 99;
}

#nav-icon span {
  display: block;
  position: absolute;
  height: 6px;
  width: 100%;
  background: white;
  /* background:  #f64c72; */

  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon span:nth-child(1) {
  top: 5px;
}

#nav-icon span:nth-child(2),
#nav-icon span:nth-child(3) {
  top: 19px;
}

#nav-icon span:nth-child(4) {
  top: 33px;
}

#nav-icon.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#nav-icon.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}
</style>
