<template>
  <section>
    <div class="hero is-fullheight is-primary">
      <div class="hero-head">
        <Nav />
      </div>
      <div class="blank is-hidden-desktop"></div>

      <div
        class="hero-body"
        :class="{
          'is-flex': isMobile(),
          'is-align-items-flex-start': isMobile(),
        }"
      >
        <bots-container></bots-container>
      </div>

    </div>
  </section>
</template>

<script>
import Nav from "../components/Nav/Nav";
import BotsContainer from "@/components/Bots/BotsContainer";
// import ControlPanel from "@/components/Bots/ControlPanel";

export default {
  components: {
    Nav,
    BotsContainer,
    // ControlPanel,
  },
  methods: {

  },
};
</script>

<style scoped>
.blank {
  height: 80px;
}
.hero-body {
}

</style>
