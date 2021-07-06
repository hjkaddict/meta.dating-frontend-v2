<template>
  <section
    class="has-background-dark p-5 is-flex is-flex-direction-column is-justify-content-center is-align-items-flex-start has-text-left"
    v-if="this.metadata"
  >
    <MetaTag v-if="this.metadata.service" title="Service" :addon="this.metadata.service" />
    <MetaTag v-if="this.metadata.name" title="BotName" :addon="this.metadata.name" />
    <MetaTag v-if="this.metadata.term"  title="Project" :addon="this.metadata.term" />
    <MetaTag v-if="this.metadata.group" title="Group" :addon="this.metadata.group" />
    <MetaTag v-if="this.metadata.names" title="Students" :addon="this.metadata.names" />

    <div
      class="is-border is-size-7 is-family-secondary px-3 has-background-link has-text-primary"
    >
      <p>image</p>
    </div>

    <div>
      <figure class="image is-128x128 is-border">
        <img :src="this.metadata.image_path" />
      </figure>
    </div>

    <div
      class="is-border is-size-7 is-family-secondary px-3 py-0 has-background-link has-text-primary mt-3"
    >
      <p>description</p>
    </div>
    <div
      class="is-border has-background-primary is-size-7 is-family-secondary p-3"
    >
      {{ this.metadata.description }}
    </div>

    <div
      class="p-5"
      :class="{
        'is-align-self-flex-end': !isMobile(),
        'is-align-self-center': isMobile(),
      }"
      v-if="metadata"
    >
      <base-button
        buttonTitle="abwählen"
        @click.native="removeBot"
        :focus="!this.metadata.isChosen"
      ></base-button>
      <base-button
        :disabled="disableButton"
        buttonTitle="auswählen"
        @click.native="addBot"
        :focus="this.metadata.isChosen"
      ></base-button>
    </div>
  </section>
</template>
<script>
import MetaTag from "@/components/UI/MetaTag";
import BaseButton from "@/components/UI/BaseButton";
import { eventBus } from "@/main";
export default {
  components: {
    MetaTag,
    BaseButton,
  },

  data() {
    return {
      tmp: undefined,
      chosenBots: [],
    };
  },
  props: ["metadata"],
  emits: ["emit-chosen", "increment-selected", "decrement-selected"],
  created() {
    eventBus.$on("chosen-bots", (bots) => {
      this.chosenBots = bots;
    });
  },
  computed: {
    disableButton() {
      var thisBotisChosen = this.chosenBots.some(
        (bot) => bot.name === this.metadata.name
      );
      if (this.chosenBots.length >= 2 || thisBotisChosen) return true;
      else return false;
    },
  },
  methods: {
    addBot() {
      // eventBus.$emit("emit-chosen-status", this.metadata.id, true);
      eventBus.$emit("increment-selected", this.metadata);
    },
    removeBot() {
      // eventBus.$emit("emit-chosen-status", this.metadata.id, false);
      eventBus.$emit("decrement-selected", this.metadata);
    },
  },
};
</script>

<style>
.float-left {
  float: left;
}

.is-border {
  border: 1px solid #f64c72;
}

.titleTag p {
  border: 1px solid red;
}
</style>
