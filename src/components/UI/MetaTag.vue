<template>
  <section class="is-family-secondary">
    <div class="tags has-addons ml-0 mr-1 mb-1" v-if="filterData()">
      <div class="tag is-link has-text-primary m-0">{{ title }}</div>

      <div
        v-for="a in returnAddon"
        :key="a.id"
        class="tag is-primary has-text-white m-0"
      >
        {{ a }}
      </div>
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
          addonData.push(a.name);
        });
      } else {
        addonData.push(this.addon);
      }
      return addonData;
    },
  },
  methods: {
    filterData() {
      return this.title === "_id" ||
      this.title === "assistant_id" ||
      this.title === "date_created" ||
      this.title === "apikey" ||
      this.title === "isPublic" ||
      this.title === "owner" || 
      this.title === "__v" ||
      this.title === "description" ||
        this.title === "id" ||
        this.title === "image_path"
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
