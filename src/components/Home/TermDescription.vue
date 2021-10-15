<template>
  <section
    class="hero px-5 pb-5"
    :class="{
      'is-primary desktop-border': !isMobile(),
      'is-dark mobile-border': isMobile(),
    }"
  >
    <div class="hero-body">
      <div
        class="is-flex"
        :class="{
          'is-flex-direction-column-reverse': isMobile(),
          'is-flex-direction-column': !isMobile(),
        }"
      >
        <!-- metatags and description -->
        <div>
          <meta-tag
            v-for="(value, key) in this.metadata"
            :key="key"
            :title="key"
            :addon="value"
          ></meta-tag>
          <div class="is-family-secondary" v-html="metadata.description">
            {{ metadata.description }}
          </div>
        </div>

        <!-- Zum project Button  -->
        <div class="level">
          <!-- Left side must be declared here even though it's blank for applying level-right below -->
          <div class="level-left"></div>

          <!-- Right side -->
          <div
            class="py-5"
            :class="{ 'level-item': isMobile(), 'level-right': !isMobile() }"
          >
            <router-link :to="'/project/' + returnUrlParameter">
              <base-button :buttonTitle="'Zum project'"></base-button>
            </router-link>
          </div>
        </div>
      </div>
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
  props: ["metadata"],
  computed: {
    returnUrlParameter() {
      return this.metadata.topic.replace(/\s/g, ""); // remove whitespace from urlparameters
    },
  },
};
</script>

<style scoped>
.desktop-border {
  border-left: 1px solid #f64c72;
}

.mobile-border {
  border: 1px solid #f64c72;
}
</style>
