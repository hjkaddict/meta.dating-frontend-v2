<template>
  <section>
    <div
      class="nav-list has-background-dark has-text-white has-text-centered is-flex is-justify-content-center is-align-items-center is-family-primary is-size-1"
      v-if="isClicked"
    >
      <ol class="p-6">
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

    <div class="level is-mobile">

      <div class="level-left">
        <div class="back pt-5 pl-5 is-clickable">
          <font-awesome-icon
            id="arrow-left"
            icon="arrow-left"
            size="3x"
            :style="{ color: '#f64c72' }"
          ></font-awesome-icon>
        </div>
      </div>
      
      <div class="level-right pt-5 pr-5">
        <div class="burger-menu" @click="burgerToggle()">
          <div id="nav-icon" :class="{ open: isClicked }">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    burgerToggle() {
      this.isClicked = !this.isClicked;
    },
  },
};
</script>

<style scoped>
.level {
  border: 1px solid red;
  width: 100vw;
}

.container {
  border: 1px solid
}
section {
  position: fixed;
  z-index: 10;
}

.nav-list {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  z-index: 1;
}

.burger-menu {
  z-index: 2;
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
  background: #f64c72;

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
