<template>
  <section>
    <div class="container is-fluid p-0">
      <div
        class="columns m-0"
        :class="{ 'is-flex is-flex-direction-column-reverse': isMobile() }"
      >
        <TermList
          class="column is-one-third"
          :class="{ 'p-5': isMobile() }"
          @this-term="storeSelectedTerm"
        />

        <ProjectOverview
          class="column"
          :class="{ 'is-hidden-tablet': selecterdTerm }"
        />
        <TermDescription
          class="column is-hidden-mobile is-fullheight"
          v-if="selecterdTerm"
          :metadata="selecterdTerm"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TermList from "@/components/Home/TermList";
import ProjectOverview from "./ProjectOverview";
import TermDescription from "@/components/Home/TermDescription";

export default {
  data() {
    return {
      selecterdTerm: null,
    };
  },
  components: {
    TermList,
    ProjectOverview,
    TermDescription,
  },
  methods: {
    //store the semester from TermList and save it as a variable. This variable will be sent to TermDescription as props.
    storeSelectedTerm(term) {
      this.selecterdTerm = term;
    },
  },
};
</script>

<style scoped></style>
