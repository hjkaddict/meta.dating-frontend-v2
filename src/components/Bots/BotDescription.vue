<template>
  <section
    class="has-background-dark p-5 is-flex is-flex-direction-column is-justify-content-center is-align-items-flex-start has-text-left"
    v-if="metadata"
  >
    <meta-tag
      v-for="(value, key) in this.metadata"
      :key="key"
      :title="key"
      :addon="value"
    ></meta-tag>

    <div
      class="is-border is-size-7 is-family-secondary px-3 has-background-link has-text-primary"
    >
      <p>image</p>
    </div>

    <div>
      <figure class="image is-128x128 is-border">
        <img
          :src="
            require(`@/assets/img/profilepictures/${extractProfileUrl(
              this.metadata.image
            )}`)
          "
        />
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
        :disabled="disableButton()"
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
.float-left {
  float: left;
}

.is-border {
    border: 1px solid #f64c72
}

.titleTag p {
  border: 1px solid red;
}
</style>
