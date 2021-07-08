<template>
  <!-- 데스크탑 창에서는 이 창이 한번만 만들어지지만 모바일에서는 계속 따로 만들어진다. 그렇게 때문에 chosenBots가 계속 비어있는 배열로 된다. 이걸 수정해야함 -->
  <section
    class="has-background-dark p-5 is-flex is-flex-direction-column is-justify-content-center is-align-items-flex-start has-text-left"
    v-if="this.metadata"
  >
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
      class="is-border has-background-primary has-text-white is-size-7 is-family-secondary p-3"
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
      <BaseButton
        buttonTitle="abwählen"
        @click.native="removeBot"
        :focus="!this.metadata.isChosen"
      />
      <BaseButton
        :disabled="disableButton"
        buttonTitle="auswählen"
        @click.native="addBot"
        :focus="this.metadata.isChosen"
      />
      {{ disableButton }}
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
    console.log("created");
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
    disableButton() {
      var thisBotisChosen = this.chosenBots.some(
        (bot) => bot.name === this.metadata.name
      );
      console.log(this.chosenBots.length);

      if (this.chosenBots.length >= 2 || thisBotisChosen) {
        console.log("disabled");
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    addBot() {
      eventBus.$emit("increment-selected", this.metadata);
    },
    removeBot() {
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
