<template>
  <section>
    <div class="bot">
      <li
        class="is-clickable"
        @click="emitId()"
        @mouseover="isHover = true"
        @mouseleave="isHover = false"
        :class="{ 'has-text-link': isHover }"
      >
        <p class="pr-5" :class="{ 'is-size-5': isMobile() }">{{ bot.name }}</p>
      </li>
    </div>

    <BotDescription
      class="has-background-dark b"
      v-if="select && isMobile()"
      :metadata="bot"
      :disabled="this.disabled"
      @collapseDescription="emitCollapse"
    />
  </section>
</template>
<script>
import BotDescription from "@/components/Bots/BotDescription";
import { eventBus } from "@/main";
export default {
  components: {
    BotDescription,
  },
  props: ["bot", "disabled"],
  emits: ["emit-bot-name"],

  methods: {
    emitId() {
      this.select = !this.select;
      eventBus.$emit("emit-bot-name", this.bot.name);
    },
    emitCollapse(value) {
      console.log(value)
      this.select = !value
    }
  },
  data() {
    return {
      select: false,
      isHover: false,
    };
  },
  created() {
    eventBus.$on("increment-selected", (value) => {
      if (value == this.bot.name) this.select = false;
    });
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

@media only screen and (max-width: 1023px) {
  /* For mobile phones: */
  .chosen {
    border-width: 1px 1px 1px 20px;
  }
}
</style>
