<template>
  <section
    class="is-flex is-flex-direction-column is-justify-content-center is-align-items-flex-start has-background-primary p-2"
  >
    <meta-tag
      v-for="(value, key) in this.metadata"
      :key="key"
      :title="key"
      :addon="value"
    ></meta-tag>

    <div :class="{ 'pr-5': !isMobile() }">{{ metadata.description }}</div>

    <router-link
      class="p-5"
      :class="{
        'is-align-self-flex-end': !isMobile(),
        'is-align-self-center': isMobile(),
      }"
      :to="'/bots/' + this.metadata.id"
      ><base-button :buttonTitle="'Zum Projekt'"></base-button
    ></router-link>
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
  props: ["metadata"],
  data() {
    return {};
  },
  methods: {},
};
</script>
