<template>
  <section class="">

  </section>
</template>

<script>
// import TermList from "@/components/Home/TermList";
// import ProjectOverview from "@/components/Home/ProjectOverview";

export default {
  data() {
    return {
      selectedTerm: null,
    };
  },
  components: {
    // TermList,
    // ProjectOverview,
    // TermDescription,
  },
  methods: {
    //store the semester from TermList and save it as a variable. This variable will be sent to TermDescription as props.
    storeSelectedTerm(term) {
      this.selectedTerm = term;
    },
  },
};
</script>

<style scoped></style>
