<template>
  <section
    class="hero p-5"
    :class="{
      'is-primary desktop-border': !isMobile(),
      'is-dark mobile-border': isMobile(),
    }"
  >
    <div class="hero-body">
      <div>
        <meta-tag
          v-for="(value, key) in this.metadata"
          :key="key"
          :title="key"
          :addon="value"
        ></meta-tag>
        <div v-html="metadata.description">
          {{ metadata.description }}
        </div>

        <!-- Zum Projekt Button  -->
        <div class="level">
          <!-- Left side must be declared here even though it's blank for applying level-right below -->
          <div class="level-left"></div>

          <!-- Right side -->
          <div
            class="pt-5"
            :class="{ 'level-item': isMobile(), 'level-right': !isMobile() }"
          >
            <router-link :to="'/projekt/' + returnUrlParameter">
              <base-button :buttonTitle="'Zum Projekt'"></base-button>
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
