<template>
  <section>
    <div class="bot">
      <li class="is-clickable" 
      :class="{ chosen: checkChosen() }" @click="emitId()">
        <p class="pr-2">{{ bot.name }}</p>
      </li>
    </div>

    <bot-description
      class="is-hidden-desktop has-background-dark"
      v-if="select"
      :metadata="bot"
      :chosenBots="chosenBots"
      @emit-chosen="emitBus"
    ></bot-description>
  </section>
</template>
<script>
import BotDescription from "@/components/Bots/BotDescription";
export default {
  components: {
    BotDescription,
  },
  props: ["bot", "chosenBots"],
  emits: ["this-id", "emit-chosen"],
  methods: {
    emitId() {
      this.select = !this.select;
      this.$emit("this-id", this.bot.id);
    },
    emitBus(choose, id) {
      this.$emit("emit-chosen", choose, id);
    },
    checkChosen() {
      if (this.bot.isChosen === true) return true;
    },
  },
  data() {
    return {
      select: false,
    };
  },
};
</script>

<style scoped>
.bot {
  position: relative;
  width: 100%;
}

.chosen {
  border: 1px solid red;
}
</style>
