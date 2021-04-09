<template>
  <section>
    <li
      class="is-family-sans-serif is-clickable has-text-right my-3"
      @click="selected"
    >
      <h3 class="has-text-weight-bold is-size-5">{{ title }}</h3>
      <h4 class="is-size-6">{{ term }}</h4>
    </li>
    <semester-description
      class="is-hidden-desktop"
      v-if="select"
      :metadata="this.semester"
    ></semester-description>
  </section>
</template>

<script>
import SemesterDescription from "@/components/Home/SemesterDescription";

export default {
  components: {
    SemesterDescription,
  },
  props: ["id", "title", "term", "semester"],
  emits: ["this-semester"],
  data() {
    return {
      select: false,
    };
  },
  methods: {
    selected() {
      this.$emit("this-semester", this.id);
      this.select = !this.select;
    },
  },
};
</script>

<style scoped></style>
