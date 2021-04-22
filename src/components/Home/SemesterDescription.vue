<template>
  <section
    class="hero p-5"
    :class="{
      'is-primary desktop-border': !isMobile(),
      'is-dark mobile-border': isMobile(),
    }"
  >
    <div class="hero-body">
      <div class="">
        <meta-tag
          v-for="(value, key) in this.metadata"
          :key="key"
          :title="key"
          :addon="value"
        ></meta-tag>
        <div>{{ metadata.description }}</div>

        <div class="level">
          <!-- Left side must be declared here even though it's blank for applying level-right below -->
          <div class="level-left"></div>
          <!-- Right side -->
          <div
            class="pt-5"
            :class="{ 'level-item': isMobile(), 'level-right': !isMobile() }"
          >
            <router-link :to="'/bots/' + this.metadata.id"
              ><base-button :buttonTitle="'Zum Projekt'"></base-button
            ></router-link>
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
  data() {
    return {};
  },
};
</script>

<style lang="css">
.desktop-border {
  border-left: 1px solid #f64c72;
}

.mobile-border {
  border: 1px solid #f64c72;
}
.level {
  /* border: 1px solid red; */
}
</style>
