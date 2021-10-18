<template>
  <section>
    <div class="hero is-fullheight is-primary">
      <div class="hero-head">
        <Nav />
      </div>

      <div v-if="isMobile()" class="blank"></div>

      <div
        class="hero-body"
        :class="{
          'is-align-items-flex-start': isMobile(),
        }"
      >
        <BotsContainer />
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
  methods: {},
};
</script>
