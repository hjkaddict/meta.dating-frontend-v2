<template>
  <section>
    <div class="hero is-fullheight is-dark">
      <!-- navbar including burgermenu and back button  -->
      <div class="hero-head">
        <Nav />
      </div>

      <!-- create blank DOM for mobile heading space, blank class is defined in main.scss  -->
      <div v-if="$screen.width <= 1023" class="blank"></div>

      <!-- project container  -->
      <div class="hero-body">
        <ProjectContainer />
      </div>

      <cookie-law theme="royal">
        <div slot="message">
          <strong>This website uses cookies.</strong>
          We save your session information only on Login.
        </div>
      </cookie-law>
    </div>
  </section>
</template>

<script>
import Nav from "../components/Nav/Nav";
import ProjectContainer from "../components/Home/ProjectContainer.vue";
import CookieLaw from "vue-cookie-law";

export default {
  components: {
    Nav,
    ProjectContainer,
    CookieLaw,
  },
  methods: {
  },
};
</script>

<style scoped>
.hero-foot {
  position: fixed;
  bottom: 0;
}

.is-fullWidth {
  width: 100vw;
}
</style>
