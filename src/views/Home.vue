<template>
  <section>
    <div class="hero is-fullheight is-dark">
      <div class="hero-head">
        <Nav />
      </div>
      <div
        class="hero-body"
        :class="{ 'is-flex': isMobile(), 'is-align-items-flex-start': isMobile() }"
      >
        <project-container></project-container>
      </div>
    </div>
  </section>
</template>

<script>
import Nav from "../components/Nav/Nav";
import ProjectContainer from "../components/Home/ProjectContainer.vue";

export default {
  components: {
    Nav,
    ProjectContainer,
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.hero-body {
  border: 1px solid yellow;
}
</style>
