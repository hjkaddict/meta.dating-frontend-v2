<template>
  <section
    class="p-0 is-flex is-flex-direction-column is-justify-content-center is-align-items-flex-end has-text-right"
  >
    <div class="content has-text-link pr-5">
      <p class="is-size-4 p-0 m-0">{{ this.botlist.title }}</p>
      <p class="is-size-6 p-0 m-0">{{ this.botlist.term }}</p>
    </div>

    <ol class="is-fullwidth">
      <bot
        class="my-2 border-transparent"
        v-for="bot in this.botlist.bots"
        :key="bot.id"
        :bot="bot"
        :class="{
          'has-background-dark has-text-link':
            !isMobile() && bot.id == selected && bot.isChosen == false,
        }"
        @click.native="selected = bot.id"
      ></bot>
    </ol>
  </section>
</template>
<script>
import Bot from "@/components/Bots/Bot";

export default {
  components: {
    Bot,
  },
  props: ["botlist"],
  data() {
    return {
      selected: undefined,
    };
  },
};
</script>
<style scoped>
.is-fullwidth {
  width: 90%;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .is-fullwidth {
    width: 100%;
  }
}
</style>
