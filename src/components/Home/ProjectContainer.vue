<template>
  <section class="fullwidth">
    <div class="container is-fluid p-0">
      <div
        class="columns m-0"
        :class="{ 'is-flex is-flex-direction-column-reverse': isMobile() }"
      >
        <TermList
          class="column"
          :class="{ 'p-5': isMobile(), ' is-one-third': !isMobile() }"
          @this-term="storeSelectedTerm"
        />

        <ProjectOverview
          class="column"
          :class="{ 'is-hidden': selectedTerm && $screen.width > 1023 }"
        />

        <!-- only for desktop -->
        <TermDescription
          class="column is-fullheight"
          v-if="selectedTerm && $screen.width > 1023"
          :metadata="selectedTerm"
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
      selectedTerm: null,
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
      this.selectedTerm = term;
    },
  },
};
</script>

<style scoped>
.fullwidth {
  width: 100vw;
}
</style>
