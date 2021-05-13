<template>
  <section>
    <div class="hero is-fullheight is-dark">
      <!-- navbar including burgermenu and back button  -->
      <div class="hero-head">
        <Nav />
      </div>

      <!-- create blank DOM for mobile heading space, blank class is defined in main.scss  -->
      <div class="blank is-hidden-desktop"></div>

      <!-- project container  -->
      <div class="hero-body">
        <ProjectContainer />
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
