<template>
  <section class="is-flex is-flex-direction-column is-justify-content-center is-align-items-flex-end has-text-right ">

    <div class="content has-text-link">
      <p class="is-size-4 p-0 m-0">{{ this.botlist.title }}</p>
      <p class="is-size-6 p-0 m-0">{{ this.botlist.term }}</p>
    </div>
    <ol>
      <bot
        v-for="bot in this.botlist.bots"
        :key="bot.id"
        :bot="bot"
        @this-id="thisbot"
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
  emits: ["this-bot"],
  methods: {
    thisbot(id) {
      this.$emit("this-bot", id)
    },
  },
  data() {
    return {};
  },
};
</script>
<style></style>
