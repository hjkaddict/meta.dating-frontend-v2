<template>
  <section
    class="has-background-dark p-5 is-flex is-justify-content-center is-align-items-flex-start has-text-left"
    :class="{
      'is-flex-direction-column': !isMobile(),
      'is-flex-direction-column-reverse': isMobile(),
    }"
    v-if="this.metadata"
  >
    <!-- meta tag section -->
    <div>
      <div>
        <MetaTag
          v-if="this.metadata.service"
          title="Service"
          :addon="this.metadata.service"
        />
        <MetaTag
          v-if="this.metadata.name"
          title="BotName"
          :addon="this.metadata.name"
        />
        <MetaTag
          v-if="this.metadata.term"
          title="Project"
          :addon="this.metadata.term"
        />
        <MetaTag
          v-if="this.metadata.group"
          title="Group"
          :addon="this.metadata.group"
        />
        <MetaTag
          v-if="this.metadata.names"
          title="Students"
          :addon="this.metadata.names"
        />
      </div>

      <!-- image section  -->
      <div>
        <MetaTag title="image" addon="none" />
        <figure class="image is-128x128 is-border">
          <img :src="this.metadata.image_path" />
        </figure>
      </div>

      <!-- description section  -->
      <div class="mt-1">
        <MetaTag title="Description" addon="none" />
        <div
          class="is-border has-background-primary has-text-white is-size-7 is-family-secondary p-3"
        >
          {{ this.metadata.description }}
        </div>
        <p>{{ this.disableStatus }}</p>
      </div>
    </div>

    <div
      class="p-5"
      :class="{
        'is-align-self-flex-end': !isMobile(),
        'is-align-self-center': isMobile(),
      }"
      v-if="metadata"
    >
      <BaseButton buttonTitle="cancel" @click.native="removeBot" />
      <BaseButton
        :disabled="this.disabled || checkbots"
        buttonTitle="select"
        @click.native="addBot"
      />
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
      disableStatus: false,
      tmp: undefined,
      chosenBots: [],
    };
  },
  props: ["metadata", "disabled"],
  emits: [
    "emit-chosen",
    "increment-selected",
    "decrement-selected",
    "collapseDescription",
  ],

  created() {
    eventBus.$on("chosen-bots", (bots) => {
      this.chosenBots = bots;
    });
  },
  updated() {
    eventBus.$on("chosen-bots", (bots) => {
      this.chosenBots = bots;
    });
  },

  computed: {
    // if two bots are selected, disable button
    checkbots() {
      //check if the bot is included in this.chosenBots
      var bot = this.chosenBots.find((bot) => bot.name == this.metadata.name);

      //check if this.chosenBots.length is larger than 2
      var overSelect = this.chosenBots.length >= 2 ? true : false;

      //if the bot is included then select button is disabled
      if (bot == undefined && !overSelect) return false;
      else return true;
    },
  },
  methods: {
    // checkbots() {
    //   console.log(this.metadata.name);
    //   //check if the bot is included in this.chosenBots
    //   var bot = this.chosenBots.find((bot) => bot.name == this.metadata.name);
    //   //if included then disable the button
    //   console.log(bot);
    //   if (bot.length == 0) this.disableStatus = false;
    //   else {
    //     this.disableStatus = true;
    //   }
    // },
    addBot() {
      eventBus.$emit("increment-selected", this.metadata);
      this.$emit("collapseDescription", true);
    },
    removeBot() {
      eventBus.$emit("decrement-selected", this.metadata);
      this.$emit("collapseDescription", true);
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
