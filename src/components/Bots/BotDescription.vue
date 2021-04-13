<template>
  <section
    class="is-flex is-flex-direction-column is-justify-content-center is-align-items-flex-start has-background-dark has-text-left p-2"
  >
    <meta-tag
      v-for="(value, key) in this.metadata"
      :key="key"
      :title="key"
      :addon="value"
    ></meta-tag>
    <div>
      <figure class="image is-128x128 is-border">
        <img
          :src="
            require(`@/assets/img/profilepictures/${extractProfileUrl(
              this.metadata.profilepics
            )}`)
          "
        />
      </figure>
    </div>
    <div>
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
        :disabled="disableButton()"
        buttonTitle="select"
        @click.native="addBot"
        :focus="this.metadata.isChosen"
      ></base-button>
      <base-button
        :disabled="disableButton()"
        buttonTitle="deselect"
        @click.native="removeBot"
        :focus="!this.metadata.isChosen"
      ></base-button>
    </div>
  </section>
</template>
<script>
import MetaTag from "@/components/UI/MetaTag";
import BaseButton from "@/components/UI/BaseButton";
export default {
  components: {
    MetaTag,
    BaseButton,
  },
  props: {
    metadata: {},
    chosenBots: {
      default: () => [],
    },
  },
  emits: ["emit-chosen"],
  methods: {
    addBot() {
      this.choose = true;
      this.$emit("emit-chosen", this.choose, this.metadata.id);
    },
    removeBot() {
      this.choose = false;
      this.$emit("emit-chosen", this.choose, this.metadata.id);
    },
    disableButton() {
      const filtered = this.chosenBots.filter(
        (bot) => bot.id === this.metadata.id
      );

      if (this.chosenBots.length === 2 && filtered.length === 0) return true;
      else return false;
    },

    extractProfileUrl(url) {
      var filename = url.substring(url.lastIndexOf("/") + 1);
      return filename;
    },
  },

  data() {
    return {
      choose: this.metadata.isChosen,
      thisProfileUrl: this.metadata.profilepics,
    };
  },
};
</script>

<style>
.is-border {
  border: 1px solid #f64c72
}
  
</style>