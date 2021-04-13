<template>
  <section class="is-family-secondary">
    <div class="tags has-addons mb-1" v-if="filterData()">
      <span class="tag is-link has-text-primary">{{ title }}</span>
      <span class="tag is-primary has-text-white">{{ addon }}</span>
    </div>
  </section>
</template>

<script>
//need to figure how to separate addondata and put it into each addon tag.

export default {
  props: ["title", "addon"],

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
