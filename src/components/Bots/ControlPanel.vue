<template>
  <section
    class="is-flex has-background-dark is-justify-content-center is-align-items-center"
  >
    <!-- msg container -->
    <div class="msgContainer" v-if="this.chosenBots.length === 0">
      <p>Bitte Bots Auswählen</p>
    </div>

    <div class="buttonContainer" v-if="this.chosenBots.length === 1">
      <base-button
        :buttonTitle="'mit  ' + this.chosenBots[0].name + ' chatten'"
      ></base-button>
    </div>

    <div class="buttonContainer" v-if="this.chosenBots.length === 2">
      <router-link to="/chat"
        ><base-button buttonTitle="Bots in die Arena schicken"></base-button>
      </router-link>
    </div>
  </section>
</template>
<script>
import BaseButton from "@/components/UI/BaseButton";
export default {
  props: ["chosenBots"],
  components: {
    BaseButton,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
section {
}
</style>
