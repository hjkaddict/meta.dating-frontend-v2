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
        <bots-container></bots-container>
      </div>
    </div>
  </section>
</template>

<script>
import Nav from "../components/Nav/Nav";
import BotsContainer from "@/components/Bots/BotsContainer";

export default {
  components: {
    Nav,
    BotsContainer,
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
@media (max-width: 767px) {
}
</style>
