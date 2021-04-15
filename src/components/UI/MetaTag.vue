<template>
  <section class="is-family-secondary">
    <div class="tags has-addons mb-3" v-if="filterData()">
      <span class="tag is-link has-text-primary m-0">{{ title }}</span>
      <span
        v-for="a in returnAddon"
        :key="a.id"
        class="tag is-primary has-text-white m-0"
        >{{ a }}</span
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "addon"],
  data() {
    return {
      // addonData: [],
    };
  },
  computed: {
    returnAddon() {
      const addonData = [];
      // set multiple addon tags if it's object
      if (typeof this.addon === "object") {
        this.addon.forEach((a) => {
          addonData.push(a);
        });
      } else {
        addonData.push(this.addon);
      }
      return addonData;
    },
  },
  methods: {
    filterData() {
      return this.title === "description" ||
        this.title === "id" ||
        this.title === "isChosen" ||
        this.title === "profilepics"
        ? false
        : true;
    },
  },
};
</script>

<style scoped>
.tag {
  border: 1px solid #f64c72;
}
</style>
