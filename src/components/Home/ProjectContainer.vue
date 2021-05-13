<template>
  <section>
    <div class="container is-fluid p-0">
      <div
        class="columns m-0"
        :class="{ 'is-flex is-flex-direction-column-reverse': isMobile() }"
      >
        <semester-list
          class="column is-one-third"
          :class="{ 'p-5': isMobile() }"
          @this-semester="storeSelectedSemester"
        ></semester-list>

        <project-overview
          class="column"
          :class="{ 'is-hidden-tablet': selectedSemester }"
        ></project-overview>

        <semester-description
          class="column is-hidden-mobile is-fullheight"
          v-if="selectedSemester"
          :metadata="selectedSemester"
        ></semester-description>

      </div>
    </div>
  </section>
</template>

<script>
import SemesterList from "./SemesterList";
import ProjectOverview from "./ProjectOverview";
import SemesterDescription from "./SemesterDescription";

export default {
  data() {
    return {
      selectedSemester: null,
    };
  },
  components: {
    SemesterList,
    ProjectOverview,
    SemesterDescription,
  },
  methods: {
    //store the semester from SemesterList and save it as a variable. This variable will be sent to SemesterDescription as props.
    storeSelectedSemester(semester) {
      this.selectedSemester = semester;
    },
  },
};
</script>

<style scoped></style>
