<template>
  <section
    class="p-0 mb-6 is-flex is-flex-direction-column is-justify-content-center is-align-items-flex-end has-text-right"
  >
    <ol class="is-fullwidth">
      <bot
        class="my-2 border-transparent"
        v-for="bot in this.botlist"
        :key="bot.id"
        :bot="bot"
        :class="{
          'has-background-dark has-text-link':
            !isMobile() && bot.name == selected,
          chosen: chosenBots.some((b) => b.name === bot.name),
        }"
        :disabled="chosenBots.some((b) => b.name === bot.name) || chosenBots.length >= 2"
        @click.native="selected = bot.name"
      ></bot>
    </ol>
  </section>
</template>
<script>
import Bot from "@/components/Bots/Bot";
import { eventBus } from "@/main";

export default {
  components: {
    Bot,
  },
  props: ["botlist"],
  computed: {
  },
  created() {
    eventBus.$on("chosen-bots", (chosenBots) => {
      this.chosenBots = chosenBots;
      console.log(this.chosenBots);
    });
  },
  data() {
    return {
      selected: undefined,
      chosenBots: [],
    };
  },
};
</script>

<style scoped>
.is-fullwidth {
  width: 90%;
}

.chosen {
  border: solid #f64c72;
  border-width: 1px 0px 1px 40px;
  color: #f64c72;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .is-fullwidth {
    width: 100%;
  }

  .chosen {
    border-width: 1px 1px 1px 20px;
  }
}
</style>
