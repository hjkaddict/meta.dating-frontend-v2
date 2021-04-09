<template>
  <section>
    <li class="is-clickable" @click="emitId">
      {{ bot.name }}
    </li>
    <bot-description
      class="is-hidden-desktop"
      v-if="select"
      :metadata="bot"
      
    ></bot-description>
  </section>
</template>
<script>
import BotDescription from "@/components/Bots/BotDescription";
export default {
  components: {
    BotDescription,
  },
  props: ["bot"],
  emits: ["this-id"],
  methods: {
    emitId() {
      this.$emit("this-id", this.bot.id);
      this.select = !this.select;
      console.log(this.select);
    },
  },
  data() {
    return {
      select: false,
    };
  },
};
</script>
<style></style>
