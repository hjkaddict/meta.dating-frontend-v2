<template>
  <section>
    <div class="bot">
      <li
        class="is-clickable"
        @click="emitId()"
        @mouseover="isHover = true"
        @mouseleave="isHover = false"
        :class="{ chosen: this.bot.isChosen, 'has-text-link': isHover }"
      >
        <p class="pr-5">{{ bot.name }}</p>
      </li>
    </div>

    <bot-description
      class="is-hidden-tablet has-background-dark"
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
      isHover: false
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
  border: solid #f64c72;
  border-width: 1px 0px 1px 40px;
  color: #f64c72;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .chosen {
    border-width: 1px 1px 1px 20px;
  }
}
</style>
