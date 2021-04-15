<template>
  <section>
    <div class="hero is-fullheight is-dark">
      <div class="hero-head">
        <Nav />
      </div>
      <!-- create blank DOM for mobile heading space  -->
      <div class="blank is-hidden-desktop"></div>

      <div class="hero-body">
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
  methods: {},
};
</script>

<style scoped>
.blank {
  height: 60px;
}
</style>
