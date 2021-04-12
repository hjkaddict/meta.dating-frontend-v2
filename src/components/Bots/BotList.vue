<template>
  <section
    class="p-0 is-flex is-flex-direction-column is-justify-content-center is-align-items-flex-end has-text-right"
  >
    <div class="content has-text-link pr-2">
      <p class="is-size-4 p-0 m-0">{{ this.botlist.title }}</p>
      <p class="is-size-6 p-0 m-0">{{ this.botlist.term }}</p>
    </div>

    <ol class="is-fullwidth pl-2">
      <bot
        class="my-2"
        v-for="bot in this.botlist.bots"
        :key="bot.id"
        :bot="bot"
        @this-id="thisbot"
        @emit-chosen="emitBus"
        :chosenBots="chosenBots"
        :class="{
          'has-background-link':
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
  props: ["botlist", "chosenBots"],
  emits: ["this-bot"],
  methods: {
    thisbot(id) {
      this.$emit("this-bot", id);
    },
    emitBus(choose, id) {
      this.$emit("emit-chosen", choose, id);
    },
  },
  data() {
    return {
      selected: undefined,
    };
  },
};
</script>
<style scoped>
.is-fullwidth {
  width: 100%;
}
.chosen {
  border: 1px solid red;
}
</style>
