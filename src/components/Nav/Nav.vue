<template>
  <section>
    <nav class="navbar is-fixed-top is-transparent level is-mobile p-5">
      <!-- Left side: Back Button (not appears on Home view)-->
      <div class="level-left">
        <div
          class="level-item"
          v-if="this.$router.history.current.path !== '/'"
        >
          <BackButton />
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

    <div class="nav-list has-background-dark hero" v-if="isClicked">
      <div class="hero-body">
        <div class="container has-text-centered has-text-white">
          <ol class="is-family-primary is-size-1 p-6 ">
            <router-link to="/" tag="li" active-class="active" exact
              >Projekt</router-link
            >
            <router-link to="/team" tag="li" active-class="active"
              >Team</router-link
            >
            <router-link to="/imprint" tag="li" active-class="active"
              >Imprint</router-link
            >
            <router-link to="login" tag="li" active-class="active"
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
.nav-list {
  position: fixed;
  width: 100vw;
  height: 100vh;
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
  top: 0px;
}

#nav-icon span:nth-child(2),
#nav-icon span:nth-child(3) {
  top: 14px;
}

#nav-icon span:nth-child(4) {
  top: 28px;
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
